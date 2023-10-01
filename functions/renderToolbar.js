function removeFromToolbar(item){
    console.log('SHOW MENU', SHOW_MENU);
    console.log('remove item');
    // HERO.inventory[item].toolbar = true;

    // renderInventory();
    // renderToolbar();
}

function renderToolbar(){
    let inventory = HERO.inventory;
    const toolbar = [];
    
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].toolbar){
            toolbar.push(inventory[i])
        }
    }

    let html = '';
    for(let i = 0; i <= 5; i++){

        html += `<div id='toolbar-icon-${i}' class='toolbar-icon `

        if(toolbar[i]){
           html += `${toolbar[i].style}`
        }
    
        html += `'> </div>`  
      
    }

    document.getElementById("toolbar").innerHTML = html;
}