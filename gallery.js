/* This function runs when the page is fully loaded to set up the gallery's interactivity. */
window.onload = function() {
    // 1. Get references to the main display and all thumbnail elements
    const mainImageDiv = document.getElementById('image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // 2. Loop through each thumbnail to add tabindex and event listeners
    thumbnails.forEach(function(thumbnail) {
        
        // REQUIREMENT: Automatically add the tabindex attribute to enable keyboard focus
        thumbnail.setAttribute('tabindex', '0');

        // Add event listeners for mouse interaction
        thumbnail.addEventListener('mouseover', function() {
            upDate(thumbnail);
        });
        thumbnail.addEventListener('mouseout', function() {
            undo();
        });

        // Add event listeners for keyboard/focus interaction (for accessibility)
        thumbnail.addEventListener('focus', function() {
            upDate(thumbnail);
        });
        thumbnail.addEventListener('blur', function() {
            undo();
        });
    });
};

/**
 * Updates the main display image and text.
 * @param {HTMLImageElement} previewPic - The thumbnail image element.
 */
function upDate(previewPic) {
    const mainImageDiv = document.getElementById('image');
    
    // Update the text content to the thumbnail's alternative text (alt)
    mainImageDiv.innerHTML = previewPic.alt;

    // Update the background image using the thumbnail's source (src)
    mainImageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

/**
 * Resets the main display image and text.
 */
function undo() {
    const mainImageDiv = document.getElementById('image');

    // Reset text
    mainImageDiv.innerHTML = "Hover over an image below to display here.";

    // Reset background
    mainImageDiv.style.backgroundImage = "url('')";
}
