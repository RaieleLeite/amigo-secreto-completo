# Amigo Secreto

## Visão Geral

Projeto web simples que permite gerenciar um sorteio de amigo secreto. O usuário pode adicionar nomes, visualizar a lista de participantes, realizar o sorteio para definir quem tirou quem, excluir nomes e reiniciar a lista. O foco está em entregar uma aplicação acessível, responsiva e de fácil uso.

---

## Motivação

Organizar sorteios de amigo secreto presencialmente pode ser trabalhoso, especialmente com muitos participantes. Essa aplicação facilita o processo tornando-o online, intuitivo e acessível para todos, inclusive pessoas com deficiências visuais.

---

## Funcionalidades Principais

- **Adicionar amigo:** Entrada de texto para adicionar o nome do amigo à lista.
- **Excluir amigo:** Botão com ícone para remover um amigo da lista.
- **Sortear amigo secreto:** Embaralha a lista e mostra quem tirou quem em pares circulares.
- **Reiniciar:** Limpa todas as listas e mensagens para um novo sorteio.
- **Feedback em tempo real:** Mensagens dinâmicas para informar erros
- 1. Nome vazio
  2. Amigo repetido
  3. Quantidade insuficiente para sortear
- **Acessibilidade:** Uso de atributos ARIA, associação correta de labels, e conteúdo dinâmico com `aria-live` para leitores de tela.
- **Responsividade:** Layout que se adapta bem em diferentes tamanhos de tela (desktop, tablet, celular).

---

## Tecnologias Utilizadas

- `HTML5`
- `CSS3`
- `JavaScript`
  
---

## Detalhes Técnicos e Boas Práticas

### Acessibilidade

- Labels associados corretamente aos inputs (`for` e `id`).
- Botões com `aria-label` explicando suas funções para leitores de tela.
- Conteúdos dinâmicos marcados com `aria-live="polite"` para que leitores de tela anunciem atualizações sem interromper.
- Elementos puramente decorativos com `aria-hidden="true"`.
- Feedback textual para erros e status do sorteio diretamente acessível.

### Responsividade

- Uso de media queries para ajustar tamanhos de fontes, espaçamentos e layout em diferentes dispositivos.
- Botões e inputs dimensionados para fácil toque em telas pequenas.
- Flexbox para organizar conteúdo com flexibilidade e adaptabilidade.

### JavaScript

- Manipulação dinâmica do DOM para criar, atualizar e remover elementos sem recarregar a página.
- Função de embaralhamento usando algoritmo de Fisher-Yates para sorteio justo.
- Tratamento de casos de erro, como nomes vazios ou repetidos e quantidade insuficiente de amigos.
- Organização do código em funções específicas para facilitar manutenção.


