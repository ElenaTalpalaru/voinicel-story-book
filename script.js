// Voinicel Story Book JavaScript

// Print function - Multiple ways to ensure it works
function printBook() {
    window.print();
}

// Also add event listener for the button
document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.querySelector('.print-button');
    
    if (printButton) {
        printButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.print();
        });
    }
    
    // Rest of the code...
function addImageToPlaceholder(placeholderElement, imageFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '15px';
        
        // Replace placeholder content with image
        placeholderElement.innerHTML = '';
        placeholderElement.appendChild(img);
    };
    reader.readAsDataURL(imageFile);
}

// Add click event listeners to placeholders for image upload
document.addEventListener('DOMContentLoaded', function() {
    const placeholders = document.querySelectorAll('.image-placeholder');
    
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (file) {
                    addImageToPlaceholder(placeholder, file);
                }
            };
            
            input.click();
        });
        
        // Add hover effect
        placeholder.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
            this.style.opacity = '0.8';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
});

// Optional: Save book as PDF (requires additional library)
function saveAsPDF() {
    // This would require a library like jsPDF or html2pdf
    console.log('PDF save functionality would go here');
    alert('Pentru a salva ca PDF, folosește funcția de print a browser-ului și alege "Save as PDF"');
}

// Optional: Add text editing functionality
function makeTextEditable() {
    const storyTexts = document.querySelectorAll('.story-text p');
    storyTexts.forEach(text => {
        text.contentEditable = true;
        text.style.border = '1px dashed #ccc';
        text.addEventListener('blur', function() {
            this.style.border = 'none';
        });
    });
}

// Optional: Reset all images
function resetImages() {
    const placeholders = document.querySelectorAll('.image-placeholder');
    placeholders.forEach(placeholder => {
        placeholder.innerHTML = `
            📌 ADAUGĂ IMAGINE AICI
            <div class="image-description">${placeholder.querySelector('.image-description')?.textContent || 'Descriere imagine'}</div>
        `;
    });
}
})