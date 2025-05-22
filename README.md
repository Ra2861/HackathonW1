# HackathonW1

### Aplicativo de Gestão de Holdings e Patrimônio

Um aplicativo web moderno para gestão de holdings e acompanhamento de patrimônio, com um dashboard completo e interface intuitiva.

## Recursos Principais do Aplicativo

Este aplicativo de gestão de holdings e patrimônio oferece:

1. **Interface Moderna e Intuitiva**: Design elegante com tema escuro para o dashboard, seguindo o estilo da imagem de referência.
2. **Dashboard Completo**: Visualização clara de patrimônio total, número de holdings, empresas e imóveis, com gráficos de evolução patrimonial.
3. **Gestão de Holdings**: Listagem completa de holdings com informações detalhadas e ações rápidas (visualizar, editar, excluir).
4. **Atividades Recentes**: Acompanhamento das últimas ações realizadas no sistema.
5. **Sistema de Abas**: Navegação fácil entre diferentes tipos de ativos (holdings, empresas, imóveis, investimentos).
6. **Navegação Lateral**: Menu lateral colapsável para acesso rápido a todas as seções do sistema.
7. **Autenticação Segura**: Tela de login com design moderno e seguro.
8. **Responsividade**: Interface adaptada para todos os dispositivos, de smartphones a desktops.


O aplicativo foi desenvolvido com Next.js e utiliza componentes do shadcn/ui para garantir uma experiência de usuário moderna e consistente.

### Guia

## Acessando o Aplicativo na Vercel

O W1 Holdings Manager está hospedado na plataforma Vercel, permitindo acesso rápido e seguro de qualquer dispositivo com conexão à internet.

Para acessar o aplicativo:

1. Abra seu navegador e acesse o link fornecido pela Vercel (exemplo: `https://w1-holdings-manager.vercel.app`)
2. A página inicial será carregada automaticamente
3. Não é necessário instalar nada - o aplicativo funciona diretamente no navegador


## Páginas Disponíveis

### Página Inicial (Home)

**URL:** `/` (raiz do site)

A página inicial apresenta uma visão geral do W1 Holdings Manager, destacando:

- Apresentação da plataforma
- Recursos principais
- Estatísticas básicas sobre patrimônio, holdings e empresas
- Links para login e registro


**Como acessar:** Esta é a primeira página que aparece ao entrar no site.

### Página de Login

**URL:** `/login`

Esta página permite que usuários existentes acessem suas contas.

**Como acessar:**

- Clique no botão "Acessar Plataforma" na página inicial
- Ou navegue diretamente para `/login` na URL


**Funcionalidades:**

- Formulário de login com campos para email e senha
- Link para recuperação de senha
- Link para registro de nova conta


### Dashboard Principal

**URL:** `/dashboard`

O dashboard é o centro de controle principal após o login, oferecendo:

- Visão geral do patrimônio total
- Estatísticas de holdings, empresas e imóveis
- Gráfico de evolução do patrimônio
- Atividades recentes
- Abas para gerenciar diferentes tipos de ativos


**Como acessar:**

- Faça login através da página de login
- O sistema redirecionará automaticamente para o dashboard


### Páginas Específicas do Dashboard

Todas estas páginas são acessíveis através do menu lateral no dashboard:

1. **Holdings** (`/dashboard/holdings`)

1. Gerenciamento completo de holdings
2. Lista de holdings existentes



2. **Empresas** (`/dashboard/empresas`)

1. Gerenciamento de empresas vinculadas às holdings



3. **Imóveis** (`/dashboard/imoveis`)

1. Gerenciamento de imóveis vinculados às holdings



4. **Relatórios** (`/dashboard/relatorios`)

1. Geração e visualização de relatórios



5. **Configurações** (`/dashboard/configuracoes`)

1. Configurações da conta e do sistema





## Navegação Entre Páginas

- **Menu de Navegação:** No dashboard, utilize o menu lateral para navegar entre as diferentes seções
- **Botões de Ação:** Utilize os botões "Adicionar Holding", "Nova Holding", etc. para acessar formulários de criação
- **Dropdown de Usuário:** No canto superior direito do dashboard, acesse opções de perfil e logout


## Funcionalidades por Página

### Dashboard Principal

- Visualização de métricas principais
- Gráfico de evolução patrimonial
- Atividades recentes do sistema
- Acesso rápido a holdings através da aba "Holdings"


### Seção de Holdings

- Visualização de todas as holdings cadastradas
- Informações sobre tipo, número de empresas e patrimônio
- Ações rápidas para visualizar, editar ou excluir holdings


## Dicas de Uso

1. **Responsividade:** O aplicativo é totalmente responsivo, funcionando em dispositivos móveis e desktops
2. **Menu Colapsável:** No dashboard, você pode colapsar o menu lateral clicando no ícone de menu no cabeçalho
3. **Navegação Rápida:** Utilize os links diretos para acessar rapidamente as seções mais importantes


