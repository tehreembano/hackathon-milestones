"use strict";
const toggleButton = document.getElementById('toggle-Skills');
const skills = document.getElementById('skills');
toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
