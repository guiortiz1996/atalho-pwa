import { useEffect, useState } from "react";

/* =====================================================
   AVISO DE INSTALAÇÃO
   1) Aberto dentro do Instagram/Facebook/TikTok etc.:
      pede para abrir no navegador de verdade.
      No Android, o botão tenta abrir direto no Chrome.
   2) No Chrome (Android/PC): mostra o botão "Instalar"
      assim que o navegador libera a instalação.
   3) No Safari do iPhone: explica o "Adicionar à Tela
      de Início" (o iPhone não tem botão automático).
   4) Já instalado (aberto como app): não mostra nada.
   ===================================================== */

const COR = { navy: "#1B2A4A", verde: "#107C41", verdeClaro: "#E8F5EE", texto: "#1F2937", cinza: "#6B7280" };
const CHAVE_DISPENSA = "atalho_aviso_dispensado_ate";
const DIAS_DISPENSA = 3;

// Captura o evento de instalação o mais cedo possível (ele pode disparar antes do React montar)
let promptGuardado = null;
const ouvintes = new Set();
if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    promptGuardado = e;
    ouvintes.forEach((fn) => fn(e));
  });
}

function ambiente() {
  const ua = navigator.userAgent || "";
  const android = /Android/i.test(ua);
  const ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const dentroDeApp = /Instagram|FBAN|FBAV|FB_IAB|FBIOS|Line\/|TikTok|musical_ly|Bytedance|Snapchat|LinkedInApp|Twitter/i.test(ua);
  const instagram = /Instagram/i.test(ua);
  const instalado = window.matchMedia?.("(display-mode: standalone)").matches || navigator.standalone === true;
  const navegadorIos = ios && !dentroDeApp; // Safari, Chrome, Edge ou Firefox no iPhone
  const chromeIos = /CriOS/i.test(ua);
  return { android, ios, dentroDeApp, instagram, instalado, navegadorIos, chromeIos };
}

function lerDispensa() {
  try {
    const ate = Number(localStorage.getItem(CHAVE_DISPENSA) || 0);
    return Date.now() < ate;
  } catch {
    return false;
  }
}
function gravarDispensa() {
  try {
    localStorage.setItem(CHAVE_DISPENSA, String(Date.now() + DIAS_DISPENSA * 864e5));
  } catch {}
}

function urlParaChrome() {
  const u = new URL(window.location.href);
  u.searchParams.set("instalar", "1");
  const semProtocolo = u.host + u.pathname + u.search;
  const fallback = encodeURIComponent(u.toString());
  return `intent://${semProtocolo}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${fallback};end`;
}

