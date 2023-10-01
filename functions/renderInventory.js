function addToToolbar(item){
    HERO.inventory[item].toolbar = true;

    renderInventory();
    renderToolbar();
}

function renderInventory(){
    let inventory = HERO.inventory;

    let html = '';
    for(let i = 0; i < inventory.length; i++){
        if(!inventory[i].toolbar){
            html += `
            <div 
                id='toolbar-icon-${i}' 
                class='toolbar-icon ${inventory[i].style}'
                onclick='addToToolbar(${i})'>
            </div>
        `
        }
    }

    document.getElementById("inventory").innerHTML = html;
}