const element = document.getElementById('typed-text');
const texts = ["Acest site este unul beta.", "Realizat insusi de catre DeiuTV"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timer;

function typeText() {
    if (isDeleting) {
        if (charIndex > 0) {
            charIndex--;
            element.textContent = texts[textIndex].substring(0, charIndex);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    } else {
        if (charIndex < texts[textIndex].length) {
            charIndex++;
            element.textContent = texts[textIndex].substring(0, charIndex);
        } else {
            isDeleting = true;
            timer = setTimeout(typeText, 2000); // Așteaptă 2 secunde înainte de a începe ștergerea
            return;
        }
    }

    timer = setTimeout(typeText, isDeleting ? 50 : 150); // Viteză diferită pentru tastare și ștergere
}

typeText(); // Începe efectul de tastare

window.addEventListener('scroll', function() {
    console.log("Scrolling..."); // Linie pentru testare
    var header = document.querySelector('header'); // Selectează elementul header
    var nav = document.querySelector('header nav'); // Selectează elementul nav din header
    var headerLinks = document.querySelectorAll('header nav a'); // Selectează toate linkurile (a) din nav
    var signButtonSpan = document.querySelector('header nav .sign-button span'); // Selectează span din .sign-button
    var signButtonLink = document.querySelector('header nav .sign-button a '); // Selectează linkul (a) din .sign-button

    if (window.scrollY > 10) {
        header.classList.add('sticky-header'); // Adaugă o clasă pentru stilul header-ului la scroll
        nav.classList.add('sticky-background'); // Adaugă o clasă pentru stilul nav-ului la scroll
        headerLinks.forEach(link => {
            link.classList.add('sticky-link'); // Adaugă o clasă pentru fiecare link la scroll
        });
        signButtonSpan.classList.add('sticky-span'); // Adaugă o clasă pentru span la scroll
        signButtonLink.classList.add('sticky-a'); // Adaugă o clasă pentru linkul (a) la scroll
    } else {
        header.classList.remove('sticky-header'); // Elimină clasa pentru stilul header-ului
        nav.classList.remove('sticky-background'); // Elimină clasa pentru stilul nav-ului
        headerLinks.forEach(link => {
            link.classList.remove('sticky-link'); // Elimină clasa pentru fiecare link
        });
        signButtonSpan.classList.remove('sticky-span'); // Elimină clasa pentru span
        signButtonLink.classList.remove('sticky-a'); // Elimină clasa pentru linkul (a)
    }
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.getElementById('h-element').addEventListener('click', function() {
    document.getElementById('flex-container').scrollIntoView();
});


function displaysign() {
    var element = document.getElementById('displaysign');
    if(element.style.display === 'flex') {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }

} 



