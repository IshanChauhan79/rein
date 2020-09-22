function scrollProp(event){

    event.preventDefault();
    let targetSectionID=this.getAttribute('name');
    var targetSection=document.getElementById(targetSectionID)
    console.log(targetSectionID);


    var body=document.querySelector('body');
    var targetSectionCoordinates=targetSection.getBoundingClientRect();

    if(targetSectionCoordinates.top>=0){
        var interval=setInterval(function(){
        
        var bodyCoordunates=body.getBoundingClientRect()
        var TSC=targetSection.getBoundingClientRect();

        if (TSC.top<=0 || window.innerHeight==parseInt(bodyCoordunates.bottom)||window.innerHeight-1==parseInt(bodyCoordunates.bottom)){
            clearInterval(interval);
            return;
        } 
         window.scrollBy(0,16);
        },5);
    }
    else{
        var interval=setInterval(function(){
        var TSC=targetSection.getBoundingClientRect();
        if (TSC.top>=0){
            clearInterval(interval);
            return;
        } 
        window.scrollBy(0,-16);
        },5)
    } 

    
} 

// for header navbar
var navMenuATag=document.querySelectorAll('#menu a');

for(var i=0;i<navMenuATag.length;i++)
{
    navMenuATag[i].addEventListener('click',scrollProp );
}

//navbar for phone
var navPhone=document.querySelectorAll('#navbar-phone a');

for(var i=0;i<navPhone.length;i++)
{
    navPhone[i].addEventListener('click',scrollProp );
}




//navbar for home
var homeATag=document.querySelector('#a-tag-home a');

homeATag.addEventListener('click',scrollProp);

