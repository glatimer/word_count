var wordInput = function(phrase) {
  var paragraph = "";
  paragraph = phrase.split(" ").sort();
  var wordArray = [];
  var finalArray = [];
  while (paragraph.length !== 0) {
    var word = paragraph.shift();
    var counter = 1;

    while (word === paragraph[0]) {
      counter += 1
      paragraph.shift();
    }
    wordArray.push(word);
    wordArray.push(counter);
    finalArray.push(wordArray);
  }
  return finalArray;
}
