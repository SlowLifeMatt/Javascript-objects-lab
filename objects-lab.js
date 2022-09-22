//I would recommend trying out letting the user pick a range instead of hard coding biggestNum and smallestNum, it is a good challenge.

//One thing you might want to solve is getting the cancel button to close the prompt window
//cancel === NaN
//I added code to do so, no perfect but working.. 

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function () {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    //initialized guess to nothing so that I can hit prompt's cancel
        let guess
          while(guess !== this.secretNum) {
            guess = this.getGuess();
            //below so that NaN doesn't show up in prevGuesses - still prompts too low when NaN
            if(guess)this.prevGuesses.push(guess);
            this.render(guess);
            if (guess === this.secretNum) return;
            // return if cancel button selected
            if(!guess)return
          }
        },
  getGuess: function(){ 
    let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `))
    //removed while loop so that I can use the cancel the prompt in play() added alert per if()
    if (guess > this.biggestNum || guess < this.smallestNum) {
      alert(`${guess} is not within the guessing range`)
    }
      return guess;  //add guess to PrevGuesses
                    // return the guess value
  },

//Nice job using the ternary operator! It is good practice
render: function(guess) {
  let msg = (guess === this.secretNum) ?
    `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`: // Congrats! You guessed the number in [x] guesses!
    `Your guess is too ${guess > this.secretNum ? 'high' : 'low'} 
     Previous guesses: ${this.prevGuesses.join(', ')} `; // list previous guesses , Your guess is too [high|low]
  alert(msg);
}
};

game.play();