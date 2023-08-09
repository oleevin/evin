
// tital 
const typed = new Typed('.text',{
    strings: ['Frontend Developer', 'Backend Developer','Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });



var tabLinks = document.getElementsByClassName('tab-links');
        var tabContents = document.getElementsByClassName('tab-contents');

        function openTab(tabName) {
            for (tabLink of tabLinks) {
                tabLink.classList.remove('active-link');
            }
            for (tabContent of tabContents) {
                tabContent.classList.remove('active-tab');
            }
            event.currentTarget.classList.add('active-link');
            document.getElementById(tabName).classList.add('active-tab');
        }


        // JavaScript for handling the mobile navigation menu
        document.querySelector('.fas.fa-bars').addEventListener('click', function () {
            document.querySelector('nav ul').classList.toggle('show');
        });

        document.querySelector('.fas.fa-times').addEventListener('click', function () {
            document.querySelector('nav ul').classList.remove('show');
        });


        // Email

        const btn = document.getElementById('button');

        document.getElementById('form')
         .addEventListener('submit', function(event) {
           event.preventDefault();
        
           btn.value = 'Sending...';
        
           const serviceID = 'default_service';
           const templateID = 'template_ti2cuba';
        
           emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
              btn.value = 'Send Email';
              alert('Sent!');
            }, (err) => {
              btn.value = 'Send Email';
              alert(JSON.stringify(err));
            });
        });