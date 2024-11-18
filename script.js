let slideIndex = 0;
showSlides();

// Fungsi untuk menampilkan slide
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

// Fungsi untuk navigasi slide
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// Fungsi untuk mengunggah gambar
document.getElementById('upload-button').addEventListener('click', function() {
    document.getElementById('upload-activity').click();
});

// Menangani pengunggahan gambar
document.getElementById('upload-activity').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.querySelector('.gallery');

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Image';
            img.classList.add('image-container');
            gallery.appendChild(img);
        }
        reader.readAsDataURL(files[i]);
    }
});
<script>
// Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

// Button Control for Slideshow
document.querySelectorAll('.prev, .next').forEach(btn => {
    btn.addEventListener('click', function() {
        const increment = this.classList.contains('next') ? 1 : -1;
        plusSlides(increment);
    });
});

// Upload Photo Functionality
const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('upload-activity');
const galleryContainer = document.querySelector('.gallery');

uploadButton.addEventListener('click', function() {
    fileInput.click();
});

fileInput.addEventListener('change', function() {
    const files = fileInput.files;
    if (files.length > 0) {
        for (const file of files) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = "Foto Kegiatan";
                img.classList.add('uploaded-photo');
                galleryContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    }
});
</script>
// Script sederhana untuk kembali ke halaman sebelumnya
document.querySelectorAll('.back-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        history.back();
    });
});
<script>
let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk mengganti slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fungsi untuk slide berdasarkan titik
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
</script>
<script>
    const rssFeedUrl = 'https://rss.detik.com/index.php/detikcom/pendidikan'; // URL RSS Detik Pendidikan

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`)
        .then(response => response.json())
        .then(data => {
            const feedContainer = document.getElementById('rss-feed');
            data.items.forEach(item => {
                const article = document.createElement('div');
                article.classList.add('news-item');
                
                const title = document.createElement('h3');
                const link = document.createElement('a');
                link.href = item.link;
                link.target = '_blank';
                link.textContent = item.title;

                title.appendChild(link);
                article.appendChild(title);
                
                feedContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error fetching RSS feed:', error));
</script>
document.addEventListener("DOMContentLoaded", function() {
    const userInfo = {
        browser: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
    };

    console.log(userInfo);  // Menampilkan informasi di konsol browser

    // Anda bisa mengirim data ini ke server untuk disimpan atau ditampilkan
});
<?php
// Mengambil alamat IP pengunjung
$ip = $_SERVER['REMOTE_ADDR'];
$time = date("Y-m-d H:i:s");

// Simpan ke file log atau database
file_put_contents('log.txt', "IP: $ip - Waktu Akses: $time\n", FILE_APPEND);
?>
// Server-side (Node.js with WebSocket)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Pengguna terhubung');
    ws.on('message', message => {
        console.log('Pesan dari pengguna: %s', message);
    });
});
