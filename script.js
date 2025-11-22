const bookingForm = document.getElementById('bookingForm');
const confirmPaymentModalElement = document.getElementById('confirmPaymentModal');
const confirmPaymentModal = new bootstrap.Modal(confirmPaymentModalElement);
const btnConfirm = document.getElementById('btnConfirmPayment');

// Handle form submission
bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (bookingForm.checkValidity()) {
        confirmPaymentModal.show();
    } else {
        bookingForm.reportValidity();
    }
});

// Ambil elemen alert dan tombol konfirmasi
const alertElement = document.getElementById('myAlert');
// Fungsi untuk menampilkan alert
function showAlert() {
    bookingForm.reset();
    alertElement.classList.remove('d-none', 'hidden');
    alertElement.classList.add('position-fixed', 'top-0', 'start-50', 'translate-middle-x', 'mt-5', 'w-50', 'show');
    alertElement.style.zIndex = '1055';

    // **Menyembunyikan Alert secara Otomatis setelah 5 detik**
    setTimeout(() => {
        hideAlert();
    }, 5000); // 5000 milidetik = 5 detik
}

// Fungsi untuk menyembunyikan alert
function hideAlert() {
    // Menghapus kelas tampilan dan menambahkan kelas 'd-none' atau 'hidden' untuk menyembunyikan
    alertElement.classList.remove('show');
    alertElement.classList.add('d-none'); // Gunakan 'd-none' dari Bootstrap

    // Opsional: Hapus juga properti styling yang ditambahkan
    alertElement.style.zIndex = '';
}


// Event listener untuk tombol konfirmasi
btnConfirm.addEventListener('click', function () {
    // Sembunyikan modal konfirmasi
    confirmPaymentModal.hide();

    // Tampilkan alert
    showAlert();

    // Reset form (jika perlu)
    // bookingForm.reset(); 
});
