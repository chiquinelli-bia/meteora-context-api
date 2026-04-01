# Meteora - E-commerce de Moda

![Thumbnail do projeto. O título é “Meteora - gerenciamento de dados com Context API” e o Subtítulo é “adaptado por Bianca Chiquinelli.”](meteora.png)

O Meteora é uma aplicação de e-commerce em desenvolvimento, com foco na gestão eficiente de estado e na construção de uma interface reativa e escalável.  
O Meteora possui as seguintes funcionalidades:

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Atualizar quantidade de produtos
- Visualizar o carrinho

![GIF da aplicação em execução](meteora-app.gif)

## Minhas Contribuições

Atuei na evolução da arquitetura e da lógica do carrinho, com foco em previsibilidade de estado, performance e robustez da aplicação.

- **Gerenciamento de estado global:** Estruturei o carrinho com `Context API` + `useReducer`, centralizando regras de negócio e eliminando prop drilling.
- **Padronização de lógica com reducer:** Organizei ações como adicionar, remover e atualizar quantidade, garantindo um fluxo de estado mais previsível e escalável.
- **Criação de hook customizado (`useCarrinho`):** Abstraí o acesso e manipulação do estado, simplificando o consumo nos componentes e melhorando a organização do código.
- **Resiliência e validações:** Implementei proteções em funções e handlers, garantindo estados válidos e prevenindo erros em tempo de execução (como quantidades negativas e remoções incorretas).
- **Refatoração de componentes:** Reestruturei carrinho e seus componentes filhos para reduzir complexidade, melhorar legibilidade e evitar re-renderizações desnecessárias.

## ✔️ Técnicas e tecnologias utilizadas

O projeto Meteora utiliza as seguintes tecnologias e bibliotecas:

- `React` - Construção de interfaces com componentes reutilizáveis
- `Vite` - Ambiente de desenvolvimento rápido e otimizado
- `JavaScript (ES6+)` - Manipulação de dados e controle de fluxo
- `Context API` - Gerenciamento de estado global
- `Hooks nativos` - (`useMemo`) Para otimização de desempenho e (`useReducer`) Para controle de dados
- `Hooks customizados` - Abstração e reutilização de lógica (`useCarrinho`)

## ⚙️ Abordagens utilizadas

- **Gerenciamento de estado:** Estrutura baseada em `Context API` + `useReducer`, separando regras de negócio da camada de interface e garantindo previsibilidade do estado.

- **Organização e escalabilidade:** Uso de hooks customizados para desacoplar lógica dos componentes, facilitando manutenção e reutilização.

- **Performance:** Aplicação de `useMemo` para evitar reprocessamentos desnecessários em estados derivados.

## Como ter acesso ao projeto

- **Versão online:** https://meteora-context-api-nu.vercel.app/

- **Rodar localmente:**

```bash
# clone
git clone https://github.com/chiquinelli-bia/meteora-context-api

# entrar na pasta
cd meteora-context-api

# instalar dependências
npm install

# rodar projeto
npm run dev
```
