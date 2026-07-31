// Tab Switching Function
function switchTab(tabId) {
  // Hide all tabs
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Deactivate all tab buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Activate selected tab & button
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Accordion Toggle Function
function toggleAccordion(accId) {
  const body = document.getElementById(accId);
  const arrow = document.getElementById('arrow-' + accId);

  if (body.classList.contains('open')) {
    body.classList.remove('open');
    arrow.textContent = '▼';
  } else {
    body.classList.add('open');
    arrow.textContent = '▲';
  }
}

// Plastic Impact Calculator
function calculateImpact() {
  const sachets = parseInt(document.getElementById('sachetInput').value) || 0;
  const bottles = parseInt(document.getElementById('bottleInput').value) || 0;

  const totalGramWaste = (sachets * 3) + (bottles * 25);
  const co2Saved = (totalGramWaste * 1.5).toFixed(1);

  const resultBox = document.getElementById('calcResult');
  resultBox.innerHTML = `🎉 Amazing! You diverted <strong>${totalGramWaste}g</strong> of plastic waste from Accra landfills and prevented <strong>${co2Saved}g</strong> of carbon emissions!`;
}

function toggleFabMenu() {
  const fabBtn = document.getElementById('fabBtn');
  const fabMenuCard = document.getElementById('fabMenuCard');
  
  fabBtn.classList.toggle('active');
  fabMenuCard.classList.toggle('open');
}
// Toggle Floating Action Button & Glass Drawer
function toggleFabMenu() {
  const fabBtn = document.getElementById('fabBtn');
  const fabMenuCard = document.getElementById('fabMenuCard');
  
  if (fabBtn && fabMenuCard) {
    fabBtn.classList.toggle('active');
    fabMenuCard.classList.toggle('open');
  }
}

// 3. Outside-Tap Auto Close Listener
document.addEventListener('click', function(event) {
  const fabContainer = document.querySelector('.fab-container');
  const fabBtn = document.getElementById('fabBtn');
  const fabMenuCard = document.getElementById('fabMenuCard');

  // If menu is open and click happens outside the container, close it!
  if (fabContainer && fabMenuCard && fabMenuCard.classList.contains('open')) {
    if (!fabContainer.contains(event.target)) {
      fabBtn.classList.remove('active');
      fabMenuCard.classList.remove('open');
    }
  }
});