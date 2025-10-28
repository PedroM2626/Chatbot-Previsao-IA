# 🤖 Chatbot de Previsão com IA - Ciclo Completo de Machine Learning

Um chatbot inteligente que utiliza a API Google Gemini (via Vertex AI Studio) para realizar um ciclo completo e automatizado de machine learning, incluindo análise exploratória de dados (EDA), tratamento de dados, e previsões baseadas em datasets, textos ou imagens fornecidas pelo usuário.

## 📋 Descrição

Este projeto implementa uma interface de chat moderna e interativa que atua como um **assistente completo de ciência de dados**. O sistema permite aos usuários fazer upload de arquivos (CSV, JSON, TXT ou imagens) e realizar um **ciclo completo e automatizado de machine learning**, incluindo:

- **Análise Exploratória de Dados (EDA)**: Estatísticas descritivas, identificação de padrões e insights sobre qualidade dos dados
- **Tratamento e Normalização de Dados**: Limpeza de dados, tratamento de valores ausentes, normalização e transformações
- **Modelagem Preditiva**: Criação de modelos e geração de previsões

O chatbot utiliza o modelo **Gemini 2.5 Flash** da Google através do **Vertex AI Studio**, proporcionando análises inteligentes e automatizadas. Quando aplicável, o chatbot pode gerar arquivos processados ou com previsões que podem ser baixados pelo usuário.

## ✨ Funcionalidades

### 🔬 Ciclo Completo de Machine Learning
- 📊 **Análise Exploratória de Dados (EDA)**: 
  - Estatísticas descritivas automatizadas
  - Identificação de padrões e anomalias
  - Insights sobre qualidade dos dados
  - Detecção de valores ausentes e duplicados
- 🧹 **Tratamento e Normalização de Dados**:
  - Limpeza automatizada de dados
  - Tratamento de valores ausentes
  - Normalização e padronização
  - Transformações de dados
- 🎯 **Modelagem Preditiva**:
  - Criação de modelos preditivos
  - Geração de previsões
  - Adição de colunas de predição aos datasets

### 💻 Interface e Usabilidade
- 💬 **Interface de Chat Moderna**: Interface intuitiva e responsiva com design dark mode
- 📁 **Upload de Arquivos**: Suporte para múltiplos formatos:
  - CSV (dados tabulares)
  - JSON (dados estruturados)
  - TXT (texto simples)
  - Imagens (PNG, JPG, etc.)
- 💾 **Download de Resultados**: Download de arquivos gerados (dados limpos, normalizados ou com previsões)
- ⚡ **Respostas em Tempo Real**: Indicador de digitação enquanto a IA processa
- 🎨 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utility-first para estilização

### IA e Backend
- **Google Gemini AI (v1.20.0)**: Modelo de IA generativa para análise e previsões
- **Vertex AI Studio**: Plataforma utilizada para integração com o modelo Gemini
- **Gemini 2.5 Flash**: Modelo específico utilizado para processamento, EDA e machine learning

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
VITE_API_KEY=sua_chave_de_api_aqui
```

⚠️ **Importante**: 
- Nunca compartilhe ou commite sua chave de API no controle de versão. Adicione `.env` ao seu `.gitignore`.
- Este projeto requer uma ferramenta de build (como Vite, Webpack, ou Parcel) que suporte variáveis de ambiente para aplicações client-side.
- O Vite, por exemplo, automaticamente carrega variáveis do arquivo `.env` e as disponibiliza via `process.env` durante o build.

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

### Fluxo Básico

1. **Inicie a Aplicação**: Abra a aplicação no navegador
2. **Faça Upload de um Arquivo** (opcional mas recomendado):
   - Clique no ícone de clipe 📎
   - Selecione um arquivo CSV, JSON, TXT ou imagem
   - O arquivo será exibido na área de entrada
3. **Escolha seu Objetivo**:
   - **EDA**: Solicite análise exploratória dos dados
   - **Tratamento**: Peça limpeza, normalização ou transformações
   - **Previsão**: Solicite modelos preditivos e previsões
   - **Pipeline Completo**: Peça um fluxo automatizado de EDA → Tratamento → Previsão
4. **Digite sua Solicitação**:
   - Digite sua pergunta ou solicitação no campo de texto
   - Seja específico sobre o que deseja (EDA, limpeza, previsão, etc.)
5. **Envie a Mensagem**:
   - Clique no botão de enviar ou pressione Enter
   - Aguarde enquanto a IA processa sua solicitação
6. **Visualize a Resposta**:
   - A resposta da IA aparecerá na janela de chat
   - Se houver arquivos gerados (dados limpos, normalizados, ou com previsões), um botão de download será exibido
7. **Baixe Resultados** (se aplicável):
   - Clique no botão "Baixar" para salvar arquivos gerados
   - Use os arquivos processados para continuar o ciclo de ML

### Ciclo Iterativo

O chatbot suporta um fluxo iterativo onde você pode:
1. Fazer upload de dados brutos
2. Solicitar EDA e receber insights
3. Pedir tratamento dos dados e baixar o dataset limpo
4. Re-fazer upload do dataset limpo (ou continuar na conversa)
5. Solicitar previsões e receber o dataset final com as predições

## 📝 Exemplos de Uso

### Ciclo Completo de Machine Learning

#### Exemplo 1: Análise Exploratória de Dados (EDA)
```
Upload: vendas.csv
Pergunta: "Faça uma análise exploratória completa deste dataset. Quero estatísticas descritivas, identificação de valores ausentes e insights sobre os dados"
```

#### Exemplo 2: Tratamento e Limpeza de Dados
```
Upload: clientes.csv
Pergunta: "Limpe este dataset removendo duplicatas, tratando valores ausentes e normalize as colunas numéricas. Gere um novo CSV com os dados tratados"
```

#### Exemplo 3: Previsão com Dataset Tratado
```
Upload: vendas_limpas.csv
Pergunta: "Baseado nestes dados históricos, adicione uma coluna com previsões de vendas para os próximos 3 meses e gere um CSV"
```

#### Exemplo 4: Pipeline Completo Automatizado
```
Upload: dados_brutos.csv
Pergunta: "Execute um pipeline completo: 1) EDA para entender os dados, 2) Limpeza e normalização, 3) Adicione previsões de churn. Gere o dataset final processado"
```

### Análise de Outros Formatos

#### Exemplo 5: Análise de Imagem
```
Upload: grafico.png
Pergunta: "Descreva as tendências mostradas neste gráfico e faça previsões baseadas nos padrões identificados"
```

#### Exemplo 6: Processamento de JSON
```
Upload: dados.json
Pergunta: "Identifique padrões nesses dados, sugira insights e forneça recomendações para limpeza"
```

## 🔧 Configuração Avançada

### Personalizar o Modelo Gemini

No arquivo `services/geminiService.ts`, você pode ajustar:

```typescript
// Inicialização com Vertex AI
const ai = new GoogleGenAI({ 
  apiKey: process.env.API_KEY, 
  vertexai: true  // Habilita integração com Vertex AI Studio
});

