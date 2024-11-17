document.addEventListener('DOMContentLoaded', function() {
    // Check if device is touch-enabled
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        let activeItem = null;

        // Add click event listener to document to close active item when clicking outside
        document.addEventListener('click', function(e) {
            if (activeItem && !activeItem.contains(e.target)) {
                activeItem.classList.remove('active');
                activeItem = null;
            }
        });

        // Add click handlers to gallery items
        galleryItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent document click from immediately closing
                
                // If this item is already active, deactivate it
                if (this === activeItem) {
                    this.classList.remove('active');
                    activeItem = null;
                    return;
                }
                
                // Deactivate previous active item
                if (activeItem) {
                    activeItem.classList.remove('active');
                }
                
                // Activate this item
                this.classList.add('active');
                activeItem = this;
            });
        });
    }
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