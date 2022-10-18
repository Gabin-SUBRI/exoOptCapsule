//Créer une fonction pour trouver l'aire d'un triangle dont la longueur des côtés vaut 4, 6 et 8
function calcul(a,b,c){
    let d = (a+b+c)/2

    let calcul = d*(d-a)*(d-b)*(d-c)
    let racineCarre = Math.sqrt(calcul)
    let arrondi = Math.round(racineCarre * 10000)/10000
    return arrondi
}
console.log(calcul(4,6,8) + " cm²")