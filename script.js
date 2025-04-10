document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".play-button");
  const player = document.querySelector(".player");
  const audio = document.getElementById("audio");
  const lyricsContainer = document.getElementById("lyrics");
  const subtitleContainer = document.getElementById("subtitle");

  playButton.addEventListener("click", () => {
    console.log("Tombol Play diklik!");

    playButton.style.display = "none";
    player.style.display = "flex";

    audio
      .play()
      .catch((error) => console.log("Audio tidak bisa diputar:", error));

    displayLyrics();
  });

  function displayLyrics() {
    const lyrics = [
      {
        text: "No, no, no, no worry about nothing",
        subtitle: "(Tidak, tidak, tidak, tidak khawatir)",
        time: 0,
      },
      {
        text: "Oh, it's all gonna be good",
        subtitle: "(Oh, Semuanya akan baik-baik saja)",
        time: 2,
      },
      {
        text: "Don't worry about nothing",
        subtitle: "(Jangan khawatir tentang apapun)",
        time: 3.4,
      },
      {
        text: "Worry about nothing",
        subtitle: "(Tidak perlu cemas)",
        time: 4.3,
      },
      {
        text: "Nothing oh it's all gonna be good",
        subtitle: "(Tidak apa-apa oh, Semuanya akan baik-baik saja)",
        time: 5.5,
      },
      { text: "So breathe", subtitle: "(Jadi bernafaslah)", time: 7.8 },
      {
        text: "Like you know you should",
        subtitle: "(Seperti yang kau tahu)",
        time: 9.3,
      },
      { text: "Yeah breathe", subtitle: "Ya, bernafaslah", time: 12 },
      {
        text: "Till you're understood",
        subtitle: "(Sampai kau tahu)",
        time: 13.4,
      },
      {
        text: "Until you're feeling like yourself again",
        subtitle: "(Sampai kau merasa seperti diri sendiri lagi)",
        time: 15.4,
      },
      {
        text: "Feel the sunlight on your skin",
        subtitle: "(Rasakan sinar matahari di kulitmu)",
        time: 18,
      },
      {
        text: "Keep your heartbeat beat-beating",
        subtitle: "(Jaga agar jantungmu tetap berdetak kencang)",
        time: 20,
      },
      {
        text: "Go on go on breathe in",
        subtitle: "(Ayo ayo tarik napas)",
        time: 22,
      },
    ];

    lyrics.forEach((line, index) => {
      setTimeout(() => {
        lyricsContainer.textContent = line.text;
        subtitleContainer.textContent = line.subtitle; // Menggunakan teks subtitle yang berbeda
        lyricsContainer.classList.add("show");
        subtitleContainer.classList.add("show");

        if (lyrics[index + 1]) {
          setTimeout(() => {
            lyricsContainer.classList.remove("show");
            lyricsContainer.textContent = "";
            subtitleContainer.classList.remove("show");
            subtitleContainer.textContent = "";
          }, (lyrics[index + 1].time - line.time) * 1000 - 200);
        }
      }, line.time * 1000);
    });
  }
});
// **Kode Efek Bintang**
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawStars() {
  resizeCanvas(); // Pastikan canvas sesuai ukuran layar
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 2;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// **Jalankan HANYA SEKALI saat halaman dimuat**
drawStars();

// **Jika layar diubah ukurannya, gambar ulang bintang**
window.addEventListener("resize", drawStars);
