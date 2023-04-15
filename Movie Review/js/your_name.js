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
    const taki = document.getElementById('taki');
    const mitsuha = document.getElementById('mitsuha');
    const yotsuha = document.getElementById('yotsuha');
    const yukari = document.getElementById('yukari');
    const sayaka = document.getElementById('sayaka');
    const characterImage = document.getElementById('character-image').querySelector('img');

    taki.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/taki.jpg';
    });

    mitsuha.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/mitsuha.jpg';
    });

    yotsuha.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/yotsuha.jpg';
    });

    yukari.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/yukari.jpg';
    });

    sayaka.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/sayaka.jpg';
    });

    // This is how to comments section will work to auto update and add the comments
    const commentForm = document.getElementById('comments');
    const userComments = document.querySelector('.user-comments');

    commentForm.addEventListener('submit', function(event) 
    {
        event.preventDefault(); // prevent form submission

        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');

        // create new comment element
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <h4>${nameInput.value}</h4>
            <p>${commentInput.value}</p>
        `;

        // add new comment to comments section
        userComments.appendChild(newComment);

        // clear form inputs
        nameInput.value = '';
        commentInput.value = '';
    });
});