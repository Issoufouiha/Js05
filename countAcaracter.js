function countAcaracter(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === 'a') {
        count++;
      }
    }
    return count;
  }
  
  let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";
  let result = countAcaracter(sentence);
  console.log("Le nombre d'occurrences de 'a' est : " + result);

  module.exports =countAcaracter
  