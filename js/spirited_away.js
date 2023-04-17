// This is to make it so when u click the character picture, it doesn't jump you to the top of the page
function showImage(character, imageUrl, event)
{
    var image = document.getElementById("character-image");
    image.src = imageUrl;

    // Disable the default behavior of the link
    event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function()
  {
        // This is to make it so the character pictures change when clicking their name
        const chihiro = document.getElementById('chihiro');
        const haku = document.getElementById('haku');
        const yubaba = document.getElementById('yubaba');
        const lin = document.getElementById('lin');
        const noface = document.getElementById('no-face');
        const characterImage = document.getElementById('character-image').querySelector('img');

        chihiro.addEventListener('click', () => {
            characterImage.src = '../movie_reviews/character_images/chihiro.jpg';
        });

        haku.addEventListener('click', () => {
            characterImage.src = '../movie_reviews/character_images/haku.jpg';
        });

        yubaba.addEventListener('click', () => {
            characterImage.src = '../movie_reviews/character_images/yubaba.jpg';
        });

        lin.addEventListener('click', () => {
            characterImage.src = '../movie_reviews/character_images/lin.jpg';
        });

        noface.addEventListener('click', () => {
            characterImage.src = '../movie_reviews/character_images/noface.jpg';
        });

    // This is how to comments section will work to auto update and add the comments
    const commentForm = document.getElementById('comment-form');
    const userComments = document.querySelector('.user-comments');
    const url = window.location.href; // Get the URL of the current page

    // Load existing comments from local storage
    const existingComments = JSON.parse(localStorage.getItem(`comments-${url}`)) || [];
    for (const comment of existingComments) {
      const newComment = createCommentElement(comment.name, comment.text);
      userComments.appendChild(newComment);
    }

    commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent form submission

      const nameInput = document.getElementById('name');
      const commentInput = document.getElementById('comment');
      const comment = {
        name: nameInput.value,
        text: commentInput.value
      };

      // Save the new comment to local storage
      const comments = JSON.parse(localStorage.getItem(`comments-${url}`)) || [];
      comments.push(comment);
      localStorage.setItem(`comments-${url}`, JSON.stringify(comments));

      // create new comment element
      const newComment = createCommentElement(comment.name, comment.text);
      userComments.appendChild(newComment);

      // clear form inputs
      nameInput.value = '';
      commentInput.value = '';
    });

    function createCommentElement(name, text) {
      const newComment = document.createElement('section');
      newComment.className = 'comment';
      newComment.innerHTML = `
        <h4>${name}</h4>
        <p>${text}</p>
      `;
      return newComment;
    }
});