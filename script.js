document.getElementById('fan-story-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const storyInput = document.getElementById('story');
    const storiesDiv = document.getElementById('stories');

    const newStory = document.createElement('p');
    newStory.textContent = storyInput.value;
    storiesDiv.appendChild(newStory);

    storyInput.value = ''; // Clear the textarea
});
document.getElementById('change-background-button').addEventListener('click', function() {
    document.body.style.background = "url('new-background-image.jpg') no-repeat center center fixed"; // Replace with the new image
    document.body.style.backgroundSize = "cover";
});

