var clozecard = function clozecard(text,partial,cloze) {
    this.text = text;
    this.partial = partial;
    this.cloze = cloze;
    this.textDisplay = function() {
        console.log(this.text)
       };
    this.partialText = function() {
        console.log(this.partial)
       };
    this.clozeText = function() {
        console.log(this.cloze);
    };
}


module.exports = {
    clozecard: clozecard }
    
    

