// VARIANTES DARKMODE ---------------------------

const btnToogle = document.getElementById('darkMode');
const bulleToogle = document.getElementById('bulle');

console.log('Element du darkMode', btnToogle, bulleToogle)

// VARIANTES PROGRESSION BARRE ---------------------------

const circleMessager = document.getElementById('progress-circleMessager');
const circleWarrior = document.getElementById('progress-circleWarrior');
const circleStronger = document.getElementById('progress-circleStronger');
const radius = 70;
const circumference = 2 * Math.PI * radius; // 565.48

console.log('Element des badges', circleMessager, circleStronger, circleWarrior, circumference);

// VARIANTES PROGRESSION BARRE ---------------------------



// VARIANTES DATE +7JOURS ---------------------------

const containerDate = document.querySelectorAll('.jour');
const dateToday = new Date();

console.log('Element du calendrier', containerDate, dateToday)

// VARIANTE SLIDECONTAINER ------------------------------

const slideLeft = document.getElementById('iconLeft');
const slideRight = document.getElementById('iconRight');
const containerSlide = document.getElementById('slideContainer');

console.log('Element du SLIDECONTAINER', slideLeft, slideRight, containerSlide)

// ======================================================
// DARKMODE
// ======================================================


if (!btnToogle) {
    console.log('Container Dark Mode absent !')
}
// Vérifier si un thème est sauvegardé
const themeActuel = localStorage.getItem('theme');
if (themeActuel === 'dark') {
  document.documentElement.classList.add('dark');
}


// Écouter le clic sur le bouton
btnToogle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  btnToogle.classList.toggle('active');
  
  // Sauvegarder la préférence
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});



// ======================================================
// PROGRESSION BARRE POINT TEAM
// ======================================================

function setProgressMessager(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circleMessager.style.strokeDashoffset = offset;
    }
    
    setProgressMessager(50); // Affiche 75%

function setProgressWarrior(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circleWarrior.style.strokeDashoffset = offset;
    }
    
    setProgressWarrior(20); // Affiche 75%

function setProgressStronger(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circleStronger.style.strokeDashoffset = offset;
    }
    
    setProgressStronger(10); // Affiche 75%



// ======================================================
// AFFICHAGE DES JOURS
// ======================================================

containerDate.forEach((boite, index) => {

  const futureDate = new Date(dateToday);

  futureDate.setDate(futureDate.getDate() + (index + 1));

  const dayName = futureDate.toLocaleDateString("fr", {
    weekday : "long"
  }).slice(0, 3);

  boite.innerHTML = dayName;
})

// ======================================================
// SLIDE DU PLANNING
// ======================================================
let position = 0;
const limiteGauche = 0;
const limiteDroite = -200;
const pas = 100;

slideLeft.addEventListener('click', () => {
  
  if (position === limiteGauche) {
    console.log('Slide en butée gauche !')
  } else {
    position += pas;

    containerSlide.style.transform = `translateX(${position}%)`;
    console.log('Clik a gauche !', position);
  }

 

})

slideRight.addEventListener('click', () => {
  
  if (position === limiteDroite) {
    console.log('Slide en butée droite !');
  } else {
    position -= pas;

    containerSlide.style.transform = `translateX(${position}%)`;
    console.log('Clik a gauche !', position);
  }
 

})

