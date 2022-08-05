
const scrollBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});


let tablinks = document.getElementsByClassName('tab__links');
        let tabcontents = document.getElementsByClassName('tab__content');

        function openTab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active__link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active__tab");
            }
            event.currentTarget.classList.add("active__link");
            document.getElementById(tabname).classList.add("active__tab");
}
        

//  Script for contact form submission
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzEFbBXF9g5tGO2fA-KE0knxi39Phuh5TJeETcTtFTYwRr8dbnLMaMu8zjPx7cgSpQL/exec'
const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message  sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

  