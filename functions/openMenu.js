let SHOW_MENU = false;

function openMenu(subsection){

    if(SHOW_MENU){
        document.getElementById("menu").style.visibility = 'hidden';
        SHOW_MENU = false;
        
    }else{
        document.getElementById("menu").style.visibility = 'visible';
        renderInventory(HERO.inventory);
        SHOW_MENU = true;
    }
}