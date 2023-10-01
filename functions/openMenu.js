let SHOW_MENU = false;
let ACTIVE_MENU = '';

function openMenu(subsection){
    if(SHOW_MENU){
        document.getElementById("menu").style.visibility = 'hidden';
        SHOW_MENU = false;
        renderToolbar();
        
    }else{
        switch(subsection){
            case 'inventory': 
                ACTIVE_MENU = 'inventory';
                renderInventory();
                break;
            default: break;
        }

        document.getElementById("menu").style.visibility = 'visible';
        SHOW_MENU = true;
        renderToolbar();
    }
}