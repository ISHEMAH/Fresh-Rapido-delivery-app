var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = '../images/cocktail.jpg';
images[1] = '../images/rest.jpg';

function changePicture() {
    document.body.style.backgroundImage = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

window.onload = changePicture;