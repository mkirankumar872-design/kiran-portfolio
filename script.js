const typingElement = document.querySelector('.typing');
const phrases = [
  'Full Stack Developer',
  'Responsive Web Creator',
  'JavaScript Enthusiast',
  'Problem Solver',
];
let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function updateTyping() {
  const currentPhrase = phrases[phraseIndex];
  if (!typingElement) return;

  if (deleting) {
    characterIndex -= 1;
    typingElement.textContent = currentPhrase.slice(0, characterIndex);
    if (characterIndex <= 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  } else {
    characterIndex += 1;
    typingElement.textContent = currentPhrase.slice(0, characterIndex);
    if (characterIndex >= currentPhrase.length) {
      deleting = true;
    }
  }

  const speed = deleting ? 80 : 120;
  const pause = deleting ? 200 : 2000;
  setTimeout(updateTyping, deleting ? speed : (characterIndex === currentPhrase.length ? pause : speed));
}

if (typingElement) {
  updateTyping();
}
