
         const darkModeToggle = document.getElementById('darkModeToggle');
         const lightModeImage = document.getElementById('lightModeImage');
         const darkModeImage = document.getElementById('darkModeImage');
          const clickSound    =  document.getElementById('clickSound');

      
  
           darkModeToggle.addEventListener('change', () => {
            clickSound.play();
           document.body.classList.toggle('dark-mode');


             
              lightModeImage1.style.display = document.body.classList.contains('dark-mode') ? 'none' : 'block';
              darkModeImage1.style.display = document.body.classList.contains('dark-mode') ? 'block' : 'none';
              lightModeImage.style.display = document.body.classList.contains('dark-mode') ? 'none' : 'block';
              darkModeImage.style.display = document.body.classList.contains('dark-mode') ? 'block' : 'none';

              
    
  
              });
      var typed = new Typed("#element", {
        strings: [
          "Web Developer",
          "Graphic Designer",
          "UI/UX Designer",
         
        ],
        typeSpeed: 50,
        loop: true,
      });
   
      document.addEventListener("DOMContentLoaded", function () {
  // Show preloader
  document.querySelector(".preloader").style.display = "flex";
  document.querySelector(".pre").style.display = "flex";


  // Hide preloader after 3 seconds
  setTimeout(function() {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".pre").style.display = "none";
    // Show content
    document.querySelector(".body").style.display = "block";
  }, 2990); // 3000 milliseconds = 3 seconds
});
const services = [
    { title: '', description: 'PROJECT 1' },
    { title: '', description: 'PROJECT 2' },
    { title: '', description: 'PROJECT 3' },
    { title: '', description: 'PROJECT 4' },
    { title: '', description: 'PROJECT 5' },
    { title: '', description: 'PROJECT 6' },
    { title: '', description: 'PROJECT 7' },
    { title: '', description: 'PROJECT 8' },
    { title: '', description: 'PROJECT 9' },
    { title: '', description: 'PROJECT 10' },
    { title: '', description: 'PROJECT 11' },
    { title: '', description: 'PROJECT 13' },


    
    
    
    
    // Add more service items as needed
];

const serviceGrid = document.querySelector('.service-grid');

// Dynamically add service items to the grid
services.forEach(service => {
    const serviceItem = document.createElement('div');
    serviceItem.classList.add('service-item');
    serviceItem.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    serviceGrid.appendChild(serviceItem);
});
const logos = [
    '31.png',
    '32.png',
    '31.png',
    '32.png',
    '31.png',
    '32.png',
    '31.png',
    '32.png',
    '31.png',
    '32.png',

    
    // Add more logo paths as needed
];

const logoContainer = document.querySelector('.logo-container');

// Dynamically add logos to the carousel
logos.forEach(logo => {
    const img = document.createElement('img');
    img.src = logo;
    logoContainer.appendChild(img);
});




const hoverSound = document.getElementById('hover-sound');
const button= document.querySelector('.button');

button.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0; // Restart sound from beginning
    hoverSound.play(); // Play sound
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 100) { // Adjust as needed
      button.classList.add('pop-up');
    } else {
      button.classList.remove('pop-up');
    }
});



   

let time =  document.getElementById('current-time');

setInterval(()=>{
  let d = new Date();
time.innerHTML= d.toLocaleTimeString();
},1000);
// script.js
document.addEventListener("DOMContentLoaded", function() {
    function getCurrentDate() {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    const dateElement = document.getElementById('current-date');
    dateElement.textContent = getCurrentDate();
});
 function sendEmail(){
  Email.send({
    Host:"smpt.gmail.com",
    Username:"anupama.dey.enkwaries.gmail.com",
    Password:"@Enkwaries2024",
    To:"anupama.dey.enkwaries.gmail.com",
    From:document.getElementById("email").value,
    Subject:"New Contact  Form Enquiry",
    Body:"And this is body",
  }).then(
    message => alert("send successfully")
  );
 }






       
