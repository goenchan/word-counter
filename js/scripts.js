  $(document).ready(function() {
    $("#wordOrder").submit(function(event) {
      var sentence = $("#sentence").val();
      var words = sentence.split(" ");
      var object = {};

// object[word] refers to the specific value related to the word inside the object. Function below will check if there's a presisting value related to the word stored inside the object.

// If there is already a value for the word saved, it will add up the frequency(value) of that word if it encounters the same word during the iteration. If there is no presisting word, it will create a new key-value pair, where the value starts with one.

    words.forEach(function(word) {
      if(object[word]){
      object[word] +=1;
      } else {object[word] = 1;}
    });

// So far, it will create such example:
// sentence= apple apple bee chan chan chan
// object= { "apple":2, "bee":1, "chan":3 }

// Below functions will sort this object in order of the greatest frequency to the lowest frequencies in the sentence. First, it divides the object into array elements, based on the words and according frequencies (based on key-value pair).

// alert(Object.keys(object));

    var newArray = [];
    newArray = Object.keys(object).map(function(key) {
      return {
        word: key,
        appearance: object[key]
      };
    });
    alert(newArray);
    var finalArray = newArray.sort(function(a,b){
      return b.appearance - a.appearance;
    });


// Example for now:
// sentence= apple apple bee chan chan chan
// finalarray= [ {word: chan, appearance: 3}, {word: apple, appearance: 2}, {word: bee, appearance: 1} ]

// Finally, we will append each array elements into individual paragraph.

    finalArray.forEach(function (wordAppearancePair) {
      $("div#output").append("<p>" + wordAppearancePair + "</p>");
    });

  event.preventDefault();
  });
});
