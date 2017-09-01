var BasicCard = function(front,back){
    this.front= front;
    this.back=back;

    this.displayCard = function(){
        console.log(this.front);
        console.log(this.back);
    }
}

//Tested to constructor
// var abasicCard= new BasicCard("What was the first president of the U.S.","George Washington");
// abasicCard.displayCard();
// Export the module
module.exports= BasicCard;