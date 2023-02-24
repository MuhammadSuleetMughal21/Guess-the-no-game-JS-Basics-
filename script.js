'use strict';
let secret_no = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const display = function (message) {
  document.querySelector('.message').textContent = message;
};
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'you guess correct number🎉';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;*/

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    //document.querySelector('.message').textContent = '🖐🛑 no number found';
    display('🖐🛑 no number found');
  } else if (guess === secret_no) {
    //document.querySelector('.message').textContent =
    display('you guess correct number🎉');

    document.querySelector('.number').textContent = secret_no;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secret_no) {
    if (score > 1) {
      display(guess > secret_no ? 'number is too high' : 'number is too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lost';
      display('you lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*else if (guess > secret_no) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'number is too high')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret_no) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'number is too low')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_no = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = '...Start Guessing';
  display('...Start Guessing');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
