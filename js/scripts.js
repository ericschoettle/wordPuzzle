var string = "Eu gosto de praia e sol";
var vowels = ["a", "e", "i", "o", "u"]
for (i = 0; i < string.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    string = string.replace(vowels[j], "-");
  }
}
// var words = ("Hello, this is a sentence containing uus.");
// for (index = 0; index < words.length; index++){
//   var words = words.replace("e", "-");
//   var words = words.replace("a", "-");
// }
console.log(string);



// equivalent forEach and for loops

// var languages = ['HTML', 'CSS', 'JavaScript'];
//
// languages.forEach(function(language) {
//   alert('I love ' + language + '!');
// });
//
// for (var i = 0; i < languages.length; i++) {
//   alert('I love ' + languages[i] + '!');
// }
