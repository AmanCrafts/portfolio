document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to handle image loading
    function handleImageLoad(item) {
        const img = item.querySelector('img');
        
        if (img) {
            // If image is already cached, remove skeleton immediately
            if (img.complete) {
                item.classList.add('loaded');
            } else {
                // Wait for image to load
                img.onload = () => {
                    item.classList.add('loaded');
                };
            }
        }
    }

    // Initialize loading handling for all gallery items
    galleryItems.forEach(handleImageLoad);
}); 

// document.addEventListener('DOMContentLoaded', function() {
//     // Function to create skeleton loaders
//     function createSkeletonLoaders() {
//         const galleryGrid = document.querySelector('.gallery-grid');
//         const actualItems = document.querySelectorAll('.gallery-item').length;
        
//         // Create skeleton template
//         const createSkeletonTemplate = () => {
//             const skeleton = document.createElement('div');
//             skeleton.className = 'gallery-item skeleton';
//             skeleton.innerHTML = `
//                 <div class="skeleton-img"></div>
//                 <div class="skeleton-text">
//                     <div class="skeleton-line"></div>
//                     <div class="skeleton-line"></div>
//                     <div class="skeleton-line"></div>
//                 </div>
//             `;
//             return skeleton;
//         };

//         // Add skeleton loaders
//         for (let i = 0; i < actualItems; i++) {
//             const skeletonLoader = createSkeletonTemplate();
//             galleryGrid.appendChild(skeletonLoader);
//         }

//         // Remove skeletons when content is loaded
//         window.addEventListener('load', () => {
//             const skeletons = document.querySelectorAll('.skeleton');
//             skeletons.forEach(skeleton => {
//                 skeleton.style.display = 'none';
//             });
//         });
//     }

//     // Initialize skeleton loaders
//     createSkeletonLoaders();
// });