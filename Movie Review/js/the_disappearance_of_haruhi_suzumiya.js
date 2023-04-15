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
    const kyon = document.getElementById('kyon');
    const haruhi = document.getElementById('haruhi');
    const yuki = document.getElementById('yuki');
    const mikuru = document.getElementById('mikuru');
    const itsuki = document.getElementById('itsuki');
    const characterImage = document.getElementById('character-image').querySelector('img');

    kyon.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/kyon.jpg';
    });

    haruhi.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/haruhi.jpg';
    });

    yuki.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/yuki.jpg';
    });

    mikuru.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/mikuru.jpg';
    });

    itsuki.addEventListener('click', () => {
        characterImage.src = '../movie_reviews/character_images/itsuki.jpg';
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