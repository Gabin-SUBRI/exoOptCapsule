//Créer une fonction pour vérifier l'égalité de type entre deux valeurs

function Verif(val1, val2){
    if(typeof (val1) == typeof (val2)){
        console.log(true)
    } else {
        console.log(false)
    }

}
Verif(3,6)
