document.querySelectorAll('.btn-hireme').forEach(button => {
    button.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const paragraph = document.querySelector(`.project-subHeading[data-id="${id}"]`);
        const fullText = paragraph.getAttribute('data-full-text');
        const truncatedText = `${fullText.substring(0, 200)}....`;

        if (this.textContent === 'Read More') {
            paragraph.textContent = fullText;
            this.textContent = 'Show Less';
        } else {
            paragraph.textContent = truncatedText;
            this.textContent = 'Read More';
        }
    });
});

// Initialize with truncated text
document.querySelectorAll('.project-subHeading').forEach(paragraph => {
    const fullText = paragraph.textContent;
    const truncatedText = `${fullText.substring(0, 200)}....`;

    paragraph.setAttribute('data-full-text', fullText);
    paragraph.textContent = truncatedText;
});
