
document.addEventListener('DOMContentLoaded',()=>{
    const icon=document.querySelectorAll('.fa-angle-down');
    icon.forEach(e=>{
        e.addEventListener('click',()=>{
            for(var i=0; i<icon.length; i++){
                if(icon[i]!==e){
                    icon[i].classList.remove('active');
                    icon[i].parentElement.nextElementSibling.classList.remove('active');
                }else{
                    e.classList.toggle('active');
                    e.parentElement.nextElementSibling.classList.toggle('active');
                }
            }
        });
    });    
})

