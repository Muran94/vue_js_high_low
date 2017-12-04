var vm = new Vue({
  el: "#app",
  data: {
    dealerCard: null,
    playerCard: null,
    resultMessage: "result",
    open: false
  },
  created: function () {
    this.dealerCard = this.getRandomCard();
    this.playerCard = this.getRandomCard();
  },
  methods: {
    getRandomCard: function() {
      return Math.floor(Math.random() * 13 + 1);
    },
    bet: function(guess) {
      if (this.open) {return}
      if (this.dealerCard === this.playerCard) {
        this.resultMessage = "引き分け";
      } else {
        this.resultMessage = this.getResultMessage(guess);
      }
    },
    reset: function() {
      if (!this.open) {return}
      this.open = false;
      this.dealerCard = this.getRandomCard();
      this.playerCard = this.getRandomCard();
    },
    getResultMessage: function(guess) {
      this.open = true;
      if (
        this.playerCard > this.dealerCard && guess === 'higher' ||
        this.playerCard < this.dealerCard && guess === 'lower'
      ) {
        return "勝利！";
      } else {
        return "敗北";
      }
    }
  }
})
