// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$('.thisBtn').on('click', () => {
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let nameInModal = document.getElementById('inp-modal-name');
let phoneInModal = document.getElementById('inp-modal-phone');
let submitBtn = document.getElementById('inp-submit-modal')

// отслеживаем нажатие на кнопку
submitBtn.disabled = true
nameInModal.addEventListener('input', (e) => {
    if (!nameInModal.value || !phoneInModal.value) {
        return submitBtn.disabled = true;
    }
    submitBtn.disabled = false;
})
phoneInModal.addEventListener('input', (e) => {
    if (!nameInModal.value || !phoneInModal.value) {
        return submitBtn.disabled = true;
    }
    submitBtn.disabled = false;
})

submitBtn.addEventListener('click', () => {
    let obj = {
        Name: nameInModal.value,
        Phone: phoneInModal.value,
        Source: 'bootcamp'

    }
    console.log(obj)
})
