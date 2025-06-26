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

function showATM(name, bank, number) {
  document.getElementById('atmName').textContent = name;
  document.getElementById('atmBank').textContent = bank;
  document.getElementById('atmNumber').textContent = number;
  document.getElementById('atmModal').style.display = 'flex';
  document.getElementById('atmNotif').textContent = '';
}

function hideATM() {
  document.getElementById('atmModal').style.display = 'none';
}

function copyATM() {
  const number = document.getElementById('atmNumber').textContent;
  navigator.clipboard.writeText(number).then(() => {
    document.getElementById('atmNotif').textContent = 'Nomor rekening berhasil disalin!';
  });
}

  });
}


