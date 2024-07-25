 var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-150px";
    }
    //submit confirmed msg
    const msg = document.getElementById('msg')
    


    // light mode toggle

    document.querySelector(".theme__icon").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
    })


   
  

