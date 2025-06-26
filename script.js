const targetDate = new Date("2025-06-28T10:00:00").getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "<p>Acara telah berlangsung</p>";
  }
}, 1000);

// Ambil nama dari parameter URL
const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get("to");

// Tampilkan nama jika ada
if (guest) {
  const guestEl = document.getElementById("guestName");
  if (guestEl) {
    guestEl.textContent = "Kepada Yth. " + decodeURIComponent(guest);
  }
}

function copyRek(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    document.getElementById("copyNotif").textContent = "Nomor rekening berhasil disalin!";
    setTimeout(() => document.getElementById("copyNotif").textContent = "", 3000);
  });
}


