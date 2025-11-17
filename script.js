const bookingForm = document.getElementById('bookingForm');
const confirmPaymentModalElement = document.getElementById('confirmPaymentModal');
const confirmPaymentModal = new bootstrap.Modal(confirmPaymentModalElement);
const btnConfirm = document.getElementById('btnConfirmPayment');

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (bookingForm.checkValidity()) {
        confirmPaymentModal.show();
    } else {
        bookingForm.reportValidity();
    }
});

const alertElement = document.getElementById('myAlert');
btnConfirm.addEventListener('click', function () {
    confirmPaymentModal.hide();
    alertElement.classList.remove('d-none', 'hidden');
    alertElement.classList.add('position-fixed', 'top-0', 'start-50', 'translate-middle-x', 'mt-5', 'w-50', 'show');
    alertElement.style.zIndex = '1055';
    bookingForm.reset();
});
