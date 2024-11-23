function showPopup(imageSrc, title, details, extra) {
    document.getElementById("popup-image").src = imageSrc;
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-details").innerText = details;
    document.getElementById("popup-extra").innerText = extra;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function closePopupOnOutsideClick(event) {
    // popup-content外をクリックした場合のみポップアップを閉じる
    if (event.target.id === "popup") {
        closePopup();
    }
}
