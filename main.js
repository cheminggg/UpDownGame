// random number
// foydalanuvchi raqamni va go tugmasini bosish
// agar foydalanuvchi raqamni topsa, topdingiz deyiladi
// random raqam kichik < foydalanuvchi raqamdan (Down!!!)
// random raqam katta > foydalanuvchi raqamdan (Up!!!)
// Reset tugmasini bossa uyin qayta boshlanadi
// 5 marta shans beriladi. (va raqam, tugma, disable buladi )
// agar foydalanuvchi 1 ~ 100 dan tashqari sonni kiritsa elon qilinadi, shansni olib tashlamaydi
// foydalanuvchi oldin kiritgan raqamni yana birmarta kiritsa elon beradi shansdan olib tashlamaydi

let computerNum = 0;

let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let resultAreaImg = document.querySelector('.main-img');

let chances = 5;
gameOver = false;
let chanceArea = document.getElementById('chance-area');

let history = [];

playButton.addEventListener('click', play); // click event button
resetButton.addEventListener('click', reset); // click event button
userInput.addEventListener('focus', () => {
  userInput.value = '';
});

// random numer qismi
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

// play function
function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = '1 va 100 ni urtasidagi sonni kiriting';
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = 'uje kiritilgan raqam';
    return;
  }

  chances--;
  chanceArea.textContent = `Qolgan shans : ${chances}`;
  console.log('chance', chances);

  if (userValue < computerNum) {
    resultAreaImg.src =
      'https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif';
    resultArea.textContent = 'UP!!!';
    // console.log('UP!!!');
  } else if (userValue > computerNum) {
    resultAreaImg.src =
      'https://media1.giphy.com/media/3sdvGVm7Tg3egvphQF/giphy.gif';
    resultArea.textContent = 'DOWN!!!';
    // console.log('DOWN!!!');
  } else {
    resultAreaImg.src =
      'https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif';
    resultArea.textContent = 'Topdingiz!!!';
    gameOver = true;
    // console.log('Topdingiz');
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  // reset qilganda oy user oynani tozalash
  // userInput.value = '';

  // random numerni yangilash
  // pickRandomNum();

  // resultArea.textContent = 'natija bu yerda chiqadi';
  location.reload(true);
}

pickRandomNum();
