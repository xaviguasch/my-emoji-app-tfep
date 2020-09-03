// Make the unshift button work just as the push button (but with unshifting instead of pushing)

const myEmojis = ['👨‍💻', '⛷', '🍲']

function renderEmojis() {
  const emojiContainer = document.getElementById('emoji-container')
  emojiContainer.innerHTML = ''
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
  }
}

renderEmojis()

const pushBtn = document.getElementById('push-btn')
pushBtn.addEventListener('click', function () {
  const emojiInput = document.getElementById('emoji-input')
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ''
    renderEmojis()
  }
})

const unshiftBtn = document.getElementById('unshift-btn')
unshiftBtn.addEventListener('click', function () {
  const emojiInput = document.getElementById('emoji-input')
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ''
    renderEmojis()
  }
})
