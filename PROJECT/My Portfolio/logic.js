document.querySelector('.read-more-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}

document.querySelector('.read-more-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});

document.querySelector('.overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopup();
    }
});

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}
