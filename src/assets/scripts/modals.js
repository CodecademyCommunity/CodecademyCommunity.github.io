//MODAL SCRIPTS ----------------------------------------------------------------
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('.staff-btn');
const modalClose = document.querySelectorAll('.modal-close');
const modalBackgrounds = document.querySelectorAll(".modal-background")

for (let i = 0; i < modals.length; i++) {
    // Give all modals, open buttons, close buttons and modal backgrounds a corresponding "target" attribute.
    modals[i].setAttribute('target', i);
    modalTriggers[i].setAttribute('target', i);
    modalClose[i].setAttribute('target', i);
    modalBackgrounds[i].setAttribute('target', i);

    //Event listener to trigger the modal on click event
    modalTriggers[i].addEventListener('click', function(){
        const targetIndex = this.getAttribute('target')
        modals[targetIndex].classList.toggle('is-active');
    })    

    //Event listener to close the modal on click event
    modalClose[i].addEventListener('click', function(){
        const targetIndex = this.getAttribute('target')
        modals[targetIndex].classList.toggle('is-active');
    })    

    //Event listener to close the modal when background is clicked
    modalBackgrounds[i].addEventListener('click', function() {
        const targetIndex = this.getAttribute('target')
        modals[targetIndex].classList.toggle('is-active');
    })
}
