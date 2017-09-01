var basicCard = require("./BasicCard")

var ClozeCard = function(words, cloze){
    //words is the full text
    //cloze is word i want to take out

    this.words=words;
    this.cloze= cloze;
    this.partialText= function(){
       
        var searchWords = this.words.indexOf(this.cloze)
        if(searchWords=== -1){
            console.log("Your word is not in here");
        }
        else{
            this.words=this.words.replace(this.cloze,"...")
            console.log(this.words);
        }
    }
}

//Testing constructor
var aBasicCard = new basicCard (this.words, this.cloze);
console.log(aBasicCard);

// input data to clozecard constructor
var theCloze = new ClozeCard("George Washington is the new president","George Washington");

// console.log(theCloze);
console.log(theCloze.cloze)
theCloze.partialText();

