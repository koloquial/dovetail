let SHOW_MENU = false;
let ACTIVE_MENU = '';

function openMenu(subsection){
    console.log('menu called')
    if(SHOW_MENU){
        document.getElementById("menu").style.visibility = 'hidden';
        SHOW_MENU = false;
        renderToolbar();
        HERO.save();
        
    }else{
        switch(subsection){
            case 'inventory': 
                ACTIVE_MENU = 'inventory';
                renderInventory();
                break;
                case 'character': 
                ACTIVE_MENU = 'character';
                renderCharacter();
                break;
            default: break;
        }

        document.getElementById("menu").style.visibility = 'visible';
        SHOW_MENU = true;
        renderToolbar();
    }
}