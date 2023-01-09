function maskey() 
{
    let btn1 = document.getElementById("bi-caret-down");
    let liste1 = document.getElementById("close");
    
    btn1.addEventListener("click", function(event){
        // liste1.style.display = none;
        for (i = 0; i < liste1.length; i++) {
            liste1[i].style.display = 'none';
        }
        document.getElementById('spanish').style.display = 'block';

    });        
}