function addToToolbar(item){
    console.log('called addtotoolbar')
    //add item to toolbar
    console.log('push item', HERO.inventory[item])
    HERO.toolbar.push(HERO.inventory[item]);

    console.log('toolbar', HERO.toolbar)

    //remove item from inventory
    HERO.inventory.splice(item, 1);

    console.log('hero inventory', HERO.inventory)
    console.log('update menus')
    //update menus
    renderInventory();
    renderToolbar();
}

function renderInventory(){
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