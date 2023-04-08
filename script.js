const sentences = [
  { english: 'There is a computer on my desk.', sinhala: '01. මගේ මේසය උඩ කම්පියුටර් එකක් තියෙනවා.' },
  { english: 'There was a super market near my house.', sinhala: '02. මගේ නිවස ලග සුපර් මාකට් එකක් තිබුනා.' },
  { english: 'Do you have a vehicle ?', sinhala: '03. ඔයාට වාහනයක් තියෙනවද?' },
  { english: 'How many children do you have ?', sinhala: '04. ඔයාට ළමයි කී දෙනෙක් ඉන්නවද ?' },
  { english: 'This is my grandfather’s watch.', sinhala: '05. මේ මගේ සීයාගේ ඔරලෝසුව.' },
  { english: 'I don\'t like to sleep in the afternoon.', sinhala: '06. මම දහවල් නිදාගන්න කැමති නැහැ.' },
  { english: 'Do you want to know how it works?', sinhala: '07. ඔබට එය වැඩ කරන ආකාරය දැන ගැනීමට අවශ්‍යද?' },
  { english: 'My son works at a bank.', sinhala: '08. මගෙ පුතා වැඩ කරන්නේ බැංකුවක.' },
  { english: 'Banks open at 9 am.', sinhala: '09. බැංකු අරින්නේ 9 ට.' },
  { english: 'My brother watches tv every day.', sinhala: '10.  මගේ අයියා හැමදාම ටීවී බලනවා.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://krishbro.github.io/English-Sent-Maker-03/";
});
