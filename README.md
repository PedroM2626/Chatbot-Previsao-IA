# 🤖 Chatbot de Previsão com IA

Um chatbot inteligente que utiliza a API Google Gemini para fazer previsões e análises com base em datasets, textos ou imagens fornecidas pelo usuário.

## 📋 Descrição

Este projeto implementa uma interface de chat moderna e interativa que permite aos usuários fazer upload de arquivos (CSV, JSON, TXT ou imagens) e fazer perguntas sobre eles. O chatbot utiliza o modelo Gemini 2.5 Flash da Google para analisar os dados e fornecer insights, previsões e análises detalhadas. Quando aplicável, o chatbot pode gerar arquivos com resultados que podem ser baixados pelo usuário.

## ✨ Funcionalidades

- 💬 **Interface de Chat Moderna**: Interface intuitiva e responsiva com design dark mode
- 📁 **Upload de Arquivos**: Suporte para múltiplos formatos:
  - CSV (dados tabulares)
  - JSON (dados estruturados)
  - TXT (texto simples)
  - Imagens (PNG, JPG, etc.)
- 🔍 **Análise Inteligente**: Processamento e análise de dados usando IA
- 📊 **Geração de Previsões**: Capacidade de gerar previsões baseadas nos dados fornecidos
- 💾 **Download de Resultados**: Download de arquivos gerados com análises e previsões
- ⚡ **Respostas em Tempo Real**: Indicador de digitação enquanto a IA processa
- 🎨 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utility-first para estilização

### IA e Backend
- **Google Gemini AI (v1.20.0)**: Modelo de IA generativa para análise e previsões
- **Gemini 2.5 Flash**: Modelo específico utilizado para processamento

### Ferramentas de Desenvolvimento
- **ESM.sh**: CDN para módulos ES6
- **Vite** (implícito): Ferramenta de build rápida

## 📁 Estrutura do Projeto

```
Chatbot-Previsao-IA/
├── App.tsx                 # Componente principal da aplicação
├── index.tsx              # Ponto de entrada da aplicação
├── index.html             # HTML base
├── types.ts               # Definições de tipos TypeScript
├── metadata.json          # Metadados do projeto
├── components/            # Componentes React
│   ├── ChatWindow.tsx     # Janela de exibição das mensagens
│   ├── InputArea.tsx      # Área de entrada de texto e upload
│   ├── Message.tsx        # Componente de mensagem individual
│   ├── TypingIndicator.tsx # Indicador de digitação
│   └── icons/             # Ícones SVG customizados
│       ├── BotIcon.tsx
│       ├── UserIcon.tsx
│       ├── SendIcon.tsx
│       ├── FileIcon.tsx
│       ├── DownloadIcon.tsx
│       ├── PaperclipIcon.tsx
│       └── XCircleIcon.tsx
└── services/              # Serviços e integrações
    └── geminiService.ts   # Integração com Google Gemini AI
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Uma chave de API do Google Gemini AI
- Um servidor local ou ferramenta como Vite para servir a aplicação

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/PedroM2626/Chatbot-Previsao-IA.git
cd Chatbot-Previsao-IA
```

### Passo 2: Configure a Chave de API

Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API do Google Gemini:

```env
API_KEY=sua_chave_de_api_aqui
```

⚠️ **Importante**: 
- Nunca compartilhe ou commite sua chave de API no controle de versão. Adicione `.env` ao seu `.gitignore`
- Este projeto requer uma ferramenta de build (como Vite, Webpack, ou Parcel) que suporte variáveis de ambiente para aplicações client-side
- O Vite, por exemplo, automaticamente carrega variáveis do arquivo `.env` e as disponibiliza via `process.env` durante o build

### Passo 3: Obtenha uma Chave de API do Google Gemini

1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Crie uma nova chave de API
4. Copie a chave e adicione ao arquivo `.env`

### Passo 4: Execute a Aplicação

Este projeto requer uma ferramenta de build que suporte TypeScript, React e variáveis de ambiente. Recomendamos **Vite**:

#### Opção 1: Usando Vite (Recomendado)

