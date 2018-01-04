function upDate(previewPic) {
    // Changing inner html of image div
    document.getElementById("image").innerHTML = previewPic.alt;
    // Changing backgroundImage of image div using url
    document.getElementById("image").style.backgroundImage = 'url(' + previewPic.src + ')';

}

function unDo() {
    // Undoing the changes here
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "none";
}