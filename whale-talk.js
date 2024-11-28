var input = `HE likes you`;

const vowels = ["a", "e", "i", "o", "u"];
var resultsArray = []; // change var to const

for (let i = 0; i < input.length; i++) {
  let letter = input[i].toLowerCase();

  //   console.log(i);

  if (letter === "e" || letter === "u") {
    resultsArray.push(letter);
  }

  for (let j = 0; j < vowels.length; j++) {
    let vowel = vowels[j];
    //  console.log(j);

    if (letter === vowel) {
      //   console.log(letter);
      resultsArray.push(letter);
    }
  }
}

console.log(resultsArray);

let resultString = resultsArray.join(" ");

resultString = resultString.toUpperCase();

console.log(resultString);
