function upDate(previewPic) {
    console.log("Mouse over triggered"); // check event
    console.log("Alt text:", previewPic.alt); // check alt
    console.log("Image source:", previewPic.src); // check src

    // Update the text
    document.getElementById('image').innerHTML = previewPic.alt;

    // Update the background image
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Reset text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";

    // Reset background
    document.getElementById('image').style.backgroundImage = "url('')";
}
