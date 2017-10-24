function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("change-img").src = images[x];
    document.getElementById("change-text").innerHTML = text[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("change-img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}

var images = [], x = -1;
images[0] = "images/250X110571325734.jpg";
images[1] = "images/paz_250x110103131473.jpg";
images[2] = "images/250X110668568400.jpg";

var text=[];
text[0] = "yellow click&amp;pick"
text[1] = "שטחי מסחר פז סנטר"
text[2] = "טיפז"