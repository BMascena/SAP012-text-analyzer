import analyzer from './analyzer.js';
const topicosDaLista = (Text) => {
    const wordcount = analyzer.getWordCount(document.querySelector('[name="user-input"]').value)
  
    document.querySelector('[data-testid = "word-count"]').textContent = `Contagem de palavras: ${wordcount}`;
  
  }
  document.querySelector('[name="user-input"]').addEventListener("input",topicosDaLista)
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`