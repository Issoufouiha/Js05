function average() {
    const notes = [20, 12, 8, 9];
    const moyenne = notes.reduce((a, b) => a + b) / notes.length;
    console.log(moyenne);
  }
  average()

  module.exports =average

                            ////   explication  ///
///La fonction prend en paramètre une chaîne de caractères, sentence.
//On initialise une variable count à 0, qui va nous permettre de compter le nombre d'occurrences de la lettre 'a'.
//On parcourt chaque caractère de la chaîne de caractères à l'aide d'une boucle for.
//Pour chaque caractère, on vérifie s'il est égal à 'a' à l'aide d'une condition if. Si c'est le cas, on incrémente la variable count.
//Enfin, on retourne la valeur de count.
//Dans l'exemple donné, on appelle la fonction avec la chaîne de caractères "Bonjour, chers candidat comment vous allez aujourd'hui", et on affiche le résultat dans la console à l'aide de console.log. On obtiendra le résultat suivant : "Le nombre d'occurrences de 'a' est : 4".