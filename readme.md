[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Gerador de Senhas Fortes - Extensão para Chrome

Esta extensão para Chrome gera senhas fortes com parâmetros personalizáveis, oferecendo uma solução simples e eficaz para criar senhas seguras.

## Funcionalidades

- Gera senhas com tamanho personalizável (8-64 caracteres)
- Opções para incluir:
  - Letras minúsculas
  - Letras maiúsculas
  - Números
  - Caracteres especiais
- Copia a senha gerada para a área de transferência

## Como instalar

1. Clone este repositório ou baixe-o como ZIP
2. Abra o Chrome e vá para `chrome://extensions/`
3. Ative o "Modo do desenvolvedor" no canto superior direito
4. Clique em "Carregar sem compactação" e selecione a pasta do projeto

## Como usar

1. Clique no ícone da extensão na barra de ferramentas do Chrome
2. Ajuste os parâmetros desejados:
   - Defina o tamanho da senha
   - Selecione os tipos de caracteres a serem incluídos
3. Clique em "Gerar Senha"
4. Use o botão "Copiar" para copiar a senha gerada para a área de transferência

## Estrutura do Projeto

```bash
meu_projeto_extensao/
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── popup.js
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   └── popup.html
├── LICENSE
├── manifest.json
└── README.md
```

- `src/`: Contém todos os arquivos fonte da extensão
  - `css/`: Estilos da interface do usuário
  - `js/`: Scripts de funcionalidade
  - `icons/`: Ícones da extensão em diferentes tamanhos
  - `popup.html`: Interface principal da extensão
- `LICENSE`: Arquivo com licença
- `manifest.json`: Arquivo de configuração da extensão
- `README.md`: Este arquivo de documentação

## Roadmap de Futuras Melhorias

1. **Exclusão de caracteres específicos**
   - Adicionar um campo onde o usuário pode inserir caracteres que devem ser excluídos da geração de senha

2. **Interação com campos de senha em páginas web**
   - Implementar a capacidade de detectar campos de senha em páginas web
   - Oferecer preenchimento automático com a senha gerada

3. **Geração de senhas prontas para uso**
   - Criar opções pré-configuradas para gerar senhas que atendam a requisitos comuns de diferentes plataformas

4. **Histórico de senhas geradas**
   - Adicionar uma funcionalidade para armazenar um histórico temporário das últimas senhas geradas

5. **Avaliação de força da senha**
   - Implementar um medidor visual que avalia e exibe a força da senha gerada

6. **Modo escuro**
   - Implementar um tema escuro para a interface da extensão

## Contribuições

Contribuições são bem-vindas! Se você tem uma ideia para melhorar esta extensão:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

© 2024 Lorena Fornasiere Vinhal Guillardi. Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.