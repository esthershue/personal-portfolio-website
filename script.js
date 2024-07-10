(window.onload = function() {
    // for interactive tab links in about section
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
            
    function opentab(tabname, event){
    // for(tablink of tablinks){
    //     tablink.classList.remove("active-link"); /* remove tablinks when another is clicked on */
    // }
    // for(tabcontent of tabcontents){
    //     tabcontent.classList.remove("active-tab"); /* remove tab contents when another is clicked on */
    // }

        // Convert tablinks HTMLCollection to an array and iterate over it
        Array.prototype.forEach.call(tablinks, function(tablink) {
            tablink.classList.remove("active-link"); // Remove active-link class from each tablink
        });
    
        // Convert tabcontents HTMLCollection to an array and iterate over it
        Array.prototype.forEach.call(tabcontents, function(tabcontent) {
            tabcontent.classList.remove("active-tab"); // Remove active-tab class from each tabcontent
        });
        event.currentTarget.classList.add("active-link"); /* display underline when clicked on */
        document.getElementById(tabname).classList.add("active-tab"); /* display correct tab content when clicked on */
    }

    // for sidemenu in mobile view 
    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0px"; /* set default opened menu to 0 (middle of screen)*/
    }
            
    function closemenu(){
        sidemenu.style.right = "-200px"; /* move menu -200px (out of view) */
    }

    // collecting data from submission form to google sheet -->
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyIvZHNKmIXWS_UX2nse1X3yJp2w88BKtNWo-IE0XTjX_YFX3UYock238sc6_s2OEHuYA/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
  
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                function responseMessage() {
                    msg.innerHTML = "Your response has been recorded. Thank you!"; /* confirmation message */
                }
                setTimeout(responseMessage);
                form.reset()
            })
            .catch(error => console.error('Error!', error.message)) /* error message */
    })

    // copying in contact info section -->
    function copyText(elementId) {
        var element = document.getElementById(elementId);
        var text = element.textContent.trim();

        navigator.clipboard.writeText(text).then(function() { /* write to clipboard */
            alert("Copied to clipboard.");
        }).catch(function(error) {
            console.error("Failed to copy text.", error); /* error message */
            alert("Failed to copy text.");
        });
    }
})();
