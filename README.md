# Desvendando o Céu Austral — site estático

Site institucional informativo do Museu de Ciências Desvendando o Céu Austral (UFRPE).

## Publicação

Envie todos os arquivos deste pacote para a raiz do repositório usado para hospedar o site. Mantenha as pastas `src/`, `assets/` e `docs/` no mesmo nível do `index.html`. Não renomeie as pastas porque o HTML usa caminhos relativos.

## Funcionalidades

- Menu adaptável para desktop, tablet e celular; links internos fecham o menu após a navegação.
- Tema claro/escuro com preferência salva neste navegador. A primeira visita respeita a preferência do sistema operacional.
- Animações leves para a entrada da página, efeitos de foco/hover e transição do menu; reduzidas quando o sistema solicita menos movimento.
- Galeria com ampliação de imagem (lightbox), tecla Escape para fechar e restauração do foco.
- Botão para voltar ao início e link para pular diretamente ao conteúdo.
- Contraste reforçado entre imagens, legendas e descrições das oito atividades.

## Revisão final

O Chromium foi usado para conferir dez larguras de tela (320–1440 px), menu, troca de tema, galeria, overflow horizontal e separação entre fotografia, legenda e descrição. O relatório de revisão e os detalhes sobre o uso de imagens de teste estão em `docs/REVISAO-RESPONSIVIDADE.md`.

## Imagens e fontes

O favicon e o símbolo do Cruzeiro do Sul estão incluídos localmente. As fotografias do acervo são referenciadas a partir do repositório público `Joaquim1402/Desvendando-Versao-Inicial`, portanto sua visualização depende de conexão com a internet e da disponibilidade desse endereço. Os links externos das fontes e parceiros também requerem internet. Confira `docs/LINKS-AUDIT.md` para o resumo da revisão de destinos e `docs/REVISAO-RESPONSIVIDADE.md` para a matriz Chromium, interações verificadas, medidas representativas de contraste e limitações do QA.
