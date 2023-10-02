function addToToolbar(item){
    if(HERO.toolbar.length < 5){
        //add item to toolbar
        HERO.toolbar.push(HERO.inventory[item]);
        
        //remove item from inventory
        HERO.inventory.splice(item, 1);

        //update menus
        renderInventory();
        renderToolbar();
    }else{
        setSnackbar(`<p>Toolbar is full.</p>`);
    }
}

function renderInventory(){
    ACTIVE_MENU = 'inventory';
    let html = '';

    try{
        for(let i = 0; i < HERO.inventory.length; i++){
            html += `
                <div 
                    id='inventory-icon-${i}'
                    class='toolbar-icon ${HERO.inventory[i].style}'
                    onclick='addToToolbar(${i})'
                >
                </div>
            `
        }
    }catch(e){
        console.log('error rendering inventory', e);
    }

    document.getElementById("menu-content").innerHTML = html;
}