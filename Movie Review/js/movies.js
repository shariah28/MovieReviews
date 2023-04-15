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
    const howl = document.getElementById('howl');
    const sophie = document.getElementById('sophie');
    const calcifer = document.getElementById('calcifer');
    const markl = document.getElementById('markl');
    const witch = document.getElementById('witch');
    const characterImage = document.getElementById('character-image').querySelector('img');

    howl.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/howl.jpg';
    });

    sophie.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/sophie.jpg';
    });

    calcifer.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/calcifer.jpg';
    });

    markl.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/markl.jpg';
    });

    witch.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/witch.jpg';
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