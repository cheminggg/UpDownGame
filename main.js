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
let btn = document.getElementById('btn'); // html dan  tugmani chaqirib oldik
const userInput = document.getElementById('user-input');
const resultArea = document.getElementById('result-area');
const resetButton = document.getElementById('reset-button');
const chanceArea = document.getElementById('chance-area');

let chances = 5; // qolgan shans
let gameOver = false;

btn.addEventListener('click', play);
resetButton.addEventListener('click', reset);

function pickRandomNum() {
  // math.floor butun raqam chiqaradi
  // Math.random() * 100; 100-gacha bulgan son orasidan random qiladi
  // Math.floor(Math.random() * 100)+1 (oxridagi +1 raqam komp 0 dan hisoblagani uchun 99 gacha chiqadi 100 gacha bulgan sonni chiqarish uchun +1 quyildi)
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

function play() {
  const userValue = userInput.value; // userInput.value; user ni qiymatini olib keladi.

  chances--; // play tugmasini bossa shans tushib boradi
  chanceArea.textContent = `qolgan shans : ${chances} ta`;
  console.log('chance', chances);

  // agar buni eng pastga yozsak birinchi chance ni kamaytirib keyin tuxtadi shuning uchun teada yozish kerak
  if (userValue < 1 && userValue > 100) {
    alert('100 dan katta son kiritngiz');
  }

  if (userValue < computerNum) {
    // agar user qiymati kompyuter qiymatidan kichik bulsa (Up!!!) chiqadi.
    resultArea.textContent = 'Up!!!'; // div tagga natijani chiqarib beradi.
  } else if (userValue > computerNum) {
    // agar user qiymati kompyuter qiymatidan katta bulsa (Down!!!) chiqadi.
    resultArea.textContent = 'Down!!!';
  } else {
    resultArea.textContent = 'Topdingiz!!!';
    return;
  }

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    btn.disabled = true;
  }
}

function reset() {
  // reset function
  // user input oynasi tozalanadi
  userInput.value = ''; // input oynasi yangilanadi.
  // yangi raqam beriladi. buning uchun tepadagi random funksiyasini chaqirsak buldi.
  pickRandomNum();

  resultArea.textContent = 'Natija bu yerdan chiqadi';
}

pickRandomNum();
