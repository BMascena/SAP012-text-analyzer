const analyzer = {
    getWordCount: (text) => {
        const palavras = text.trim().split(/[0-9]\s+/g)
        return palavras.length;
    },
// TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    getCharacterCount: (text) => { //text um valor que foi atribuido no index, nesse caso texterea.value, ex que palomita usou da equação de 1º
        const caracteres = text.replace(/\s/g, ''); // metodo replace, pega o regex e transforma em outra coisa /\s/g é usado para achar espaços em branco
        return caracteres.length;

// TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    },
    getCharacterCountExcludingSpaces: (text) => {
        const espacos = text.match(/\s/g) || [];
        return espacos.length

// TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    },
    getAverageWordLength: (text) => {
// TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    },
    getNumberCount: (text) => {
        const numeros = text.match(/\d+/g);
        if (numeros) {
            let totalLength = 0;
            for (const numero of numeros) {
                totalLength += numero.length;
            }

            return totalLength;
        } else {
            return 0; // ou qualquer outro valor ou ação apropriados
        }

// TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    },
    getNumberSum: (text) => {

// TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    },
}

export default analyzer;
