// Aikavyöhykkeiden näyttäminen
const timeZonesDiv = document.getElementById('time-zones');

// Funktio, joka näyttää aikavyöhykkeet
function displayTimeZones() {
  const timeZones = ['UTC', 'Europe/Helsinki', 'America/New_York', 'Asia/Tokyo'];
  const now = new Date();

  timeZones.forEach(zone => {
    const zoneTime = new Date(now.toLocaleString('en-US', { timeZone: zone }));
    const zoneDiv = document.createElement('div');
    zoneDiv.innerHTML = `<strong>${zone}</strong>: ${zoneTime.toLocaleTimeString()}`;
    timeZonesDiv.appendChild(zoneDiv);
  });
}

displayTimeZones();

// Universumin laajeneminen animaatio
const canvas = document.getElementById('universeCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 400;

function drawUniverse() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 150, 0, 2 * Math.PI);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 5;
  ctx.stroke();
  requestAnimationFrame(drawUniverse);
}

drawUniverse();

// Aikamatka simulaatio
function startTimeTravel() {
  alert("Aikamatka alkaa! Siirrytään menneisyyteen...");
  // Tässä voidaan lisätä aikamatkan logiikkaa ja tapahtumia
}