export default function AvisoInstalar() {
  const [amb] = useState(ambiente);
  const [veioParaInstalar] = useState(() => new URLSearchParams(window.location.search).get("instalar") === "1");
  const [podeInstalar, setPodeInstalar] = useState(() => !!promptGuardado);
  const [fechado, setFechado] = useState(() => !veioParaInstalarInicial() && lerDispensa());
  const [instalou, setInstalou] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [tentouChrome, setTentouChrome] = useState(false);

  useEffect(() => {
    const aoLiberar = () => setPodeInstalar(true);
    ouvintes.add(aoLiberar);
    const aoInstalar = () => { setInstalou(true); promptGuardado = null; setPodeInstalar(false); };
    window.addEventListener("appinstalled", aoInstalar);
    // Tira o ?instalar=1 da barra de endereço sem recarregar
    if (veioParaInstalar) {
      const u = new URL(window.location.href);
      u.searchParams.delete("instalar");
      window.history.replaceState(null, "", u.pathname + u.search + u.hash);
    }
    return () => { ouvintes.delete(aoLiberar); window.removeEventListener("appinstalled", aoInstalar); };
  }, [veioParaInstalar]);

  const fechar = () => { gravarDispensa(); setFechado(true); };

  async function instalar() {
    if (!promptGuardado) return;
    promptGuardado.prompt();
    const { outcome } = await promptGuardado.userChoice;
    promptGuardado = null;
    setPodeInstalar(false);
    if (outcome === "accepted") setInstalou(true);
  }

  function abrirNoChrome() {
    setTentouChrome(true);
    window.location.href = urlParaChrome();
  }

  async function copiarLink() {
    const link = window.location.origin + "/?instalar=1";
    try {
      await navigator.clipboard.writeText(link);
      setCopiado(true);
    } catch {
      window.prompt("Copie o link:", link);
    }
  }

  if (amb.instalado) return null;

  if (instalou) {
    return (
      <Cartao onFechar={() => setInstalou(false)} posicao="baixo">
        <Titulo>Pronto! 🎉</Titulo>
        <Texto>O Atalho está na sua tela inicial. Abra por lá das próximas vezes.</Texto>
      </Cartao>
    );
  }

  // 1) Navegador interno do Instagram / outras redes: tela cheia, é o caso mais importante
  if (amb.dentroDeApp && !fechado) {
    const rede = amb.instagram ? "do Instagram" : "deste aplicativo";
    return (
      <Fundo>
        <Cartao posicao="centro">
          <Icone>📲</Icone>
          <Titulo>Abra no navegador para instalar</Titulo>
          <Texto>
            Você está no navegador {rede}. Por aqui não dá para instalar o Atalho, e o seu progresso pode se perder.
          </Texto>

          {amb.android && (
            <>
              <Botao onClick={abrirNoChrome}>Abrir no Chrome</Botao>
              {tentouChrome && (
                <Passos
                  itens={[
                    <>Se não abriu: toque nos <b>3 pontinhos ⋮</b> no canto de cima</>,
                    <>Escolha <b>“Abrir no Chrome”</b> ou <b>“Abrir no navegador”</b></>,
                  ]}
                />
              )}
            </>
          )}

          {amb.ios && (
            <Passos
              itens={[
                <>Toque nos <b>3 pontinhos ⋯</b> no canto de cima</>,
                <>Escolha <b>“Abrir no navegador externo”</b></>,
                <>No Safari, toque em <b>Compartilhar</b> <IconeCompartilhar /> e depois em <b>“Adicionar à Tela de Início”</b></>,
              ]}
            />
          )}

          {!amb.android && !amb.ios && (
            <Passos itens={[<>Toque no menu do navegador (⋮ ou ⋯)</>, <>Escolha <b>“Abrir no navegador”</b></>]} />
          )}

          <BotaoSecundario onClick={copiarLink}>{copiado ? "Link copiado ✓" : "Copiar link"}</BotaoSecundario>
          <Link onClick={fechar}>Continuar por aqui mesmo</Link>
        </Cartao>
      </Fundo>
    );
  }

  // 2a) Chegou do Instagram pelo botão "Abrir no Chrome": sempre mostra a tela de instalar.
  //     O Chrome só libera o botão automático depois de ~30s de uso na página,
  //     então enquanto não libera mostramos o caminho pelo menu (que funciona na hora).
  if (veioParaInstalar && !fechado && !amb.ios) {
    return (
      <Fundo>
        <Cartao posicao="centro">
          <Icone>✅</Icone>
          <Titulo>Agora é só instalar</Titulo>
          <Texto>O Atalho vira um ícone na sua tela e abre como aplicativo. É grátis e ocupa quase nada.</Texto>
          {podeInstalar ? (
            <Botao onClick={instalar}>Instalar o Atalho</Botao>
          ) : (
            <>
              <Passos
                itens={[
                  <>Toque nos <b>3 pontinhos ⋮</b> no canto de cima do Chrome</>,
                  <>Toque em <b>“Instalar app”</b> ou <b>“Adicionar à tela inicial”</b></>,
                  <>Confirme em <b>“Instalar”</b></>,
                ]}
              />
              <Texto>
                <span style={{ fontSize: 12.5 }}>Não aparece “Instalar”? Então o Atalho já está no seu celular: é só abrir pelo ícone.</span>
              </Texto>
            </>
          )}
          <Link onClick={fechar}>Agora não</Link>
        </Cartao>
      </Fundo>
    );
  }

  // 2b) Chrome / Edge / Samsung aberto normalmente: cartão discreto com o botão nativo
  if (podeInstalar && !fechado) {
    return (
      <Cartao onFechar={fechar} posicao="baixo">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/icone-192.png" alt="" width={44} height={44} style={{ borderRadius: 10, flexShrink: 0 }} />
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ fontWeight: 700, color: COR.navy, fontSize: 15 }}>Instale o Atalho</div>
            <div style={{ color: COR.cinza, fontSize: 13 }}>Abre como app, direto da tela inicial.</div>
          </div>
          <button onClick={instalar} style={{ ...estiloBotao, width: "auto", margin: 0, padding: "10px 16px" }}>Instalar</button>
        </div>
      </Cartao>
    );
  }

  // 3) Navegador do iPhone (Safari, Chrome...): instrução manual — a Apple não tem botão automático
  if (amb.navegadorIos && !fechado) {
    return (
      <Cartao onFechar={fechar} posicao="baixo">
        <Titulo>Instale o Atalho no iPhone</Titulo>
        <Passos
          itens={[
            amb.chromeIos
              ? <>Toque em <b>Compartilhar</b> <IconeCompartilhar /> no canto de cima, ao lado do endereço</>
              : <>Toque em <b>Compartilhar</b> <IconeCompartilhar /> na barra do Safari</>,
            <>Escolha <b>“Adicionar à Tela de Início”</b></>,
          ]}
        />
      </Cartao>
    );
  }

  return null;
}

