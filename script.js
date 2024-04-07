const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carousel = document.querySelector('.staff-carousel-container');
const staffMembers = document.querySelectorAll('.staff-member');

let counter = 0;
const size = carousel.clientWidth;

// Afficher les 3 premiers membres du personnel
showStaff(counter);

nextButton.addEventListener('click', () => {
    if (counter < staffMembers.length - 3) {
        counter++;
        showStaff(counter);
    }
});

prevButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        showStaff(counter);
    }
});

function showStaff(counter) {
    staffMembers.forEach((staffMember, index) => {
        if (index >= counter && index < counter + 3) {
            staffMember.style.left = `${(index - counter) * size}px`; // Positionner les membres du personnel visibles
            staffMember.classList.add('active');
        } else {
            staffMember.classList.remove('active');
        }
    });
}
