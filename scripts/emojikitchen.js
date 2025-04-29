const emojis = document.querySelectorAll('.emoji');
const mixedEmoji = document.getElementById('mixed-emoji');

let selected = [];

emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    const symbol = emoji.getAttribute('data-emoji');
    
    if (selected.length < 2) {
      selected.push(symbol);
    } else {
      selected = [symbol]; // restart selection
    }

    renderMixedEmoji();
  });
});

function renderMixedEmoji() {
  mixedEmoji.innerHTML = ''; // clear old

  selected.forEach((emoji, index) => {
    const span = document.createElement('span');
    span.textContent = emoji;
    span.style.opacity = index === 0 ? '0.8' : '0.5';
    span.style.transform = index === 1 ? 'rotate(10deg)' : 'rotate(-10deg)';
    mixedEmoji.appendChild(span);
  });
}