```bash
# Instale o Vite globalmente (se ainda não tiver)
npm install -g vite

# Execute o servidor de desenvolvimento
vite
```

O Vite automaticamente:
- Compila TypeScript e JSX
- Carrega variáveis de ambiente do arquivo `.env`
- Fornece hot reload para desenvolvimento
- Serve a aplicação em `http://localhost:5173`

#### Opção 2: Configurar com Bundler Alternativo

Se preferir usar outro bundler (Webpack, Parcel, etc.), certifique-se de configurar:
- Suporte a TypeScript e React/JSX
- Carregamento de variáveis de ambiente
- Resolução de módulos ES6

```bash
# Exemplo com Parcel
npm install -g parcel
parcel index.html
```

⚠️ **Nota**: Não use servidores HTTP simples (como `python -m http.server`) pois eles não compilam TypeScript nem carregam variáveis de ambiente.

## 💡 Como Usar

1. **Inicie a Aplicação**: Abra a aplicação no navegador
2. **Faça Upload de um Arquivo** (opcional):
   - Clique no ícone de clipe 📎
   - Selecione um arquivo CSV, JSON, TXT ou imagem
   - O arquivo será exibido na área de entrada
3. **Digite sua Pergunta**:
   - Digite uma pergunta ou solicitação no campo de texto
   - Você pode fazer perguntas sobre o arquivo enviado ou perguntas gerais
4. **Envie a Mensagem**:
   - Clique no botão de enviar ou pressione Enter
   - Aguarde enquanto a IA processa sua solicitação
5. **Visualize a Resposta**:
   - A resposta da IA aparecerá na janela de chat
   - Se houver arquivos gerados, um botão de download será exibido
6. **Baixe Resultados** (se aplicável):
   - Clique no botão "Baixar" para salvar arquivos gerados

## 📝 Exemplos de Uso

### Exemplo 1: Análise de CSV
```
Upload: vendas.csv
Pergunta: "Analise estes dados de vendas e preveja as vendas do próximo trimestre"
```

### Exemplo 2: Análise de Imagem
```
Upload: grafico.png
Pergunta: "Descreva as tendências mostradas neste gráfico"
```

### Exemplo 3: Processamento de JSON
```
Upload: dados.json
Pergunta: "Identifique padrões nesses dados e sugira insights"
```

### Exemplo 4: Geração de Dados
```
Upload: clientes.csv
Pergunta: "Adicione uma coluna de previsão de churn para cada cliente e gere um novo CSV"
```

## 🔧 Configuração Avançada

### Personalizar o Modelo Gemini

No arquivo `services/geminiService.ts`, você pode ajustar:

```typescript
// Modelo usado (conforme implementado no código)
const model = 'gemini-2.5-flash';

// Parâmetros de geração
config: {
  temperature: 0.5,      // Controla a criatividade (0-1)
  topP: 0.95,           // Controla a diversidade
  // ... outros parâmetros
}
```

**Nota**: O nome do modelo `gemini-2.5-flash` é usado com a flag `vertexai: true` na configuração da API. Verifique a [documentação do Google Gemini](https://ai.google.dev/docs) para modelos disponíveis e atualizações.

### Modificar a Instrução do Sistema

A instrução do sistema define o comportamento do chatbot:

```typescript
const systemInstruction = `Você é um chatbot de análise preditiva...`;
```

Personalize esta instrução para diferentes casos de uso.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 🐛 Problemas Conhecidos

- A aplicação requer uma chave de API válida do Google Gemini para funcionar
- Arquivos muito grandes podem levar mais tempo para processar
- O modelo pode ter limitações com certos tipos de dados complexos

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Pedro Martins**
- GitHub: [@PedroM2626](https://github.com/PedroM2626)

## 🙏 Agradecimentos

- Google pela API Gemini
- Comunidade React e TypeScript
- Comunidade Open Source

## 📞 Suporte

Se você encontrar problemas ou tiver dúvidas:

1. Verifique a documentação acima
2. Procure por issues existentes no repositório
3. Abra uma nova issue descrevendo o problema em detalhes

---

**Desenvolvido com ❤️ usando React e Google Gemini AI**
