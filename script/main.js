document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Validasi Interaktif Form Pemesanan
    const orderForm = document.querySelector('#pemesanan form');
    
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah reload halaman
            
            // Ambil nilai dari input
            const nama = document.getElementById('nama_pemohon').value.trim();
            const email = document.getElementById('email_pemohon').value.trim();
            const kategori = document.getElementById('kategori_barang').value;
            const jumlah = document.getElementById('jumlah_item').value;
            const tanggal = document.getElementById('tgl_dibutuhkan').value;

            // Validasi Sederhana
            if (!nama || !email || !kategori || !jumlah || !tanggal) {
                alert('Mohon lengkapi semua bidang yang wajib diisi!');
                return;
            }

            // Notifikasi Sukses
            alert(`Terima kasih, ${nama}!\nPermintaan pengadaan barang berhasil dikirim.`);
            
            // Reset form setelah submit
            orderForm.reset();
        });
    }

    // 2. Smooth Scroll untuk Navigasi Header
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});