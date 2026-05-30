const roles = [
  'Full Stack Developer',
  'Responsive Web Designer',
  'Frontend Specialist',
  'JavaScript Enthusiast',
];
const typingElement = document.querySelector('.typing');
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main section[id]');
let currentRole = 0;
let currentChar = 0;
let deleting = false;

function updateTyping() {
  if (!typingElement) return;
  const role = roles[currentRole];
  if (deleting) {
    currentChar -= 1;
    typingElement.textContent = role.slice(0, currentChar);
    if (currentChar <= 0) {
      deleting = false;
      currentRole = (currentRole + 1) % roles.length;
    }
  } else {
    currentChar += 1;
    typingElement.textContent = role.slice(0, currentChar);
    if (currentChar >= role.length) {
      deleting = true;
    }
  }
  const delay = deleting ? 80 : currentChar === role.length ? 1800 : 120;
  setTimeout(updateTyping, delay);
}

function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const link = document.querySelector(`.main-nav a[href="#${section.id}"]`);
    if (!link) return;
    if (scrollY >= top && scrollY < top + height) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const typedText = document.createElement('span');
  typedText.className = 'typing';
  const heroHeading = document.querySelector('.hero-copy');
  if (heroHeading) {
    heroHeading.insertBefore(typedText, heroHeading.querySelector('.hero-actions'));
  }
  updateTyping();
  updateActiveNav();
});

window.addEventListener('scroll', updateActiveNav);
