function showStoryContent(title, imagePath, text) {
    document.getElementById('story-image').src = imagePath;
    document.getElementById('story-title').textContent = title;
    document.getElementById('story-text').innerHTML = text;
    document.getElementById('story-content').style.display = "flex";
}