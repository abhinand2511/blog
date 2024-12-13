document.addEventListener('DOMContentLoaded', function() {
    const commentForms = document.querySelectorAll('.comment-form');
    
    commentForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[type="text"]');
            const commentInput = this.querySelector('textarea');
            const commentsContainer = this.parentElement.querySelector('.comments');
            
            if (nameInput.value && commentInput.value) {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `
                    <p><span class="author">${nameInput.value}</span> says:</p>
                    <p>${commentInput.value}</p>
                `;
                
                commentsContainer.appendChild(commentElement);
                
                // Clear the form
                nameInput.value = '';
                commentInput.value = '';
            }
        });
    });
});