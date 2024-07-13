function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');
    var buffer = 50; // Buffer to ensure no overlap and avoid going too far
    
    // Calculate new random positions
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth - buffer * 2) + buffer;
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight - buffer * 2) + buffer;

    // Ensure the "No" button does not overlap with the "Yes" button
    var yesRect = yesButton.getBoundingClientRect();
    var noRect = noButton.getBoundingClientRect();
    
    while ((x > yesRect.left - noRect.width && x < yesRect.right) && (y > yesRect.top - noRect.height && y < yesRect.bottom)) {
        x = Math.random() * (window.innerWidth - noButton.offsetWidth - buffer * 2) + buffer;
        y = Math.random() * (window.innerHeight - noButton.offsetHeight - buffer * 2) + buffer;
    }

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    console.log(`Button moved to (${x}px, ${y}px)`);
}
