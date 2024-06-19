document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 
        'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 
        'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 
        'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 
       
    ];
    const imagesContainer = document.getElementById("images-container");
    const loadMoreButton = document.getElementById("load-more");
    let currentImageIndex = 0;

    function loadImages(count) {
        for (let i = 0; i < count; i++) {
            if (currentImageIndex >= images.length) {
                loadMoreButton.style.display = 'none';
                break;
            }
            const imageItem = document.createElement("div");
            imageItem.className = "image-item";
            const imageUrl = images[currentImageIndex];
            imageItem.innerHTML = `
                <img src="${imageUrl}" alt="Image ${currentImageIndex + 1}">
            `;
            imagesContainer.appendChild(imageItem);
            currentImageIndex++;

            // Trigger the transition by adding the 'visible' class after appending the element
            setTimeout(() => {
                imageItem.classList.add('visible');
            }, 100); // Delay to ensure the item is added to the DOM
        }
    }

    loadMoreButton.addEventListener("click", function() {
        loadImages(6);
    });

    loadImages(6);
});
