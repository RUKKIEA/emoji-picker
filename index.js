document.addEventListener('DOMContentLoaded', function() {
 const emojis = document.querySelectorAll('.emoji');
 const displayEmoji = document.getElementById('display-emoji');
 const displayName = document.getElementById('display-name');

 emojis.forEach(emoji => {
     emoji.addEventListener('click', function() {
         const emojiSymbol = this.textContent;
         const emojiName = this.getAttribute('data-name');
         
         displayEmoji.textContent = emojiSymbol;
         displayName.textContent = emojiName;
     });
 });
});
