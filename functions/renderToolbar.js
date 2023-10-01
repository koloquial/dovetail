let SELECTED = 0;

function removeFromToolbar(item){
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
        html += `<div id="toolbar-icon-${i}" class="`

        if(SELECTED === i){
            html += `toolbar-icon-selected `
        }else{
            html += `toolbar-icon `
        }

        if(toolbar[i]){
           html += `${toolbar[i].style}`
        }
    
        html += `"> </div>`  
      
    }

    document.getElementById("toolbar").innerHTML = html;
}