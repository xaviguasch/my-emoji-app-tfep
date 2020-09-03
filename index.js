// Render the emojis as <span> tags in the emojisContainer <div>

// Hints: you can achieve this by creating an span with createElement(),
// setting its content with textContent, and using append() to append it to the container

const myEmojis = ['👨‍💻', '⛷', '🍲']
const emojiContainer = document.getElementById('emojiContainer')

for (let i = 0; i < myEmojis.length; i++) {
  // write your code here
  const emoji = document.createElement('span')
  emoji.textContent = myEmojis[i]
  emojiContainer.append(emoji)
}
