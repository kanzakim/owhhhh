const text = "Hai kamu... Aku cuma mau bilang, terima kasih udah selalu ada. Kamu itu rumah buat hati aku 💖";
let i = 0;

function openEnvelope() {
  document.querySelector('.envelope').style.display = 'none';
  document.getElementById('letter').classList.remove('hidden');
  typeText();
}

function typeText() {
  if (i < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 80);
  }
}

const bgMusic = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

muteBtn.onclick = () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteBtn.textContent = "🔈";
  } else {
    bgMusic.muted = true;
    muteBtn.textContent = "🔇";
  }
};
