# Atalho PWA — Guia de Publicação (do zero ao link no ar)

Tempo total: ~20 minutos. Custo: R$ 0. Você só precisa do arquivo **atalho-pwa.zip** extraído no computador.

---

## Passo 1 — Criar a conta no GitHub (grátis)

1. Acesse **github.com** e clique em **Sign up**
2. Informe e-mail, crie uma senha e um nome de usuário (ex: `guilherme-atalho`)
3. Confirme o código enviado por e-mail
4. Plano: **Free** (o gratuito basta para sempre neste projeto)

## Passo 2 — Criar o repositório do projeto

1. Logado no GitHub, clique no **+** no canto superior direito → **New repository**
2. Repository name: `atalho-pwa`
3. Deixe **Public** marcado (necessário para o plano grátis da Vercel)
4. NÃO marque nenhuma opção extra (sem README, sem .gitignore — já vêm no zip)
5. Clique em **Create repository**

## Passo 3 — Subir os arquivos do projeto

1. Extraia o **atalho-pwa.zip** numa pasta do computador
2. Na página do repositório recém-criado, clique no link **uploading an existing file**
3. Abra a pasta extraída, selecione TODO o conteúdo (index.html, package.json, vite.config.js, .gitignore e as pastas `src` e `public`) e **arraste** para a área de upload do GitHub
   - Importante: arraste o CONTEÚDO da pasta, não a pasta inteira — o index.html precisa ficar na raiz do repositório
4. Aguarde os arquivos carregarem, escreva qualquer mensagem (ex: "primeira versão") e clique em **Commit changes**

## Passo 4 — Publicar na Vercel (o link público)

1. Acesse **vercel.com** → **Sign Up** → **Continue with GitHub** (usa a conta que você acabou de criar — sem senha nova)
2. Autorize a Vercel a acessar o GitHub
3. No painel, clique em **Add New… → Project**
4. Encontre `atalho-pwa` na lista e clique em **Import**
5. A Vercel detecta **Vite** sozinha — não mude nada — e clique em **Deploy**
6. Em ~1 minuto aparece 🎉 com o link, algo como: `https://atalho-pwa.vercel.app`

Esse é o link que você divulga. Toda vez que atualizar os arquivos no GitHub (upload por cima), a Vercel republica sozinha em 1 minuto.

## Passo 5 — Ligar as métricas (o motivo da Fase 0)

1. No painel da Vercel, abra o projeto → aba **Analytics** → **Enable**
2. Pronto: você passa a ver visitantes por dia, visitantes recorrentes e páginas — de graça

As perguntas que os números respondem em ~2 semanas:
- Quantas pessoas entraram? (alcance da divulgação)
- Quantas voltaram em outro dia? (a métrica que decide o projeto)

## Passo 6 — Testar como app no celular

1. Abra o link no **Chrome** do celular
2. Menu ⋮ → **Adicionar à tela inicial** (ou "Instalar app")
3. O Atalho ganha ícone próprio e abre em tela cheia, sem barra de navegador
4. Teste também sem internet depois da primeira visita — o app continua abrindo (cache offline)

---

## O que este PWA já faz

- Trilhas 1 e 2 completas: 11 módulos, 52 lições, 284 exercícios
- Progresso, XP total e ofensiva (dias seguidos) **salvos no aparelho** — fechar e voltar mantém tudo
- Funciona offline após a primeira visita
- Instalável na tela inicial (Android e iPhone)

## O que fica para a Fase 1 (app das lojas)

- Login (Google/Apple) e progresso na nuvem — hoje o progresso é por aparelho
- Energia limitada, anúncios e assinatura
- Notificações de ofensiva

## Dica de divulgação

Poste dicas de Excel no Instagram e termine com: **"pratica isso de graça no link da bio"**. Cada post vira porta de entrada — e o Analytics mostra quais dicas trazem mais gente.
