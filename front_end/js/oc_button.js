//open drop down menu 
function open(event){
    
    event.preventDefault();
    let navbar=document.getElementById('navbar-phone');
    navbar.classList.add("open");
 	navbar.classList.remove('close');

}
var openButton=document.getElementById('dropdown-menu');
openButton.addEventListener('click',open);


//close drop down menu 

function close(event){
    event.preventDefault();
    let navbar=document.getElementById('navbar-phone');
    navbar.classList.add("close");
 	navbar.classList.remove('open');

}
var close_button=document.getElementById('nav-close-btn');
close_button.addEventListener('click',close);

//close drop down menu when target is clicked
var closeMenu=document.querySelectorAll('#navbar-phone a');

for(var i=0;i<closeMenu.length;i++)
{
    closeMenu[i].addEventListener('click',close );
}
