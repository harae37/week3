var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Bonchon"
words[2] = "Ramen"
words[3] = "Instant Ramen"
words[4] = "Bulgogi"
words[5] = "Pizza"
words[6] = "Pasta"
words[7] = "장조림"
words[8] = "Popcorn Chicken"
words[9] = "Sushi"
words[10] = "Pho"
words[11] = "Stir Fry"
words[12] = "Pancake"
words[13] = "Hamburger"
words[14] = "Hotdog"
words[15] = "Fries"
words[16] = "Bibibop"
words[17] = "Subway"
words[18] = "Nando's"
words[19] = "Tacos"
words[20] = "Teriyaki Don"
words[21] = "Curry"
words[22] = "Tteokbokki"
words[23] = "Hotpocket"
words[24] = "Quiche"
words[25] = "Dakgalbi"
words[26] = "Korean Bbq"
words[27] = "Starve-to-death"
words[28] = "Poke"



function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
