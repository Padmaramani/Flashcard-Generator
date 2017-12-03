var clozecard = function clozecard(text,cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partialText = function() {
      this.partialTextData = this.text.replace(this.cloze, '----'); 
     console.log(this.partialTextdata)
    }
    this.clozeDisplay = function() {
        console.log(this.cloze);
    };
}

var displayCloze=new clozecard("This is a test","test")
displayCloze.partialText();
displayCloze.clozeDisplay(); 
string1="This is just a test"
string2=string1.replace("just","jist")
console.log(string1);
console.log(string2);