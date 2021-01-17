class Scorecard {
  constructor() {
    this._pinsKnocked = []
    this._frame = 0
    this._roll = 0
    this._frameScores = []
    this._strikesSpares = {}
  };

  inputRoll(number) {
    if(this._frameNotExist) {
      this._pinsKnocked.push([])
    }
    this._pinsKnocked[this._frame].push(number)
    this._roll++
    if(this._isFrameComplete()) {
      this.calculateFrame()
      this._frame++
    }
  };

  calculateFrame() {
    this._frameScores.push(this.sum(this._pinsKnocked[this._frame]))
    this.strikeOrSpare()
  }

  strikeOrSpare() {
    if(this._pinsKnocked[this._frame][0] === 10) {
      this.addStrike();
    }
    else if(this.sum(this._pinsKnocked[this._frame]) === 10) {
      this.addSpare();
    }
  }

  addSpare() {
    this._strikesSpares[this._frame] = "spare"
  }

  addStrike() {
    this._strikesSpares[this._frame] = "strike"
  }

  pinsKnocked() {
    return this._pinsKnocked
  }

  frameScores() {
    return this._frameScores
  }

  strikesSpares() {
    return this._strikesSpares
  }

  _frameNotExist() {
    return typeof this._pinsKnocked[this._frame] == "undefined"
  }

  _isFrameComplete(){
    return this._roll > 1 || this.sum(this._pinsKnocked[this._frame]) === 10
  }

  sum(array){
    return array.reduce(function(a,b){
      return a + b
    }, 0);
  }

};