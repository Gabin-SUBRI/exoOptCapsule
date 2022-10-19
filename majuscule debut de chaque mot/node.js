//Créer une fonction pour mettre en majuscule chaque première lettre de chaque mot d'une chaîne de caractère 

function upperFirstLetter(carac){
    const str = carac.split(' ');
    let formattedWords = [];
    
    for (let i = 0; i < str.length; i++) {
        formattedWords.push(str[i][0].toUpperCase() + str[i].slice(1).toLowerCase());
    }
        return formattedWords.join(" ");

}

console.log(upperFirstLetter('salut comment tu vas'));