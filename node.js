function typeWriter(strings, i, spanElement) {
    const currentString = strings[i];
    let j = 0;

    function typeCharacter() {
        if (j < currentString.length) {
            spanElement.textContent += currentString.charAt(j);
            j++;
            setTimeout(typeCharacter, 100); // Adjust typing speed here (in milliseconds)
        } else {
            // Clear the typed content after typing completes
            setTimeout(function() {
                spanElement.textContent = '';
                i = (i + 1) % strings.length; // Loop through strings array
                typeWriter(strings, i, spanElement);
            }, 1000); // Delay before typing the next string (in milliseconds)
        }
    }

    typeCharacter();
}

document.addEventListener('DOMContentLoaded', function() {
    const typedNameElement = document.querySelector('#typed-name');
    const strings = [" Programmer ", " Developer "]; // Replace with your information
    typeWriter(strings, 0, typedNameElement);
});
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right= "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxIa8QojcGuMGIo3zldz5EJfAsNSZSaDcpxRO9Mx_-EQmCMEnsADAjfl1OCt2Tq-k5dxg/exec'
  const form = document.forms['submit-to-google-sheet']
   const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
