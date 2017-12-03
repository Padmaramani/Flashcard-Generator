var basicCard = function basicCard(front,back) {
    this.front = front;
    this.back = back;
    this.frontDisplay = function() {
        console.log(this.front);
      };
    this.backDisplay = function() {
        console.log(this.back);
      };
}

module.exports = {
	basicCard: basicCard }
