function initializeProductGallery() {
    const mainImg = document.getElementById("MainImg");
    const smallImages = document.getElementsByClassName("small-img");
    
    if (!mainImg || !smallImages.length) return;
    
    Array.from(smallImages).forEach((img, index) => {
        img.onclick = function() {
            mainImg.src = img.src;
            
            // Remove active class from all thumbnails
            Array.from(smallImages).forEach(thumb => 
                thumb.classList.remove('active'));
            // Add active class to clicked thumbnail
            img.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProductGallery); 