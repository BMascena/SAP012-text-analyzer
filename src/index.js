import analyzer from './analyzer.js';
const texterea = document.querySelector('[name="user-input"]');

const WordCount = document.querySelector('[data-testid = "word-count"]');
    
const characterCount = document.querySelector('[data-testid = "character-count"]');
    
const characterNoSpacesCount = document.querySelector('[data-testid = "character-no-spaces-count"]');
    
const wordLengthAverage = document.querySelector('[data-testid = "word-length-average"]');

const numberCount = document.querySelector('[data-testid = "number-count"]');
    
const numberSum = document.querySelector('[data-testid = "number-sum"]');

const button = document.getElementById ('reset-button');


texterea.addEventListener ('input', () => {
  const palavras = analyzer.getWordCount (texterea.value)
  WordCount.textContent = "Contagem de palavras: " + palavras

  const caracteres = analyzer.getCharacterCount (texterea.value)
  characterCount.textContent = "Contagem de caracteres: " + caracteres

  const espacos = analyzer.getCharacterCountExcludingSpaces (texterea.value) //corrigir o readme
  characterNoSpacesCount.textContent = "Contagem de espaços: " + espacos

  const comprimento = analyzer.getAverageWordLength (texterea.value)
  wordLengthAverage.textContent = "Comrprimento das palavras: " + comprimento

  const numeros = analyzer.getNumberCount (texterea.value)
  numberCount.textContent = "Contagem de números: " + numeros 
  
  const snumeros = analyzer.getNumberSum (texterea.value)
  numberSum.textContent = "Soma de números: " + snumeros
  
});

button.addEventListener ('click', () => {
  texterea.value = "";
  WordCount.textContent = 'Contagem de Caracteres: 0';
  characterCount.textContent = 'Contagem de caracteres: 0';
  characterNoSpacesCount.textContent = 'Contagem de espaços: 0';
  wordLengthAverage.textContent = 'Comrprimento das palavras: 0';
  numberCount.textContent = 'Contagem de números: 0';
  numberSum.textContent = 'Soma de números: 0';
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`