const analyzer = {
    getWordCount: (text) => {
        const palavras = text.split(" ")
        return palavras.length;
    },

    getCharacterCount: (text) => {
        return text.length;
    },

    getCharacterCountExcludingSpaces: (text) => {
        const espacos = text.replace(/[\s.,]/gm,"");
        return espacos.length
    },

    getAverageWordLength: (text) => {
        const palavras = text.split(" ");
        let totalpalavras = 0
        for ( let i = 0; i < palavras.length; i++)
            totalpalavras += palavras[i].length
        return parseFloat((totalpalavras / palavras.length).toFixed(2));
    },

    getNumberCount: (text) => {
        const numeros = text.match(/\b\d+(\.\d+)?\b/g);
        if (numeros) {
           return numeros.length
        } else {
            return 0;
        }
    },
    getNumberSum: (text) => {
        const snumeros = text.match(/\b\d+(\.\d+)?\b/g);
        if (snumeros) {
            const soma = snumeros.reduce((acc, num) => acc + parseFloat(num), 0);
            return soma
        } else {
            return 0;
        }
    },
}

export default analyzer;
