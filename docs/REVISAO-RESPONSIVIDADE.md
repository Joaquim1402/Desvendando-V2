# Revisão final do site — Desvendando o Céu Austral

**Data:** 19 de outubro de 2026  
**Navegador:** Chromium headless  
**Escopo:** responsividade, navegação, alternância de tema, alinhamento e sobreposição, links e legibilidade.

## Matriz de responsividade

O site foi verificado nas larguras de **320, 360, 390, 430, 768, 820, 1024, 1100, 1280 e 1440 px**. Em todas as larguras testadas:

- a largura do documento permaneceu igual à largura da janela, sem rolagem horizontal;
- não foram encontrados elementos visíveis extravasando horizontalmente o viewport;
- os oito cartões de atividade permaneceram presentes;
- nenhuma interseção geométrica foi encontrada entre imagem, legenda e descrição dos cartões;
- não ocorreram exceções JavaScript.

## Interações verificadas

- Menu responsivo: abre, exibe a navegação e fecha ao escolher um link em larguras até 1100 px.
- Tema claro/escuro: alterna nos dois sentidos, atualiza o rótulo acessível e muda as cores das superfícies, textos, cartões, legendas, botões e rodapé.
- Galeria: abre a ampliação, e a tecla Escape fecha a janela e devolve a rolagem da página.
- Respeito à preferência por movimento reduzido: as animações são desativadas pela regra `prefers-reduced-motion`.
- A preferência de tema é salva no navegador quando o armazenamento local está disponível; se não estiver, a mudança de tema continua funcionando na sessão.

## Contraste

As amostras representativas foram calculadas a partir das cores computadas no Chromium. A razão foi de aproximadamente **12,7:1** para o texto principal no tema claro e **15,8:1** no tema escuro. Títulos e descrições das atividades também apresentaram razões acima de **7:1** nas amostras medidas. São verificações pontuais de cores representativas, não uma certificação completa de acessibilidade.

## Links e destinos

O arquivo `LINKS-AUDIT.md` registra os links institucionais consultados e as limitações encontradas ao acessar alguns serviços dinâmicos. A inspeção estática confirmou **12 âncoras internas sem destinos ausentes**, nenhum ID duplicado, nenhum caminho local faltante e nenhum link de nova aba sem `rel="noopener noreferrer"`. O manifesto em `link-manifest.json` lista os destinos identificados.

## Limitação da verificação das fotografias

As fotografias do site vêm do repositório público do projeto e precisam de internet. Para isolar os testes de geometria e interação, a execução de QA no Chromium substituiu temporariamente as URLs das fotografias por imagens SVG de teste **apenas no HTML usado pelo teste**; o HTML empacotado mantém as URLs reais. Assim, o relatório confirma o comportamento de layout, não a disponibilidade de rede ou a validade futura de cada arquivo de imagem remoto. Destinos dinâmicos de WhatsApp e Instagram também podem exigir verificação direta em um navegador conectado.

## Resultado final

As dez larguras da matriz passaram nos testes automatizados executados. Foram removidas as legendas sobrepostas às fotos, corrigido o transbordamento do endereço de e-mail em celulares, padronizado o alternador de tema e mantido o Cruzeiro do Sul azul sobre fundo branco. A revisão de links fica documentada em `LINKS-AUDIT.md`.
