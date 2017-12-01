var basicCards = function basicCards(front,back) {
    this.front = front;
    this.back = back;
    this.frontdisplay = function() {
     console.log(this.front);
    };
    this.backdisplay = function() {
        console.log(this.back);
    };
}

basicCards.prototype.frontdisplay = function() {
    console.log(this.front);
  };

basicCards.prototype.backdisplay = function() {
    console.log(this.front);
  };

module.exports = {
	basicCards: basicCards }