// Avaliado antes do useEffect limpar a URL
function veioParaInstalarInicial() {
  return new URLSearchParams(window.location.search).get("instalar") === "1";
}

/* ---------- peças visuais ---------- */
const estiloBotao = {
  display: "block", width: "100%", margin: "16px 0 0", padding: "14px 16px", border: "none", borderRadius: 12,
  background: COR.verde, color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
};

function Fundo({ children }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(15,23,42,.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      {children}
    </div>
  );
}
function Cartao({ children, onFechar, posicao }) {
  const baixo = posicao === "baixo";
  return (
    <div
      role="dialog"
      style={{
        position: baixo ? "fixed" : "relative", zIndex: 9999,
        left: baixo ? 12 : undefined, right: baixo ? 12 : undefined, bottom: baixo ? "calc(12px + env(safe-area-inset-bottom))" : undefined,
        maxWidth: 420, width: baixo ? "auto" : "100%", margin: baixo ? "0 auto" : 0,
        background: "#fff", borderRadius: 18, padding: "20px 18px 18px", boxShadow: "0 10px 40px rgba(0,0,0,.25)",
        textAlign: "center", fontFamily: "inherit", color: COR.texto,
      }}
    >
      {onFechar && (
        <button onClick={onFechar} aria-label="Fechar" style={{ position: "absolute", top: 6, right: 8, border: "none", background: "none", fontSize: 22, color: COR.cinza, cursor: "pointer", padding: 6 }}>×</button>
      )}
      {children}
    </div>
  );
}
const Icone = ({ children }) => <div style={{ fontSize: 40, marginBottom: 6 }}>{children}</div>;
const Titulo = ({ children }) => <div style={{ fontSize: 19, fontWeight: 800, color: COR.navy, marginBottom: 6 }}>{children}</div>;
const Texto = ({ children }) => <div style={{ fontSize: 14.5, lineHeight: 1.45, color: COR.cinza }}>{children}</div>;
const Botao = (p) => <button {...p} style={estiloBotao} />;
const BotaoSecundario = (p) => <button {...p} style={{ ...estiloBotao, background: COR.verdeClaro, color: COR.verde, marginTop: 10 }} />;
const Link = (p) => <button {...p} style={{ marginTop: 12, border: "none", background: "none", color: COR.cinza, fontSize: 13.5, textDecoration: "underline", cursor: "pointer", fontFamily: "inherit" }} />;

function Passos({ itens }) {
  return (
    <ol style={{ textAlign: "left", margin: "14px 0 0", padding: 0, listStyle: "none" }}>
      {itens.map((t, i) => (
        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", margin: "8px 0", fontSize: 14.5, lineHeight: 1.4 }}>
          <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 12, background: COR.verde, color: "#fff", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
          <span>{t}</span>
        </li>
      ))}
    </ol>
  );
}
function IconeCompartilhar() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={COR.navy} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "-2px" }}>
      <path d="M12 3v12M7 8l5-5 5 5" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    </svg>
  );
}
