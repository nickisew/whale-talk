var input = `He likes you`;

const vowels = ["a", "e", "i", "o", "u"];
var resultsArray = [];

for (let i = 0; i < input.length; i++) {
  let letter = input[i];

  // console.log(i);

  for (let j = 0; j < vowels.length; j++) {
    let vowel = vowels[j];
    // console.log(i);

    if (letter === vowel) {
      resultsArray.push(vowel);
    }

    for (let k = 0; k < resultsArray.length; k++) {
      let vowel2 = resultsArray[k];

      if (vowel2 === "u") {
        resultsArray.push("u");
      }

      if (vowel2 === "e") {
        resultsArray.push("e");
      }
    }
  }
}

let resultString = resultsArray.join(" ");

resultString = resultString.toUpperCase();
