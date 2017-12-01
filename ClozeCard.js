var clozeCards = function casicCards(text,cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partialText = function() {
      this.partialTextdata = this.text.replace(this.cloze, '----'); 
     console.log(this.partialTextdata)
    }
    this.clozedisplay = function() {
        console.log(this.cloze);
    };
}

module.exports = {
	closeCards: clozeCards }
