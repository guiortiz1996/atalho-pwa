import { useState, useRef, useEffect } from "react";
import { Heart, Check, X, ChevronRight, ChevronLeft, ChevronDown, Flame, Zap, BookOpen, Lock, Bold, Italic, Underline, PaintBucket, Table, Filter, Snowflake, ArrowDownAZ, Search, Sigma, Percent, DollarSign, AppWindow, MapPin, ZoomIn, LayoutGrid, AlignCenter, Type, Brush, Copy, Columns3, WrapText, Maximize } from "lucide-react";

/* =====================================================
   ATALHO — Motor de teste v0.4
   Trilha 1 completa + Faixa de Opções realista
   (multi-grupos, barra de título, auto-scroll) e o
   exercício clicar_ribbon: "toque onde fica".
   ===================================================== */

// ---------- CONTEÚDO: Trilhas 1 e 2 (gerado dos JSONs) ----------
const MODULOS = [
 {
  "id": "t1-m1",
  "trilha": 1,
  "titulo": "Primeiros passos",
  "descricao": "Entenda o que é uma planilha e aprenda a se movimentar nela com confiança.",
  "licoes": [
   {
    "id": "t1-m1-l1",
    "titulo": "O que é uma planilha",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Planilha",
     "intro": "Uma planilha é uma grade gigante de linhas e colunas usada para organizar informações e fazer cálculos automáticos. Diferente do papel, quando um número muda, tudo que depende dele se recalcula sozinho. Um arquivo do Excel se chama pasta de trabalho, e pode ter várias planilhas dentro — as abas na parte de baixo da tela.",
     "pontos": [
      [
       "pasta de trabalho",
       "o arquivo .xlsx inteiro"
      ],
      [
       "planilha (aba)",
       "cada grade dentro do arquivo"
      ],
      [
       "coluna",
       "vertical, identificada por letras (A, B, C...)"
      ],
      [
       "linha",
       "horizontal, identificada por números (1, 2, 3...)"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Quantidade",
       "Preço"
      ],
      [
       "Caderno",
       12,
       8.5
      ],
      [
       "Caneta",
       30,
       2.0
      ],
      [
       "Mochila",
       5,
       89.9
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Como é identificada uma COLUNA no Excel?",
      "opcoes": [
       "Por letras (A, B, C...)",
       "Por números (1, 2, 3...)",
       "Por nomes que você escolhe",
       "Por cores"
      ],
      "resposta": "Por letras (A, B, C...)",
      "explicacao": "Colunas são verticais e usam letras. Linhas são horizontais e usam números.",
      "mostrar_planilha": false
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada termo ao seu significado:",
      "pares": {
       "Pasta de trabalho": "O arquivo .xlsx inteiro",
       "Planilha": "Uma aba dentro do arquivo",
       "Coluna": "Vertical, com letras",
       "Linha": "Horizontal, com números"
      },
      "explicacao": "Um arquivo (pasta de trabalho) pode conter várias planilhas, cada uma numa aba."
     },
     {
      "tipo": "vf",
      "afirmacao": "Se eu mudar um número na planilha, os cálculos que usam esse número se atualizam sozinhos.",
      "resposta": true,
      "explicacao": "Essa é a maior vantagem sobre o papel: as fórmulas recalculam automaticamente."
     },
     {
      "tipo": "escolha",
      "pergunta": "Um arquivo do Excel pode ter mais de uma planilha dentro dele?",
      "opcoes": [
       "Sim, cada uma numa aba na parte de baixo",
       "Não, é sempre uma planilha por arquivo",
       "Só na versão paga",
       "Só se forem planilhas pequenas"
      ],
      "resposta": "Sim, cada uma numa aba na parte de baixo",
      "explicacao": "As abas ficam na parte inferior. Dá pra criar, renomear e colorir cada aba.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Olhando a planilha, em qual COLUNA estão os preços?",
      "opcoes": [
       "C",
       "A",
       "B",
       "3"
      ],
      "resposta": "C",
      "explicacao": "Produto está na coluna A, Quantidade na B e Preço na C. \"3\" seria uma linha, não coluna.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E em qual LINHA está a Mochila?",
      "opcoes": [
       "4",
       "3",
       "C",
       "A"
      ],
      "resposta": "4",
      "explicacao": "Os títulos ocupam a linha 1, então Caderno=2, Caneta=3 e Mochila=4.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m1-l2",
    "titulo": "Endereço de célula",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Célula e endereço",
     "intro": "O encontro de uma coluna com uma linha forma uma célula — a caixinha onde você digita. Toda célula tem um endereço: a letra da coluna seguida do número da linha. B3 significa coluna B, linha 3. A célula selecionada é a célula ativa, e o endereço dela aparece na caixa de nome, no canto superior esquerdo.",
     "pontos": [
      [
       "célula",
       "o encontro de uma coluna com uma linha"
      ],
      [
       "endereço",
       "letra da coluna + número da linha (ex: B3)"
      ],
      [
       "célula ativa",
       "a célula selecionada agora, com borda destacada"
      ],
      [
       "caixa de nome",
       "mostra o endereço da célula ativa"
      ]
     ],
     "mostrar_planilha": true,
     "celula_ativa": "B3"
    },
    "planilha": {
     "linhas": [
      [
       "Nome",
       "Cidade",
       "Idade"
      ],
      [
       "Ana",
       "Piracicaba",
       28
      ],
      [
       "Bruno",
       "Campinas",
       35
      ],
      [
       "Carla",
       "Limeira",
       41
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O endereço de uma célula é formado por:",
      "opcoes": [
       "Letra da coluna + número da linha",
       "Número da linha + letra da coluna",
       "Apenas a letra da coluna",
       "O nome que você der a ela"
      ],
      "resposta": "Letra da coluna + número da linha",
      "explicacao": "Sempre coluna primeiro: B3 = coluna B, linha 3. \"3B\" não existe.",
      "mostrar_planilha": false
     },
     {
      "tipo": "clicar_celula",
      "pergunta": "Toque na célula {alvo}:",
      "alvo": "{alvo}",
      "variantes": [
       {
        "alvo": "B3"
       },
       {
        "alvo": "C2"
       },
       {
        "alvo": "A4"
       },
       {
        "alvo": "C4"
       },
       {
        "alvo": "B2"
       }
      ],
      "explicacao": "Letra = coluna, número = linha. Primeiro ache a coluna, depois desça até a linha."
     },
     {
      "tipo": "digitar",
      "pergunta": "Qual é o endereço da célula onde está escrito \"{conteudo}\"?",
      "teclado": "texto",
      "variantes": [
       {
        "conteudo": "Campinas",
        "resposta": "B3",
        "aceitar": [
         "b3"
        ]
       },
       {
        "conteudo": "Carla",
        "resposta": "A4",
        "aceitar": [
         "a4"
        ]
       },
       {
        "conteudo": "28",
        "resposta": "C2",
        "aceitar": [
         "c2"
        ]
       },
       {
        "conteudo": "Limeira",
        "resposta": "B4",
        "aceitar": [
         "b4"
        ]
       }
      ],
      "explicacao": "Localize o valor, suba até a letra da coluna e olhe o número da linha.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "O que está escrito na célula {alvo}?",
      "variantes": [
       {
        "alvo": "C3",
        "opcoes": [
         "35",
         "28",
         "Campinas",
         "41"
        ],
        "resposta": "35"
       },
       {
        "alvo": "A2",
        "opcoes": [
         "Ana",
         "Nome",
         "Bruno",
         "Piracicaba"
        ],
        "resposta": "Ana"
       },
       {
        "alvo": "B2",
        "opcoes": [
         "Piracicaba",
         "Cidade",
         "Campinas",
         "Ana"
        ],
        "resposta": "Piracicaba"
       }
      ],
      "explicacao": "Leia o endereço ao contrário: ache a coluna pela letra e a linha pelo número.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "A caixa de nome, no canto superior esquerdo, mostra o endereço da célula ativa.",
      "resposta": true,
      "explicacao": "É o jeito mais rápido de saber onde você está — e digitar um endereço nela leva você direto pra célula."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você precisa conferir a idade do Bruno. Qual célula deve olhar?",
      "opcoes": [
       "C3",
       "B3",
       "C2",
       "A3"
      ],
      "resposta": "C3",
      "explicacao": "Bruno está na linha 3 e as idades estão na coluna C. Cruzando: C3.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m1-l3",
    "titulo": "Tipos de dado",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Texto, número e data",
     "intro": "O Excel trata cada célula conforme o tipo do que você digita. Texto serve para nomes e descrições. Número serve para calcular. Data também é número por dentro — por isso dá pra somar dias. Uma dica visual: por padrão, texto se alinha à ESQUERDA e número à DIREITA. Se um número aparecer à esquerda, o Excel entendeu como texto — e ele não vai somar em fórmulas.",
     "pontos": [
      [
       "texto",
       "alinha à esquerda; não entra em contas"
      ],
      [
       "número",
       "alinha à direita; usado em cálculos"
      ],
      [
       "data",
       "é número por dentro; permite calcular prazos"
      ],
      [
       "sinal de alerta",
       "número alinhado à esquerda = virou texto"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Cliente",
       "Pedido",
       "Valor",
       "Entrega"
      ],
      [
       "Marcos",
       "PD-101",
       250,
       "15/03/2026"
      ],
      [
       "Julia",
       "PD-102",
       480,
       "22/03/2026"
      ],
      [
       "Rafael",
       "PD-103",
       130,
       "28/03/2026"
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada dado ao seu tipo:",
      "pares": {
       "R$ 480": "Número",
       "Julia": "Texto",
       "22/03/2026": "Data",
       "PD-102": "Texto"
      },
      "explicacao": "PD-102 tem letras, então é texto — mesmo contendo números."
     },
     {
      "tipo": "escolha",
      "pergunta": "Por padrão, um NÚMERO se alinha de que lado da célula?",
      "opcoes": [
       "Direita",
       "Esquerda",
       "Centro",
       "Depende da fonte"
      ],
      "resposta": "Direita",
      "explicacao": "Número à direita, texto à esquerda. É o jeito mais rápido de identificar o tipo.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Uma data no Excel é um número por dentro, por isso é possível calcular quantos dias faltam para uma entrega.",
      "resposta": true,
      "explicacao": "Cada data é um número de dias contados desde 01/01/1900. Subtrair datas = contar dias."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você digitou 1500 numa célula e ele apareceu alinhado à ESQUERDA. O que isso indica?",
      "opcoes": [
       "O Excel entendeu como texto e não vai calcular",
       "Está tudo certo",
       "A célula está travada",
       "O número é negativo"
      ],
      "resposta": "O Excel entendeu como texto e não vai calcular",
      "explicacao": "Número alinhado à esquerda virou texto — fórmulas como SOMA vão ignorá-lo. Erro clássico de dados importados.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Na planilha, qual coluna contém DATAS?",
      "opcoes": [
       "D",
       "C",
       "B",
       "A"
      ],
      "resposta": "D",
      "explicacao": "A coluna Entrega (D) tem datas. Pedido (B) parece código, mas é texto.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Quais colunas desta planilha podem entrar numa CONTA (soma, média)?",
      "opcoes": [
       "C e D (Valor e Entrega)",
       "Apenas C (Valor)",
       "B e C (Pedido e Valor)",
       "Todas"
      ],
      "resposta": "C e D (Valor e Entrega)",
      "explicacao": "Valor é número e data também é número por dentro. Cliente e Pedido são texto.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m1-l4",
    "titulo": "Digitar e editar",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Inserir e editar dados",
     "intro": "Para preencher uma célula, basta selecionar e digitar — o que estava lá é substituído. Enter confirma e desce para a linha de baixo; Tab confirma e vai para a direita (ótimo para preencher tabelas). Para CORRIGIR sem apagar tudo, dê duplo clique na célula ou pressione F2. Esc cancela a edição sem salvar, e Delete apaga o conteúdo.",
     "pontos": [
      [
       "Enter",
       "confirma e desce"
      ],
      [
       "Tab",
       "confirma e vai para a direita"
      ],
      [
       "F2 ou duplo clique",
       "edita sem apagar o conteúdo"
      ],
      [
       "Esc",
       "cancela a edição"
      ],
      [
       "Delete",
       "apaga o conteúdo da célula"
      ]
     ],
     "mostrar_planilha": false
    },
    "planilha": {
     "linhas": [
      [
       "Item",
       "Estoque"
      ],
      [
       "Parafuso",
       200
      ],
      [
       "Porca",
       150
      ],
      [
       "Arruela",
       300
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada tecla à sua função:",
      "pares": {
       "Enter": "Confirma e desce",
       "Tab": "Confirma e vai à direita",
       "F2": "Edita a célula",
       "Esc": "Cancela a edição"
      },
      "explicacao": "Enter e Tab confirmam; F2 edita; Esc desiste sem salvar."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você quer corrigir UMA letra numa célula cheia de texto, sem digitar tudo de novo. O que fazer?",
      "opcoes": [
       "Duplo clique (ou F2) e corrigir",
       "Clicar uma vez e digitar",
       "Apertar Delete e recomeçar",
       "Clicar com o botão direito"
      ],
      "resposta": "Duplo clique (ou F2) e corrigir",
      "explicacao": "Clicar uma vez e digitar SUBSTITUI tudo. Duplo clique ou F2 entram no modo de edição.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Você está preenchendo uma tabela LINHA POR LINHA, da esquerda para a direita. Qual tecla usar entre as células?",
      "opcoes": [
       "Tab",
       "Enter",
       "Esc",
       "F2"
      ],
      "resposta": "Tab",
      "explicacao": "Tab anda para a direita. Bônus: ao apertar Enter no fim da linha, o Excel volta para o início da próxima.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Se eu selecionar uma célula preenchida e simplesmente começar a digitar, o conteúdo antigo é substituído.",
      "resposta": true,
      "explicacao": "Por isso o F2 existe: para editar mantendo o que já está lá."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você começou a digitar na célula errada e quer desistir SEM alterar nada. Qual tecla?",
      "opcoes": [
       "Esc",
       "Enter",
       "Delete",
       "Tab"
      ],
      "resposta": "Esc",
      "explicacao": "Esc cancela a edição e a célula volta a ser o que era. Enter confirmaria o erro.",
      "mostrar_planilha": false
     },
     {
      "tipo": "ordenar",
      "pergunta": "O estoque de Porca mudou de 150 para 180. Coloque os passos na ordem:",
      "passos": [
       "Clicar na célula B3",
       "Digitar 180",
       "Pressionar Enter"
      ],
      "explicacao": "Selecionar, digitar por cima e confirmar — o valor antigo é substituído.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m1-l5",
    "titulo": "Desfazer, refazer e salvar",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Errou? Ctrl+Z",
     "intro": "Todo mundo apaga ou altera algo sem querer — e o Excel guarda o histórico. Ctrl+Z desfaz a última ação (e dá pra apertar várias vezes). Ctrl+Y refaz o que você desfez. E atenção: no Excel em português, Ctrl+B é SALVAR (de \"gravar\"), não negrito — negrito é Ctrl+N. Salve com frequência, ou use o Salvamento Automático com OneDrive.",
     "pontos": [
      [
       "Ctrl+Z",
       "desfaz a última ação (várias vezes)"
      ],
      [
       "Ctrl+Y",
       "refaz o que foi desfeito"
      ],
      [
       "Ctrl+B",
       "SALVAR (no Excel em português!)"
      ],
      [
       "Ctrl+N",
       "negrito (não é \"novo arquivo\")"
      ]
     ],
     "mostrar_planilha": false
    },
    "planilha": {
     "linhas": [
      [
       "Mês",
       "Vendas"
      ],
      [
       "Janeiro",
       4200
      ],
      [
       "Fevereiro",
       3800
      ],
      [
       "Março",
       5100
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Você apagou uma coluna inteira sem querer. Qual atalho resolve?",
      "opcoes": [
       "Ctrl+Z",
       "Ctrl+Y",
       "Ctrl+B",
       "Esc"
      ],
      "resposta": "Ctrl+Z",
      "explicacao": "Ctrl+Z desfaz. Pode apertar várias vezes para voltar vários passos.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "No Excel em PORTUGUÊS, qual é o atalho para SALVAR?",
      "opcoes": [
       "Ctrl+B",
       "Ctrl+S",
       "Ctrl+N",
       "Ctrl+V"
      ],
      "resposta": "Ctrl+B",
      "explicacao": "Pegadinha clássica da versão PT-BR: Ctrl+B salva e Ctrl+S aplica sublinhado.",
      "mostrar_planilha": false
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada atalho (Excel em português) à sua função:",
      "pares": {
       "Ctrl+Z": "Desfazer",
       "Ctrl+Y": "Refazer",
       "Ctrl+B": "Salvar",
       "Ctrl+N": "Negrito"
      },
      "explicacao": "No PT-BR, B de \"gravar\" o arquivo e N de negrito — as iniciais seguem as palavras em português."
     },
     {
      "tipo": "vf",
      "afirmacao": "O Ctrl+Z só consegue desfazer a última ação — nada além disso.",
      "resposta": false,
      "explicacao": "Dá pra desfazer vários passos seguidos apertando Ctrl+Z repetidamente."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você desfez 3 passos com Ctrl+Z, mas percebeu que o 3º estava certo. O que fazer?",
      "opcoes": [
       "Ctrl+Y para refazer",
       "Ctrl+Z de novo",
       "Digitar tudo de novo",
       "Fechar sem salvar"
      ],
      "resposta": "Ctrl+Y para refazer",
      "explicacao": "Ctrl+Y é o par do Ctrl+Z: refaz o que foi desfeito.",
      "mostrar_planilha": false
     },
     {
      "tipo": "ordenar",
      "pergunta": "Você alterou o valor de Março por engano e quer corrigir e proteger o trabalho. Ordene:",
      "passos": [
       "Pressionar Ctrl+Z para desfazer",
       "Conferir se o valor voltou ao correto",
       "Pressionar Ctrl+B para salvar"
      ],
      "explicacao": "Desfazer, conferir, salvar. Criar esse hábito evita perder trabalho.",
      "mostrar_planilha": true
     }
    ]
   }
  ]
 },
 {
  "id": "t1-m2",
  "trilha": 1,
  "titulo": "Formatação básica",
  "descricao": "Deixe suas planilhas legíveis e profissionais — sem quebrar os dados.",
  "licoes": [
   {
    "id": "t1-m2-l1",
    "titulo": "Formato de número",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Formato de número",
     "intro": "O formato muda a APARÊNCIA do valor, nunca o valor em si. A célula pode mostrar R$ 1.500,00 mas guardar apenas 1500 — e é o 1500 que entra nas contas. Os formatos mais usados: Moeda (R$), Porcentagem (%), Data e Número com casas decimais. Detalhe importante da porcentagem: 15% é, por dentro, o número 0,15.",
     "pontos": [
      [
       "Geral",
       "formato padrão, sem regra"
      ],
      [
       "Moeda",
       "R$ 1.500,00"
      ],
      [
       "Porcentagem",
       "0,15 vira 15%"
      ],
      [
       "Data",
       "número por dentro, data por fora"
      ]
     ],
     "mostrar_planilha": false,
     "ribbon": {
      "guia": "Página Inicial",
      "grupos": [
       {
        "nome": "Fonte",
        "botoes": [
         {
          "icone": "negrito",
          "rotulo": "Negrito"
         },
         {
          "icone": "italico",
          "rotulo": "Itálico"
         },
         {
          "icone": "sublinhado",
          "rotulo": "Sublinhado"
         },
         {
          "icone": "balde",
          "rotulo": "Cor de Preenchimento",
          "menu": true
         },
         {
          "icone": "fonte",
          "rotulo": "Cor da Fonte",
          "menu": true
         }
        ]
       },
       {
        "nome": "Número",
        "botoes": [
         {
          "icone": "moeda",
          "rotulo": "Formato Moeda",
          "alvo": true,
          "menu": true
         },
         {
          "icone": "porcento",
          "rotulo": "Porcentagem"
         }
        ]
       }
      ]
     }
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Preço",
       "Desconto"
      ],
      [
       "Armário",
       850,
       0.1
      ],
      [
       "Estante",
       420,
       0.05
      ],
      [
       "Mesa",
       610,
       0.15
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "vf",
      "afirmacao": "Aplicar o formato Moeda numa célula altera o valor guardado nela.",
      "resposta": false,
      "explicacao": "Formato só muda a aparência. O valor por dentro continua o mesmo e é ele que entra nas contas."
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada dado ao formato ideal:",
      "pares": {
       "Preço de venda": "Moeda (R$)",
       "Taxa de desconto": "Porcentagem (%)",
       "Prazo de entrega": "Data",
       "Quantidade em estoque": "Número"
      },
      "explicacao": "Escolher o formato certo faz a planilha se explicar sozinha."
     },
     {
      "tipo": "escolha",
      "pergunta": "A célula contém 0,15. Se você aplicar o formato Porcentagem, o que aparece?",
      "opcoes": [
       "15%",
       "0,15%",
       "150%",
       "1,5%"
      ],
      "resposta": "15%",
      "explicacao": "Porcentagem multiplica a exibição por 100: 0,15 → 15%. O valor guardado segue sendo 0,15.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Na planilha, a coluna Desconto mostra 0,1 / 0,05 / 0,15. Qual formato deixaria isso claro para o leitor?",
      "opcoes": [
       "Porcentagem",
       "Moeda",
       "Data",
       "Texto"
      ],
      "resposta": "Porcentagem",
      "explicacao": "0,1 formatado como porcentagem vira 10% — muito mais claro que o decimal cru.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Uma célula mostra R$ 850,00. Numa fórmula, qual valor o Excel usa?",
      "opcoes": [
       "850",
       "R$ 850,00",
       "\"850 reais\"",
       "85000"
      ],
      "resposta": "850",
      "explicacao": "O R$ e as casas decimais são só roupa. A fórmula enxerga o número puro: 850.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Se eu formatar a célula do desconto 0,1 como porcentagem, as fórmulas que usam essa célula vão mudar de resultado.",
      "resposta": false,
      "explicacao": "As fórmulas continuam vendo 0,1. Nada muda no cálculo — só na tela."
     }
    ]
   },
   {
    "id": "t1-m2-l2",
    "titulo": "Negrito, cores e bordas",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Destaque o que importa",
     "intro": "Formatação visual serve para guiar o olho: títulos em negrito, cabeçalho com cor de fundo, bordas para separar blocos. Os atalhos no Excel em português: Ctrl+N aplica negrito, Ctrl+I itálico e Ctrl+S sublinhado (sim, o S é de sublinhado — salvar é Ctrl+B, lembra?). Regra de ouro: pouco destaque destaca; muito destaque cansa.",
     "pontos": [
      [
       "Ctrl+N",
       "negrito"
      ],
      [
       "Ctrl+I",
       "itálico"
      ],
      [
       "Ctrl+S",
       "sublinhado (não é salvar!)"
      ],
      [
       "boa prática",
       "destaque só títulos, totais e alertas"
      ]
     ],
     "mostrar_planilha": false,
     "ribbon": {
      "guia": "Página Inicial",
      "grupos": [
       {
        "nome": "Fonte",
        "botoes": [
         {
          "icone": "negrito",
          "rotulo": "Negrito"
         },
         {
          "icone": "italico",
          "rotulo": "Itálico"
         },
         {
          "icone": "sublinhado",
          "rotulo": "Sublinhado"
         },
         {
          "icone": "balde",
          "rotulo": "Cor de Preenchimento",
          "alvo": true,
          "menu": true
         },
         {
          "icone": "fonte",
          "rotulo": "Cor da Fonte",
          "menu": true
         }
        ]
       },
       {
        "nome": "Alinhamento",
        "botoes": [
         {
          "icone": "alinhar",
          "rotulo": "Centralizar"
         },
         {
          "icone": "quebra",
          "rotulo": "Quebrar Texto"
         }
        ]
       }
      ]
     }
    },
    "planilha": {
     "linhas": [
      [
       "Mês",
       "Vendas"
      ],
      [
       "Janeiro",
       4200
      ],
      [
       "Fevereiro",
       3800
      ],
      [
       "TOTAL",
       8000
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada atalho (Excel em português) ao seu efeito:",
      "pares": {
       "Ctrl+N": "Negrito",
       "Ctrl+I": "Itálico",
       "Ctrl+S": "Sublinhado",
       "Ctrl+B": "Salvar"
      },
      "explicacao": "No PT-BR: N de Negrito, S de Sublinhado, B de gravar (salvar)."
     },
     {
      "tipo": "clicar_ribbon",
      "pergunta": "Toque no botão que PINTA O FUNDO de uma célula:",
      "ribbon": {
       "guia": "Página Inicial",
       "grupos": [
        {
         "nome": "Fonte",
         "botoes": [
          {
           "icone": "negrito",
           "rotulo": "Negrito"
          },
          {
           "icone": "italico",
           "rotulo": "Itálico"
          },
          {
           "icone": "sublinhado",
           "rotulo": "Sublinhado"
          },
          {
           "icone": "balde",
           "rotulo": "Cor de Preenchimento",
           "menu": true
          },
          {
           "icone": "fonte",
           "rotulo": "Cor da Fonte",
           "menu": true
          }
         ]
        },
        {
         "nome": "Alinhamento",
         "botoes": [
          {
           "icone": "alinhar",
           "rotulo": "Centralizar"
          },
          {
           "icone": "quebra",
           "rotulo": "Quebrar Texto"
          }
         ]
        }
       ]
      },
      "alvo": "Cor de Preenchimento",
      "explicacao": "O baldinho de tinta (Cor de Preenchimento) fica no grupo Fonte da Página Inicial. Cor da Fonte muda a letra, não o fundo."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você selecionou o título da tabela e apertou Ctrl+S esperando salvar. O que aconteceu?",
      "opcoes": [
       "O título ficou sublinhado",
       "O arquivo foi salvo",
       "Nada",
       "Abriu a impressão"
      ],
      "resposta": "O título ficou sublinhado",
      "explicacao": "Pegadinha do PT-BR: Ctrl+S é Sublinhado. Para salvar, Ctrl+B.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Nesta planilha, quais células merecem NEGRITO?",
      "opcoes": [
       "Cabeçalho (linha 1) e a linha TOTAL",
       "Todas as células",
       "Só os números",
       "Nenhuma"
      ],
      "resposta": "Cabeçalho (linha 1) e a linha TOTAL",
      "explicacao": "Negrito em tudo = negrito em nada. Destaque o que orienta a leitura: títulos e totais.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Usar muitas cores diferentes deixa a planilha mais profissional.",
      "resposta": false,
      "explicacao": "O contrário: 1 ou 2 cores bem usadas comunicam melhor que um arco-íris."
     },
     {
      "tipo": "ordenar",
      "pergunta": "Coloque em ordem os passos para deixar o cabeçalho em negrito:",
      "passos": [
       "Selecionar as células do cabeçalho",
       "Pressionar Ctrl+N",
       "Conferir o resultado"
      ],
      "explicacao": "Primeiro seleciona, depois formata. Formatação sempre age sobre a seleção.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m2-l3",
    "titulo": "Largura de coluna e #####",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Quando aparece #####",
     "intro": "Se uma célula mostra #####, calma: NÃO é erro de fórmula. Significa apenas que a coluna está estreita demais para exibir o número. O valor está lá, intacto. Para resolver: arraste a divisa entre as letras das colunas, ou dê DUPLO CLIQUE na divisa para ajustar automaticamente à largura ideal (autoajuste).",
     "pontos": [
      [
       "#####",
       "coluna estreita, valor intacto"
      ],
      [
       "arrastar a divisa",
       "ajusta a largura manualmente"
      ],
      [
       "duplo clique na divisa",
       "autoajuste à largura ideal"
      ]
     ],
     "mostrar_planilha": false
    },
    "planilha": {
     "linhas": [
      [
       "Cliente",
       "Faturamento"
      ],
      [
       "Mercado Silva",
       1250000
      ],
      [
       "Padaria Central",
       89000
      ],
      [
       "Auto Peças JR",
       456000
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Uma célula está mostrando #####. O que isso significa?",
      "opcoes": [
       "A coluna está estreita demais para o número",
       "A fórmula tem erro",
       "O valor foi apagado",
       "A célula está protegida"
      ],
      "resposta": "A coluna está estreita demais para o número",
      "explicacao": "##### é só falta de espaço. O valor continua guardado e correto.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o jeito MAIS RÁPIDO de ajustar a coluna à largura exata do conteúdo?",
      "opcoes": [
       "Duplo clique na divisa entre as letras das colunas",
       "Apagar e digitar de novo",
       "Diminuir a fonte",
       "Mesclar com a célula ao lado"
      ],
      "resposta": "Duplo clique na divisa entre as letras das colunas",
      "explicacao": "O duplo clique na divisa faz o autoajuste: a coluna fica do tamanho do maior conteúdo.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Quando aparece #####, o valor da célula foi perdido e preciso digitar de novo.",
      "resposta": false,
      "explicacao": "O valor está intacto — é só a exibição que não coube. Alargue a coluna e ele reaparece."
     },
     {
      "tipo": "escolha",
      "pergunta": "Na planilha, o faturamento do Mercado Silva (1.250.000) virou #####. Onde você clica duas vezes para resolver?",
      "opcoes": [
       "Na divisa entre as letras B e C",
       "Na própria célula",
       "Na linha 2",
       "No número 1"
      ],
      "resposta": "Na divisa entre as letras B e C",
      "explicacao": "A coluna do faturamento é a B; o autoajuste se faz na divisa direita dela, entre B e C.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Textos longos nunca viram ##### — isso só acontece com números e datas.",
      "resposta": true,
      "explicacao": "Texto que não cabe é cortado ou invade a célula vazia ao lado. ##### é exclusividade de números e datas."
     }
    ]
   },
   {
    "id": "t1-m2-l4",
    "titulo": "Mesclar células (e por que evitar)",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Mesclar: use com moderação",
     "intro": "Mesclar junta várias células numa só — útil para um título centralizado sobre a tabela. Mas tem um preço: células mescladas ATRAPALHAM classificar, filtrar, copiar e selecionar. A regra prática: mesclar só em títulos decorativos, NUNCA dentro da área de dados. Para centralizar um título sem mesclar, existe a opção \"Centralizar entre seleção\", que dá o mesmo visual sem os problemas.",
     "pontos": [
      [
       "mesclar",
       "junta células — só para títulos"
      ],
      [
       "área de dados",
       "NUNCA mesclar aqui"
      ],
      [
       "alternativa",
       "Centralizar entre seleção: mesmo visual, sem os problemas"
      ]
     ],
     "mostrar_planilha": false
    },
    "planilha": {
     "linhas": [
      [
       "Relatório de Vendas",
       "",
       ""
      ],
      [
       "Vendedor",
       "Região",
       "Total"
      ],
      [
       "Paula",
       "Sul",
       12000
      ],
      [
       "Diego",
       "Norte",
       9800
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual o principal problema de mesclar células no MEIO dos dados?",
      "opcoes": [
       "Quebra a classificação e os filtros",
       "Deixa o arquivo pesado",
       "Apaga as fórmulas",
       "Muda a cor das células"
      ],
      "resposta": "Quebra a classificação e os filtros",
      "explicacao": "O Excel não sabe classificar linhas com células mescladas — e exibe erro ao tentar.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Onde mesclar é ACEITÁVEL?",
      "opcoes": [
       "No título acima da tabela",
       "Na coluna de valores",
       "No meio dos dados",
       "Em qualquer lugar"
      ],
      "resposta": "No título acima da tabela",
      "explicacao": "Título decorativo, fora da área de dados, não atrapalha nada.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Existe uma alternativa ao mesclar chamada \"Centralizar entre seleção\", que centraliza o texto sem juntar as células.",
      "resposta": true,
      "explicacao": "Mesmo efeito visual, zero problemas. É a escolha dos usuários avançados."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você tenta classificar a tabela e o Excel exibe: \"Para fazer isso, todas as células mescladas precisam ter o mesmo tamanho\". Qual a causa provável?",
      "opcoes": [
       "Há células mescladas dentro da área de dados",
       "A planilha está sem salvar",
       "Faltou selecionar o cabeçalho",
       "O arquivo está corrompido"
      ],
      "resposta": "Há células mescladas dentro da área de dados",
      "explicacao": "Essa mensagem é o sintoma clássico. Desfazer a mesclagem resolve.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Na planilha do exercício, o título \"Relatório de Vendas\" na linha 1 pode ser mesclado de A1 até C1 sem prejudicar a tabela.",
      "resposta": true,
      "explicacao": "A linha 1 está fora da área de dados (que começa no cabeçalho da linha 2) — mesclar ali é seguro.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m2-l5",
    "titulo": "Formatar como Tabela",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Tabela de verdade",
     "intro": "Em Página Inicial → Formatar como Tabela, o Excel transforma seu intervalo numa Tabela oficial: linhas zebradas automáticas, filtros prontos no cabeçalho, e o melhor — ao digitar uma linha nova embaixo, ela entra na tabela sozinha, herdando formato e fórmulas. É o primeiro passo para planilhas profissionais e a base perfeita para tabelas dinâmicas no futuro.",
     "pontos": [
      [
       "visual pronto",
       "linhas zebradas sem esforço"
      ],
      [
       "filtros automáticos",
       "setinhas no cabeçalho"
      ],
      [
       "cresce sozinha",
       "linha nova entra na tabela automaticamente"
      ],
      [
       "onde fica",
       "Página Inicial → Formatar como Tabela"
      ]
     ],
     "mostrar_planilha": true,
     "ribbon": {
      "guia": "Página Inicial",
      "grupos": [
       {
        "nome": "Estilos",
        "botoes": [
         {
          "icone": "pincel",
          "rotulo": "Formatação Condicional",
          "menu": true
         },
         {
          "icone": "tabela",
          "rotulo": "Formatar como Tabela",
          "alvo": true,
          "menu": true
         }
        ]
       },
       {
        "nome": "Edição",
        "botoes": [
         {
          "icone": "soma",
          "rotulo": "AutoSoma",
          "menu": true
         },
         {
          "icone": "az",
          "rotulo": "Classificar e Filtrar",
          "menu": true
         },
         {
          "icone": "buscar",
          "rotulo": "Localizar e Selecionar",
          "menu": true
         }
        ]
       }
      ]
     }
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Categoria",
       "Preço"
      ],
      [
       "Armário",
       "Escritório",
       850
      ],
      [
       "Estante",
       "Escritório",
       420
      ],
      [
       "Mesa",
       "Industrial",
       610
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Onde fica o recurso Formatar como Tabela?",
      "opcoes": [
       "Guia Página Inicial",
       "Guia Exibir",
       "Guia Fórmulas",
       "Menu Arquivo"
      ],
      "resposta": "Guia Página Inicial",
      "explicacao": "Página Inicial → grupo Estilos → Formatar como Tabela.",
      "mostrar_planilha": false
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada benefício da Tabela à sua descrição:",
      "pares": {
       "Linhas zebradas": "Leitura mais fácil",
       "Filtros no cabeçalho": "Setinhas prontas para filtrar",
       "Expansão automática": "Linha nova entra sozinha",
       "Nome de tabela": "Fórmulas mais legíveis"
      },
      "explicacao": "Uma Tabela oficial faz sozinha o que você faria célula por célula."
     },
     {
      "tipo": "vf",
      "afirmacao": "Ao digitar uma linha nova logo abaixo de uma Tabela, ela entra na tabela automaticamente, com o mesmo formato.",
      "resposta": true,
      "explicacao": "É a expansão automática — e fórmulas de coluna também se estendem sozinhas."
     },
     {
      "tipo": "escolha",
      "pergunta": "Antes de usar Formatar como Tabela, o que os dados precisam ter?",
      "opcoes": [
       "Uma linha de cabeçalho com o nome de cada coluna",
       "Células mescladas",
       "Cores aplicadas",
       "Pelo menos 100 linhas"
      ],
      "resposta": "Uma linha de cabeçalho com o nome de cada coluna",
      "explicacao": "O cabeçalho vira o topo da tabela com os filtros. Sem ele, o Excel cria nomes genéricos (Coluna1, Coluna2).",
      "mostrar_planilha": true
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene os passos para transformar os dados numa Tabela:",
      "passos": [
       "Clicar em qualquer célula dentro dos dados",
       "Ir em Página Inicial → Formatar como Tabela",
       "Escolher um estilo e confirmar que a tabela tem cabeçalhos"
      ],
      "explicacao": "Não precisa selecionar tudo: com uma célula dentro dos dados, o Excel detecta o intervalo.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Formatar como Tabela e mesclar células combinam bem e podem ser usados juntos.",
      "resposta": false,
      "explicacao": "Tabelas não aceitam células mescladas — mais um motivo para evitar a mesclagem nos dados."
     }
    ]
   }
  ]
 },
 {
  "id": "t1-m3",
  "trilha": 1,
  "titulo": "Primeiras fórmulas",
  "descricao": "O momento em que a planilha começa a trabalhar por você.",
  "licoes": [
   {
    "id": "t1-m3-l1",
    "titulo": "O sinal de = e os operadores",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Toda fórmula começa com =",
     "intro": "O sinal de igual avisa o Excel: \"isto é uma conta, calcule\". Sem o =, o que você digitar vira texto. Os operadores são + (soma), - (subtração), * (multiplicação — asterisco, não x!) e / (divisão — barra, não ÷). A ordem é a da matemática: multiplicação e divisão vêm antes de soma e subtração; use parênteses para mandar na ordem.",
     "pontos": [
      [
       "=",
       "obrigatório no início de toda fórmula"
      ],
      [
       "*",
       "multiplicação (nunca a letra x)"
      ],
      [
       "/",
       "divisão"
      ],
      [
       "( )",
       "controlam a ordem do cálculo"
      ]
     ],
     "mostrar_planilha": false
    },
    "planilha": {
     "linhas": [
      [
       "Descrição",
       "Valor"
      ],
      [
       "Diária",
       150
      ],
      [
       "Dias",
       3
      ],
      [
       "Taxa",
       50
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Você digitou 5*8 numa célula e apareceu o texto \"5*8\", sem calcular. O que faltou?",
      "opcoes": [
       "O sinal de = no início",
       "Selecionar a célula",
       "Apertar F2",
       "Formatar como número"
      ],
      "resposta": "O sinal de = no início",
      "explicacao": "Sem o =, o Excel trata tudo como texto. =5*8 retorna 40.",
      "mostrar_planilha": false
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada operador à sua operação:",
      "pares": {
       "*": "Multiplicação",
       "/": "Divisão",
       "+": "Soma",
       "-": "Subtração"
      },
      "explicacao": "No teclado numérico, * e / ficam ao lado dos números — mais rápido que procurar."
     },
     {
      "tipo": "escolha",
      "pergunta": "Quanto resulta =2+3*4 ?",
      "opcoes": [
       "14",
       "20",
       "24",
       "9"
      ],
      "resposta": "14",
      "explicacao": "Multiplicação primeiro: 3*4=12, depois 2+12=14. Para obter 20, seria =(2+3)*4.",
      "mostrar_planilha": false
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Toque no erro desta fórmula que deveria multiplicar 150 por 3:",
      "tokens": [
       "=",
       "150",
       "x",
       "3"
      ],
      "indice_errado": 2,
      "explicacao": "A letra x não multiplica — o operador correto é o asterisco: =150*3."
     },
     {
      "tipo": "digitar",
      "pergunta": "Escreva a fórmula que calcula {a} vezes {b} (só a fórmula, começando com =):",
      "teclado": "formula",
      "variantes": [
       {
        "a": 7,
        "b": 6,
        "resposta": "=7*6",
        "aceitar": [
         "=6*7"
        ]
       },
       {
        "a": 12,
        "b": 5,
        "resposta": "=12*5",
        "aceitar": [
         "=5*12"
        ]
       },
       {
        "a": 9,
        "b": 8,
        "resposta": "=9*8",
        "aceitar": [
         "=8*9"
        ]
       }
      ],
      "explicacao": "Começa com = e usa * para multiplicar. A ordem dos fatores não altera o produto."
     },
     {
      "tipo": "escolha",
      "pergunta": "Hospedagem: 3 diárias de R$ 150 mais taxa única de R$ 50. Qual fórmula calcula o total corretamente?",
      "opcoes": [
       "=3*150+50",
       "=3*(150+50)",
       "=3+150*50",
       "=(3+150)*50"
      ],
      "resposta": "=3*150+50",
      "explicacao": "Multiplica as diárias primeiro (3*150=450) e soma a taxa: 500. Com parênteses errados daria 600.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m3-l2",
    "titulo": "Fórmulas com referências",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Aponte para a célula, não para o número",
     "intro": "Em vez de =150*3, escreva =B2*B3 — usando os ENDEREÇOS das células onde os valores estão. A mágica: se o valor de B2 mudar, o resultado recalcula sozinho. Essa é a regra número 1 do bom Excel: fórmula referencia célula, não repete número. Dica: em vez de digitar o endereço, você pode simplesmente CLICAR na célula durante a fórmula.",
     "pontos": [
      [
       "referência",
       "usar o endereço (B2) em vez do valor (150)"
      ],
      [
       "recálculo",
       "mudou o dado, mudou o resultado"
      ],
      [
       "dica",
       "clique na célula durante a fórmula em vez de digitar"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Preço",
       "Qtde"
      ],
      [
       "Cimento",
       45,
       10
      ],
      [
       "Areia",
       80,
       3
      ],
      [
       "Tijolo",
       2,
       500
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual a vantagem de =B2*C2 em vez de =45*10?",
      "opcoes": [
       "Se o preço mudar, o resultado recalcula sozinho",
       "Fica mais bonito",
       "Ocupa menos memória",
       "Nenhuma, é igual"
      ],
      "resposta": "Se o preço mudar, o resultado recalcula sozinho",
      "explicacao": "Números fixos na fórmula viram armadilha: mudou o dado, a conta fica errada e ninguém percebe.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula do total do Cimento (preço × quantidade):",
      "molde": "=___*___",
      "banco": [
       "B2",
       "C2",
       "A2",
       "B3",
       "45"
      ],
      "resposta": [
       "B2",
       "C2"
      ],
      "explicacao": "Preço em B2, quantidade em C2. Total: =B2*C2 → 450.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "A fórmula =B4*C4 está calculando o total do Tijolo. Qual o resultado?",
      "opcoes": [
       "1000",
       "502",
       "250",
       "2500"
      ],
      "resposta": "1000",
      "explicacao": "B4=2 (preço) e C4=500 (quantidade): 2*500 = 1000.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Se o preço da Areia em B3 mudar de 80 para 90, a fórmula =B3*C3 mostrará o novo total sem que eu faça nada.",
      "resposta": true,
      "explicacao": "É o recálculo automático — a razão de existir do Excel.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta fórmula deveria calcular o total da Areia (linha 3). Toque no erro:",
      "tokens": [
       "=",
       "B2",
       "*",
       "C3"
      ],
      "indice_errado": 1,
      "explicacao": "B2 é o preço do Cimento. O preço da Areia está em B3: =B3*C3.",
      "mostrar_planilha": true
     },
     {
      "tipo": "digitar",
      "pergunta": "Escreva a fórmula do total do produto da linha {linha} (preço × qtde):",
      "teclado": "formula",
      "variantes": [
       {
        "linha": 2,
        "resposta": "=B2*C2",
        "aceitar": [
         "=b2*c2",
         "=C2*B2",
         "=c2*b2"
        ]
       },
       {
        "linha": 3,
        "resposta": "=B3*C3",
        "aceitar": [
         "=b3*c3",
         "=C3*B3",
         "=c3*b3"
        ]
       },
       {
        "linha": 4,
        "resposta": "=B4*C4",
        "aceitar": [
         "=b4*c4",
         "=C4*B4",
         "=c4*b4"
        ]
       }
      ],
      "explicacao": "Preço na coluna B, quantidade na C, mesma linha do produto.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m3-l3",
    "titulo": "SOMA",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "SOMA",
     "intro": "Somar B2+B3+B4+B5 funciona, mas imagine com 200 linhas. A função SOMA resolve: =SOMA(B2:B5) soma o intervalo inteiro. Os DOIS PONTOS significam \"de B2 até B5\". Para somar intervalos separados, use ponto e vírgula: =SOMA(B2:B5;D2:D5). E o atalho de ouro: Alt+= insere a SOMA automaticamente abaixo de uma coluna de números.",
     "sintaxe": "=SOMA(intervalo)",
     "pontos": [
      [
       ":",
       "\"até\" — B2:B5 é de B2 até B5"
      ],
      [
       ";",
       "separa intervalos diferentes"
      ],
      [
       "Alt+=",
       "AutoSoma: insere a SOMA sozinho"
      ]
     ],
     "mostrar_planilha": true,
     "ribbon": {
      "guia": "Página Inicial",
      "grupos": [
       {
        "nome": "Estilos",
        "botoes": [
         {
          "icone": "pincel",
          "rotulo": "Formatação Condicional",
          "menu": true
         },
         {
          "icone": "tabela",
          "rotulo": "Formatar como Tabela",
          "menu": true
         }
        ]
       },
       {
        "nome": "Edição",
        "botoes": [
         {
          "icone": "soma",
          "rotulo": "AutoSoma",
          "alvo": true,
          "menu": true
         },
         {
          "icone": "az",
          "rotulo": "Classificar e Filtrar",
          "menu": true
         },
         {
          "icone": "buscar",
          "rotulo": "Localizar e Selecionar",
          "menu": true
         }
        ]
       }
      ]
     }
    },
    "planilha": {
     "linhas": [
      [
       "Semana",
       "Vendas"
      ],
      [
       "Semana 1",
       1200
      ],
      [
       "Semana 2",
       950
      ],
      [
       "Semana 3",
       1400
      ],
      [
       "Semana 4",
       1100
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O que significa B2:B5 dentro de uma fórmula?",
      "opcoes": [
       "Todas as células de B2 até B5",
       "Apenas B2 e B5",
       "B2 dividido por B5",
       "As colunas B, 2 e 5"
      ],
      "resposta": "Todas as células de B2 até B5",
      "explicacao": "Os dois pontos criam um intervalo: B2, B3, B4 e B5.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula que soma as vendas das 4 semanas:",
      "molde": "=SOMA(___)",
      "banco": [
       "B2:B5",
       "B2;B5",
       "A2:A5",
       "B2:B4"
      ],
      "resposta": [
       "B2:B5"
      ],
      "explicacao": "As vendas vão de B2 até B5. B2;B5 somaria só as duas pontas.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =SOMA(B2:B5) nesta planilha?",
      "opcoes": [
       "4650",
       "4550",
       "2150",
       "3550"
      ],
      "resposta": "4650",
      "explicacao": "1200+950+1400+1100 = 4650.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Toque no erro desta fórmula que deveria somar B2 até B5:",
      "tokens": [
       "=SOMA(",
       "B2",
       ";",
       "B5",
       ")"
      ],
      "indice_errado": 2,
      "explicacao": "Com ponto e vírgula, soma SÓ B2 e B5 (2300). Para o intervalo inteiro, dois pontos: B2:B5.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual atalho insere a SOMA automaticamente abaixo de uma coluna de números?",
      "opcoes": [
       "Alt+=",
       "Ctrl+B",
       "Ctrl+Shift+S",
       "F4"
      ],
      "resposta": "Alt+=",
      "explicacao": "AutoSoma: o Excel detecta o intervalo acima e monta a =SOMA sozinho. Confira sempre o intervalo sugerido.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "=SOMA(B2:B5) e =B2+B3+B4+B5 dão o mesmo resultado nesta planilha.",
      "resposta": true,
      "explicacao": "Mesmo resultado — mas a SOMA escala para mil linhas e a soma manual, não.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m3-l4",
    "titulo": "MÉDIA, MÁXIMO e MÍNIMO",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "A família da análise rápida",
     "intro": "Três irmãs da SOMA, mesma sintaxe: =MÉDIA(B2:B5) calcula o valor médio, =MÁXIMO(B2:B5) encontra o maior e =MÍNIMO(B2:B5) o menor. Com elas você responde em segundos: qual a venda média do mês? Qual foi o melhor dia? E o pior? Detalhe: células vazias são ignoradas — mas zeros contam na média!",
     "sintaxe": "=MÉDIA(intervalo)",
     "pontos": [
      [
       "MÉDIA",
       "valor médio do intervalo"
      ],
      [
       "MÁXIMO",
       "o maior valor"
      ],
      [
       "MÍNIMO",
       "o menor valor"
      ],
      [
       "atenção",
       "vazio é ignorado; zero entra na média"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Vendedor",
       "Vendas"
      ],
      [
       "Paula",
       8000
      ],
      [
       "Diego",
       5000
      ],
      [
       "Marina",
       11000
      ],
      [
       "Caio",
       4000
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada função ao que ela responde:",
      "pares": {
       "MÉDIA": "Qual o desempenho típico?",
       "MÁXIMO": "Quem vendeu mais?",
       "MÍNIMO": "Qual o pior resultado?",
       "SOMA": "Quanto vendemos no total?"
      },
      "explicacao": "Quatro funções, mesma sintaxe, quatro perguntas de negócio respondidas."
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =MÁXIMO(B2:B5) nesta planilha?",
      "opcoes": [
       "11000",
       "8000",
       "28000",
       "4000"
      ],
      "resposta": "11000",
      "explicacao": "O maior valor do intervalo é o da Marina: 11000.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "A soma dessas vendas é 28.000. Então, quanto dá =MÉDIA(B2:B5)?",
      "opcoes": [
       "7000",
       "28000",
       "5600",
       "11000"
      ],
      "resposta": "7000",
      "explicacao": "28000 ÷ 4 vendedores = 7000. Dividir por 5 (5600) é o erro clássico: o cabeçalho não é venda.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula que encontra a MENOR venda:",
      "molde": "=___(___)",
      "banco": [
       "MÍNIMO",
       "B2:B5",
       "MÁXIMO",
       "A2:A5",
       "MENOR"
      ],
      "resposta": [
       "MÍNIMO",
       "B2:B5"
      ],
      "explicacao": "=MÍNIMO(B2:B5) → 4000. (Existe também a função MENOR, mas ela pede uma posição — assunto para depois.)",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Se um vendedor tiver 0 de vendas, esse zero entra no cálculo da MÉDIA e a puxa para baixo.",
      "resposta": true,
      "explicacao": "Zero é valor e conta. Só células VAZIAS são ignoradas pela MÉDIA."
     },
     {
      "tipo": "digitar",
      "pergunta": "Escreva a fórmula de {funcao} das vendas (B2:B5):",
      "teclado": "formula",
      "variantes": [
       {
        "resposta": "=MÉDIA(B2:B5)",
        "aceitar": [
         "=média(b2:b5)",
         "=MEDIA(B2:B5)",
         "=media(b2:b5)"
        ],
        "funcao": "MÉDIA"
       },
       {
        "resposta": "=MÁXIMO(B2:B5)",
        "aceitar": [
         "=máximo(b2:b5)",
         "=MAXIMO(B2:B5)",
         "=maximo(b2:b5)"
        ],
        "funcao": "MÁXIMO (maior venda)"
       },
       {
        "resposta": "=MÍNIMO(B2:B5)",
        "aceitar": [
         "=mínimo(b2:b5)",
         "=MINIMO(B2:B5)",
         "=minimo(b2:b5)"
        ],
        "funcao": "MÍNIMO (menor venda)"
       }
      ],
      "explicacao": "Mesma estrutura da SOMA: nome da função + intervalo entre parênteses.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m3-l5",
    "titulo": "CONT.NÚM e CONT.VALORES",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "Contar sem contar nos dedos",
     "intro": "Duas funções para contar células: =CONT.NÚM(intervalo) conta apenas as que têm NÚMEROS; =CONT.VALORES(intervalo) conta todas as NÃO VAZIAS (números e textos). Exemplo prático: numa lista de pagamentos, CONT.VALORES na coluna de nomes diz quantos clientes existem, e CONT.NÚM na coluna de valores diz quantos já pagaram.",
     "sintaxe": "=CONT.NÚM(intervalo)",
     "pontos": [
      [
       "CONT.NÚM",
       "conta só células com números"
      ],
      [
       "CONT.VALORES",
       "conta qualquer célula preenchida"
      ],
      [
       "uso clássico",
       "comparar as duas = achar pendências"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Cliente",
       "Pagamento"
      ],
      [
       "Ana",
       300
      ],
      [
       "Bruno",
       ""
      ],
      [
       "Carla",
       450
      ],
      [
       "Davi",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual a diferença entre CONT.NÚM e CONT.VALORES?",
      "opcoes": [
       "CONT.NÚM conta só números; CONT.VALORES conta tudo que não está vazio",
       "São idênticas",
       "CONT.VALORES conta só textos",
       "CONT.NÚM soma os valores"
      ],
      "resposta": "CONT.NÚM conta só números; CONT.VALORES conta tudo que não está vazio",
      "explicacao": "NÚM = números. VALORES = qualquer conteúdo (número ou texto).",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Nesta planilha, qual o resultado de =CONT.NÚM(B2:B5)?",
      "opcoes": [
       "2",
       "4",
       "750",
       "0"
      ],
      "resposta": "2",
      "explicacao": "Só Ana (300) e Carla (450) têm números na coluna B. Bruno e Davi estão vazios.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E =CONT.VALORES(A2:A5)?",
      "opcoes": [
       "4",
       "2",
       "0",
       "8"
      ],
      "resposta": "4",
      "explicacao": "Os 4 nomes estão preenchidos — CONT.VALORES conta texto também.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Comparando CONT.VALORES(A2:A5)=4 com CONT.NÚM(B2:B5)=2, dá pra concluir que 2 clientes ainda não pagaram.",
      "resposta": true,
      "explicacao": "4 clientes − 2 pagamentos = 2 pendências. Duas funções simples virando informação de negócio.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula que conta quantos clientes JÁ PAGARAM:",
      "molde": "=___(___)",
      "banco": [
       "CONT.NÚM",
       "B2:B5",
       "CONT.VALORES",
       "A2:A5",
       "SOMA"
      ],
      "resposta": [
       "CONT.NÚM",
       "B2:B5"
      ],
      "explicacao": "Pagou = tem número na coluna B. =CONT.NÚM(B2:B5) → 2.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta fórmula deveria contar quantos CLIENTES existem na lista. Toque no erro:",
      "tokens": [
       "=CONT.NÚM(",
       "A2:A5",
       ")"
      ],
      "indice_errado": 0,
      "explicacao": "Nomes são texto — CONT.NÚM retornaria 0. Para contar clientes, use CONT.VALORES(A2:A5).",
      "mostrar_planilha": true
     }
    ]
   }
  ]
 },
 {
  "id": "t1-m4",
  "trilha": 1,
  "titulo": "Alça de preenchimento e referências",
  "descricao": "Escreva a fórmula uma vez, use em mil linhas.",
  "licoes": [
   {
    "id": "t1-m4-l1",
    "titulo": "Alça de preenchimento",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "O quadradinho mágico",
     "intro": "No canto inferior direito da célula selecionada existe um quadradinho: a alça de preenchimento. Arraste-a para copiar o conteúdo — e o Excel é esperto: se a célula tem \"Janeiro\", arrastar gera Fevereiro, Março... Se você seleciona 1 e 2 juntos e arrasta, ele continua 3, 4, 5... Funciona com meses, dias da semana, datas e sequências numéricas.",
     "pontos": [
      [
       "alça",
       "quadradinho no canto inferior direito da seleção"
      ],
      [
       "arrastar",
       "copia ou continua a sequência"
      ],
      [
       "sequência numérica",
       "selecione DUAS células (1 e 2) para ensinar o padrão"
      ],
      [
       "duplo clique na alça",
       "preenche até o fim dos dados vizinhos"
      ]
     ],
     "mostrar_planilha": false
    },
    "planilha": {
     "linhas": [
      [
       "Mês",
       "Meta"
      ],
      [
       "Janeiro",
       5000
      ],
      [
       "",
       ""
      ],
      [
       "",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Onde fica a alça de preenchimento?",
      "opcoes": [
       "No canto inferior direito da célula selecionada",
       "Na barra de fórmulas",
       "No menu Arquivo",
       "No canto superior esquerdo da tela"
      ],
      "resposta": "No canto inferior direito da célula selecionada",
      "explicacao": "É o quadradinho pequeno na borda da seleção — o cursor vira uma cruz fina sobre ele.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "A célula A2 contém \"Janeiro\". Se você arrastar a alça 2 células para baixo, o que aparece?",
      "opcoes": [
       "Fevereiro e Março",
       "Janeiro e Janeiro",
       "Células vazias",
       "Jan e Fev"
      ],
      "resposta": "Fevereiro e Março",
      "explicacao": "Meses são uma lista que o Excel conhece — ele continua a sequência sozinho.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Você quer a sequência 1, 2, 3, 4... arrastando. Qual o jeito certo de começar?",
      "opcoes": [
       "Digitar 1 e 2, selecionar as DUAS células e arrastar",
       "Digitar só 1 e arrastar",
       "Digitar 1, 2, 3, 4 manualmente",
       "Usar =SOMA"
      ],
      "resposta": "Digitar 1 e 2, selecionar as DUAS células e arrastar",
      "explicacao": "Com duas células o Excel entende o padrão (+1). Só com o 1, ele repete 1, 1, 1...",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Dar duplo clique na alça preenche a coluna automaticamente até onde os dados vizinhos terminam.",
      "resposta": true,
      "explicacao": "Com 500 linhas de dados ao lado, o duplo clique substitui um arrastão gigante."
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "O que a alça gera ao arrastar cada conteúdo?",
      "pares": {
       "Janeiro": "Fevereiro, Março...",
       "Segunda": "Terça, Quarta...",
       "01/03/2026": "02/03, 03/03...",
       "10 (célula única)": "10, 10, 10..."
      },
      "explicacao": "Listas conhecidas continuam; número sozinho apenas se repete (a menos que segure Ctrl)."
     }
    ]
   },
   {
    "id": "t1-m4-l2",
    "titulo": "Arrastar fórmulas: referência relativa",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "A fórmula que se adapta",
     "intro": "Aqui está o superpoder: ao arrastar uma FÓRMULA pela alça, as referências se ajustam sozinhas. =B2*C2 arrastada para a linha de baixo vira =B3*C3, depois =B4*C4... Isso se chama referência RELATIVA: a fórmula não guarda o endereço fixo, guarda a posição relativa (\"a célula duas à esquerda\"). Escreva uma vez, arraste para mil linhas.",
     "pontos": [
      [
       "referência relativa",
       "se ajusta ao ser copiada"
      ],
      [
       "arrastar para baixo",
       "os números das linhas aumentam"
      ],
      [
       "arrastar para o lado",
       "as letras das colunas avançam"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Preço",
       "Qtde",
       "Total"
      ],
      [
       "Cimento",
       45,
       10,
       ""
      ],
      [
       "Areia",
       80,
       3,
       ""
      ],
      [
       "Tijolo",
       2,
       500,
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "A célula D2 tem =B2*C2. Ao arrastar para D3, a fórmula vira:",
      "opcoes": [
       "=B3*C3",
       "=B2*C2",
       "=B4*C4",
       "=D3*C3"
      ],
      "resposta": "=B3*C3",
      "explicacao": "Desceu uma linha, as referências descem junto: relativa é isso.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Depois de arrastar =B2*C2 até a linha 4, qual será o Total do Tijolo (D4)?",
      "opcoes": [
       "1000",
       "450",
       "240",
       "502"
      ],
      "resposta": "1000",
      "explicacao": "D4 vira =B4*C4 = 2*500 = 1000.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene os passos para calcular o Total dos 3 produtos com uma fórmula só:",
      "passos": [
       "Escrever =B2*C2 na célula D2",
       "Pressionar Enter para confirmar",
       "Selecionar D2 e arrastar a alça até D4"
      ],
      "explicacao": "O Enter vem ANTES do arrasto: enquanto a fórmula está sendo digitada a célula está em edição e a alça nem existe. Confirmou, aí sim arrasta.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Referência relativa é um defeito do Excel que devemos evitar.",
      "resposta": false,
      "explicacao": "É o comportamento padrão E desejado na maioria dos casos — é o que permite arrastar fórmulas."
     },
     {
      "tipo": "escolha",
      "pergunta": "=B2*C2 foi arrastada para a DIREITA (de D2 para E2). O que ela vira?",
      "opcoes": [
       "=C2*D2",
       "=B3*C3",
       "=B2*C2",
       "=A2*B2"
      ],
      "resposta": "=C2*D2",
      "explicacao": "Para o lado, mudam as LETRAS: B→C e C→D. As linhas ficam.",
      "mostrar_planilha": false
     }
    ]
   },
   {
    "id": "t1-m4-l3",
    "titulo": "Referência absoluta: o $",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Travando com $",
     "intro": "Às vezes você NÃO quer que a referência se ajuste. Exemplo: o desconto de 10% está na célula B1, e todas as fórmulas devem usar ELA. Se arrastar =C3*B1, vira =C4*B2 — errado! A solução é o cifrão: =C3*$B$1. O $ TRAVA a referência: $B$1 continua $B$1 onde quer que a fórmula vá. Atalho: ao digitar a referência na fórmula, aperte F4 para inserir os cifrões.",
     "pontos": [
      [
       "$B$1",
       "travada: não muda ao arrastar"
      ],
      [
       "B1",
       "relativa: se ajusta ao arrastar"
      ],
      [
       "F4",
       "alterna entre relativa e absoluta na fórmula"
      ],
      [
       "quando usar",
       "valor único usado por muitas fórmulas (taxa, desconto, cotação)"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Desconto:",
       0.1,
       "",
       ""
      ],
      [
       "",
       "",
       "",
       ""
      ],
      [
       "Produto",
       "Preço",
       "Preço c/ desc.",
       ""
      ],
      [
       "Armário",
       850,
       "",
       ""
      ],
      [
       "Estante",
       420,
       "",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O que o $ faz em $B$1?",
      "opcoes": [
       "Trava a referência: ela não muda ao arrastar",
       "Formata como moeda",
       "Multiplica por 100",
       "Protege a célula com senha"
      ],
      "resposta": "Trava a referência: ela não muda ao arrastar",
      "explicacao": "Cifrão na fórmula = âncora. Nada a ver com o formato R$.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "A fórmula =B4*$B$1 foi arrastada de C4 para C5. O que ela vira?",
      "opcoes": [
       "=B5*$B$1",
       "=B5*$B$2",
       "=B4*$B$1",
       "=C5*$B$1"
      ],
      "resposta": "=B5*$B$1",
      "explicacao": "B4 é relativa e desce para B5; $B$1 está travada e não se move.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta fórmula em C4 será arrastada para baixo. O desconto está em B1. Toque no que vai dar problema:",
      "tokens": [
       "=",
       "B4",
       "*",
       "B1"
      ],
      "indice_errado": 3,
      "explicacao": "B1 sem cifrão vai virar B2 (vazia!) ao arrastar. Precisa ser $B$1.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual tecla alterna entre B1, $B$1, B$1 e $B1 enquanto você digita a fórmula?",
      "opcoes": [
       "F4",
       "F2",
       "Ctrl+$",
       "Alt+="
      ],
      "resposta": "F4",
      "explicacao": "Clique na referência dentro da fórmula e vá apertando F4 para alternar.",
      "mostrar_planilha": false
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula do valor DO DESCONTO do Armário (preço × taxa em B1), pronta para arrastar:",
      "molde": "=___*___",
      "banco": [
       "B4",
       "$B$1",
       "B1",
       "$B$4",
       "C4"
      ],
      "resposta": [
       "B4",
       "$B$1"
      ],
      "explicacao": "Preço relativo (muda por linha) × desconto travado (sempre B1): =B4*$B$1.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Se eu NÃO vou arrastar a fórmula para lugar nenhum, usar B1 ou $B$1 dá o mesmo resultado.",
      "resposta": true,
      "explicacao": "O $ só importa na cópia. Numa fórmula parada, tanto faz — mas travar já é um bom hábito."
     }
    ]
   },
   {
    "id": "t1-m4-l4",
    "titulo": "Caso prático: tabela de preços",
    "teoria": {
     "eyebrow": "Revisão aplicada",
     "titulo": "Juntando tudo",
     "intro": "Cenário real: uma loja quer aplicar o mesmo percentual de desconto (célula B1) em todos os produtos e ver o preço final. É o combo perfeito deste módulo: fórmula com referência relativa (o preço de cada linha) + referência absoluta (o desconto único) + alça de preenchimento para replicar. Este é o padrão que você vai usar a vida inteira em planilhas comerciais.",
     "pontos": [
      [
       "preço da linha",
       "relativa: B4, B5, B6..."
      ],
      [
       "desconto único",
       "absoluta: $B$1"
      ],
      [
       "replicar",
       "alça de preenchimento"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Desconto:",
       0.2,
       "",
       ""
      ],
      [
       "",
       "",
       "",
       ""
      ],
      [
       "Produto",
       "Preço",
       "Preço final",
       ""
      ],
      [
       "Armário",
       850,
       "",
       ""
      ],
      [
       "Estante",
       420,
       "",
       ""
      ],
      [
       "Mesa",
       610,
       "",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula do PREÇO FINAL do Armário (preço menos o desconto), pronta para arrastar:",
      "molde": "=___*(1-___)",
      "banco": [
       "B4",
       "$B$1",
       "B1",
       "$B$4",
       "850"
      ],
      "resposta": [
       "B4",
       "$B$1"
      ],
      "explicacao": "=B4*(1-$B$1) → 850*0,8 = 680. O (1-desconto) transforma \"tirar 20%\" em \"pagar 80%\".",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Com desconto de 20% (B1=0,2), qual o preço final da Estante?",
      "opcoes": [
       "336",
       "420",
       "84",
       "400"
      ],
      "resposta": "336",
      "explicacao": "420*(1-0,2) = 420*0,8 = 336.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Você esqueceu o cifrão e escreveu =B4*(1-B1). Ao arrastar para a linha 5, qual será o problema?",
      "opcoes": [
       "A fórmula usará B2, que está vazia — desconto zero",
       "Nada, funciona igual",
       "O Excel exibirá #REF!",
       "A planilha trava"
      ],
      "resposta": "A fórmula usará B2, que está vazia — desconto zero",
      "explicacao": "B1 relativa desce para B2 (vazia = 0). O produto sai SEM desconto e ninguém percebe. Erro silencioso — o pior tipo.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "O gerente mudou o desconto de 20% para 30% na célula B1. O que acontece com os preços finais?",
      "opcoes": [
       "Todos recalculam sozinhos com 30%",
       "Nada, é preciso refazer as fórmulas",
       "Só o primeiro produto muda",
       "A planilha pede confirmação"
      ],
      "resposta": "Todos recalculam sozinhos com 30%",
      "explicacao": "Todas as fórmulas apontam para $B$1 — um número muda, a tabela inteira acompanha. É por isso que centralizamos o desconto numa célula.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene o fluxo completo para montar a coluna Preço final:",
      "passos": [
       "Escrever =B4*(1-$B$1) na célula C4",
       "Confirmar com Enter",
       "Arrastar a alça de C4 até C6",
       "Conferir os três resultados"
      ],
      "explicacao": "Fórmula certa uma vez + alça = coluna inteira. Conferir no final é hábito de profissional.",
      "mostrar_planilha": true
     }
    ]
   }
  ]
 },
 {
  "id": "t1-m5",
  "trilha": 1,
  "titulo": "Organização de dados",
  "descricao": "Encontre qualquer informação em segundos, sem bagunçar a planilha.",
  "licoes": [
   {
    "id": "t1-m5-l1",
    "titulo": "Classificar",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Classificar (ordenar)",
     "intro": "Classificar reorganiza as linhas: A→Z para textos, menor→maior (ou o inverso) para números e datas. Está em Dados → Classificar, ou no botão direito. O CUIDADO MAIS IMPORTANTE desta lição: classifique com uma célula dentro da tabela e deixe o Excel selecionar tudo — se você selecionar SÓ UMA COLUNA e classificar, ela se reordena sozinha e as linhas se desalinham (o preço de um produto vai parar em outro!).",
     "pontos": [
      [
       "A→Z / Z→A",
       "ordem crescente ou decrescente"
      ],
      [
       "onde fica",
       "guia Dados, ou botão direito → Classificar"
      ],
      [
       "PERIGO",
       "classificar uma coluna isolada desalinha a tabela"
      ],
      [
       "jeito seguro",
       "clique numa célula da tabela e classifique"
      ]
     ],
     "mostrar_planilha": true,
     "ribbon": {
      "guia": "Dados",
      "grupos": [
       {
        "nome": "Classificar e Filtrar",
        "botoes": [
         {
          "icone": "az",
          "rotulo": "Classificar",
          "alvo": true
         },
         {
          "icone": "filtro",
          "rotulo": "Filtro"
         }
        ]
       },
       {
        "nome": "Ferramentas de Dados",
        "botoes": [
         {
          "icone": "colunas",
          "rotulo": "Texto para Colunas"
         },
         {
          "icone": "copiar",
          "rotulo": "Remover Duplicatas"
         }
        ]
       }
      ]
     }
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Preço"
      ],
      [
       "Mesa",
       610
      ],
      [
       "Armário",
       850
      ],
      [
       "Cadeira",
       180
      ],
      [
       "Estante",
       420
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Classificando a tabela por Preço, do MAIOR para o menor, qual produto fica em primeiro?",
      "opcoes": [
       "Armário",
       "Mesa",
       "Cadeira",
       "Estante"
      ],
      "resposta": "Armário",
      "explicacao": "Decrescente: Armário (850), Mesa (610), Estante (420), Cadeira (180).",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o jeito SEGURO de classificar uma tabela?",
      "opcoes": [
       "Clicar numa célula da tabela e usar Dados → Classificar",
       "Selecionar só a coluna que quero ordenar",
       "Recortar e colar as linhas na ordem",
       "Ordenar de cabeça e redigitar"
      ],
      "resposta": "Clicar numa célula da tabela e usar Dados → Classificar",
      "explicacao": "O Excel expande a seleção para a tabela inteira e as linhas viajam juntas.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Você selecionou SÓ a coluna Preço e classificou. Qual o risco?",
      "opcoes": [
       "Os preços trocam de produto — a tabela desalinha",
       "Nada, é o jeito certo",
       "A coluna some",
       "Os preços são apagados"
      ],
      "resposta": "Os preços trocam de produto — a tabela desalinha",
      "explicacao": "Só os preços se reordenam; os nomes ficam parados. A Cadeira \"vira\" 850. Se acontecer: Ctrl+Z imediatamente!",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Classificar por texto (A→Z) só funciona na primeira coluna da tabela.",
      "resposta": false,
      "explicacao": "Dá pra classificar por QUALQUER coluna — e até por várias em sequência (por categoria, depois por preço)."
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene os passos para classificar a tabela por Preço crescente, com segurança:",
      "passos": [
       "Clicar em qualquer célula da coluna Preço",
       "Ir na guia Dados",
       "Clicar em Classificar de A a Z (crescente)",
       "Conferir se os pares produto-preço continuam certos"
      ],
      "explicacao": "Célula dentro da tabela → classificar → conferir. Conferir é o passo que separa amadores de profissionais.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m5-l2",
    "titulo": "Filtrar",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Filtro: mostre só o que interessa",
     "intro": "O filtro ESCONDE temporariamente as linhas que não interessam — sem apagar nada. Ative com Ctrl+Shift+L (ou Dados → Filtro): aparecem setinhas no cabeçalho. Clique na setinha e escolha o que exibir: só uma categoria, valores acima de X, textos que contêm uma palavra. Para voltar a ver tudo, limpe o filtro. Dica visual: linhas filtradas têm os números de linha em AZUL.",
     "pontos": [
      [
       "Ctrl+Shift+L",
       "liga e desliga o filtro"
      ],
      [
       "setinha no cabeçalho",
       "abre as opções de filtro"
      ],
      [
       "esconde, não apaga",
       "os dados continuam lá"
      ],
      [
       "números de linha azuis",
       "sinal de que há filtro ativo"
      ]
     ],
     "mostrar_planilha": true,
     "ribbon": {
      "guia": "Dados",
      "grupos": [
       {
        "nome": "Classificar e Filtrar",
        "botoes": [
         {
          "icone": "az",
          "rotulo": "Classificar"
         },
         {
          "icone": "filtro",
          "rotulo": "Filtro",
          "alvo": true
         }
        ]
       },
       {
        "nome": "Ferramentas de Dados",
        "botoes": [
         {
          "icone": "colunas",
          "rotulo": "Texto para Colunas"
         },
         {
          "icone": "copiar",
          "rotulo": "Remover Duplicatas"
         }
        ]
       }
      ]
     }
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Categoria",
       "Preço"
      ],
      [
       "Armário",
       "Escritório",
       850
      ],
      [
       "Estante",
       "Escritório",
       420
      ],
      [
       "Mesa",
       "Industrial",
       610
      ],
      [
       "Bancada",
       "Industrial",
       990
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual atalho liga e desliga o filtro?",
      "opcoes": [
       "Ctrl+Shift+L",
       "Ctrl+F",
       "Ctrl+B",
       "Alt+="
      ],
      "resposta": "Ctrl+Shift+L",
      "explicacao": "L de... na verdade só decore: Ctrl+Shift+L. As setinhas aparecem no cabeçalho.",
      "mostrar_planilha": false
     },
     {
      "tipo": "clicar_ribbon",
      "pergunta": "Toque onde você LIGA O FILTRO da tabela:",
      "ribbon": {
       "guia": "Dados",
       "grupos": [
        {
         "nome": "Classificar e Filtrar",
         "botoes": [
          {
           "icone": "az",
           "rotulo": "Classificar"
          },
          {
           "icone": "filtro",
           "rotulo": "Filtro"
          }
         ]
        },
        {
         "nome": "Ferramentas de Dados",
         "botoes": [
          {
           "icone": "colunas",
           "rotulo": "Texto para Colunas"
          },
          {
           "icone": "copiar",
           "rotulo": "Remover Duplicatas"
          }
         ]
        }
       ]
      },
      "alvo": "Filtro",
      "explicacao": "O funil (Filtro) fica em Dados → Classificar e Filtrar. Ou use o atalho Ctrl+Shift+L."
     },
     {
      "tipo": "vf",
      "afirmacao": "Filtrar uma tabela APAGA as linhas que não atendem ao critério.",
      "resposta": false,
      "explicacao": "Filtro só esconde. Limpou o filtro, tudo reaparece. Nada é perdido."
     },
     {
      "tipo": "escolha",
      "pergunta": "Filtrando a Categoria por \"Industrial\", quais produtos ficam visíveis?",
      "opcoes": [
       "Mesa e Bancada",
       "Armário e Estante",
       "Só a Bancada",
       "Todos"
      ],
      "resposta": "Mesa e Bancada",
      "explicacao": "Só as linhas com Categoria = Industrial permanecem à vista.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Como saber, de relance, que uma planilha está com filtro ativo escondendo linhas?",
      "opcoes": [
       "Os números das linhas ficam azuis e pulam sequência",
       "A planilha fica cinza",
       "Aparece um cadeado",
       "O título pisca"
      ],
      "resposta": "Os números das linhas ficam azuis e pulam sequência",
      "explicacao": "Linhas 1, 2, 4, 6 em azul = há linhas ocultas por filtro. Detalhe que evita decisões com dados incompletos!",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Além de escolher valores, o filtro de números permite:",
      "opcoes": [
       "Filtrar por condição, como \"maior que 500\"",
       "Somar os valores",
       "Corrigir erros de digitação",
       "Traduzir os textos"
      ],
      "resposta": "Filtrar por condição, como \"maior que 500\"",
      "explicacao": "Filtros de Número → É Maior que... Nesta tabela, >500 mostraria Armário, Mesa e Bancada.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada situação à ferramenta certa:",
      "pares": {
       "Ver só a categoria Escritório": "Filtro",
       "Ordenar do mais caro ao mais barato": "Classificar",
       "Ver tudo de novo": "Limpar filtro",
       "Ligar as setinhas do cabeçalho": "Ctrl+Shift+L"
      },
      "explicacao": "Classificar muda a ORDEM; filtrar muda a VISIBILIDADE. Juntas, dominam qualquer lista."
     }
    ]
   },
   {
    "id": "t1-m5-l3",
    "titulo": "Congelar painéis",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Cabeçalho sempre à vista",
     "intro": "Numa planilha com 500 linhas, ao rolar para baixo o cabeçalho some — e você esquece qual coluna é qual. Congelar painéis prende linhas e/ou colunas na tela: em Exibir → Congelar Painéis, escolha \"Congelar Linha Superior\" (o caso mais comum), \"Congelar Primeira Coluna\", ou clique numa célula e congele tudo acima e à esquerda dela.",
     "pontos": [
      [
       "onde fica",
       "guia Exibir → Congelar Painéis"
      ],
      [
       "Congelar Linha Superior",
       "cabeçalho fixo ao rolar (o mais usado)"
      ],
      [
       "Congelar Primeira Coluna",
       "coluna A fixa ao rolar para o lado"
      ],
      [
       "célula B2 congelada",
       "prende a linha 1 E a coluna A juntas"
      ]
     ],
     "mostrar_planilha": false,
     "ribbon": {
      "guia": "Exibir",
      "grupos": [
       {
        "nome": "Zoom",
        "botoes": [
         {
          "icone": "zoom",
          "rotulo": "Zoom"
         },
         {
          "icone": "cem",
          "rotulo": "100%"
         }
        ]
       },
       {
        "nome": "Janela",
        "botoes": [
         {
          "icone": "janela",
          "rotulo": "Nova Janela"
         },
         {
          "icone": "organizar",
          "rotulo": "Organizar Tudo"
         },
         {
          "icone": "congelar",
          "rotulo": "Congelar Painéis",
          "alvo": true,
          "menu": true
         }
        ]
       }
      ]
     }
    },
    "planilha": {
     "linhas": [
      [
       "Código",
       "Cliente",
       "Valor"
      ],
      [
       "001",
       "Mercado Silva",
       1200
      ],
      [
       "002",
       "Padaria Central",
       890
      ],
      [
       "003",
       "Auto Peças JR",
       4560
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Você rola uma lista de 800 clientes e esquece o que cada coluna significa. Qual recurso resolve?",
      "opcoes": [
       "Congelar a linha superior",
       "Aumentar o zoom",
       "Filtro",
       "Mesclar o cabeçalho"
      ],
      "resposta": "Congelar a linha superior",
      "explicacao": "O cabeçalho fica preso no topo, visível em qualquer ponto da rolagem.",
      "mostrar_planilha": false
     },
     {
      "tipo": "clicar_ribbon",
      "pergunta": "Toque onde fica o CONGELAR PAINÉIS:",
      "ribbon": {
       "guia": "Exibir",
       "grupos": [
        {
         "nome": "Zoom",
         "botoes": [
          {
           "icone": "zoom",
           "rotulo": "Zoom"
          },
          {
           "icone": "cem",
           "rotulo": "100%"
          }
         ]
        },
        {
         "nome": "Janela",
         "botoes": [
          {
           "icone": "janela",
           "rotulo": "Nova Janela"
          },
          {
           "icone": "organizar",
           "rotulo": "Organizar Tudo"
          },
          {
           "icone": "congelar",
           "rotulo": "Congelar Painéis",
           "menu": true
          }
         ]
        }
       ]
      },
      "alvo": "Congelar Painéis",
      "explicacao": "Guia Exibir, grupo Janela. O floco de neve congela linhas e colunas na tela."
     },
     {
      "tipo": "escolha",
      "pergunta": "Em qual guia fica o Congelar Painéis?",
      "opcoes": [
       "Exibir",
       "Dados",
       "Página Inicial",
       "Fórmulas"
      ],
      "resposta": "Exibir",
      "explicacao": "Exibir → Congelar Painéis. Faz sentido: é um recurso de VISUALIZAÇÃO.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Para manter fixas a linha 1 E a coluna A ao mesmo tempo, em qual célula você clica antes de congelar?",
      "opcoes": [
       "B2",
       "A1",
       "A2",
       "B1"
      ],
      "resposta": "B2",
      "explicacao": "O congelamento prende tudo ACIMA e à ESQUERDA da célula ativa. B2 prende a linha 1 e a coluna A.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Congelar painéis altera os dados da planilha.",
      "resposta": false,
      "explicacao": "É só visual — nada muda nos dados, nas fórmulas ou na impressão."
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene os passos para deixar o cabeçalho fixo:",
      "passos": [
       "Abrir a guia Exibir",
       "Clicar em Congelar Painéis",
       "Escolher Congelar Linha Superior",
       "Rolar para baixo e conferir o cabeçalho fixo"
      ],
      "explicacao": "Quatro cliques que salvam horas de rolagem confusa.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t1-m5-l4",
    "titulo": "Localizar e substituir",
    "teoria": {
     "eyebrow": "Novo recurso",
     "titulo": "Ctrl+L e Ctrl+U",
     "intro": "Para achar algo numa planilha grande: Ctrl+L abre o LOCALIZAR (digite e o Excel pula até a ocorrência). Para trocar em massa: Ctrl+U abre o SUBSTITUIR — trocar \"S. Paulo\" por \"São Paulo\" em 300 células leva 2 segundos com \"Substituir Tudo\". Atenção à pegadinha do PT-BR de novo: Ctrl+L é Localizar (no Excel em inglês, Ctrl+F). E cuidado com o Substituir Tudo: ele troca TODAS as ocorrências, até as que você não viu.",
     "pontos": [
      [
       "Ctrl+L",
       "Localizar"
      ],
      [
       "Ctrl+U",
       "Substituir"
      ],
      [
       "Substituir Tudo",
       "troca em massa — poderoso e perigoso"
      ],
      [
       "dica de segurança",
       "use Localizar antes, para ver O QUE será trocado"
      ]
     ],
     "mostrar_planilha": false,
     "ribbon": {
      "guia": "Página Inicial",
      "grupos": [
       {
        "nome": "Estilos",
        "botoes": [
         {
          "icone": "pincel",
          "rotulo": "Formatação Condicional",
          "menu": true
         },
         {
          "icone": "tabela",
          "rotulo": "Formatar como Tabela",
          "menu": true
         }
        ]
       },
       {
        "nome": "Edição",
        "botoes": [
         {
          "icone": "soma",
          "rotulo": "AutoSoma",
          "menu": true
         },
         {
          "icone": "az",
          "rotulo": "Classificar e Filtrar",
          "menu": true
         },
         {
          "icone": "buscar",
          "rotulo": "Localizar e Selecionar",
          "alvo": true,
          "menu": true
         }
        ]
       }
      ]
     }
    },
    "planilha": {
     "linhas": [
      [
       "Cliente",
       "Cidade"
      ],
      [
       "Mercado Silva",
       "S. Paulo"
      ],
      [
       "Padaria Central",
       "Campinas"
      ],
      [
       "Auto Peças JR",
       "S. Paulo"
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada atalho (Excel em português) à sua função:",
      "pares": {
       "Ctrl+L": "Localizar",
       "Ctrl+U": "Substituir",
       "Ctrl+Shift+L": "Filtro",
       "Ctrl+B": "Salvar"
      },
      "explicacao": "Os atalhos do PT-BR: L de Localizar, U de sUbstituir. Decorou esses quatro, ganhou o dia."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você precisa corrigir \"S. Paulo\" para \"São Paulo\" em 300 células. Qual o caminho mais rápido?",
      "opcoes": [
       "Ctrl+U e Substituir Tudo",
       "Corrigir uma por uma com F2",
       "Apagar a coluna e redigitar",
       "Classificar e corrigir em bloco"
      ],
      "resposta": "Ctrl+U e Substituir Tudo",
      "explicacao": "Localizar \"S. Paulo\", substituir por \"São Paulo\", Substituir Tudo. Trezentas correções em um clique.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o risco do botão \"Substituir Tudo\"?",
      "opcoes": [
       "Trocar ocorrências que você não pretendia, em outras colunas",
       "Apagar a planilha",
       "Travar o Excel",
       "Nenhum, é sempre seguro"
      ],
      "resposta": "Trocar ocorrências que você não pretendia, em outras colunas",
      "explicacao": "Substituir \"JR\" por \"Júnior\" também mudaria um produto \"JR-200\" para \"Júnior-200\". Localize antes, substitua depois.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "No Excel em português, Ctrl+F abre o Localizar.",
      "resposta": false,
      "explicacao": "No PT-BR o Localizar é Ctrl+L. O Ctrl+F é hábito de navegador e do Word — aqui ele não faz nada. Shift+F5 também abre."
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene o fluxo SEGURO para uma substituição em massa:",
      "passos": [
       "Pressionar Ctrl+L e localizar o texto para ver as ocorrências",
       "Conferir se todas devem mesmo ser trocadas",
       "Pressionar Ctrl+U e preencher o texto novo",
       "Clicar em Substituir Tudo e conferir o resultado"
      ],
      "explicacao": "Ver antes de trocar. Se algo sair errado, Ctrl+Z desfaz a substituição inteira.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Após substituir \"S. Paulo\" por \"São Paulo\" nesta planilha, quantas células foram alteradas?",
      "opcoes": [
       "2",
       "1",
       "3",
       "4"
      ],
      "resposta": "2",
      "explicacao": "Mercado Silva e Auto Peças JR estavam com \"S. Paulo\". Campinas ficou intacta.",
      "mostrar_planilha": true
     }
    ]
   }
  ]
 },
 {
  "id": "t2-m6",
  "trilha": 2,
  "titulo": "Lógica: a função SE",
  "descricao": "Ensine a planilha a tomar decisões sozinha.",
  "licoes": [
   {
    "id": "t2-m6-l1",
    "titulo": "SE: a planilha que decide",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "SE",
     "intro": "A função SE faz uma pergunta e responde diferente conforme a resposta: =SE(teste; valor_se_verdadeiro; valor_se_falso). Exemplo: =SE(B2>=7;\"Aprovado\";\"Reprovado\") — se a nota em B2 for 7 ou mais, escreve Aprovado; senão, Reprovado. Os textos SEMPRE entre aspas duplas; números e referências, sem aspas.",
     "sintaxe": "=SE(teste; valor_se_verdadeiro; valor_se_falso)",
     "pontos": [
      [
       "teste",
       "a pergunta (ex: B2>=7)"
      ],
      [
       "2º argumento",
       "resposta quando o teste é VERDADEIRO"
      ],
      [
       "3º argumento",
       "resposta quando o teste é FALSO"
      ],
      [
       "aspas",
       "obrigatórias em textos: \"Aprovado\""
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Aluno",
       "Nota",
       "Situação"
      ],
      [
       "Ana",
       8.5,
       ""
      ],
      [
       "Bruno",
       5.0,
       ""
      ],
      [
       "Carla",
       7.0,
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada parte da função SE ao seu papel:",
      "pares": {
       "B2>=7": "O teste (a pergunta)",
       "\"Aprovado\"": "Resposta se verdadeiro",
       "\"Reprovado\"": "Resposta se falso",
       "aspas duplas": "Envolvem textos na fórmula"
      },
      "explicacao": "Pergunta, resposta do sim, resposta do não — nessa ordem, separadas por ponto e vírgula."
     },
     {
      "tipo": "escolha",
      "pergunta": "Com a nota do Bruno (5.0), o que retorna =SE(B3>=7;\"Aprovado\";\"Reprovado\")?",
      "opcoes": [
       "Reprovado",
       "Aprovado",
       "5.0",
       "VERDADEIRO"
      ],
      "resposta": "Reprovado",
      "explicacao": "5.0 >= 7 é FALSO, então a função devolve o 3º argumento: Reprovado.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E com a nota da Carla (7.0)?",
      "opcoes": [
       "Aprovado",
       "Reprovado",
       "Empate",
       "#VALOR!"
      ],
      "resposta": "Aprovado",
      "explicacao": "7.0 >= 7 é VERDADEIRO — o \"maior OU IGUAL\" inclui o 7 exato.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula da situação da Ana (nota em B2, aprovado com 7 ou mais):",
      "molde": "=SE(___;___;___)",
      "banco": [
       "B2>=7",
       "\"Aprovado\"",
       "\"Reprovado\"",
       "B2<=7",
       "Aprovado"
      ],
      "resposta": [
       "B2>=7",
       "\"Aprovado\"",
       "\"Reprovado\""
      ],
      "explicacao": "Teste primeiro, depois o sim, depois o não. \"Aprovado\" sem aspas causaria #NOME?.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Toque no erro desta fórmula:",
      "tokens": [
       "=SE(",
       "B2>=7",
       ";",
       "Aprovado",
       ";",
       "\"Reprovado\"",
       ")"
      ],
      "indice_errado": 3,
      "explicacao": "Texto sem aspas! O Excel acha que Aprovado é um nome de intervalo e devolve #NOME?. Correto: \"Aprovado\".",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "No teste do SE, números e referências de célula NÃO levam aspas — só textos levam.",
      "resposta": true,
      "explicacao": "=SE(B2>=7;...) sem aspas no teste. \"7\" entre aspas viraria texto e quebraria a comparação."
     }
    ]
   },
   {
    "id": "t2-m6-l2",
    "titulo": "Operadores de comparação",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "As 6 perguntas possíveis",
     "intro": "O teste do SE usa operadores de comparação: = (igual), <> (diferente), > (maior), < (menor), >= (maior ou igual) e <= (menor ou igual). O mais traiçoeiro é o <> (diferente): parece estranho, mas é só um < e um > juntos. E cuidado com a diferença entre > e >=: no controle de estoque, \"acima de 10\" (>10) não inclui o 10; \"a partir de 10\" (>=10) inclui.",
     "pontos": [
      [
       "=",
       "igual a"
      ],
      [
       "<>",
       "diferente de"
      ],
      [
       ">= e <=",
       "maior/menor OU IGUAL — incluem o limite"
      ],
      [
       "> e <",
       "estritos — NÃO incluem o limite"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Estoque"
      ],
      [
       "Parafuso",
       10
      ],
      [
       "Porca",
       3
      ],
      [
       "Arruela",
       25
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada operador ao seu significado:",
      "pares": {
       "<>": "Diferente de",
       ">=": "Maior ou igual",
       "<=": "Menor ou igual",
       "=": "Igual a"
      },
      "explicacao": "O <> é a dupla \"menor-maior\": tudo que não é igual."
     },
     {
      "tipo": "escolha",
      "pergunta": "O Parafuso tem estoque 10. O teste B2>10 dá:",
      "opcoes": [
       "FALSO",
       "VERDADEIRO",
       "10",
       "Erro"
      ],
      "resposta": "FALSO",
      "explicacao": "\"Maior que 10\" é estrito: 10 não é maior que 10. Para incluir o 10, use >=10.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Você quer marcar \"REPOR\" quando o estoque for MENOR OU IGUAL a 5. Qual teste usar?",
      "opcoes": [
       "B2<=5",
       "B2<5",
       "B2=5",
       "B2>=5"
      ],
      "resposta": "B2<=5",
      "explicacao": "\"Menor ou igual\" inclui o próprio 5. Com B2<5, um estoque de exatamente 5 escaparia do alerta.",
      "mostrar_planilha": true
     },
     {
      "tipo": "digitar",
      "pergunta": "Escreva o operador que significa \"{significado}\":",
      "variantes": [
       {
        "significado": "diferente de",
        "resposta": "<>",
        "aceitar": [
         "><"
        ]
       },
       {
        "significado": "maior ou igual",
        "resposta": ">=",
        "aceitar": [
         "=>"
        ]
       },
       {
        "significado": "menor ou igual",
        "resposta": "<=",
        "aceitar": [
         "=<"
        ]
       }
      ],
      "explicacao": "No Excel a ordem oficial é <>, >= e <= — mas ele aceita algumas variações."
     },
     {
      "tipo": "escolha",
      "pergunta": "=SE(B3<>0;\"Tem estoque\";\"Zerado\") com a Porca (estoque 3) retorna:",
      "opcoes": [
       "Tem estoque",
       "Zerado",
       "3",
       "FALSO"
      ],
      "resposta": "Tem estoque",
      "explicacao": "3 é diferente de 0, teste VERDADEIRO → 2º argumento.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t2-m6-l3",
    "titulo": "E e OU: combinando condições",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "E / OU",
     "intro": "Para testar duas coisas ao mesmo tempo, combine funções dentro do SE: =E(teste1;teste2) só é VERDADEIRO se TODOS os testes passarem; =OU(teste1;teste2) é VERDADEIRO se PELO MENOS UM passar. Exemplo de promoção: =SE(E(B2>=7;C2>=75%);\"Aprovado\";\"Reprovado\") — precisa de nota E frequência. Memorize: E é exigente, OU é generoso.",
     "sintaxe": "=SE(E(teste1;teste2); sim; não)",
     "pontos": [
      [
       "E",
       "todos os testes precisam ser verdadeiros"
      ],
      [
       "OU",
       "basta um teste ser verdadeiro"
      ],
      [
       "onde entram",
       "no lugar do teste, dentro do SE"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Aluno",
       "Nota",
       "Frequência"
      ],
      [
       "Ana",
       8.5,
       0.9
      ],
      [
       "Bruno",
       8.0,
       0.6
      ],
      [
       "Carla",
       6.0,
       0.95
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "=E(VERDADEIRO;FALSO) retorna:",
      "opcoes": [
       "FALSO",
       "VERDADEIRO",
       "Depende",
       "Erro"
      ],
      "resposta": "FALSO",
      "explicacao": "O E exige TODOS verdadeiros. Um FALSO derruba tudo.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "E =OU(VERDADEIRO;FALSO)?",
      "opcoes": [
       "VERDADEIRO",
       "FALSO",
       "Depende",
       "Erro"
      ],
      "resposta": "VERDADEIRO",
      "explicacao": "O OU se contenta com um verdadeiro que seja.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Aprovação exige nota >=7 E frequência >=75%. O Bruno (nota 8.0, freq. 60%) fica:",
      "opcoes": [
       "Reprovado — a frequência derruba o E",
       "Aprovado — a nota compensa",
       "Em recuperação",
       "Depende do professor"
      ],
      "resposta": "Reprovado — a frequência derruba o E",
      "explicacao": "No E, não existe compensar: 0,6 < 0,75 torna o conjunto FALSO.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte o teste: aprovado quem tem nota >=7 E frequência >=75% (Ana, linha 2):",
      "molde": "=SE(___(___;___);\"Aprovado\";\"Reprovado\")",
      "banco": [
       "E",
       "B2>=7",
       "C2>=0,75",
       "OU",
       "B2>=0,75"
      ],
      "resposta": [
       "E",
       "B2>=7",
       "C2>=0,75"
      ],
      "explicacao": "E(nota;frequência): as duas condições dentro do E, o E dentro do SE.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Frete grátis para quem é cliente VIP OU compra acima de R$ 200. Qual estrutura?",
      "opcoes": [
       "=SE(OU(vip;compra>200);\"Grátis\";\"Cobra\")",
       "=SE(E(vip;compra>200);\"Grátis\";\"Cobra\")",
       "=OU(SE(vip);compra>200)",
       "=SE(vip+compra>200)"
      ],
      "resposta": "=SE(OU(vip;compra>200);\"Grátis\";\"Cobra\")",
      "explicacao": "\"Um ou outro já basta\" = OU. Com E, só VIP que também gastasse 200 ganharia o frete.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "=E(B2>=7;C2>=0,75) pode receber mais de dois testes, como =E(t1;t2;t3;t4).",
      "resposta": true,
      "explicacao": "E e OU aceitam até 255 condições — todas separadas por ponto e vírgula."
     }
    ]
   },
   {
    "id": "t2-m6-l4",
    "titulo": "SE aninhado e SES",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Mais de duas respostas",
     "intro": "E quando não é só sim/não? Para faixas (ótimo/bom/ruim), há dois caminhos. O clássico: SE dentro de SE — =SE(B2>=9;\"Ótimo\";SE(B2>=7;\"Bom\";\"Ruim\")) — o segundo SE ocupa o lugar do \"senão\". E o moderno: =SES(B2>=9;\"Ótimo\";B2>=7;\"Bom\";VERDADEIRO;\"Ruim\") — pares de teste;resposta em sequência. Regra vital nos dois: teste as faixas da MAIOR para a menor, senão a primeira condição captura tudo.",
     "sintaxe": "=SES(teste1;valor1; teste2;valor2; ...)",
     "pontos": [
      [
       "SE aninhado",
       "um SE dentro do outro, no lugar do senão"
      ],
      [
       "SES",
       "pares teste;resposta — mais legível"
      ],
      [
       "ordem",
       "da faixa MAIOR para a menor"
      ],
      [
       "VERDADEIRO no fim",
       "o \"todo o resto\" do SES"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Vendedor",
       "Vendas",
       "Classe"
      ],
      [
       "Paula",
       12000,
       ""
      ],
      [
       "Diego",
       8000,
       ""
      ],
      [
       "Caio",
       4000,
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Em =SE(B2>=9;\"Ótimo\";SE(B2>=7;\"Bom\";\"Ruim\")), quando o segundo SE é avaliado?",
      "opcoes": [
       "Só quando o primeiro teste é FALSO",
       "Sempre",
       "Só quando o primeiro é VERDADEIRO",
       "Nunca"
      ],
      "resposta": "Só quando o primeiro teste é FALSO",
      "explicacao": "O segundo SE mora no lugar do \"senão\" do primeiro — é o plano B.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Classes: >=10000 é \"A\", >=6000 é \"B\", o resto \"C\". Diego vendeu 8000. Com =SES(B3>=10000;\"A\";B3>=6000;\"B\";VERDADEIRO;\"C\"), ele é:",
      "opcoes": [
       "B",
       "A",
       "C",
       "#N/D"
      ],
      "resposta": "B",
      "explicacao": "8000 não passa no primeiro teste (>=10000), passa no segundo (>=6000) → B.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta fórmula deveria dar A (>=10000), B (>=6000) e C. Toque no erro de LÓGICA:",
      "tokens": [
       "=SES(",
       "B2>=6000",
       ";\"B\";",
       "B2>=10000",
       ";\"A\";",
       "VERDADEIRO",
       ";\"C\")"
      ],
      "indice_errado": 1,
      "explicacao": "Testando >=6000 PRIMEIRO, quem vendeu 12000 também passa nesse teste e vira B — o A nunca acontece. Sempre da maior faixa para a menor.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ordenar",
      "pergunta": "Coloque os testes do SES na ordem correta para faixas A (>=10000), B (>=6000), C (resto):",
      "passos": [
       "B2>=10000 → \"A\"",
       "B2>=6000 → \"B\"",
       "VERDADEIRO → \"C\""
      ],
      "explicacao": "Maior primeiro, e o VERDADEIRO no final captura todo o resto.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Para 3 faixas de resposta, o SE aninhado e o SES chegam ao mesmo resultado — o SES é só mais fácil de ler.",
      "resposta": true,
      "explicacao": "Mesma lógica, sintaxes diferentes. Com muitas faixas, o SES evita a floresta de parênteses."
     }
    ]
   },
   {
    "id": "t2-m6-l5",
    "titulo": "Caso prático: alerta de estoque",
    "teoria": {
     "eyebrow": "Revisão aplicada",
     "titulo": "Juntando a lógica",
     "intro": "Cenário real de loja: criar uma coluna de status que avisa \"COMPRAR\" quando o estoque está no mínimo ou abaixo, \"Atenção\" quando está até 50% acima do mínimo, e \"OK\" no resto. Cada produto tem seu próprio mínimo na coluna C — então o teste compara duas células da mesma linha (B2<=C2), não um número fixo. É o padrão de alerta que você vai reusar em cobranças, prazos e metas.",
     "pontos": [
      [
       "comparar colunas",
       "B2<=C2: estoque contra o mínimo DA LINHA"
      ],
      [
       "faixas",
       "SES da situação mais crítica para a mais tranquila"
      ],
      [
       "arrastar",
       "referências relativas ajustam linha a linha"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Estoque",
       "Mínimo",
       "Status"
      ],
      [
       "Parafuso",
       8,
       10,
       ""
      ],
      [
       "Porca",
       14,
       10,
       ""
      ],
      [
       "Arruela",
       30,
       12,
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "tokens",
      "pergunta": "Monte o primeiro teste: \"COMPRAR\" quando o estoque está no mínimo ou abaixo (linha 2):",
      "molde": "=SE(___;___;\"...\")",
      "banco": [
       "B2<=C2",
       "\"COMPRAR\"",
       "B2>=C2",
       "\"OK\"",
       "B2<=10"
      ],
      "resposta": [
       "B2<=C2",
       "\"COMPRAR\""
      ],
      "explicacao": "B2<=C2 compara com o mínimo daquela linha. B2<=10 fixaria o mínimo e quebraria nos outros produtos.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Com estoque 8 e mínimo 10, o Parafuso recebe qual status?",
      "opcoes": [
       "COMPRAR",
       "Atenção",
       "OK",
       "Erro"
      ],
      "resposta": "COMPRAR",
      "explicacao": "8 <= 10: o teste mais crítico já captura.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "\"Atenção\" = estoque até 50% acima do mínimo. Qual teste expressa isso (após o teste do COMPRAR)?",
      "opcoes": [
       "B2<=C2*1,5",
       "B2<=C2+50",
       "B2<=1,5",
       "B2>=C2*0,5"
      ],
      "resposta": "B2<=C2*1,5",
      "explicacao": "50% acima do mínimo = mínimo × 1,5. A Porca (14) com mínimo 10: 14 <= 15 → Atenção.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E a Arruela (estoque 30, mínimo 12)?",
      "opcoes": [
       "OK",
       "Atenção",
       "COMPRAR",
       "#VALOR!"
      ],
      "resposta": "OK",
      "explicacao": "30 > 12 e 30 > 18 (12×1,5): escapa dos dois alertas, cai no \"resto\" → OK.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene o raciocínio completo do status:",
      "passos": [
       "Testar o caso crítico: B2<=C2 → \"COMPRAR\"",
       "Testar a faixa intermediária: B2<=C2*1,5 → \"Atenção\"",
       "Todo o resto → \"OK\"",
       "Arrastar a fórmula para as demais linhas"
      ],
      "explicacao": "Do mais crítico ao mais tranquilo, e a alça replica. Uma fórmula, alerta automático para o estoque inteiro.",
      "mostrar_planilha": true
     }
    ]
   }
  ]
 },
 {
  "id": "t2-m7",
  "trilha": 2,
  "titulo": "Somas e contagens condicionais",
  "descricao": "Some e conte só o que interessa — o coração dos relatórios.",
  "licoes": [
   {
    "id": "t2-m7-l1",
    "titulo": "CONT.SE",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "CONT.SE",
     "intro": "=CONT.SE(intervalo; critério) conta quantas células atendem a uma condição. O critério pode ser um valor exato (\"Sul\"), uma comparação entre aspas (\">500\") ou uma referência de célula. Perguntas que ela responde na hora: quantos pedidos da região Sul? Quantas vendas acima de 500? Quantos alunos aprovados?",
     "sintaxe": "=CONT.SE(intervalo; critério)",
     "pontos": [
      [
       "intervalo",
       "onde procurar"
      ],
      [
       "critério exato",
       "\"Sul\" — conta as células iguais"
      ],
      [
       "critério comparativo",
       "\">500\" — a comparação vai ENTRE ASPAS"
      ],
      [
       "diferença p/ CONT.NÚM",
       "CONT.NÚM conta tudo que é número; CONT.SE conta o que passa no critério"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Pedido",
       "Região",
       "Valor"
      ],
      [
       "PD-01",
       "Sul",
       800
      ],
      [
       "PD-02",
       "Norte",
       300
      ],
      [
       "PD-03",
       "Sul",
       450
      ],
      [
       "PD-04",
       "Sul",
       900
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =CONT.SE(B2:B5;\"Sul\")?",
      "opcoes": [
       "3",
       "2",
       "2150",
       "1"
      ],
      "resposta": "3",
      "explicacao": "PD-01, PD-03 e PD-04 são da região Sul: 3 células atendem.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E =CONT.SE(C2:C5;\">500\")?",
      "opcoes": [
       "2",
       "3",
       "1700",
       "1"
      ],
      "resposta": "2",
      "explicacao": "800 e 900 são maiores que 500. O 450 e o 300 ficam de fora. Repare: conta OCORRÊNCIAS, não soma valores.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta fórmula deveria contar valores acima de 500. Toque no erro:",
      "tokens": [
       "=CONT.SE(",
       "C2:C5",
       ";",
       ">500",
       ")"
      ],
      "indice_errado": 3,
      "explicacao": "Comparação no critério precisa de aspas: \">500\". Sem aspas, o Excel não entende e dá erro.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula que conta quantos pedidos são da região Norte:",
      "molde": "=CONT.SE(___;___)",
      "banco": [
       "B2:B5",
       "\"Norte\"",
       "C2:C5",
       "Norte",
       "\">Norte\""
      ],
      "resposta": [
       "B2:B5",
       "\"Norte\""
      ],
      "explicacao": "Intervalo das regiões + o texto entre aspas. Resultado: 1.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "=CONT.SE(B2:B5;\"sul\") com s minúsculo retorna 0, porque o critério diferencia maiúsculas.",
      "resposta": false,
      "explicacao": "CONT.SE NÃO diferencia maiúsculas de minúsculas: \"sul\", \"SUL\" e \"Sul\" contam igual.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t2-m7-l2",
    "titulo": "SOMASE",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "SOMASE",
     "intro": "=SOMASE(intervalo; critério; intervalo_soma) soma valores APENAS onde a condição bate. A pegadinha está nos intervalos: o 1º é onde você TESTA o critério, e o 3º é o que você SOMA. \"Quanto vendemos na região Sul?\" → testa a coluna Região, soma a coluna Valor: =SOMASE(B2:B5;\"Sul\";C2:C5). Se testar e somar a MESMA coluna (\"soma valores >500\"), o 3º argumento pode ser omitido.",
     "sintaxe": "=SOMASE(intervalo; critério; intervalo_soma)",
     "pontos": [
      [
       "1º intervalo",
       "onde o critério é testado"
      ],
      [
       "critério",
       "\"Sul\" ou \">500\", entre aspas"
      ],
      [
       "intervalo_soma",
       "o que é somado (pode omitir se for o mesmo)"
      ],
      [
       "regra de ouro",
       "os dois intervalos com o MESMO tamanho"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Pedido",
       "Região",
       "Valor"
      ],
      [
       "PD-01",
       "Sul",
       800
      ],
      [
       "PD-02",
       "Norte",
       300
      ],
      [
       "PD-03",
       "Sul",
       450
      ],
      [
       "PD-04",
       "Sul",
       900
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =SOMASE(B2:B5;\"Sul\";C2:C5)?",
      "opcoes": [
       "2150",
       "3",
       "2450",
       "1250"
      ],
      "resposta": "2150",
      "explicacao": "Soma os valores das linhas Sul: 800+450+900 = 2150. O Norte (300) fica fora.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada argumento do SOMASE ao seu papel:",
      "pares": {
       "B2:B5": "Onde testar o critério",
       "\"Sul\"": "O critério",
       "C2:C5": "O que somar",
       "ponto e vírgula": "Separa os argumentos"
      },
      "explicacao": "Testa numa coluna, soma na outra — as duas andam em pares, linha a linha."
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta fórmula deveria somar as vendas do Sul. Toque no erro:",
      "tokens": [
       "=SOMASE(",
       "C2:C5",
       ";",
       "\"Sul\"",
       ";",
       "B2:B5",
       ")"
      ],
      "indice_errado": 1,
      "explicacao": "Os intervalos estão trocados: está testando \"Sul\" na coluna de VALORES. Testa-se em B (Região) e soma-se em C (Valor).",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula: total vendido na região Norte:",
      "molde": "=SOMASE(___;___;___)",
      "banco": [
       "B2:B5",
       "\"Norte\"",
       "C2:C5",
       "A2:A5",
       "\"Sul\""
      ],
      "resposta": [
       "B2:B5",
       "\"Norte\"",
       "C2:C5"
      ],
      "explicacao": "Região, critério, valores. Resultado: 300.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Para somar só os valores ACIMA DE 500 (testando e somando a mesma coluna C), qual forma vale?",
      "opcoes": [
       "=SOMASE(C2:C5;\">500\")",
       "=SOMASE(\">500\";C2:C5)",
       "=SOMASE(C2:C5;500)",
       "=SOMA(C2:C5>500)"
      ],
      "resposta": "=SOMASE(C2:C5;\">500\")",
      "explicacao": "Testando e somando o mesmo intervalo, o 3º argumento é dispensável. Resultado: 800+900 = 1700.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "No SOMASE, o intervalo do teste e o intervalo da soma precisam ter o mesmo número de linhas.",
      "resposta": true,
      "explicacao": "Eles se emparelham linha a linha. Tamanhos diferentes = resultados errados silenciosos."
     }
    ]
   },
   {
    "id": "t2-m7-l3",
    "titulo": "MÉDIASE",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "MÉDIASE",
     "intro": "Mesma família, mesma lógica: =MÉDIASE(intervalo; critério; intervalo_média) calcula a MÉDIA apenas das linhas que atendem ao critério. \"Qual o ticket médio da região Sul?\" — testa Região, tira a média de Valor. Atenção especial: se NENHUMA linha atender ao critério, a MÉDIASE devolve o erro #DIV/0! (não dá pra dividir por zero linhas).",
     "sintaxe": "=MÉDIASE(intervalo; critério; intervalo_média)",
     "pontos": [
      [
       "estrutura",
       "idêntica ao SOMASE"
      ],
      [
       "retorno",
       "média, não soma"
      ],
      [
       "#DIV/0!",
       "quando nenhuma linha atende ao critério"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Pedido",
       "Região",
       "Valor"
      ],
      [
       "PD-01",
       "Sul",
       800
      ],
      [
       "PD-02",
       "Norte",
       300
      ],
      [
       "PD-03",
       "Sul",
       400
      ],
      [
       "PD-04",
       "Leste",
       500
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =MÉDIASE(B2:B5;\"Sul\";C2:C5)?",
      "opcoes": [
       "600",
       "1200",
       "500",
       "400"
      ],
      "resposta": "600",
      "explicacao": "Média das linhas Sul: (800+400) ÷ 2 = 600.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E =MÉDIASE(B2:B5;\"Oeste\";C2:C5)?",
      "opcoes": [
       "#DIV/0!",
       "0",
       "500",
       "Vazio"
      ],
      "resposta": "#DIV/0!",
      "explicacao": "Não há nenhuma linha \"Oeste\": média de zero elementos = divisão por zero.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada pergunta de negócio à função:",
      "pares": {
       "Quantos pedidos do Sul?": "CONT.SE",
       "Quanto o Sul faturou?": "SOMASE",
       "Qual o ticket médio do Sul?": "MÉDIASE",
       "Quanto faturamos no total?": "SOMA"
      },
      "explicacao": "Mesma tabela, quatro perguntas — cada função responde uma."
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula do ticket médio da região Norte:",
      "molde": "=MÉDIASE(___;___;___)",
      "banco": [
       "B2:B5",
       "\"Norte\"",
       "C2:C5",
       "\"Sul\"",
       "A2:A5"
      ],
      "resposta": [
       "B2:B5",
       "\"Norte\"",
       "C2:C5"
      ],
      "explicacao": "Só uma linha Norte (300) → média 300.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "SOMASE, CONT.SE e MÉDIASE aceitam critérios comparativos como \">=500\" — sempre entre aspas.",
      "resposta": true,
      "explicacao": "A família toda fala a mesma língua de critérios: texto exato, comparação entre aspas, ou referência de célula."
     }
    ]
   },
   {
    "id": "t2-m7-l4",
    "titulo": "SOMASES e CONT.SES",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "Vários critérios de uma vez",
     "intro": "E quando a pergunta tem duas condições — \"vendas do Sul ACIMA de 500\"? Entram as versões no plural. CUIDADO com a inversão que derruba todo mundo: no SOMASES, o intervalo da SOMA vem PRIMEIRO: =SOMASES(intervalo_soma; intervalo_crit1; crit1; intervalo_crit2; crit2; ...). É o contrário do SOMASE! Já o CONT.SES só empilha pares: =CONT.SES(int1;crit1;int2;crit2).",
     "sintaxe": "=SOMASES(intervalo_soma; int_crit1; crit1; int_crit2; crit2)",
     "pontos": [
      [
       "SOMASES",
       "a SOMA vem PRIMEIRO (inverso do SOMASE!)"
      ],
      [
       "CONT.SES",
       "pares intervalo;critério em sequência"
      ],
      [
       "lógica E",
       "todos os critérios precisam bater na mesma linha"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Pedido",
       "Região",
       "Valor"
      ],
      [
       "PD-01",
       "Sul",
       800
      ],
      [
       "PD-02",
       "Norte",
       300
      ],
      [
       "PD-03",
       "Sul",
       450
      ],
      [
       "PD-04",
       "Sul",
       900
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual a GRANDE diferença de ordem entre SOMASE e SOMASES?",
      "opcoes": [
       "No SOMASES, o intervalo da soma vem primeiro",
       "Não há diferença",
       "O SOMASES não usa aspas",
       "O SOMASE aceita mais critérios"
      ],
      "resposta": "No SOMASES, o intervalo da soma vem primeiro",
      "explicacao": "SOMASE: teste;critério;soma. SOMASES: SOMA;teste1;crit1;... — decorar isso evita horas de confusão.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =SOMASES(C2:C5;B2:B5;\"Sul\";C2:C5;\">500\")?",
      "opcoes": [
       "1700",
       "2150",
       "800",
       "900"
      ],
      "resposta": "1700",
      "explicacao": "Sul E acima de 500: 800 e 900 → 1700. O 450 é Sul mas não passa dos 500.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta SOMASES deveria somar vendas do Sul acima de 500. Toque no erro:",
      "tokens": [
       "=SOMASES(",
       "B2:B5",
       ";\"Sul\";",
       "C2:C5",
       ";\">500\";",
       "C2:C5",
       ")"
      ],
      "indice_errado": 1,
      "explicacao": "O PRIMEIRO argumento do SOMASES é o intervalo da SOMA (C2:C5). Aqui a estrutura está no formato do SOMASE — o erro clássico.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte: CONTAR pedidos do Sul acima de 500:",
      "molde": "=CONT.SES(___;___;___;___)",
      "banco": [
       "B2:B5",
       "\"Sul\"",
       "C2:C5",
       "\">500\"",
       "\"<500\""
      ],
      "resposta": [
       "B2:B5",
       "\"Sul\"",
       "C2:C5",
       "\">500\""
      ],
      "explicacao": "Pares: região;\"Sul\" + valor;\">500\". Resultado: 2 pedidos.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "No SOMASES, os critérios funcionam como OU: basta um bater para a linha entrar na soma.",
      "resposta": false,
      "explicacao": "É lógica E: a linha só entra se TODOS os critérios baterem nela."
     }
    ]
   },
   {
    "id": "t2-m7-l5",
    "titulo": "Caso prático: mini relatório de vendas",
    "teoria": {
     "eyebrow": "Revisão aplicada",
     "titulo": "O padrão BD → relatório",
     "intro": "Este é o padrão profissional que sustenta 90% dos relatórios: uma aba com a BASE DE DADOS (uma linha por venda) e outra com o RESUMO, onde cada célula é um SOMASE/CONT.SE apontando para a base. O truque da vez: em vez de escrever \"Sul\" dentro da fórmula, use a referência da célula do resumo onde \"Sul\" está escrito — =SOMASE(B:B;E2;C:C). Assim a MESMA fórmula, arrastada, calcula todas as regiões.",
     "pontos": [
      [
       "base de dados",
       "uma linha por registro, sem totais no meio"
      ],
      [
       "critério por referência",
       "=SOMASE(B:B;E2;C:C) — o critério mora numa célula"
      ],
      [
       "coluna inteira",
       "B:B pega a coluna toda — a base pode crescer"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Pedido",
       "Região",
       "Valor",
       "",
       "Região",
       "Total"
      ],
      [
       "PD-01",
       "Sul",
       800,
       "",
       "Sul",
       ""
      ],
      [
       "PD-02",
       "Norte",
       300,
       "",
       "Norte",
       ""
      ],
      [
       "PD-03",
       "Sul",
       450,
       "",
       "",
       ""
      ],
      [
       "PD-04",
       "Norte",
       550,
       "",
       "",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual a vantagem de =SOMASE(B:B;E2;C:C) em vez de =SOMASE(B:B;\"Sul\";C:C)?",
      "opcoes": [
       "Arrastando, a mesma fórmula calcula todas as regiões",
       "É mais rápida de calcular",
       "Evita o erro #N/D",
       "Nenhuma"
      ],
      "resposta": "Arrastando, a mesma fórmula calcula todas as regiões",
      "explicacao": "E2 (relativa) vira E3 ao arrastar: a fórmula pega \"Norte\" sozinha. Critério fixo no texto = uma fórmula por região, digitada à mão.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula do total da região que está em E2, pronta para arrastar:",
      "molde": "=SOMASE(___;___;___)",
      "banco": [
       "B:B",
       "E2",
       "C:C",
       "\"Sul\"",
       "$E$2"
      ],
      "resposta": [
       "B:B",
       "E2",
       "C:C"
      ],
      "explicacao": "E2 sem cifrão de propósito: queremos que vire E3 ao arrastar. Total do Sul: 1250.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o total da região Norte neste relatório?",
      "opcoes": [
       "850",
       "300",
       "550",
       "1250"
      ],
      "resposta": "850",
      "explicacao": "300 + 550 = 850.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Usar B:B (coluna inteira) faz a fórmula continuar certa quando novas vendas forem digitadas no fim da base.",
      "resposta": true,
      "explicacao": "É a escolha padrão para bases que crescem — o relatório se atualiza sozinho."
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene a construção do mini relatório:",
      "passos": [
       "Organizar a base: uma linha por venda, sem totais no meio",
       "Listar as regiões únicas na área de resumo",
       "Escrever =SOMASE(B:B;E2;C:C) na primeira linha do resumo",
       "Arrastar para as demais regiões e conferir os totais"
      ],
      "explicacao": "Base limpa → critérios listados → uma fórmula → arrastar. O esqueleto de todo relatório bom.",
      "mostrar_planilha": true
     }
    ]
   }
  ]
 },
 {
  "id": "t2-m8",
  "trilha": 2,
  "titulo": "Busca: PROCV e família",
  "descricao": "Cruze tabelas e encontre qualquer informação — a habilidade mais pedida em vagas.",
  "licoes": [
   {
    "id": "t2-m8-l1",
    "titulo": "PROCV",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "PROCV",
     "intro": "O PROCV procura um valor na PRIMEIRA coluna de uma tabela e retorna algo de outra coluna, na mesma linha: =PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; FALSO). Buscar o preço do código \"ME-03\": =PROCV(\"ME-03\";A2:C5;3;FALSO) — acha o código na coluna A e devolve a 3ª coluna da matriz. O FALSO exige correspondência EXATA — use-o em 99% dos casos.",
     "sintaxe": "=PROCV(valor_procurado; matriz_tabela; núm_índice; FALSO)",
     "pontos": [
      [
       "valor_procurado",
       "o que você quer encontrar"
      ],
      [
       "matriz_tabela",
       "a tabela — começando na coluna do valor procurado"
      ],
      [
       "núm_índice",
       "qual coluna DA MATRIZ retornar (1, 2, 3...)"
      ],
      [
       "FALSO",
       "correspondência exata — quase sempre"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Código",
       "Produto",
       "Preço"
      ],
      [
       "AR-01",
       "Armário",
       850
      ],
      [
       "ES-02",
       "Estante",
       420
      ],
      [
       "ME-03",
       "Mesa",
       610
      ],
      [
       "CA-04",
       "Cadeira",
       180
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada argumento do PROCV ao seu significado:",
      "pares": {
       "valor_procurado": "O que encontrar",
       "matriz_tabela": "Onde procurar",
       "núm_índice": "Qual coluna retornar",
       "FALSO": "Correspondência exata"
      },
      "explicacao": "Quatro argumentos, sempre nessa ordem, separados por ponto e vírgula."
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =PROCV(\"ES-02\";A2:C5;3;FALSO)?",
      "opcoes": [
       "420",
       "Estante",
       "850",
       "#N/D"
      ],
      "resposta": "420",
      "explicacao": "Acha ES-02 na coluna A e retorna a 3ª coluna da matriz: o preço.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E para retornar o NOME do produto em vez do preço, o núm_índice seria:",
      "opcoes": [
       "2",
       "3",
       "1",
       "B"
      ],
      "resposta": "2",
      "explicacao": "Na matriz A2:C5: coluna 1 = Código, 2 = Produto, 3 = Preço. O índice conta DENTRO da matriz, não as letras da planilha.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula que busca o preço do código \"CA-04\":",
      "molde": "=PROCV(___;___;___;___)",
      "banco": [
       "\"CA-04\"",
       "A2:C5",
       "3",
       "FALSO",
       "2",
       "VERDADEIRO"
      ],
      "resposta": [
       "\"CA-04\"",
       "A2:C5",
       "3",
       "FALSO"
      ],
      "explicacao": "Código, matriz inteira, coluna 3 (Preço), FALSO. Resultado: 180.",
      "mostrar_planilha": true
     },
     {
      "tipo": "digitar",
      "pergunta": "Na matriz A2:C5, qual núm_índice retorna o {campo}?",
      "variantes": [
       {
        "campo": "Preço",
        "resposta": "3",
        "aceitar": []
       },
       {
        "campo": "Produto",
        "resposta": "2",
        "aceitar": []
       },
       {
        "campo": "Código (a própria 1ª coluna)",
        "resposta": "1",
        "aceitar": []
       }
      ],
      "explicacao": "O índice é a posição da coluna dentro da matriz: A=1, B=2, C=3 nesta matriz.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "O PROCV consegue procurar o valor em QUALQUER coluna da matriz, não só na primeira.",
      "resposta": false,
      "explicacao": "Limitação clássica: o PROCV só procura na PRIMEIRA coluna da matriz. Para buscar em outras, ÍNDICE+CORRESP ou PROCX (lições adiante)."
     }
    ]
   },
   {
    "id": "t2-m8-l2",
    "titulo": "Os erros clássicos do PROCV",
    "teoria": {
     "eyebrow": "Diagnóstico",
     "titulo": "Por que meu PROCV não funciona?",
     "intro": "Os 4 tropeços que travam todo mundo: (1) #N/D — o valor não foi encontrado: erro de digitação, espaço extra escondido, ou ele realmente não existe; (2) matriz começando na coluna errada — o valor procurado PRECISA estar na 1ª coluna da matriz; (3) esquecer o FALSO — sem ele, o Excel usa correspondência aproximada e pode devolver o valor ERRADO sem avisar; (4) núm_índice maior que a matriz → #REF!.",
     "pontos": [
      [
       "#N/D",
       "não encontrou: digitação, espaço extra ou não existe"
      ],
      [
       "matriz errada",
       "a 1ª coluna da matriz deve conter o valor procurado"
      ],
      [
       "sem FALSO",
       "resultado aproximado ERRADO, sem aviso — o pior erro"
      ],
      [
       "#REF!",
       "núm_índice maior que o nº de colunas da matriz"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Código",
       "Produto",
       "Preço"
      ],
      [
       "AR-01",
       "Armário",
       850
      ],
      [
       "ES-02",
       "Estante",
       420
      ],
      [
       "ME-03",
       "Mesa",
       610
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "=PROCV(\"XX-99\";A2:C4;3;FALSO) retorna:",
      "opcoes": [
       "#N/D",
       "0",
       "850",
       "Vazio"
      ],
      "resposta": "#N/D",
      "explicacao": "XX-99 não existe na coluna A. #N/D = Não Disponível, o \"não achei\" do Excel.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "O código está na coluna A, mas esta fórmula dá #N/D. Toque no erro:",
      "tokens": [
       "=PROCV(",
       "\"ME-03\"",
       ";",
       "B2:C4",
       ";",
       "2",
       ";FALSO)"
      ],
      "indice_errado": 3,
      "explicacao": "A matriz B2:C4 começa na coluna Produto — o PROCV procura \"ME-03\" entre os NOMES e não acha. A matriz deve começar na coluna do código: A2:C4.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o risco de omitir o FALSO (ou usar VERDADEIRO) numa busca por código?",
      "opcoes": [
       "Retornar um valor aproximado ERRADO, sem nenhum aviso",
       "A fórmula não calcula",
       "Sempre dá #N/D",
       "Nenhum, é opcional"
      ],
      "resposta": "Retornar um valor aproximado ERRADO, sem nenhum aviso",
      "explicacao": "A correspondência aproximada devolve \"o mais próximo\" — o preço de OUTRO produto pode aparecer, e ninguém percebe. Erro silencioso, o pior tipo.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "=PROCV(\"AR-01\";A2:C4;5;FALSO) retorna:",
      "opcoes": [
       "#REF!",
       "#N/D",
       "850",
       "5"
      ],
      "resposta": "#REF!",
      "explicacao": "A matriz tem 3 colunas; pedir a 5ª é referência inválida → #REF!.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue o sintoma ao diagnóstico:",
      "pares": {
       "#N/D": "Valor não encontrado na 1ª coluna",
       "#REF!": "núm_índice maior que a matriz",
       "Valor errado sem aviso": "Faltou o FALSO",
       "#NOME?": "Nome da função digitado errado"
      },
      "explicacao": "Ler o erro certo economiza metade do tempo de conserto."
     },
     {
      "tipo": "vf",
      "afirmacao": "Um espaço invisível no fim do código (\"ME-03 \") é suficiente para o PROCV devolver #N/D.",
      "resposta": true,
      "explicacao": "Para o PROCV com FALSO, \"ME-03\" e \"ME-03 \" são valores diferentes. A função ARRUMAR (módulo de texto) resolve isso."
     }
    ]
   },
   {
    "id": "t2-m8-l3",
    "titulo": "PROCH: a busca deitada",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "PROCH",
     "intro": "O irmão horizontal: enquanto o PROCV procura na primeira COLUNA e desce, o PROCH procura na primeira LINHA e anda para o lado: =PROCH(valor; matriz; núm_índice_LINHA; FALSO). Útil quando a tabela está \"deitada\" — meses nas colunas, indicadores nas linhas. V de Vertical, H de Horizontal: o nome já diz onde cada um procura.",
     "sintaxe": "=PROCH(valor_procurado; matriz; núm_índice_linha; FALSO)",
     "pontos": [
      [
       "PROCV",
       "procura na 1ª COLUNA, retorna coluna N"
      ],
      [
       "PROCH",
       "procura na 1ª LINHA, retorna linha N"
      ],
      [
       "quando usar",
       "tabelas com categorias nas colunas (meses, filiais)"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Indicador",
       "Jan",
       "Fev",
       "Mar"
      ],
      [
       "Vendas",
       4200,
       3800,
       5100
      ],
      [
       "Despesas",
       2000,
       2100,
       2400
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Nesta tabela deitada (meses nas colunas), qual função busca as vendas de Fevereiro?",
      "opcoes": [
       "PROCH",
       "PROCV",
       "SOMASE",
       "CONT.SE"
      ],
      "resposta": "PROCH",
      "explicacao": "Os rótulos de busca (meses) estão na primeira LINHA → busca Horizontal.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =PROCH(\"Fev\";A1:D3;2;FALSO)?",
      "opcoes": [
       "3800",
       "2100",
       "4200",
       "Fev"
      ],
      "resposta": "3800",
      "explicacao": "Acha \"Fev\" na linha 1 e desce até a 2ª linha da matriz (Vendas): 3800.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E para pegar as DESPESAS de Fevereiro, o núm_índice_linha seria:",
      "opcoes": [
       "3",
       "2",
       "1",
       "C"
      ],
      "resposta": "3",
      "explicacao": "Na matriz A1:D3: linha 1 = rótulos, linha 2 = Vendas, linha 3 = Despesas.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a busca das vendas de Março:",
      "molde": "=PROCH(___;___;___;___)",
      "banco": [
       "\"Mar\"",
       "A1:D3",
       "2",
       "FALSO",
       "3",
       "\"Vendas\""
      ],
      "resposta": [
       "\"Mar\"",
       "A1:D3",
       "2",
       "FALSO"
      ],
      "explicacao": "Mês na 1ª linha, matriz, linha 2 (Vendas), exato. Resultado: 5100.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "PROCV e PROCH têm a mesma estrutura de argumentos — só muda a direção da busca.",
      "resposta": true,
      "explicacao": "Aprendeu um, aprendeu o outro: valor, matriz, índice, FALSO."
     }
    ]
   },
   {
    "id": "t2-m8-l4",
    "titulo": "ÍNDICE + CORRESP",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "A dupla que busca para a esquerda",
     "intro": "O PROCV não consegue buscar \"para trás\" — se o código está à DIREITA do que você quer retornar, ele falha. A dupla resolve: =CORRESP(valor;intervalo;0) descobre a POSIÇÃO do valor num intervalo (0 = correspondência exata), e =ÍNDICE(intervalo;posição) devolve o item naquela posição. Juntas: =ÍNDICE(A2:A4;CORRESP(\"ME-03\";C2:C4;0)) — acha a posição do código na coluna C e devolve o produto da coluna A. Qualquer direção.",
     "sintaxe": "=ÍNDICE(int_retorno; CORRESP(valor; int_busca; 0))",
     "pontos": [
      [
       "CORRESP",
       "em que posição está? (o 0 = exato)"
      ],
      [
       "ÍNDICE",
       "o que há na posição N?"
      ],
      [
       "vantagem",
       "busca em qualquer direção, até à esquerda"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Preço",
       "Código"
      ],
      [
       "Armário",
       850,
       "AR-01"
      ],
      [
       "Estante",
       420,
       "ES-02"
      ],
      [
       "Mesa",
       610,
       "ME-03"
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Nesta tabela, o código está na coluna C e o produto na A. Por que o PROCV puro não resolve \"qual produto tem o código ME-03\"?",
      "opcoes": [
       "Porque o PROCV só procura na 1ª coluna da matriz e retorna colunas à direita",
       "Porque há textos na tabela",
       "Porque o código tem hífen",
       "Resolve normalmente"
      ],
      "resposta": "Porque o PROCV só procura na 1ª coluna da matriz e retorna colunas à direita",
      "explicacao": "Buscar em C e retornar A é \"olhar para a esquerda\" — o ponto cego do PROCV.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =CORRESP(\"ES-02\";C2:C4;0)?",
      "opcoes": [
       "2",
       "Estante",
       "420",
       "ES-02"
      ],
      "resposta": "2",
      "explicacao": "CORRESP devolve a POSIÇÃO: ES-02 é o 2º item do intervalo. Não o valor — a posição.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E =ÍNDICE(A2:A4;2)?",
      "opcoes": [
       "Estante",
       "2",
       "420",
       "ES-02"
      ],
      "resposta": "Estante",
      "explicacao": "ÍNDICE pega o 2º item de A2:A4. Viu o encaixe? O CORRESP produz o número que o ÍNDICE consome.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a busca completa: qual PRODUTO tem o código \"ME-03\"?",
      "molde": "=ÍNDICE(___;CORRESP(___;___;___))",
      "banco": [
       "A2:A4",
       "\"ME-03\"",
       "C2:C4",
       "0",
       "B2:B4",
       "1"
      ],
      "resposta": [
       "A2:A4",
       "\"ME-03\"",
       "C2:C4",
       "0"
      ],
      "explicacao": "Retorno os produtos (A), procurando o código (C), exato (0). Resultado: Mesa.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "O 0 no final do CORRESP tem o mesmo papel do FALSO no PROCV: exigir correspondência exata.",
      "resposta": true,
      "explicacao": "Mesma ideia, sintaxe diferente. Esqueça o 0 e o CORRESP também pode devolver posição aproximada errada."
     }
    ]
   },
   {
    "id": "t2-m8-l5",
    "titulo": "PROCX: o moderno",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "PROCX",
     "intro": "O sucessor oficial (Excel 2021 / Microsoft 365): =PROCX(valor; matriz_procura; matriz_retorno) — você aponta DIRETAMENTE a coluna onde procurar e a coluna a retornar. Sem contar índice, busca em qualquer direção, correspondência exata por PADRÃO (adeus FALSO esquecido), e um 4º argumento opcional define o que mostrar quando não encontrar: =PROCX(cod;C:C;A:A;\"Não encontrado\"). Por que aprender PROCV então? Porque milhões de planilhas antigas usam PROCV — você vai encontrá-lo a vida toda.",
     "sintaxe": "=PROCX(valor; matriz_procura; matriz_retorno; [se_não_encontrar])",
     "pontos": [
      [
       "matriz_procura",
       "a coluna onde o valor está"
      ],
      [
       "matriz_retorno",
       "a coluna que você quer de volta"
      ],
      [
       "exato por padrão",
       "sem FALSO para esquecer"
      ],
      [
       "4º argumento",
       "mensagem amigável no lugar do #N/D"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Produto",
       "Preço",
       "Código"
      ],
      [
       "Armário",
       850,
       "AR-01"
      ],
      [
       "Estante",
       420,
       "ES-02"
      ],
      [
       "Mesa",
       610,
       "ME-03"
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual o resultado de =PROCX(\"ES-02\";C2:C4;B2:B4)?",
      "opcoes": [
       "420",
       "Estante",
       "#N/D",
       "2"
      ],
      "resposta": "420",
      "explicacao": "Procura o código em C e retorna o preço de B — inclusive \"para a esquerda\", sem esforço.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada vantagem do PROCX ao problema antigo que ela resolve:",
      "pares": {
       "Exato por padrão": "O FALSO esquecido do PROCV",
       "Busca em qualquer direção": "O ponto cego à esquerda",
       "matriz_retorno direta": "Contar núm_índice errado",
       "4º argumento": "O #N/D feio no relatório"
      },
      "explicacao": "O PROCX foi desenhado exatamente sobre as dores do PROCV."
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte: buscar o PRODUTO do código \"AR-01\", mostrando \"Sem cadastro\" se não achar:",
      "molde": "=PROCX(___;___;___;___)",
      "banco": [
       "\"AR-01\"",
       "C2:C4",
       "A2:A4",
       "\"Sem cadastro\"",
       "B2:B4",
       "FALSO"
      ],
      "resposta": [
       "\"AR-01\"",
       "C2:C4",
       "A2:A4",
       "\"Sem cadastro\""
      ],
      "explicacao": "Valor, onde procurar, o que retornar, e o plano B amigável. Resultado: Armário.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Se o Excel do seu trabalho for uma versão antiga (2016, por exemplo), o que acontece com o PROCX?",
      "opcoes": [
       "Não existe — use PROCV ou ÍNDICE+CORRESP",
       "Funciona igual",
       "Funciona só com FALSO",
       "Vira PROCH"
      ],
      "resposta": "Não existe — use PROCV ou ÍNDICE+CORRESP",
      "explicacao": "PROCX chegou no Excel 2021/365. Em versões antigas, a dupla ÍNDICE+CORRESP é o substituto completo.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Sabendo PROCX, não há motivo para entender o PROCV.",
      "resposta": false,
      "explicacao": "O mundo corporativo está cheio de planilhas com PROCV — você precisa LER e CONSERTAR essas fórmulas, mesmo preferindo o PROCX nas suas."
     }
    ]
   }
  ]
 },
 {
  "id": "t2-m9",
  "trilha": 2,
  "titulo": "Texto: limpar e montar",
  "descricao": "Junte, corte e padronize textos — o kit de limpeza de cadastros.",
  "licoes": [
   {
    "id": "t2-m9-l1",
    "titulo": "Juntar textos: & e CONCAT",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Juntando pedaços",
     "intro": "Para unir textos, o jeito mais rápido é o operador & (\"e comercial\"): =A2&\" \"&B2 junta nome e sobrenome com um espaço no meio. A função =CONCAT(A2;\" \";B2) faz o mesmo. O detalhe que todo mundo esquece: o Excel NÃO coloca espaços sozinho — você precisa incluir \" \" (espaço entre aspas) onde quiser separação.",
     "sintaxe": "=A2&\" \"&B2",
     "pontos": [
      [
       "&",
       "cola textos e células"
      ],
      [
       "\" \"",
       "espaço entre aspas — a separação é por sua conta"
      ],
      [
       "CONCAT",
       "a função equivalente ao &"
      ],
      [
       "misturar",
       "texto fixo + célula: =\"Sr. \"&A2"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Nome",
       "Sobrenome",
       "Cidade"
      ],
      [
       "Ana",
       "Souza",
       "Piracicaba"
      ],
      [
       "Bruno",
       "Lima",
       "Campinas"
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O que retorna =A2&B2 (sem espaço)?",
      "opcoes": [
       "AnaSouza",
       "Ana Souza",
       "Ana&Souza",
       "Erro"
      ],
      "resposta": "AnaSouza",
      "explicacao": "O & cola direto, sem espaço. Para \"Ana Souza\": =A2&\" \"&B2.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte o nome completo COM espaço (Ana Souza):",
      "molde": "=___&___&___",
      "banco": [
       "A2",
       "\" \"",
       "B2",
       "\"\"",
       "C2"
      ],
      "resposta": [
       "A2",
       "\" \"",
       "B2"
      ],
      "explicacao": "Nome & espaço & sobrenome. O \"\" vazio colaria sem separar.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Como gerar \"Bruno - Campinas\" a partir da linha 3?",
      "opcoes": [
       "=A3&\" - \"&C3",
       "=A3&C3",
       "=A3-\"C3\"",
       "=CONCAT(A3;C3;\" - \")"
      ],
      "resposta": "=A3&\" - \"&C3",
      "explicacao": "O separador \" - \" entra como texto fixo entre as duas células, na posição certa.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta fórmula deveria gerar \"Sr. Bruno\". Toque no erro:",
      "tokens": [
       "=",
       "Sr. ",
       "&",
       "A3"
      ],
      "indice_errado": 1,
      "explicacao": "Texto fixo sem aspas → #NOME?. Correto: =\"Sr. \"&A3.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "=CONCAT(A2;\" \";B2) e =A2&\" \"&B2 produzem exatamente o mesmo resultado.",
      "resposta": true,
      "explicacao": "Escolha o que preferir; o & costuma vencer por ser mais curto de digitar.",
      "mostrar_planilha": true
     }
    ]
   },
   {
    "id": "t2-m9-l2",
    "titulo": "Cortar: ESQUERDA, DIREITA e EXT.TEXTO",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "Extraindo pedaços",
     "intro": "Três tesouras: =ESQUERDA(texto;n) pega os n primeiros caracteres; =DIREITA(texto;n) pega os n últimos; =EXT.TEXTO(texto;início;n) pega n caracteres a partir de uma posição no meio. Exemplo com o código \"SP-2024-001\": ESQUERDA(A2;2) → \"SP\"; EXT.TEXTO(A2;4;4) → \"2024\"; DIREITA(A2;3) → \"001\". Cada caractere conta — inclusive hífens e espaços.",
     "sintaxe": "=EXT.TEXTO(texto; início; quantidade)",
     "pontos": [
      [
       "ESQUERDA",
       "os n primeiros caracteres"
      ],
      [
       "DIREITA",
       "os n últimos"
      ],
      [
       "EXT.TEXTO",
       "n caracteres a partir da posição de início"
      ],
      [
       "contagem",
       "hífens e espaços contam como caracteres"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Código",
       "UF",
       "Ano",
       "Nº"
      ],
      [
       "SP-2024-001",
       "",
       "",
       ""
      ],
      [
       "RJ-2023-045",
       "",
       "",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O que retorna =ESQUERDA(A2;2) com \"SP-2024-001\"?",
      "opcoes": [
       "SP",
       "S",
       "SP-",
       "01"
      ],
      "resposta": "SP",
      "explicacao": "Os 2 primeiros caracteres. O hífen seria o 3º.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E =DIREITA(A3;3) com \"RJ-2023-045\"?",
      "opcoes": [
       "045",
       "RJ-",
       "-04",
       "23-"
      ],
      "resposta": "045",
      "explicacao": "Os 3 últimos caracteres, contando do fim para trás.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a extração do ANO (\"2024\") de \"SP-2024-001\" — ele começa no 4º caractere e tem 4:",
      "molde": "=EXT.TEXTO(___;___;___)",
      "banco": [
       "A2",
       "4",
       "4",
       "3",
       "5"
      ],
      "resposta": [
       "A2",
       "4",
       "4"
      ],
      "explicacao": "S(1) P(2) -(3) 2(4)... começa na posição 4, pega 4 caracteres.",
      "mostrar_planilha": true
     },
     {
      "tipo": "digitar",
      "pergunta": "No código \"SP-2024-001\", em qual POSIÇÃO está o caractere \"{alvo}\"?",
      "variantes": [
       {
        "alvo": "primeiro hífen",
        "resposta": "3",
        "aceitar": []
       },
       {
        "alvo": "número 2 (início do ano)",
        "resposta": "4",
        "aceitar": []
       },
       {
        "alvo": "segundo hífen",
        "resposta": "8",
        "aceitar": []
       }
      ],
      "explicacao": "Conte caractere a caractere: S=1, P=2, -=3, 2=4, 0=5, 2=6, 4=7, -=8...",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Se todos os códigos tiverem o MESMO formato (XX-AAAA-NNN), a mesma fórmula EXT.TEXTO arrastada funciona para todas as linhas.",
      "resposta": true,
      "explicacao": "Posições fixas = extração em massa. Formatos variados pedem LOCALIZAR (próximas lições)."
     }
    ]
   },
   {
    "id": "t2-m9-l3",
    "titulo": "Padronizar: MAIÚSCULA, PRI.MAIÚSCULA e ARRUMAR",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "O kit de limpeza de cadastro",
     "intro": "Cadastro digitado por gente vem sujo: \"  ana SOUZA \", \"BRUNO lima\". O trio da faxina: =MAIÚSCULA(A2) põe tudo em caixa alta, =MINÚSCULA(A2) tudo em minúsculas, =PRI.MAIÚSCULA(A2) capitaliza cada palavra (\"Ana Souza\"). E a mais importante de todas: =ARRUMAR(A2) remove espaços extras — inclusive os invisíveis no fim, que quebram PROCV. Combo clássico de limpeza: =PRI.MAIÚSCULA(ARRUMAR(A2)).",
     "sintaxe": "=PRI.MAIÚSCULA(ARRUMAR(A2))",
     "pontos": [
      [
       "MAIÚSCULA",
       "TUDO EM CAIXA ALTA"
      ],
      [
       "PRI.MAIÚSCULA",
       "Primeira Letra De Cada Palavra"
      ],
      [
       "ARRUMAR",
       "remove espaços extras (o herói invisível)"
      ],
      [
       "combo",
       "uma função dentro da outra"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Cadastro original",
       "Limpo"
      ],
      [
       "  ana SOUZA ",
       ""
      ],
      [
       "BRUNO lima",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada função ao seu efeito sobre \"ana souza\":",
      "pares": {
       "MAIÚSCULA": "ANA SOUZA",
       "PRI.MAIÚSCULA": "Ana Souza",
       "MINÚSCULA": "ana souza (sem mudança)",
       "ARRUMAR": "Remove espaços extras"
      },
      "explicacao": "Três mudam as letras; a ARRUMAR cuida dos espaços."
     },
     {
      "tipo": "escolha",
      "pergunta": "Por que o espaço invisível no fim de \"ME-03 \" é perigoso?",
      "opcoes": [
       "Quebra buscas como o PROCV, que não acha o código",
       "Deixa o arquivo maior",
       "Muda a cor da célula",
       "Não é perigoso"
      ],
      "resposta": "Quebra buscas como o PROCV, que não acha o código",
      "explicacao": "\"ME-03\" ≠ \"ME-03 \" para o PROCV exato. É a causa nº 1 de #N/D misterioso — e ARRUMAR resolve.",
      "mostrar_planilha": false
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte o combo de limpeza completo para a célula A2 (espaços + capitalização):",
      "molde": "=___(___(___))",
      "banco": [
       "PRI.MAIÚSCULA",
       "ARRUMAR",
       "A2",
       "MAIÚSCULA",
       "B2"
      ],
      "resposta": [
       "PRI.MAIÚSCULA",
       "ARRUMAR",
       "A2"
      ],
      "explicacao": "De dentro para fora: ARRUMAR limpa os espaços, PRI.MAIÚSCULA capitaliza. Resultado: \"Ana Souza\".",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Em =PRI.MAIÚSCULA(ARRUMAR(A2)), qual função roda PRIMEIRO?",
      "opcoes": [
       "ARRUMAR — a de dentro",
       "PRI.MAIÚSCULA — a de fora",
       "As duas juntas",
       "Depende da célula"
      ],
      "resposta": "ARRUMAR — a de dentro",
      "explicacao": "Funções aninhadas calculam de dentro para fora, como parênteses na matemática.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "A ARRUMAR também reduz espaços duplicados NO MEIO do texto para um só.",
      "resposta": true,
      "explicacao": "\"Ana   Souza\" vira \"Ana Souza\". Pontas e miolo, tudo de uma vez."
     }
    ]
   },
   {
    "id": "t2-m9-l4",
    "titulo": "LOCALIZAR e NÚM.CARACT",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "Encontrando posições",
     "intro": "Quando o formato VARIA (nomes de tamanhos diferentes, e-mails), as posições fixas falham. =LOCALIZAR(\"@\";A2) responde EM QUE POSIÇÃO está o @ — e =NÚM.CARACT(A2) conta o total de caracteres. Juntas com as tesouras, viram extração inteligente: =ESQUERDA(A2;LOCALIZAR(\"@\";A2)-1) pega tudo ANTES do @ (o usuário do e-mail), em qualquer e-mail. O -1 tira o próprio @ da conta.",
     "sintaxe": "=ESQUERDA(A2; LOCALIZAR(\"@\";A2)-1)",
     "pontos": [
      [
       "LOCALIZAR",
       "posição de um texto dentro de outro"
      ],
      [
       "NÚM.CARACT",
       "total de caracteres"
      ],
      [
       "o -1",
       "para na posição ANTERIOR ao caractere achado"
      ],
      [
       "poder real",
       "extração que se adapta a cada linha"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "E-mail",
       "Usuário"
      ],
      [
       "ana@gmail.com",
       ""
      ],
      [
       "bruno.lima@empresa.com.br",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O que retorna =LOCALIZAR(\"@\";A2) com \"ana@gmail.com\"?",
      "opcoes": [
       "4",
       "@",
       "3",
       "ana"
      ],
      "resposta": "4",
      "explicacao": "a(1) n(2) a(3) @(4). LOCALIZAR devolve a POSIÇÃO, não o texto.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "E =NÚM.CARACT(A2) com \"ana@gmail.com\"?",
      "opcoes": [
       "13",
       "12",
       "3",
       "10"
      ],
      "resposta": "13",
      "explicacao": "Todos os caracteres contam, incluindo @ e pontos: a-n-a-@-g-m-a-i-l-.-c-o-m = 13.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Por que =ESQUERDA(A2;LOCALIZAR(\"@\";A2)-1) funciona para os DOIS e-mails da planilha, de tamanhos diferentes?",
      "opcoes": [
       "O LOCALIZAR recalcula a posição do @ em cada linha",
       "Porque e-mails têm sempre 13 caracteres",
       "Não funciona para os dois",
       "Porque o -1 conserta o tamanho"
      ],
      "resposta": "O LOCALIZAR recalcula a posição do @ em cada linha",
      "explicacao": "Na linha 2 o @ está na posição 4; na linha 3, na 11. A fórmula se adapta sozinha — isso é extração inteligente.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a fórmula que extrai o usuário do e-mail (tudo antes do @):",
      "molde": "=ESQUERDA(___;LOCALIZAR(___;___)-1)",
      "banco": [
       "A2",
       "\"@\"",
       "A2",
       "\".\"",
       "B2"
      ],
      "resposta": [
       "A2",
       "\"@\"",
       "A2"
      ],
      "explicacao": "ESQUERDA do e-mail, até a posição do @ menos 1. \"ana@gmail.com\" → \"ana\".",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Sem o -1, a fórmula =ESQUERDA(A2;LOCALIZAR(\"@\";A2)) traria o @ junto: \"ana@\".",
      "resposta": true,
      "explicacao": "O LOCALIZAR aponta para o próprio @; o -1 para um caractere antes."
     }
    ]
   },
   {
    "id": "t2-m9-l5",
    "titulo": "TEXTO: número vestido de texto",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "TEXTO",
     "intro": "Ao juntar número com texto, a formatação some: =\"Total: \"&B2 mostra \"Total: 4650\" — sem R$, sem separadores. A função =TEXTO(valor;\"formato\") veste o número: =\"Total: \"&TEXTO(B2;\"R$ #.##0,00\") → \"Total: R$ 4.650,00\". Com datas também: =TEXTO(HOJE();\"dd/mm/aaaa\") ou até \"dddd\" para o dia da semana por extenso. É a função das frases prontas de relatório.",
     "sintaxe": "=TEXTO(valor; \"formato\")",
     "pontos": [
      [
       "problema",
       "o & ignora a formatação da célula"
      ],
      [
       "\"R$ #.##0,00\"",
       "moeda com milhar e 2 decimais"
      ],
      [
       "\"dd/mm/aaaa\"",
       "data no padrão brasileiro"
      ],
      [
       "\"dddd\"",
       "dia da semana por extenso"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Mês",
       "Vendas"
      ],
      [
       "Janeiro",
       4650.5
      ],
      [
       "Fevereiro",
       3800
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O que mostra =\"Total: \"&B2, com B2 formatado como moeda R$ 4.650,50?",
      "opcoes": [
       "Total: 4650,5",
       "Total: R$ 4.650,50",
       "Total: B2",
       "Erro"
      ],
      "resposta": "Total: 4650,5",
      "explicacao": "O & pega o valor CRU — a roupa de moeda fica na célula. Para levar a roupa junto: TEXTO.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a frase \"Total: R$ 4.650,50\" com a formatação correta:",
      "molde": "=\"Total: \"&TEXTO(___;___)",
      "banco": [
       "B2",
       "\"R$ #.##0,00\"",
       "\"dd/mm/aaaa\"",
       "A2"
      ],
      "resposta": [
       "B2",
       "\"R$ #.##0,00\""
      ],
      "explicacao": "TEXTO(valor;formato): o número entra, a moeda formatada sai — dentro da frase.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada código de formato ao resultado (para a data 15/03/2026):",
      "pares": {
       "\"dd/mm/aaaa\"": "15/03/2026",
       "\"dddd\"": "domingo",
       "\"mmmm\"": "março",
       "\"aaaa\"": "2026"
      },
      "explicacao": "d de dia, m de mês, a de ano — repetidos, viram versões por extenso."
     },
     {
      "tipo": "escolha",
      "pergunta": "Um relatório precisa da frase \"Relatório de março\" gerada a partir de uma data. Qual fórmula?",
      "opcoes": [
       "=\"Relatório de \"&TEXTO(A1;\"mmmm\")",
       "=\"Relatório de \"&A1",
       "=TEXTO(\"Relatório\";A1)",
       "=CONCAT(A1;\"mmmm\")"
      ],
      "resposta": "=\"Relatório de \"&TEXTO(A1;\"mmmm\")",
      "explicacao": "TEXTO com \"mmmm\" extrai o mês por extenso; o & monta a frase. Título que se atualiza sozinho todo mês.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "O resultado da função TEXTO é um TEXTO — não dá mais para somar com ele.",
      "resposta": true,
      "explicacao": "TEXTO é para EXIBIR. Contas se fazem com o número original; a frase bonita é só a camada final."
     }
    ]
   }
  ]
 },
 {
  "id": "t2-m10",
  "trilha": 2,
  "titulo": "Datas e prazos",
  "descricao": "Prazos, vencimentos e dias úteis calculados sozinhos.",
  "licoes": [
   {
    "id": "t2-m10-l1",
    "titulo": "HOJE e AGORA",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "A data que se atualiza sozinha",
     "intro": "=HOJE() devolve a data atual e =AGORA() a data com hora — os parênteses vazios fazem parte, elas não recebem argumentos. O superpoder: elas se ATUALIZAM sozinhas a cada dia. Uma planilha de cobrança com =HOJE()-B2 (dias desde o vencimento) fica atual para sempre, sem ninguém digitar data. O cuidado: por serem vivas, o valor de ontem não fica registrado — para congelar uma data, digite-a (atalho: Ctrl+; insere a data de hoje FIXA).",
     "sintaxe": "=HOJE()",
     "pontos": [
      [
       "HOJE()",
       "data atual, parênteses vazios"
      ],
      [
       "AGORA()",
       "data + hora atual"
      ],
      [
       "viva",
       "atualiza sozinha a cada abertura/cálculo"
      ],
      [
       "Ctrl+;",
       "insere a data de hoje FIXA (não muda mais)"
      ]
     ],
     "mostrar_planilha": false
    },
    "planilha": {
     "linhas": [
      [
       "Descrição",
       "Valor"
      ],
      [
       "Data de hoje",
       ""
      ],
      [
       "Data e hora",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual a diferença entre HOJE() e AGORA()?",
      "opcoes": [
       "AGORA() inclui a hora; HOJE() só a data",
       "São idênticas",
       "HOJE() é em inglês",
       "AGORA() não se atualiza"
      ],
      "resposta": "AGORA() inclui a hora; HOJE() só a data",
      "explicacao": "Para prazos e vencimentos, HOJE() basta; AGORA() serve para registros com horário.",
      "mostrar_planilha": false
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Toque no erro desta fórmula:",
      "tokens": [
       "=",
       "HOJE",
       "(",
       "2026",
       ")"
      ],
      "indice_errado": 3,
      "explicacao": "HOJE não recebe argumentos — os parênteses ficam VAZIOS: =HOJE()."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você precisa registrar a data em que um pedido foi digitado — e ela NÃO pode mudar amanhã. O que usar?",
      "opcoes": [
       "Ctrl+; (data fixa)",
       "=HOJE()",
       "=AGORA()",
       "Deixar em branco"
      ],
      "resposta": "Ctrl+; (data fixa)",
      "explicacao": "=HOJE() mudaria amanhã e o registro se perderia. Ctrl+; carimba a data de hoje como valor fixo.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Numa planilha de cobrança, o que =HOJE()-B2 calcula (B2 = data do vencimento)?",
      "opcoes": [
       "Quantos dias se passaram desde o vencimento",
       "A data de amanhã",
       "O valor da dívida",
       "Nada, datas não se subtraem"
      ],
      "resposta": "Quantos dias se passaram desde o vencimento",
      "explicacao": "Data é número por dentro (lição da Trilha 1!) — subtrair datas conta dias. E como HOJE() é viva, o atraso se atualiza sozinho.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Se eu abrir a planilha daqui a uma semana, o =HOJE() mostrará a data daquele dia, não a de hoje.",
      "resposta": true,
      "explicacao": "É exatamente para isso que ela existe: relatórios que nunca envelhecem."
     }
    ]
   },
   {
    "id": "t2-m10-l2",
    "titulo": "DIA, MÊS e ANO",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "Desmontando datas",
     "intro": "Três extratores simples: =DIA(A2), =MÊS(A2) e =ANO(A2) devolvem as partes de uma data como NÚMEROS (o mês vem como 3, não \"março\" — para o nome, TEXTO(A2;\"mmmm\") da lição anterior). Uso clássico em relatórios: criar uma coluna auxiliar =MÊS(A2) na base de vendas e, com CONT.SE/SOMASE sobre ela, montar totais por mês.",
     "sintaxe": "=MÊS(A2)",
     "pontos": [
      [
       "DIA",
       "o dia como número (1 a 31)"
      ],
      [
       "MÊS",
       "o mês como número (1 a 12)"
      ],
      [
       "ANO",
       "o ano com 4 dígitos"
      ],
      [
       "combo",
       "coluna =MÊS() + SOMASE = vendas por mês"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Venda",
       "Data",
       "Mês"
      ],
      [
       "PD-01",
       "15/03/2026",
       ""
      ],
      [
       "PD-02",
       "28/03/2026",
       ""
      ],
      [
       "PD-03",
       "02/04/2026",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O que retorna =MÊS(B2) com a data 15/03/2026?",
      "opcoes": [
       "3",
       "março",
       "15",
       "03/2026"
      ],
      "resposta": "3",
      "explicacao": "Número puro: 3. O nome \"março\" viria com TEXTO(B2;\"mmmm\").",
      "mostrar_planilha": true
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Para a data 15/03/2026, ligue cada fórmula ao resultado:",
      "pares": {
       "=DIA(B2)": "15",
       "=MÊS(B2)": "3",
       "=ANO(B2)": "2026",
       "=TEXTO(B2;\"mmmm\")": "março"
      },
      "explicacao": "Números com as três primeiras; nome por extenso com a TEXTO."
     },
     {
      "tipo": "tokens",
      "pergunta": "Preenchida a coluna Mês com =MÊS(B2), monte a fórmula que CONTA as vendas de março:",
      "molde": "=CONT.SE(___;___)",
      "banco": [
       "C2:C4",
       "3",
       "\"março\"",
       "B2:B4",
       "\"3\""
      ],
      "resposta": [
       "C2:C4",
       "3"
      ],
      "explicacao": "A coluna auxiliar tem números — o critério é 3, sem aspas (números dispensam aspas no critério). Resultado: 2.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Por que criar a coluna auxiliar =MÊS(B2) em vez de comparar as datas direto?",
      "opcoes": [
       "Vira um número simples que o CONT.SE/SOMASE filtram facilmente",
       "Datas não podem ser usadas em fórmulas",
       "Fica mais bonito",
       "Não há motivo"
      ],
      "resposta": "Vira um número simples que o CONT.SE/SOMASE filtram facilmente",
      "explicacao": "\"Mês = 3\" é um critério trivial; \"data entre 01/03 e 31/03\" exige fórmulas mais chatas. Coluna auxiliar é atalho de gente esperta.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "=ANO(HOJE()) devolve o ano atual, combinando as duas lições.",
      "resposta": true,
      "explicacao": "Funções se encaixam: HOJE() gera a data, ANO() extrai o ano. =ANO(HOJE())-ANO(B2) já é uma idade aproximada."
     }
    ]
   },
   {
    "id": "t2-m10-l3",
    "titulo": "Somar e subtrair datas",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Aritmética de prazos",
     "intro": "Como data é número (dias desde 01/01/1900), a matemática é direta: data + 30 = trinta dias depois; data2 - data1 = dias entre elas. Prazo de pagamento: =B2+30. Dias até o vencimento: =B2-HOJE() (positivo = ainda dá tempo; negativo = atrasou). E dá para combinar com o SE do módulo 6: =SE(B2-HOJE()<0;\"ATRASADO\";\"Em dia\") — sua régua de cobrança automática.",
     "sintaxe": "=B2+30",
     "pontos": [
      [
       "data + n",
       "n dias depois"
      ],
      [
       "data2 - data1",
       "dias entre as duas"
      ],
      [
       "data - HOJE()",
       "dias até lá (negativo = passou)"
      ],
      [
       "com SE",
       "status de atraso automático"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Cliente",
       "Emissão",
       "Vencimento"
      ],
      [
       "Mercado Silva",
       "01/03/2026",
       ""
      ],
      [
       "Padaria Central",
       "10/03/2026",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "A nota foi emitida em 01/03/2026 com prazo de 30 dias. O que =B2+30 devolve?",
      "opcoes": [
       "31/03/2026",
       "30/03/2026",
       "01/04/2026",
       "Erro"
      ],
      "resposta": "31/03/2026",
      "explicacao": "30 dias corridos após 01/03. O Excel cuida dos meses de 28/30/31 dias sozinho.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "=C2-HOJE() deu -5. O que isso significa?",
      "opcoes": [
       "Venceu há 5 dias — está atrasado",
       "Vence em 5 dias",
       "Faltam 5 meses",
       "A fórmula está errada"
      ],
      "resposta": "Venceu há 5 dias — está atrasado",
      "explicacao": "Negativo = o vencimento ficou para trás. Positivo = ainda há prazo.",
      "mostrar_planilha": false
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte o status de cobrança: \"ATRASADO\" se o vencimento (C2) já passou, senão \"Em dia\":",
      "molde": "=SE(___;___;___)",
      "banco": [
       "C2<HOJE()",
       "\"ATRASADO\"",
       "\"Em dia\"",
       "C2>HOJE()",
       "HOJE()"
      ],
      "resposta": [
       "C2<HOJE()",
       "\"ATRASADO\"",
       "\"Em dia\""
      ],
      "explicacao": "Vencimento menor que hoje = ficou no passado = atrasado. Módulos 6 e 10 trabalhando juntos.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Um projeto começou em 10/03/2026 e terminou em 25/03/2026. Quantos dias durou (=fim-início)?",
      "opcoes": [
       "15",
       "14",
       "16",
       "25"
      ],
      "resposta": "15",
      "explicacao": "25 - 10 = 15 dias corridos entre as datas.",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Se a subtração de duas datas mostrar algo como \"15/01/1900\" em vez de 15, basta trocar o formato da célula para Número.",
      "resposta": true,
      "explicacao": "O valor está certo (15); a célula só herdou a roupa de data. Formato Geral/Número conserta — lição 1 do módulo 2 valendo ouro."
     }
    ]
   },
   {
    "id": "t2-m10-l4",
    "titulo": "Dias úteis: DIATRABALHO",
    "teoria": {
     "eyebrow": "Novas fórmulas",
     "titulo": "Pulando fins de semana",
     "intro": "Prazo em dias ÚTEIS é outra conta — e o Excel tem a dupla: =DIATRABALHO(início; dias; [feriados]) devolve a DATA após n dias úteis (\"pedido sai em 5 dias úteis: que dia chega?\"); =DIATRABALHOTOTAL(início; fim; [feriados]) CONTA os dias úteis entre duas datas. As duas pulam sábados e domingos automaticamente, e o 3º argumento opcional aceita um intervalo com os feriados que você listar.",
     "sintaxe": "=DIATRABALHO(início; dias; [feriados])",
     "pontos": [
      [
       "DIATRABALHO",
       "devolve a DATA após n dias úteis"
      ],
      [
       "DIATRABALHOTOTAL",
       "CONTA os dias úteis entre datas"
      ],
      [
       "fins de semana",
       "pulados automaticamente"
      ],
      [
       "[feriados]",
       "liste-os num intervalo e aponte no 3º argumento"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Evento",
       "Data"
      ],
      [
       "Pedido (sexta)",
       "06/03/2026",
       ""
      ],
      [
       "Feriado",
       "09/03/2026",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual das duas funções responde \"o boleto de 5 dias úteis vence em QUE DATA\"?",
      "opcoes": [
       "DIATRABALHO",
       "DIATRABALHOTOTAL",
       "HOJE",
       "DATADIF"
      ],
      "resposta": "DIATRABALHO",
      "explicacao": "Entra data + quantidade, sai DATA. A DIATRABALHOTOTAL faz o inverso: entra duas datas, sai quantidade.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Pedido na sexta 06/03. =DIATRABALHO(B2;1) devolve:",
      "opcoes": [
       "09/03 (segunda)",
       "07/03 (sábado)",
       "08/03 (domingo)",
       "06/03"
      ],
      "resposta": "09/03 (segunda)",
      "explicacao": "1 dia útil depois da sexta pula o fim de semana e cai na segunda.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue a pergunta de negócio à função:",
      "pares": {
       "Que dia chega o pedido de 5 dias úteis?": "DIATRABALHO",
       "Quantos dias úteis tem março?": "DIATRABALHOTOTAL",
       "Quantos dias corridos até o vencimento?": "Subtração simples",
       "Que dia é hoje?": "HOJE"
      },
      "explicacao": "Quatro perguntas de prazo, quatro ferramentas — escolher a certa é metade da resposta."
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte: data de entrega 5 dias úteis após o pedido (B2), considerando o feriado listado em B3:",
      "molde": "=DIATRABALHO(___;___;___)",
      "banco": [
       "B2",
       "5",
       "B3",
       "\"5\"",
       "HOJE()"
      ],
      "resposta": [
       "B2",
       "5",
       "B3"
      ],
      "explicacao": "Início, dias úteis, e o intervalo de feriados — que empurra a entrega um dia a mais.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Sem listar os feriados no 3º argumento, o Excel os considera automaticamente pelo calendário do Brasil.",
      "resposta": false,
      "explicacao": "O Excel só conhece sábado e domingo. Feriado brasileiro é responsabilidade sua: liste e aponte."
     }
    ]
   },
   {
    "id": "t2-m10-l5",
    "titulo": "DATADIF: idade e tempo de casa",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "DATADIF, a função secreta",
     "intro": "=DATADIF(início; fim; \"unidade\") calcula a diferença entre datas na unidade que você pedir: \"Y\" anos completos, \"M\" meses completos, \"D\" dias. Idade exata: =DATADIF(B2;HOJE();\"Y\"). Curiosidade: é uma função ESCONDIDA — o Excel não a sugere ao digitar nem documenta direito, herança do Lotus 1-2-3 — mas funciona perfeitamente. A pegadinha: a ordem é início;fim — invertido dá #NÚM!.",
     "sintaxe": "=DATADIF(início; fim; \"Y\")",
     "pontos": [
      [
       "\"Y\"",
       "anos COMPLETOS"
      ],
      [
       "\"M\"",
       "meses completos"
      ],
      [
       "\"D\"",
       "dias"
      ],
      [
       "escondida",
       "não aparece nas sugestões — digite e confie"
      ],
      [
       "ordem",
       "início antes do fim, senão #NÚM!"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Funcionário",
       "Admissão"
      ],
      [
       "Paula",
       "15/03/2020"
      ],
      [
       "Diego",
       "01/08/2024"
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual fórmula calcula a idade exata (anos completos) a partir do nascimento em B2?",
      "opcoes": [
       "=DATADIF(B2;HOJE();\"Y\")",
       "=HOJE()-B2",
       "=ANO(HOJE())-ANO(B2)",
       "=DATADIF(HOJE();B2;\"Y\")"
      ],
      "resposta": "=DATADIF(B2;HOJE();\"Y\")",
      "explicacao": "\"Y\" = anos COMPLETOS (respeita se já fez aniversário). A subtração de ANOs erra para quem ainda não fez; a ordem invertida dá #NÚM!.",
      "mostrar_planilha": false
     },
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada unidade do DATADIF ao que ela devolve:",
      "pares": {
       "\"Y\"": "Anos completos",
       "\"M\"": "Meses completos",
       "\"D\"": "Dias corridos",
       "aspas na unidade": "Obrigatórias"
      },
      "explicacao": "A unidade é um TEXTO — por isso vai entre aspas."
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte o tempo de casa da Paula em anos completos (admissão em B2, hoje 04/08/2026):",
      "molde": "=DATADIF(___;___;___)",
      "banco": [
       "B2",
       "HOJE()",
       "\"Y\"",
       "\"D\"",
       "2026"
      ],
      "resposta": [
       "B2",
       "HOJE()",
       "\"Y\""
      ],
      "explicacao": "De 15/03/2020 até hoje: 6 anos completos de casa.",
      "mostrar_planilha": true
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Esta fórmula de idade retorna #NÚM!. Toque no erro:",
      "tokens": [
       "=DATADIF(",
       "HOJE()",
       ";",
       "B2",
       ";\"Y\")"
      ],
      "indice_errado": 1,
      "explicacao": "Ordem invertida: o INÍCIO (nascimento, B2) vem primeiro, o fim (HOJE) depois. Começar do futuro dá #NÚM!.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Ao digitar =DATADIF, o Excel não mostra a função nas sugestões — mas ela funciona normalmente ao completar e dar Enter.",
      "resposta": true,
      "explicacao": "Função fantasma: invisível no autocomplete, perfeita no resultado. Agora você conhece um segredo que muito usuário avançado não conhece."
     }
    ]
   }
  ]
 },
 {
  "id": "t2-m11",
  "trilha": 2,
  "titulo": "Erros: entender e tratar",
  "descricao": "Leia os erros como um mecânico lê o motor — e blinde suas planilhas.",
  "licoes": [
   {
    "id": "t2-m11-l1",
    "titulo": "O dicionário dos erros",
    "teoria": {
     "eyebrow": "Novo conceito",
     "titulo": "Cada erro conta uma história",
     "intro": "Erro do Excel não é castigo — é diagnóstico. Os 5 que você mais verá: #N/D (busca não encontrou), #REF! (a fórmula aponta para uma célula que foi APAGADA), #DIV/0! (divisão por zero ou por célula vazia), #NOME? (nome de função ou texto sem aspas que o Excel não reconhece) e #VALOR! (tipo errado — ex: somar texto com número). Ler o erro certo já é metade do conserto.",
     "pontos": [
      [
       "#N/D",
       "não encontrado (PROCV e família)"
      ],
      [
       "#REF!",
       "referência apagada — a fórmula perdeu o endereço"
      ],
      [
       "#DIV/0!",
       "divisão por zero ou por vazio"
      ],
      [
       "#NOME?",
       "função escrita errada ou texto sem aspas"
      ],
      [
       "#VALOR!",
       "tipo errado na conta (texto onde ia número)"
      ]
     ],
     "mostrar_planilha": false
    },
    "planilha": {
     "linhas": [
      [
       "Item",
       "Valor"
      ],
      [
       "Vendas",
       4650
      ],
      [
       "Meses",
       0
      ],
      [
       "Média",
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "ligar_pares",
      "pergunta": "Ligue cada erro à sua causa:",
      "pares": {
       "#N/D": "Busca não encontrou o valor",
       "#REF!": "Célula referenciada foi apagada",
       "#DIV/0!": "Divisão por zero ou vazio",
       "#NOME?": "Função ou texto não reconhecido"
      },
      "explicacao": "Decorar esses quatro resolve 90% dos sustos."
     },
     {
      "tipo": "escolha",
      "pergunta": "Você digitou =SOMAA(B2:B5). O que aparece?",
      "opcoes": [
       "#NOME?",
       "#VALOR!",
       "0",
       "#REF!"
      ],
      "resposta": "#NOME?",
      "explicacao": "SOMAA não existe — o Excel não reconhece o NOME. Digitou errado, #NOME? na tela.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "=B2/B3 com B3 = 0 retorna:",
      "opcoes": [
       "#DIV/0!",
       "0",
       "Infinito",
       "#N/D"
      ],
      "resposta": "#DIV/0!",
      "explicacao": "Dividir por zero é impossível — e célula VAZIA no divisor dá o mesmo erro.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Sua fórmula mostrava =B2*C2 e, depois que um colega excluiu uma coluna, virou =B2*#REF!. O que aconteceu?",
      "opcoes": [
       "A coluna que a fórmula usava foi apagada",
       "A fórmula foi digitada errada",
       "O arquivo corrompeu",
       "Faltou salvar"
      ],
      "resposta": "A coluna que a fórmula usava foi apagada",
      "explicacao": "O #REF! aparece DENTRO da fórmula, marcando o endereço perdido. Ctrl+Z imediato, ou reconstruir a referência.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "=B2+\"texto\" retorna:",
      "opcoes": [
       "#VALOR!",
       "#NOME?",
       "B2texto",
       "0"
      ],
      "resposta": "#VALOR!",
      "explicacao": "Somar número com texto é tipo errado na operação → #VALOR!. (Juntar seria com &, não com +.)",
      "mostrar_planilha": false
     },
     {
      "tipo": "vf",
      "afirmacao": "Um #N/D no PROCV significa necessariamente que há um bug na fórmula.",
      "resposta": false,
      "explicacao": "Muitas vezes a fórmula está perfeita — o valor é que não existe na base (ou tem um espaço extra). #N/D é informação, não defeito."
     }
    ]
   },
   {
    "id": "t2-m11-l2",
    "titulo": "SEERRO",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "SEERRO",
     "intro": "=SEERRO(fórmula; valor_se_erro) tenta calcular a fórmula; se der QUALQUER erro, mostra o plano B no lugar: =SEERRO(PROCV(A2;Tabela;2;FALSO);\"Não cadastrado\") troca o #N/D feio por uma mensagem civilizada. Um alerta de profissional: o SEERRO esconde TODOS os erros, inclusive os que indicam bug de verdade (#REF!, #NOME?). Primeiro conserte a fórmula; o SEERRO é o acabamento, não o esparadrapo.",
     "sintaxe": "=SEERRO(fórmula; valor_se_erro)",
     "pontos": [
      [
       "1º argumento",
       "a fórmula que pode falhar"
      ],
      [
       "2º argumento",
       "o que mostrar no lugar do erro"
      ],
      [
       "captura tudo",
       "#N/D, #DIV/0!, #REF!... todos"
      ],
      [
       "alerta",
       "não use para esconder bug — conserte antes"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Código",
       "Produto",
       "Preço"
      ],
      [
       "AR-01",
       "Armário",
       850
      ],
      [
       "ES-02",
       "Estante",
       420
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O que mostra =SEERRO(PROCV(\"XX-99\";A2:C3;3;FALSO);\"Não cadastrado\")?",
      "opcoes": [
       "Não cadastrado",
       "#N/D",
       "0",
       "XX-99"
      ],
      "resposta": "Não cadastrado",
      "explicacao": "O PROCV daria #N/D; o SEERRO intercepta e entrega o plano B.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a divisão segura de B2 por B3, mostrando 0 se der erro:",
      "molde": "=SEERRO(___;___)",
      "banco": [
       "B2/B3",
       "0",
       "\"0\"",
       "B3/B2",
       "#DIV/0!"
      ],
      "resposta": [
       "B2/B3",
       "0"
      ],
      "explicacao": "A conta primeiro, o plano B depois. O 0 sem aspas continua sendo número — dá para somar a coluna depois.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "Num relatório de médias, por que =SEERRO(MÉDIASE(...);0) pode ser MELHOR que deixar o #DIV/0!?",
      "opcoes": [
       "Zero permite que somas e gráficos continuem funcionando",
       "Erros deixam o arquivo lento",
       "O #DIV/0! apaga os dados",
       "Não é melhor"
      ],
      "resposta": "Zero permite que somas e gráficos continuem funcionando",
      "explicacao": "Um erro no meio da coluna contamina totais e quebra gráficos. O 0 (ou \"\") mantém o relatório vivo.",
      "mostrar_planilha": false
     },
     {
      "tipo": "achar_erro",
      "pergunta": "Toque no problema desta fórmula:",
      "tokens": [
       "=SEERRO(",
       "\"Não cadastrado\"",
       ";",
       "PROCV(A2;A2:C3;3;FALSO)",
       ")"
      ],
      "indice_errado": 1,
      "explicacao": "Argumentos invertidos: a FÓRMULA vem primeiro, o plano B depois. Assim como está, mostraria sempre \"Não cadastrado\".",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Envolver toda fórmula da planilha com SEERRO é uma boa prática recomendada.",
      "resposta": false,
      "explicacao": "SEERRO em tudo esconde bugs reais (#REF!, #NOME?) e você para de enxergar os problemas. Use com intenção, onde o erro é esperado e tem tratamento que faça sentido."
     }
    ]
   },
   {
    "id": "t2-m11-l3",
    "titulo": "SENÃODISP: o cirúrgico",
    "teoria": {
     "eyebrow": "Nova fórmula",
     "titulo": "SENÃODISP",
     "intro": "O irmão preciso do SEERRO: =SENÃODISP(fórmula; valor) só intercepta o #N/D — os outros erros (#REF!, #NOME?, #DIV/0!) continuam APARECENDO. Por que isso é bom? Porque num PROCV, o #N/D é esperado (\"código não cadastrado\"), mas um #REF! é bug que você PRECISA ver. O SENÃODISP trata o normal e deixa o anormal gritar. É a escolha certa para blindar buscas.",
     "sintaxe": "=SENÃODISP(fórmula; valor_se_nd)",
     "pontos": [
      [
       "captura",
       "SÓ o #N/D"
      ],
      [
       "deixa passar",
       "#REF!, #NOME?, #DIV/0! — os bugs continuam visíveis"
      ],
      [
       "uso ideal",
       "PROCV/PROCX e buscas em geral"
      ],
      [
       "SEERRO",
       "quando quiser capturar qualquer erro"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Código",
       "Produto",
       "Preço"
      ],
      [
       "AR-01",
       "Armário",
       850
      ],
      [
       "ES-02",
       "Estante",
       420
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "Qual a diferença entre SEERRO e SENÃODISP?",
      "opcoes": [
       "SENÃODISP só captura o #N/D; SEERRO captura todos",
       "São idênticas",
       "SENÃODISP é mais antiga",
       "SEERRO só funciona com PROCV"
      ],
      "resposta": "SENÃODISP só captura o #N/D; SEERRO captura todos",
      "explicacao": "Cirúrgico vs cobertor: o SENÃODISP trata o esperado e deixa os bugs visíveis.",
      "mostrar_planilha": false
     },
     {
      "tipo": "escolha",
      "pergunta": "=SENÃODISP(PROCV(\"AR-01\";A2:C3;9;FALSO);\"Sem cadastro\") — o índice 9 não existe na matriz. O que aparece?",
      "opcoes": [
       "#REF!",
       "Sem cadastro",
       "850",
       "#N/D"
      ],
      "resposta": "#REF!",
      "explicacao": "O erro é #REF! (índice inválido), não #N/D — o SENÃODISP deixa passar. E é ISSO que você quer: enxergar o bug para consertar.",
      "mostrar_planilha": true
     },
     {
      "tipo": "escolha",
      "pergunta": "Para um PROCV de códigos digitados pelo usuário (que podem não existir), qual blindagem é a mais recomendada?",
      "opcoes": [
       "SENÃODISP — trata o \"não achei\" e mostra bugs reais",
       "SEERRO — esconde tudo",
       "Nenhuma — deixar o #N/D",
       "Apagar a fórmula"
      ],
      "resposta": "SENÃODISP — trata o \"não achei\" e mostra bugs reais",
      "explicacao": "O #N/D esperado vira mensagem amigável; um #REF! acidental continua gritando para ser consertado.",
      "mostrar_planilha": false
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a busca blindada do jeito cirúrgico:",
      "molde": "=SENÃODISP(___;___)",
      "banco": [
       "PROCV(A2;A2:C3;3;FALSO)",
       "\"Sem cadastro\"",
       "\"#N/D\"",
       "SEERRO"
      ],
      "resposta": [
       "PROCV(A2;A2:C3;3;FALSO)",
       "\"Sem cadastro\""
      ],
      "explicacao": "Busca primeiro, mensagem depois — e só o #N/D é traduzido.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "O PROCX dispensa o SENÃODISP na maioria dos casos, porque já tem o 4º argumento \"se_não_encontrar\" embutido.",
      "resposta": true,
      "explicacao": "Boa memória do módulo 8! No PROCX, o tratamento do \"não achei\" vem de fábrica."
     }
    ]
   },
   {
    "id": "t2-m11-l4",
    "titulo": "Caso prático: relatório blindado",
    "teoria": {
     "eyebrow": "Revisão aplicada",
     "titulo": "A planilha que não quebra",
     "intro": "Missão final da trilha: um consultor entrega uma planilha de consulta de preços onde o cliente digita um código e vê produto e preço. Blindagem completa: ARRUMAR no código digitado (mata o espaço fantasma), SENÃODISP na busca (mensagem amigável no \"não achei\"), e divisões protegidas com SEERRO. O resultado: a planilha aguenta usuário de verdade — que digita errado, cola com espaço e apaga o que não devia.",
     "pontos": [
      [
       "ARRUMAR na entrada",
       "limpa o que o usuário digitou"
      ],
      [
       "SENÃODISP na busca",
       "\"não achei\" vira mensagem"
      ],
      [
       "SEERRO nas divisões",
       "médias e taxas não explodem"
      ],
      [
       "mentalidade",
       "planilha boa é a que sobrevive aos outros"
      ]
     ],
     "mostrar_planilha": true
    },
    "planilha": {
     "linhas": [
      [
       "Digite o código:",
       "ME-03 ",
       "",
       ""
      ],
      [
       "",
       "",
       "",
       ""
      ],
      [
       "Código",
       "Produto",
       "Preço",
       ""
      ],
      [
       "AR-01",
       "Armário",
       850,
       ""
      ],
      [
       "ME-03",
       "Mesa",
       610,
       ""
      ]
     ]
    },
    "exercicios": [
     {
      "tipo": "escolha",
      "pergunta": "O cliente digitou \"ME-03 \" (com espaço no fim) em B1. Por que =PROCV(B1;A4:C5;3;FALSO) dá #N/D?",
      "opcoes": [
       "O espaço torna o texto diferente de \"ME-03\" da base",
       "O código não existe",
       "A matriz está errada",
       "Faltou o FALSO"
      ],
      "resposta": "O espaço torna o texto diferente de \"ME-03\" da base",
      "explicacao": "Para a correspondência exata, \"ME-03 \" ≠ \"ME-03\". O bug mais invisível do Excel corporativo.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Monte a busca com a entrada LIMPA:",
      "molde": "=PROCV(___(___);A4:C5;3;FALSO)",
      "banco": [
       "ARRUMAR",
       "B1",
       "MAIÚSCULA",
       "A4",
       "\"B1\""
      ],
      "resposta": [
       "ARRUMAR",
       "B1"
      ],
      "explicacao": "ARRUMAR(B1) entrega \"ME-03\" limpo ao PROCV → 610. Uma função dentro da outra, resolvendo na origem.",
      "mostrar_planilha": true
     },
     {
      "tipo": "tokens",
      "pergunta": "Agora a blindagem completa — busca limpa + mensagem amigável:",
      "molde": "=___(PROCV(ARRUMAR(B1);A4:C5;3;FALSO);___)",
      "banco": [
       "SENÃODISP",
       "\"Código não encontrado\"",
       "SEERRO",
       "0"
      ],
      "resposta": [
       "SENÃODISP",
       "\"Código não encontrado\""
      ],
      "explicacao": "SENÃODISP: o \"não achei\" vira mensagem, e bugs reais continuariam visíveis para você consertar.",
      "mostrar_planilha": true
     },
     {
      "tipo": "ordenar",
      "pergunta": "Ordene o checklist de blindagem de uma planilha de consulta:",
      "passos": [
       "Testar a fórmula crua e confirmar que funciona",
       "Limpar a entrada do usuário com ARRUMAR",
       "Envolver a busca com SENÃODISP e mensagem amigável",
       "Proteger divisões com SEERRO",
       "Testar digitando errado de propósito"
      ],
      "explicacao": "Funciona primeiro, blinda depois, e o teste final é sabotar a si mesmo — como o usuário fará.",
      "mostrar_planilha": true
     },
     {
      "tipo": "vf",
      "afirmacao": "Com este módulo, você fecha a Trilha 2 sabendo ler qualquer erro do Excel e escolher o tratamento certo para cada um.",
      "resposta": true,
      "explicacao": "Diagnóstico (lição 1) + cobertor (SEERRO) + bisturi (SENÃODISP) + blindagem na prática. Trilha 2 concluída! 🎉"
     }
    ]
   }
  ]
 }
];

// ---------- Design tokens ----------
const C = { green: "#107C41", greenDark: "#0B5C30", navy: "#0B3B66", ink: "#1A1D21", paper: "#FFFFFF", mist: "#F2F5F3", line: "#D7DEDA", red: "#D64545", redDark: "#A83232", gold: "#E8A13C" };
const font = { ui: "'Segoe UI', system-ui, -apple-system, sans-serif", mono: "'Cascadia Code', 'Consolas', 'Menlo', monospace" };

// ---------- Motor: utilidades ----------
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function substitute(text, params) {
  if (typeof text !== "string") return text;
  return text.replace(/\{(\w+)\}/g, (_, k) => (params[k] !== undefined ? params[k] : `{${k}}`));
}

// Resolve variante + embaralha: transforma o JSON num exercício pronto pra tela
function prepareExercise(ex) {
  let merged = { ...ex };
  if (ex.variantes && ex.variantes.length) {
    const v = ex.variantes[Math.floor(Math.random() * ex.variantes.length)];
    // a variante traz parâmetros e resposta, mas NUNCA pode trocar o tipo do
    // exercício (se um parâmetro se chamar "tipo", a tela deixa de ser desenhada)
    merged = { ...ex, ...v, tipo: ex.tipo };
    merged.pergunta = substitute(ex.pergunta, v);
    if (merged.opcoes) merged.opcoes = merged.opcoes.map((o) => substitute(o, v));
  }
  if (merged.tipo === "escolha" && merged.opcoes) merged.opcoesEmbaralhadas = shuffle(merged.opcoes);
  if (merged.tipo === "ligar_pares") {
    merged.esq = shuffle(Object.keys(merged.pares));
    // cada item da direita tem ID próprio: rótulos repetidos (ex: dois "Texto")
    // continuam sendo botões independentes
    merged.dir = shuffle(Object.values(merged.pares).map((label, i) => ({ id: `d${i}`, label })));
  }
  if (merged.tipo === "ordenar") merged.passosEmbaralhados = shuffle(merged.passos);
  if (merged.tipo === "tokens") {
    merged.bancoEmbaralhado = shuffle(merged.banco);
    merged.lacunas = merged.molde.split("___").length - 1;
  }
  return merged;
}

// Monta a REVISÃO do módulo: sorteia exercícios das lições, dando preferência
// aos que exigem produzir (montar/digitar/achar erro) em vez de só reconhecer.
function montarRevisao(mod) {
  const banco = [];
  mod.licoes.forEach((l) => l.exercicios.forEach((ex) => banco.push({ ...ex, _planilha: l.planilha })));
  const prioridade = (t) => (["tokens", "digitar", "achar_erro", "ordenar"].includes(t) ? 0 : 1);
  const escolhidos = shuffle(banco).sort((a, b) => prioridade(a.tipo) - prioridade(b.tipo)).slice(0, 12);
  return { id: `${mod.id}-revisao`, titulo: "Revisão do módulo", revisao: true, exercicios: shuffle(escolhidos) };
}

// ---------- Barra de fórmulas com lacunas (exercício tokens) ----------
function FormulaBar({ molde, picked, state }) {
  const partes = molde.split("___");
  const border = state === "correct" ? C.green : state === "wrong" ? C.red : C.line;
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "14px 0", borderRadius: 10, overflow: "hidden", border: `2px solid ${border}`, transition: "border-color .2s" }}>
      <div style={{ padding: "10px 12px", background: "#EAEFEC", fontFamily: font.mono, fontStyle: "italic", color: "#5A6660", fontWeight: 700, fontSize: 14 }}>fx</div>
      <div style={{ padding: "10px 12px", fontFamily: font.mono, fontSize: 15, background: "#fff", flex: 1, whiteSpace: "nowrap", overflowX: "auto" }}>
        {partes.map((p, i) => (
          <span key={i}>
            <span style={{ color: C.ink }}>{p}</span>
            {i < partes.length - 1 && (
              <span style={{ display: "inline-block", minWidth: 44, textAlign: "center", borderBottom: `2px solid ${picked[i] ? C.green : "#B2BDB7"}`, color: picked[i] ? C.green : "#B2BDB7", fontWeight: 700, margin: "0 2px" }}>
                {picked[i] || "\u00A0\u00A0\u00A0"}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- Componentes visuais do curso Excel ----------
function colLetters(n) {
  return Array.from({ length: n }, (_, i) => String.fromCharCode(65 + i));
}

function Sheet({ linhas, destaque, clicavel, selecionada, onCelula, feedbackCel, celulaAtiva }) {
  const nCols = Math.max(...linhas.map((r) => r.length));
  const letters = colLetters(nCols);
  const isHL = (r, c) => destaque && destaque.some(([hc, hr]) => hc === letters[c] && hr === r + 1);
  const ativa = selecionada || celulaAtiva; // célula com "seleção do Excel"
  const [colAtiva, linAtiva] = ativa ? [ativa.replace(/\d+/g, ""), parseInt(ativa.replace(/\D+/g, ""), 10)] : [null, null];
  const corSel = feedbackCel === "wrong" ? C.red : C.green;
  return (
    <div style={{ borderRadius: "0 0 10px 10px", overflow: "hidden", border: `1px solid ${C.line}`, borderTop: "none" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: font.mono, fontSize: 13 }}>
        <thead>
          <tr>
            <th style={hdr}> </th>
            {letters.map((l) => (
              <th key={l} style={{ ...hdr, background: l === colAtiva ? "#CFE3D6" : hdr.background, color: l === colAtiva ? C.greenDark : hdr.color, borderBottom: l === colAtiva ? `2px solid ${corSel}` : hdr.border }}>{l}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((row, r) => (
            <tr key={r}>
              <td style={{ ...hdr, background: r + 1 === linAtiva ? "#CFE3D6" : hdr.background, color: r + 1 === linAtiva ? C.greenDark : hdr.color, borderRight: r + 1 === linAtiva ? `2px solid ${corSel}` : hdr.border }}>{r + 1}</td>
              {letters.map((l, c) => {
                const addr = `${l}${r + 1}`;
                const sel = ativa === addr;
                let bg = "#fff";
                if (isHL(r, c)) bg = "#FFF4D6";
                if (sel && selecionada) bg = feedbackCel === "wrong" ? "#FBEAEA" : "#E9F4EE";
                return (
                  <td
                    key={c}
                    onClick={clicavel ? () => onCelula(addr) : undefined}
                    style={{
                      ...cell,
                      position: "relative",
                      fontWeight: r === 0 ? 700 : 400,
                      textAlign: typeof row[c] === "number" ? "right" : "left",
                      background: bg,
                      cursor: clicavel ? "pointer" : "default",
                      outline: sel ? `2px solid ${corSel}` : "none",
                      outlineOffset: -2,
                    }}
                  >
                    {row[c] !== undefined ? row[c] : ""}
                    {sel && (
                      <span style={{ position: "absolute", right: -1, bottom: -1, width: 7, height: 7, background: corSel, border: "1px solid #fff", zIndex: 2 }} />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Moldura do Excel: caixa de nome + barra de fórmulas em cima da grade
function ExcelFrame({ linhas, ativa, ...sheetProps }) {
  let valor = "";
  if (ativa) {
    const col = ativa.replace(/\d+/g, "").charCodeAt(0) - 65;
    const lin = parseInt(ativa.replace(/\D+/g, ""), 10) - 1;
    if (linhas[lin] && linhas[lin][col] !== undefined) valor = String(linhas[lin][col]);
  }
  return (
    <div style={{ margin: "14px 0" }}>
      <div style={{ display: "flex", alignItems: "stretch", border: `1px solid ${C.line}`, borderRadius: "10px 10px 0 0", overflow: "hidden", background: "#F7F9F8" }}>
        <div style={{ width: 64, padding: "8px 10px", fontFamily: font.mono, fontSize: 13, fontWeight: 700, color: ativa ? C.greenDark : "#B2BDB7", background: "#fff", borderRight: `1px solid ${C.line}`, textAlign: "center" }}>
          {ativa || "\u00A0"}
        </div>
        <div style={{ padding: "8px 10px", fontFamily: font.mono, fontStyle: "italic", fontSize: 13, fontWeight: 700, color: "#5A6660", borderRight: `1px solid ${C.line}` }}>fx</div>
        <div style={{ flex: 1, padding: "8px 10px", fontFamily: font.mono, fontSize: 13, color: C.ink, background: "#fff", whiteSpace: "nowrap", overflowX: "auto" }}>
          {valor || "\u00A0"}
        </div>
      </div>
      <Sheet linhas={linhas} celulaAtiva={ativa} {...sheetProps} />
    </div>
  );
}

// ---------- Faixa de Opções realista: mostra ONDE fica o recurso ----------
const ICONES = { negrito: Bold, italico: Italic, sublinhado: Underline, balde: PaintBucket, tabela: Table, filtro: Filter, congelar: Snowflake, az: ArrowDownAZ, buscar: Search, soma: Sigma, porcento: Percent, moeda: DollarSign, janela: AppWindow, zoom: ZoomIn, cem: Maximize, organizar: LayoutGrid, alinhar: AlignCenter, fonte: Type, pincel: Brush, copiar: Copy, colunas: Columns3, quebra: WrapText };
const GUIAS = ["Arquivo", "Página Inicial", "Inserir", "Fórmulas", "Dados", "Revisão", "Exibir"];

function RibbonBtn({ icone, rotulo, alvo, menu, clicavel, selecionado, feedback, onClick, refAlvo }) {
  const Icon = ICONES[icone] || AppWindow;
  const marcado = alvo && !clicavel; // teoria: destaca o alvo
  const sel = clicavel && selecionado === rotulo;
  const cor = sel ? (feedback === "wrong" ? C.red : C.green) : C.green;
  const destaque = marcado || sel;
  return (
    <button ref={marcado || sel ? refAlvo : undefined} onClick={clicavel && !feedback ? () => onClick(rotulo) : undefined} disabled={!clicavel}
      style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "10px 9px 6px", borderRadius: 8, minWidth: 62, border: "none", background: destaque ? (sel && feedback === "wrong" ? "#FBEAEA" : "#E9F4EE") : "transparent", outline: destaque ? `2px solid ${cor}` : "none", cursor: clicavel ? "pointer" : "default", flexShrink: 0 }}>
      {marcado && (
        <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 3, background: C.green, color: "#fff", fontFamily: font.ui, fontSize: 10, fontWeight: 800, borderRadius: 10, padding: "2px 7px", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(16,124,65,.35)", zIndex: 2 }}>
          <MapPin size={10} /> é aqui!
        </span>
      )}
      <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Icon size={22} color={destaque ? (sel && feedback === "wrong" ? C.redDark : C.greenDark) : "#444B47"} />
        {menu && <ChevronDown size={11} color="#8A948F" />}
      </span>
      <span style={{ fontFamily: font.ui, fontSize: 10.5, fontWeight: destaque ? 800 : 500, color: destaque ? (sel && feedback === "wrong" ? C.redDark : C.greenDark) : "#444B47", textAlign: "center", lineHeight: 1.15, maxWidth: 82 }}>{rotulo}</span>
    </button>
  );
}

function Ribbon({ guia, grupos = [], clicavel, selecionado, onSelecionar, feedback }) {
  const tabRef = useRef(null);
  const alvoRef = useRef(null);
  const tabsBox = useRef(null);
  const btnsBox = useRef(null);
  useEffect(() => {
    // centraliza a guia ativa e o botão-alvo DENTRO da faixa.
    // (scrollIntoView rolaria também a página inteira para o lado, desalinhando a tela)
    const centralizar = (caixa, el) => {
      if (!caixa || !el) return;
      caixa.scrollLeft = Math.max(0, el.offsetLeft - (caixa.clientWidth - el.offsetWidth) / 2);
    };
    centralizar(tabsBox.current, tabRef.current);
    centralizar(btnsBox.current, alvoRef.current && alvoRef.current.parentElement);
  }, [guia]);
  return (
    <div style={{ margin: "16px 0", border: `1px solid ${C.line}`, borderRadius: 12, overflow: "hidden", maxWidth: "100%", boxShadow: "0 2px 10px rgba(11,59,102,.07)" }}>
      {/* Barra de título do Excel */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: C.green, padding: "7px 12px" }}>
        <span style={{ width: 18, height: 18, borderRadius: 4, background: "#fff", color: C.green, fontFamily: font.ui, fontWeight: 900, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>X</span>
        <span style={{ fontFamily: font.ui, fontSize: 12, fontWeight: 600, color: "#fff", opacity: 0.95 }}>Pasta1 — Excel</span>
        <span style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          {["#ffffff55", "#ffffff55", "#ffffff55"].map((c, i) => <span key={i} style={{ width: 8, height: 8, borderRadius: 4, background: c }} />)}
        </span>
      </div>
      {/* Guias */}
      <div ref={tabsBox} style={{ display: "flex", gap: 2, background: "#F0F3F1", padding: "6px 8px 0", overflowX: "auto", scrollbarWidth: "none" }}>
        {GUIAS.map((g) => {
          const ativa = g === guia;
          return (
            <div key={g} ref={ativa ? tabRef : undefined} style={{ fontFamily: font.ui, fontSize: 12, fontWeight: ativa ? 800 : 600, color: g === "Arquivo" ? "#fff" : ativa ? C.greenDark : "#6A756F", background: g === "Arquivo" ? "#0B5C30" : ativa ? "#fff" : "transparent", borderRadius: "8px 8px 0 0", padding: "7px 11px", whiteSpace: "nowrap", borderBottom: ativa ? `2.5px solid ${C.green}` : "2.5px solid transparent" }}>
              {g}
            </div>
          );
        })}
      </div>
      {/* Grupos de botões, com separadores como no Excel */}
      <div ref={btnsBox} style={{ background: "#fff", display: "flex", alignItems: "stretch", overflowX: "auto", padding: "14px 8px 0", scrollbarWidth: "none" }}>
        {grupos.map((gr, gi) => (
          <div key={gr.nome} style={{ display: "flex", flexDirection: "column", borderRight: gi < grupos.length - 1 ? `1px solid ${C.line}` : "none", padding: "0 8px", flexShrink: 0 }}>
            <div style={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
              {gr.botoes.map((bt) => (
                <RibbonBtn key={bt.rotulo} {...bt} clicavel={clicavel} selecionado={selecionado} feedback={feedback} onClick={onSelecionar} refAlvo={alvoRef} />
              ))}
            </div>
            <div style={{ marginTop: "auto", padding: "6px 0 5px", fontFamily: font.ui, fontSize: 10.5, fontWeight: 600, color: "#8A948F", textAlign: "center" }}>{gr.nome}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
const hdr = { background: "#EAEFEC", border: "1px solid #D7DEDA", padding: "5px 9px", color: "#5A6660", fontWeight: 600, fontSize: 12, textAlign: "center" };
const cell = { border: "1px solid #E3E9E5", padding: "7px 9px", color: C.ink };

function Btn({ children, onClick, color = C.green, dark = C.greenDark, disabled, full }) {
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ fontFamily: font.ui, fontWeight: 800, fontSize: 15, letterSpacing: 0.5, textTransform: "uppercase", color: "#fff", background: disabled ? "#C9D2CD" : color, border: "none", borderBottom: `4px solid ${disabled ? "#B2BDB7" : dark}`, borderRadius: 14, padding: "13px 26px", width: full ? "100%" : "auto", cursor: disabled ? "default" : "pointer" }}>
      {children}
    </button>
  );
}

// ---------- App ----------
// ---------- Feedback (formulário Tally) ----------
// Cole aqui o ID do seu formulário: em tally.so/r/XXXXXX, o ID é o XXXXXX.
// Enquanto estiver vazio, os botões de feedback ficam escondidos.
const TALLY_ID = "44ZaRX";

// Formulário de e-mail (lista de novidades). Mesmo esquema: cole o ID do 2º formulário.
const TALLY_EMAIL_ID = "lbpajk";

// Endereço público do app e perfil (usados no card compartilhável)
const LINK_APP = "atalho-pwa.vercel.app";
const PERFIL_IG = "@aprendanoatalho";
// Só convida depois que a pessoa concluiu esta quantidade de lições (já sentiu valor).
const PEDIR_EMAIL_APOS = 2;

// Abre o formulário POR CIMA do app, já com o contexto preenchido.
function abrirFeedback(contexto) {
  if (!TALLY_ID) return;
  const hiddenFields = {
    ...contexto,
    tela: `${window.innerWidth}x${window.innerHeight}`,
    navegador: navigator.userAgent.slice(0, 120),
    versao: "1.1",
  };
  const abrir = () =>
    window.Tally.openPopup(TALLY_ID, { layout: "modal", width: 460, overlay: true, autoClose: 2500, hiddenFields });
  if (window.Tally) return abrir();
  const s = document.createElement("script");
  s.src = "https://tally.so/widgets/embed.js";
  s.onload = abrir;
  // sem internet ou script bloqueado: abre o formulário numa aba nova
  s.onerror = () => window.open(`https://tally.so/r/${TALLY_ID}?` + new URLSearchParams(hiddenFields), "_blank");
  document.body.appendChild(s);
}

// Abre o convite de e-mail; avisa de volta quando a pessoa enviar
function abrirCaptacaoEmail(contexto, aoEnviar) {
  if (!TALLY_EMAIL_ID) return;
  const abrir = () =>
    window.Tally.openPopup(TALLY_EMAIL_ID, {
      layout: "modal", width: 460, overlay: true, autoClose: 2000,
      hiddenFields: { ...contexto, versao: "1.1" },
      onSubmit: () => aoEnviar && aoEnviar(),
    });
  if (window.Tally) return abrir();
  const s = document.createElement("script");
  s.src = "https://tally.so/widgets/embed.js";
  s.onload = abrir;
  s.onerror = () => window.open(`https://tally.so/r/${TALLY_EMAIL_ID}`, "_blank");
  document.body.appendChild(s);
}

// Evento no Vercel Analytics (mostra onde as pessoas param, sem ninguém precisar escrever)
function track(nome, dados) {
  try { if (window.va) window.va("event", { name: nome, data: dados }); } catch (e) {}
}

// Link discreto de feedback
function LinkFeedback({ texto, onClick, centro }) {
  if (!TALLY_ID) return null;
  return (
    <button onClick={onClick}
      style={{ display: "block", margin: centro ? "18px auto 0" : "14px 0 0", background: "none", border: "none",
               fontFamily: font.ui, fontSize: 13, fontWeight: 700, color: "#8A948F", textDecoration: "underline",
               cursor: "pointer", padding: 4 }}>
      {texto}
    </button>
  );
}

export default function App() {
  const [tela, setTela] = useState("home"); // home | teoria | licao | fim
  const [licaoIdx, setLicaoIdx] = useState(0);
  // ---- Persistência local (Fase 0: sem backend) ----
  const carregar = () => { try { return JSON.parse(localStorage.getItem("atalho")) || {}; } catch { return {}; } };
  const salvarLocal = (d) => { try { localStorage.setItem("atalho", JSON.stringify({ ...carregar(), ...d })); } catch {} };
  const [concluidas, setConcluidas] = useState(() => carregar().concluidas || []);
  const [xpTotal, setXpTotal] = useState(() => carregar().xpTotal || 0);
  const [streak, setStreak] = useState(() => carregar().streak || 0);
  const [emailStatus, setEmailStatus] = useState(() => carregar().email || null); // "feito" | "depois" | null
  const [notas, setNotas] = useState(() => carregar().notas || {});   // melhor aproveitamento por lição
  const [licaoObj, setLicaoObj] = useState(null);                      // lição atual (normal ou revisão)
  const [ultimaLicao, setUltimaLicao] = useState(null);                // só na sessão: volta a lista nela
  const [notaFinal, setNotaFinal] = useState(0);
  const [copiado, setCopiado] = useState(false);
  const [exs, setExs] = useState([]);
  const [idx, setIdx] = useState(0);
  const [vidas, setVidas] = useState(5);
  const [xp, setXp] = useState(0);
  const [erros, setErros] = useState(0);
  const [feedback, setFeedback] = useState(null);

  // estados por exercício
  const [sel, setSel] = useState(null);
  const [digitado, setDigitado] = useState("");
  const [celula, setCelula] = useState(null);
  const [ordem, setOrdem] = useState([]);
  const [ligacoes, setLigacoes] = useState({});
  const [esqSel, setEsqSel] = useState(null);
  const [flash, setFlash] = useState(null);
  const [modIdx, setModIdx] = useState(0);
  const [picked, setPicked] = useState([]);
  const [usados, setUsados] = useState([]);

  const modulo = MODULOS[modIdx];
  const licoes = modulo.licoes;
  const licao = licaoObj || licoes[licaoIdx];
  const planilhaAtual = (ex0 => (ex0 && ex0._planilha) || licao.planilha)(exs[idx]);
  const douradasDoModulo = (mod) => mod.licoes.filter((l) => notas[l.id] === 100).length;
  const ex = exs[idx];

  // Ao trocar de tela ou de exercício, volta ao topo:
  // sem isso a página herda a rolagem anterior e abre "no meio"
  useEffect(() => {
    if (tela === "home" && ultimaLicao) {
      // volta a lista na altura da lição recém-concluída (e não no topo)
      const el = document.getElementById("licao-" + ultimaLicao);
      if (el) { el.scrollIntoView({ block: "center", inline: "nearest" }); return; }
    }
    window.scrollTo(0, 0);
    if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
  }, [tela, idx, licaoIdx, modIdx]);

  const resetEx = () => { setSel(null); setDigitado(""); setCelula(null); setOrdem([]); setLigacoes({}); setEsqSel(null); setFlash(null); setPicked([]); setUsados([]); setFeedback(null); };

  const iniciarLicao = (mi, li) => {
    const mod = MODULOS[mi];
    // li igual ao número de lições = revisão do módulo (montada na hora)
    const l = li < mod.licoes.length ? mod.licoes[li] : montarRevisao(mod);
    setModIdx(mi); setLicaoIdx(li); setLicaoObj(l);
    setExs(l.exercicios.map(prepareExercise)); // variantes + embaralhamento a cada início
    track("licao_iniciada", { licao: l.id, modulo: mod.titulo });
    setIdx(0); setXp(0); setErros(0);
    setVidas(5);              // vidas cheias a cada lição — sem bloqueio nesta fase
    resetEx();
    setTela(l.revisao ? "licao" : "teoria");  // revisão não tem teoria
  };

  const verificar = () => {
    let ok = false;
    if (ex.tipo === "escolha") ok = sel === ex.resposta;
    if (ex.tipo === "vf") ok = sel === ex.resposta;
    if (ex.tipo === "digitar") {
      const t = digitado.trim().toLowerCase();
      ok = t === String(ex.resposta).toLowerCase() || (ex.aceitar || []).map((a) => a.toLowerCase()).includes(t);
    }
    if (ex.tipo === "clicar_celula") ok = celula === ex.alvo;
    if (ex.tipo === "ordenar") ok = ordem.length === ex.passos.length && ordem.every((p, i) => p === ex.passos[i]);
    if (ex.tipo === "achar_erro") ok = sel === ex.indice_errado;
    if (ex.tipo === "clicar_ribbon") ok = sel === ex.alvo;
    if (ex.tipo === "tokens") ok = picked.length === ex.resposta.length && picked.every((p, i) => p === ex.resposta[i]);
    if (ok) setXp((x) => x + 10);
    else { setVidas((v) => Math.max(0, v - 1)); setErros((e) => e + 1); }
    setFeedback(ok ? "correct" : "wrong");
  };

  const proximo = () => {
    if (idx + 1 >= exs.length) {
      const novasConcluidas = concluidas.includes(licao.id) ? concluidas : [...concluidas, licao.id];
      setConcluidas(novasConcluidas);
      const novoXpTotal = xpTotal + xp;
      setXpTotal(novoXpTotal);
      // ofensiva: dia novo em sequência soma; mesmo dia mantém; buraco reinicia
      const hoje = new Date().toDateString();
      const ontem = new Date(Date.now() - 86400000).toDateString();
      const dadosSalvos = carregar();
      let novaStreak = streak;
      if (dadosSalvos.ultimoDia !== hoje) novaStreak = dadosSalvos.ultimoDia === ontem ? streak + 1 : 1;
      setStreak(novaStreak);
      // aproveitamento desta tentativa; guarda sempre o MELHOR resultado
      const pct = Math.round((exs.length / (exs.length + erros)) * 100);
      const novasNotas = { ...notas, [licao.id]: Math.max(notas[licao.id] || 0, pct) };
      setNotas(novasNotas); setNotaFinal(pct);
      setUltimaLicao(licao.id);
      salvarLocal({ concluidas: novasConcluidas, xpTotal: novoXpTotal, streak: novaStreak, ultimoDia: hoje, notas: novasNotas });
      track("licao_concluida", { licao: licao.id, erros, xp, aproveitamento: pct });
      // módulo inteiro (lições + revisão) concluído?
      const idsDoModulo = [...modulo.licoes.map((l) => l.id), `${modulo.id}-revisao`];
      const moduloCompleto = idsDoModulo.every((id) => novasConcluidas.includes(id));
      const jaEra = idsDoModulo.every((id) => concluidas.includes(id));
      if (moduloCompleto && !jaEra) {
        track("modulo_concluido", { modulo: modulo.id });
        setCopiado(false);
        setTela("modulo");
      } else setTela("fim");
    } else { setIdx(idx + 1); resetEx(); }
  };

  const compartilharModulo = async () => {
    const douradas = douradasDoModulo(modulo);
    const texto = `Terminei o módulo "${modulo.titulo}" no Atalho — ${douradas} de ${modulo.licoes.length} lições com 100%! 🎉\n` +
      `Aprenda Excel de graça, em lições de 3 minutos: ${LINK_APP}\n${PERFIL_IG}`;
    track("compartilhou_modulo", { modulo: modulo.id });
    try {
      if (navigator.share) { await navigator.share({ title: "Atalho — aprenda Excel", text: texto }); return; }
    } catch (e) { /* cancelou o compartilhamento */ }
    try { await navigator.clipboard.writeText(texto); setCopiado(true); } catch (e) {}
  };

  const tentarPar = (item) => {
    if (!esqSel) return;
    if (ex.pares[esqSel] === item.label) {
      const m = { ...ligacoes, [esqSel]: item.id }; // guarda o ID, não o rótulo
      setLigacoes(m); setEsqSel(null);
      if (Object.keys(m).length === ex.esq.length) { setXp((x) => x + 10); setFeedback("correct"); }
    } else {
      setFlash(item.id); setVidas((v) => Math.max(0, v - 1)); setErros((e) => e + 1);
      setTimeout(() => setFlash(null), 500); setEsqSel(null);
    }
  };

  const podeVerificar =
    (ex && ex.tipo === "escolha" && sel !== null) ||
    (ex && ex.tipo === "vf" && sel !== null) ||
    (ex && ex.tipo === "digitar" && digitado.trim() !== "") ||
    (ex && ex.tipo === "clicar_celula" && celula !== null) ||
    (ex && ex.tipo === "ordenar" && ordem.length === (ex.passos || []).length) ||
    (ex && ex.tipo === "achar_erro" && sel !== null) ||
    (ex && ex.tipo === "clicar_ribbon" && sel !== null) ||
    (ex && ex.tipo === "tokens" && picked.length === ex.lacunas);

  /* ---------- HOME: lista de lições do módulo ---------- */
  if (tela === "home")
    return (
      <Shell>
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontFamily: font.ui, fontSize: 34, fontWeight: 900, color: C.navy, letterSpacing: -1 }}>
            atalho<span style={{ color: C.green }}>.</span>
          </div>
          <div style={{ fontFamily: font.ui, fontSize: 13, color: "#5A6660" }}>o caminho mais curto para dominar as ferramentas do trabalho</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 18, margin: "14px 0 20px", fontFamily: font.ui, fontWeight: 700, color: C.navy }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Flame size={18} color={C.gold} fill={C.gold} /> {streak} {streak === 1 ? "dia" : "dias"}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Zap size={18} color={C.gold} fill={C.gold} /> {xpTotal} XP</span>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Heart size={18} color={C.red} fill={C.red} /> {vidas}</span>
        </div>

        {/* Seletor de curso (estrutura multi-curso) */}
        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          <CursoChip nome="Excel" cor={C.green} ativo />
          <CursoChip nome="Word" cor="#185ABD" bloqueado />
          <CursoChip nome="PowerPoint" cor="#C43E1C" bloqueado />
        </div>

        {MODULOS.map((mod, mi) => (
          <div key={mod.id} style={{ marginBottom: 22 }}>
            <div style={{ fontFamily: font.ui, fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: C.green, textTransform: "uppercase" }}>
              Trilha {mod.trilha} · {mod.trilha === 1 ? 'Iniciante' : 'Intermediário'}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "2px 0 14px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: font.ui, fontSize: 20, fontWeight: 800, color: C.navy }}>
                Módulo {mi + 1} · {mod.titulo}
              </div>
              {douradasDoModulo(mod) > 0 && (
                <span style={{ fontFamily: font.ui, fontSize: 12.5, fontWeight: 800, color: C.gold }}>
                  ★ {douradasDoModulo(mod)} de {mod.licoes.length} douradas
                </span>
              )}
            </div>
            {[...mod.licoes, { id: `${mod.id}-revisao`, titulo: "Revisão do módulo", revisao: true }].map((l, li) => {
              const done = concluidas.includes(l.id);
              const nota = notas[l.id];
              const ouro = nota === 100;
              const corBorda = ouro ? C.gold : done ? C.green : C.line;
              return (
                <button key={l.id} id={"licao-" + l.id} onClick={() => iniciarLicao(mi, li)}
                  style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", background: ouro ? "#FDF6E8" : done ? "#E9F4EE" : "#fff", border: `2px solid ${corBorda}`, borderBottom: `4px solid ${corBorda}`, borderRadius: 14, padding: "14px 16px", marginBottom: 10, cursor: "pointer" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 19, background: ouro ? C.gold : done ? C.green : C.mist, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {ouro ? <Zap size={19} color="#fff" fill="#fff" /> : done ? <Check size={20} color="#fff" /> : l.revisao ? <Flame size={18} color={C.navy} /> : <BookOpen size={18} color={C.navy} />}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontFamily: font.ui, fontSize: 15, fontWeight: 800, color: C.navy }}>
                      {l.revisao ? "Revisão do módulo" : `Lição ${li + 1} · ${l.titulo}`}
                    </div>
                    <div style={{ fontFamily: font.ui, fontSize: 12.5, color: "#5A6660" }}>
                      {l.revisao ? "12 exercícios sorteados de todo o módulo" : `Teoria + ${l.exercicios.length} exercícios`}
                      {nota !== undefined ? ` · melhor: ${nota}%` : ""}
                    </div>
                  </div>
                  {nota !== undefined && (
                    <div style={{ fontFamily: font.ui, fontSize: 14, fontWeight: 900, color: ouro ? "#B07D18" : C.greenDark, flexShrink: 0 }}>
                      {ouro ? "100%" : `${nota}%`}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ))}
        <LinkFeedback centro texto="Enviar feedback ou reportar um erro" onClick={() => abrirFeedback({ origem: "tela_inicial", licoes_concluidas: concluidas.length })} />
      </Shell>
    );

  /* ---------- TEORIA ---------- */
  if (tela === "teoria") {
    const t = licao.teoria;
    return (
      <Shell>
        <BackBar onBack={() => setTela("home")} />
        <div style={{ fontFamily: font.ui, fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: C.green, textTransform: "uppercase" }}>{t.eyebrow}</div>
        <div style={{ fontFamily: font.ui, fontSize: 30, fontWeight: 900, color: C.navy, margin: "2px 0 10px" }}>{t.titulo}</div>
        <div style={{ fontFamily: font.ui, fontSize: 15, color: C.ink, lineHeight: 1.55 }}>{t.intro}</div>
        {t.sintaxe && (
          <div style={{ display: "flex", alignItems: "center", margin: "14px 0 2px", borderRadius: 10, overflow: "hidden", border: `2px solid ${C.line}` }}>
            <div style={{ padding: "10px 12px", background: "#EAEFEC", fontFamily: font.mono, fontStyle: "italic", color: "#5A6660", fontWeight: 700, fontSize: 14 }}>fx</div>
            <div style={{ padding: "10px 12px", fontFamily: font.mono, fontSize: 15, color: C.ink, background: "#fff", flex: 1 }}>{t.sintaxe}</div>
          </div>
        )}
        {t.pontos && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" }}>
            {t.pontos.map(([nome, desc]) => (
              <div key={nome} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                <span style={{ fontFamily: font.mono, fontSize: 12.5, fontWeight: 700, color: C.green, background: "#E9F4EE", borderRadius: 6, padding: "2px 8px", whiteSpace: "nowrap" }}>{nome}</span>
                <span style={{ fontFamily: font.ui, fontSize: 13.5, color: "#4A554F" }}>{desc}</span>
              </div>
            ))}
          </div>
        )}
        {t.ribbon && (
          <div>
            <div style={{ fontFamily: font.ui, fontSize: 13, fontWeight: 800, color: C.navy, marginTop: 14 }}>Onde fica no Excel:</div>
            <Ribbon {...t.ribbon} />
          </div>
        )}
        {t.mostrar_planilha && <ExcelFrame linhas={licao.planilha.linhas} ativa={t.celula_ativa} destaque={t.destaque} />}
        <div style={{ marginTop: 20 }}>
          <Btn full onClick={() => setTela("licao")}>Entendi, vamos praticar</Btn>
        </div>
      </Shell>
    );
  }

  /* ---------- MÓDULO CONCLUÍDO (card compartilhável) ---------- */
  if (tela === "modulo") {
    const douradas = douradasDoModulo(modulo);
    const totalLicoes = modulo.licoes.length;
    return (
      <Shell>
        <div style={{ background: C.mist, border: `3px solid ${C.green}`, borderRadius: 22, padding: "26px 20px 18px", textAlign: "center", marginTop: 8 }}>
          <div style={{ fontSize: 46, lineHeight: 1 }}>🏆</div>
          <div style={{ fontFamily: font.ui, fontSize: 12, fontWeight: 800, letterSpacing: 1.4, color: C.green, textTransform: "uppercase", marginTop: 10 }}>
            Módulo concluído
          </div>
          <div style={{ fontFamily: font.ui, fontSize: 25, fontWeight: 900, color: C.navy, margin: "4px 0 14px", lineHeight: 1.2 }}>
            {modulo.titulo}
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 16 }}>
            <Stat label="Lições" value={totalLicoes} color={C.green} />
            <Stat label="Douradas" value={douradas} color={C.gold} />
            <Stat label="XP total" value={xpTotal} color={C.navy} />
          </div>
          {/* assinatura: fica no print e leva a pessoa até a gente */}
          <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
              <span style={{ width: 24, height: 24, borderRadius: 7, background: C.green, borderBottom: `3px solid ${C.greenDark}`, color: "#fff", fontFamily: font.ui, fontWeight: 900, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>a.</span>
              <span style={{ fontFamily: font.ui, fontSize: 15, fontWeight: 900, color: C.navy }}>atalho<span style={{ color: C.green }}>.</span></span>
            </div>
            <div style={{ fontFamily: font.ui, fontSize: 11.5, color: "#5A6660", marginTop: 5, whiteSpace: "nowrap" }}>{PERFIL_IG} · {LINK_APP}</div>
          </div>
        </div>

        <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
          <Btn full onClick={compartilharModulo}>Compartilhar conquista</Btn>
          <Btn full color={C.navy} dark="#082A4A" onClick={() => setTela("home")}>Voltar às lições</Btn>
        </div>
        {copiado && (
          <div style={{ fontFamily: font.ui, fontSize: 13, fontWeight: 700, color: C.greenDark, textAlign: "center", marginTop: 10 }}>
            ✓ Texto copiado — é só colar onde quiser
          </div>
        )}
        <div style={{ fontFamily: font.ui, fontSize: 12.5, color: "#8A948F", textAlign: "center", marginTop: 12, lineHeight: 1.5 }}>
          Dica: um print desta tela já leva o nome e o link do app junto.
        </div>
      </Shell>
    );
  }

  /* ---------- FIM ---------- */
  if (tela === "fim") {
    const total = exs.length;
    const acc = notaFinal || Math.round((total / (total + erros)) * 100);
    const melhor = notas[licao.id] || acc;
    return (
      <Shell>
        <div style={{ textAlign: "center", paddingTop: 40 }}>
          <div style={{ fontSize: 56 }}>🏁</div>
          <div style={{ fontFamily: font.ui, fontSize: 24, fontWeight: 900, color: C.navy, margin: "8px 0 18px" }}>Lição concluída!</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 28 }}>
            <Stat label="XP" value={`+${xp}`} color={C.gold} />
            <Stat label="Precisão" value={`${acc}%`} color={C.green} />
            <Stat label="Vidas" value={vidas} color={C.red} />
          </div>
          <div style={{ fontFamily: font.ui, fontSize: 14, color: acc === 100 ? "#B07D18" : "#5A6660", fontWeight: 700, marginBottom: 16, lineHeight: 1.5 }}>
            {acc === 100
              ? "⭐ Selo dourado conquistado nesta lição!"
              : `Melhor até agora: ${melhor}%. Refaça e chegue aos 100% para ganhar o selo dourado.`}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Btn full onClick={() => iniciarLicao(modIdx, licaoIdx)}>Refazer (embaralha tudo)</Btn>
            <Btn full color={C.navy} dark="#082A4A" onClick={() => setTela("home")}>Voltar às lições</Btn>
          </div>
          {TALLY_EMAIL_ID && !emailStatus && concluidas.length >= PEDIR_EMAIL_APOS && (
            <div style={{ marginTop: 22, background: C.mist, border: `2px solid ${C.line}`, borderRadius: 16, padding: 16, textAlign: "left" }}>
              <div style={{ fontFamily: font.ui, fontSize: 15.5, fontWeight: 800, color: C.navy }}>
                📬 Quer saber quando o app chegar na Play Store?
              </div>
              <div style={{ fontFamily: font.ui, fontSize: 13, color: "#5A6660", margin: "6px 0 12px", lineHeight: 1.5 }}>
                Deixe seu e-mail e eu aviso quando sair — e quando chegarem trilhas novas. Só novidades do Atalho, e você pode sair quando quiser.
              </div>
              <Btn full onClick={() => { track("email_convite_aberto", { licoes: concluidas.length }); abrirCaptacaoEmail({ licoes_concluidas: concluidas.length, xp_total: xpTotal }, () => { setEmailStatus("feito"); salvarLocal({ email: "feito" }); track("email_cadastrado", {}); }); }}>
                Quero ser avisado
              </Btn>
              <button onClick={() => { setEmailStatus("depois"); salvarLocal({ email: "depois" }); }}
                style={{ display: "block", margin: "10px auto 0", background: "none", border: "none", fontFamily: font.ui, fontSize: 13, fontWeight: 700, color: "#8A948F", cursor: "pointer" }}>
                Agora não
              </button>
            </div>
          )}
          {emailStatus === "feito" && (
            <div style={{ marginTop: 20, fontFamily: font.ui, fontSize: 13.5, fontWeight: 700, color: C.greenDark }}>
              ✓ E-mail cadastrado — te aviso das novidades!
            </div>
          )}
          <LinkFeedback centro texto="Deixar um feedback sobre esta lição" onClick={() => abrirFeedback({
            origem: "fim_da_licao",
            licoes_concluidas: concluidas.length,
            modulo: modulo.titulo,
            licao: `${licao.id} — ${licao.titulo}`,
            precisao: `${acc}%`,
            erros,
          })} />
        </div>
      </Shell>
    );
  }

  /* ---------- LIÇÃO (exercícios) ---------- */
  return (
    <Shell>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <button onClick={() => { track("licao_abandonada", { licao: licao.id, exercicio: idx + 1, de: exs.length }); setTela("home"); }} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <X size={22} color="#8A948F" />
        </button>
        <div style={{ flex: 1, height: 14, background: "#E3E9E5", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ width: `${((feedback === "correct" ? idx + 1 : idx) / exs.length) * 100}%`, height: "100%", background: C.green, borderRadius: 8, transition: "width .4s ease" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: font.ui, fontWeight: 800, color: C.red }}>
          <Heart size={20} color={C.red} fill={C.red} /> {vidas}
        </div>
      </div>

      <div style={{ fontFamily: font.ui, fontSize: 18, fontWeight: 800, color: C.navy }}>
        {ex.tipo === "vf" ? "Verdadeiro ou falso?" : ex.pergunta}
      </div>
      {ex.tipo === "vf" && (
        <div style={{ fontFamily: font.ui, fontSize: 15.5, color: C.ink, marginTop: 8, lineHeight: 1.5, background: C.mist, borderRadius: 12, padding: 14 }}>{ex.afirmacao}</div>
      )}

      {ex.mostrar_planilha && ex.tipo !== "clicar_celula" && planilhaAtual && <ExcelFrame linhas={planilhaAtual.linhas} />}

      {ex.tipo === "clicar_celula" && (
        <ExcelFrame linhas={planilhaAtual.linhas} ativa={celula} clicavel={!feedback} selecionada={celula} onCelula={setCelula} feedbackCel={feedback} />
      )}

      {/* CLICAR_RIBBON: encontrar o botão certo na Faixa de Opções */}
      {ex.tipo === "clicar_ribbon" && (
        <div>
          <Ribbon guia={ex.ribbon.guia} grupos={ex.ribbon.grupos} clicavel selecionado={sel} onSelecionar={setSel} feedback={feedback} />
          <div style={{ fontFamily: font.ui, fontSize: 13, color: "#8A948F", marginTop: -6 }}>Toque no botão certo. Deslize a faixa para o lado se precisar.</div>
        </div>
      )}

      {ex.tipo === "escolha" && (
        <div style={{ marginTop: 14 }}>
          {ex.opcoesEmbaralhadas.map((o) => (
            <button key={o} onClick={() => !feedback && setSel(o)}
              style={{ display: "block", width: "100%", textAlign: "left", fontFamily: font.ui, fontSize: 15, fontWeight: 600, color: sel === o ? C.green : C.ink, background: sel === o ? "#E9F4EE" : "#fff", border: `2px solid ${sel === o ? C.green : C.line}`, borderBottom: `4px solid ${sel === o ? C.green : C.line}`, borderRadius: 12, padding: "12px 16px", marginBottom: 10, cursor: "pointer" }}>
              {o}
            </button>
          ))}
        </div>
      )}

      {ex.tipo === "vf" && (
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {[["Verdadeiro", true], ["Falso", false]].map(([label, val]) => (
            <button key={label} onClick={() => !feedback && setSel(val)}
              style={{ flex: 1, fontFamily: font.ui, fontSize: 16, fontWeight: 800, color: sel === val ? C.green : C.ink, background: sel === val ? "#E9F4EE" : "#fff", border: `2px solid ${sel === val ? C.green : C.line}`, borderBottom: `4px solid ${sel === val ? C.green : C.line}`, borderRadius: 12, padding: "16px", cursor: "pointer" }}>
              {label}
            </button>
          ))}
        </div>
      )}

      {ex.tipo === "digitar" && (
        <input value={digitado} disabled={!!feedback} onChange={(e) => setDigitado(e.target.value)} placeholder="Digite aqui..."
          style={{ marginTop: 16, fontFamily: font.mono, fontSize: 18, fontWeight: 700, width: "100%", boxSizing: "border-box", padding: "14px 16px", borderRadius: 12, outline: "none", border: `2px solid ${feedback === "correct" ? C.green : feedback === "wrong" ? C.red : C.line}`, color: C.ink, background: "#fff" }} />
      )}

      {/* TOKENS: montar fórmula preenchendo lacunas */}
      {ex.tipo === "tokens" && (
        <div>
          <FormulaBar molde={ex.molde} picked={picked} state={feedback} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {ex.bancoEmbaralhado.map((t, i) => {
              const usado = usados.includes(i);
              return (
                <button key={i} disabled={usado || !!feedback}
                  onClick={() => { if (picked.length < ex.lacunas) { setPicked([...picked, t]); setUsados([...usados, i]); } }}
                  style={{ fontFamily: font.mono, fontSize: 15, fontWeight: 700, padding: "9px 14px", borderRadius: 10, border: `2px solid ${C.line}`, borderBottom: `4px solid ${C.line}`, background: usado ? "#EDEFEE" : "#fff", color: usado ? "#C0C7C3" : C.ink, cursor: usado ? "default" : "pointer" }}>
                  {t}
                </button>
              );
            })}
            {picked.length > 0 && !feedback && (
              <button onClick={() => { setPicked([]); setUsados([]); }}
                style={{ fontFamily: font.ui, fontSize: 13, fontWeight: 700, color: C.navy, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>limpar</button>
            )}
          </div>
        </div>
      )}

      {/* ACHAR_ERRO: tocar no pedaço errado da fórmula */}
      {ex.tipo === "achar_erro" && (
        <div style={{ marginTop: 14 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "16px 14px", background: "#fff", border: `2px solid ${C.line}`, borderRadius: 12 }}>
            {ex.tokens.map((t, i) => (
              <button key={i} onClick={() => !feedback && setSel(i)}
                style={{ fontFamily: font.mono, fontSize: 17, fontWeight: 700, padding: "6px 8px", borderRadius: 8, border: "none", background: sel === i ? (feedback === "wrong" ? "#F8E3E3" : "#E9F4EE") : "transparent", color: sel === i ? (feedback === "wrong" ? C.red : C.green) : C.ink, outline: sel === i ? `2px solid ${feedback === "wrong" ? C.red : C.green}` : "none", cursor: "pointer" }}>
                {t}
              </button>
            ))}
          </div>
          <div style={{ fontFamily: font.ui, fontSize: 13, color: "#8A948F", marginTop: 8 }}>Toque na parte incorreta da fórmula.</div>
        </div>
      )}

      {ex.tipo === "ordenar" && (
        <div style={{ marginTop: 14 }}>
          <div style={{ minHeight: 52, border: `2px dashed ${C.line}`, borderRadius: 12, padding: 10, marginBottom: 12 }}>
            {ordem.map((p, i) => (
              <div key={p} style={{ display: "flex", gap: 8, alignItems: "center", fontFamily: font.ui, fontSize: 14, fontWeight: 600, color: C.ink, padding: "6px 4px" }}>
                <span style={{ fontFamily: font.mono, fontWeight: 800, color: C.green }}>{i + 1}.</span> {p}
              </div>
            ))}
            {ordem.length === 0 && <div style={{ fontFamily: font.ui, fontSize: 13, color: "#8A948F", padding: 6 }}>Toque nos passos na ordem correta</div>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {ex.passosEmbaralhados.filter((p) => !ordem.includes(p)).map((p) => (
              <button key={p} onClick={() => !feedback && setOrdem([...ordem, p])}
                style={{ fontFamily: font.ui, fontSize: 14, fontWeight: 600, textAlign: "left", color: C.ink, background: "#fff", border: `2px solid ${C.line}`, borderBottom: `4px solid ${C.line}`, borderRadius: 12, padding: "12px 14px", cursor: "pointer" }}>
                {p}
              </button>
            ))}
          </div>
          {ordem.length > 0 && !feedback && (
            <button onClick={() => setOrdem([])} style={{ fontFamily: font.ui, fontSize: 13, fontWeight: 700, color: C.navy, background: "none", border: "none", cursor: "pointer", textDecoration: "underline", marginTop: 8 }}>limpar</button>
          )}
        </div>
      )}

      {ex.tipo === "ligar_pares" && (
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {ex.esq.map((l) => {
              const done = ligacoes[l];
              return (
                <button key={l} disabled={!!done} onClick={() => setEsqSel(l)}
                  style={{ fontFamily: font.mono, fontSize: 12.5, fontWeight: 700, padding: "12px 8px", borderRadius: 10, border: `2px solid ${done ? "#C9D2CD" : esqSel === l ? C.green : C.line}`, borderBottom: `4px solid ${done ? "#C9D2CD" : esqSel === l ? C.green : C.line}`, background: done ? "#EDEFEE" : esqSel === l ? "#E9F4EE" : "#fff", color: done ? "#B2BDB7" : esqSel === l ? C.green : C.ink, cursor: done ? "default" : "pointer", wordBreak: "break-word" }}>
                  {l}
                </button>
              );
            })}
          </div>
          <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: 8 }}>
            {ex.dir.map((r) => {
              const done = Object.values(ligacoes).includes(r.id);
              const isFlash = flash === r.id;
              return (
                <button key={r.id} disabled={done} onClick={() => tentarPar(r)}
                  style={{ fontFamily: font.ui, fontSize: 13, fontWeight: 600, padding: "12px 10px", borderRadius: 10, border: `2px solid ${isFlash ? C.red : done ? "#C9D2CD" : C.line}`, borderBottom: `4px solid ${isFlash ? C.red : done ? "#C9D2CD" : C.line}`, background: isFlash ? "#FBEAEA" : done ? "#EDEFEE" : "#fff", color: isFlash ? C.red : done ? "#B2BDB7" : C.ink, cursor: done ? "default" : "pointer" }}>
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Rodapé */}
      <div style={{ marginTop: 26 }}>
        <LinkFeedback centro texto="Algo errado nesta pergunta? Avise" onClick={() => abrirFeedback({
          origem: "exercicio",
          licoes_concluidas: concluidas.length,
          modulo: modulo.titulo,
          licao: `${licao.id} — ${licao.titulo}`,
          exercicio: `${idx + 1} de ${exs.length}`,
          tipo_exercicio: ex.tipo,
          pergunta: String(ex.pergunta || ex.afirmacao || "").slice(0, 140),
        })} />
        {!feedback && ex.tipo !== "ligar_pares" && <Btn full disabled={!podeVerificar} onClick={verificar}>Verificar</Btn>}
        {feedback && (
          <div style={{ background: feedback === "correct" ? "#E9F4EE" : "#FBEAEA", border: `2px solid ${feedback === "correct" ? C.green : C.red}`, borderRadius: 16, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: font.ui, fontWeight: 800, fontSize: 17, color: feedback === "correct" ? C.greenDark : C.redDark }}>
              {feedback === "correct" ? <Check size={22} /> : <X size={22} />}
              {feedback === "correct" ? "Correto! +10 XP" : "Não foi dessa vez"}
            </div>
            {feedback === "wrong" && ex.resposta !== undefined && !["ordenar", "ligar_pares", "tokens", "achar_erro"].includes(ex.tipo) && (
              <div style={{ fontFamily: font.ui, fontSize: 13.5, fontWeight: 700, color: C.redDark, marginTop: 6 }}>
                Resposta: {ex.tipo === "vf" ? (ex.resposta ? "Verdadeiro" : "Falso") : ex.tipo === "clicar_celula" ? ex.alvo : String(ex.resposta)}
              </div>
            )}
            {feedback === "wrong" && ex.tipo === "clicar_ribbon" && (
              <div style={{ fontFamily: font.ui, fontSize: 13.5, fontWeight: 700, color: C.redDark, marginTop: 6 }}>
                Resposta: {ex.alvo}
              </div>
            )}
            {feedback === "wrong" && ex.tipo === "ordenar" && (
              <div style={{ marginTop: 8, background: "#fff", border: `1px solid ${C.line}`, borderRadius: 10, padding: "10px 12px" }}>
                <div style={{ fontFamily: font.ui, fontSize: 12.5, fontWeight: 800, color: C.redDark, marginBottom: 6 }}>Ordem correta:</div>
                {ex.passos.map((p, i) => (
                  <div key={i} style={{ fontFamily: font.ui, fontSize: 13.5, color: C.ink, lineHeight: 1.5 }}>
                    <b style={{ color: C.green }}>{i + 1}.</b> {p}
                  </div>
                ))}
              </div>
            )}
            {feedback === "wrong" && ex.tipo === "tokens" && (
              <div style={{ fontFamily: font.mono, fontSize: 13.5, fontWeight: 700, color: C.redDark, marginTop: 6 }}>
                Correto: {ex.molde.split("___").reduce((acc, p, i) => acc + p + (ex.resposta[i] || ""), "")}
              </div>
            )}
            <div style={{ fontFamily: font.ui, fontSize: 14, color: C.ink, margin: "8px 0 14px", lineHeight: 1.5 }}>{ex.explicacao}</div>
            <Btn full color={feedback === "correct" ? C.green : C.red} dark={feedback === "correct" ? C.greenDark : C.redDark} onClick={proximo}>
              Continuar <ChevronRight size={16} style={{ verticalAlign: "-3px" }} />
            </Btn>
          </div>
        )}
      </div>
    </Shell>
  );
}

function CursoChip({ nome, cor, ativo, bloqueado }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: font.ui, fontSize: 13, fontWeight: 800, color: ativo ? "#fff" : "#8A948F", background: ativo ? cor : "#EDEFEE", borderRadius: 20, padding: "8px 14px" }}>
      {bloqueado && <Lock size={12} />} {nome} {bloqueado && <span style={{ fontWeight: 600, fontSize: 11 }}>em breve</span>}
    </div>
  );
}

function BackBar({ onBack }) {
  return (
    <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", fontFamily: font.ui, fontSize: 13, fontWeight: 700, color: "#8A948F", padding: 0, marginBottom: 14 }}>
      <ChevronLeft size={16} /> lições
    </button>
  );
}

function Stat({ label, value, color }) {
  return (
    <div style={{ border: `2px solid ${color}`, borderRadius: 14, overflow: "hidden", minWidth: 88 }}>
      <div style={{ background: color, color: "#fff", fontFamily: font.ui, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, padding: "5px 8px" }}>{label}</div>
      <div style={{ fontFamily: font.ui, fontSize: 20, fontWeight: 800, color: C.navy, padding: "10px 8px", background: "#fff" }}>{value}</div>
    </div>
  );
}

function Shell({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF", display: "flex", justifyContent: "center", overflowX: "hidden" }}>
      <div style={{ width: "100%", maxWidth: 480, padding: "24px 20px 40px" }}>{children}</div>
    </div>
  );
}