// Modelo usado
const model = 'gemini-2.5-flash';

// Parâmetros de geração
config: {
  temperature: 0.3,      // Controla a criatividade (0-1) - mais baixo para tarefas analíticas
  topP: 0.95,           // Controla a diversidade
  responseMimeType: 'application/json',  // Resposta estruturada
  // ... outros parâmetros
}
```

**Nota**: O projeto utiliza o **Vertex AI Studio** da Google (flag `vertexai: true`) para integração com o modelo Gemini, proporcionando capacidades avançadas de machine learning. Verifique a [documentação do Google Gemini](https://ai.google.dev/docs) e [Vertex AI](https://cloud.google.com/vertex-ai) para mais informações.

### Modificar a Instrução do Sistema

A instrução do sistema define o comportamento do chatbot e suas capacidades de machine learning:

```typescript
const systemInstruction = `Você é um assistente de ciência de dados especialista. 
Sua função é guiar os usuários através de um ciclo de machine learning...`;
```

A instrução atual configura o chatbot para:
- Realizar Análise Exploratória de Dados (EDA)
- Executar tratamento e normalização de dados
- Criar modelos preditivos e fazer previsões
- Gerar arquivos processados para download

Personalize esta instrução para diferentes casos de uso ou para adicionar novas capacidades ao ciclo de ML.

## 🔄 Ciclo Completo e Automatizado de Machine Learning

Este projeto implementa um **ciclo completo de machine learning** através da integração com **Vertex AI Studio**, permitindo que usuários executem todas as etapas de um projeto de ciência de dados em uma interface conversacional:

### Pipeline Automatizado

1. **📊 Análise Exploratória (EDA)**
   - Estatísticas descritivas (média, mediana, desvio padrão, etc.)
   - Identificação de tipos de dados
   - Detecção de valores ausentes e duplicados
   - Distribuições e padrões nos dados
   - Identificação de outliers e anomalias

2. **🧹 Tratamento de Dados**
   - Limpeza de valores ausentes (remoção ou imputação)
   - Remoção de duplicatas
   - Normalização e padronização de features
   - Codificação de variáveis categóricas
   - Transformações de dados

3. **🎯 Modelagem e Previsão**
   - Criação de modelos preditivos
   - Geração de previsões
   - Adição de colunas de predição aos datasets
   - Exportação de resultados

### Vantagens do Ciclo Automatizado

- **Simplicidade**: Todo o processo através de uma interface de chat
- **Rapidez**: Automação de tarefas repetitivas de ciência de dados
- **Acessibilidade**: Não requer conhecimento profundo de programação
- **Iterativo**: Permite refinamento contínuo através da conversa
- **Rastreável**: Histórico completo do processo no chat
- **Exportável**: Arquivos gerados em cada etapa podem ser baixados

### Integração com Vertex AI Studio

O projeto utiliza o **Vertex AI Studio** da Google Cloud, que proporciona:
- Acesso a modelos Gemini de última geração
- Capacidades avançadas de processamento de dados
- Respostas estruturadas em JSON
- Processamento eficiente de grandes volumes de dados
- Integração nativa com ferramentas de machine learning

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
- Para datasets complexos, o processamento pode exigir múltiplas iterações
- Modelos preditivos gerados são baseados em análise da IA e podem requerer validação adicional

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Pedro Martins**
- GitHub: [@PedroM2626](https://github.com/PedroM2626)

## 🙏 Agradecimentos

- Google pela API Gemini e Vertex AI Studio
- Comunidade React e TypeScript
- Comunidade de Ciência de Dados e Machine Learning
- Comunidade Open Source

## 📞 Suporte

Se você encontrar problemas ou tiver dúvidas:

1. Verifique a documentação acima
2. Procure por issues existentes no repositório
3. Abra uma nova issue descrevendo o problema em detalhes

---

**Desenvolvido com ❤️ usando React, TypeScript e Google Gemini AI (Vertex AI Studio)**