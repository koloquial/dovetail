function removeFromToolbar(item){
    //add to inventory
    HERO.addToInventory(HERO.toolbar[item]);

    //remove from toolbar
    HERO.toolbar.splice(item, 1);

    //rerender menus
    renderToolbar();
    renderInventory();
}
function renderToolbar(){
    let html = '';

    try{
        for(let i = 0; i < 5; i++){
            html += `<div id="inventory-icon-${i}" class="toolbar-icon`

            if(SELECTED === i){
                html += `-selected `
            }
            
            if(HERO.toolbar[i]){
                html += ` ${HERO.toolbar[i].style}`;
            }

            html += `" onclick="`;

            if(SHOW_MENU){
                if(ACTIVE_MENU === 'inventory'){
                    //put back into inventory
                    html += `removeFromToolbar(${i})`
                }else{
                    html += ` console.log("no action")`
                }

            }else{
                
                html += `(function(){
                    SELECTED = ${i};
                    renderToolbar();
                })();`
               
                //perform action
                // if(HERO.toolbar[i]){
                //     html += `HERO.toolbar[${i}].action()`
                // }else{

                //     html += `console.log('no action available')`
                // }
            }
                        
            html += `"></div>`

            if(HERO.toolbar[i]){
                if(HERO.toolbar[i].qty > 1){
                    html += `<div class='inv-qty'><p>${HERO.toolbar[i].qty}</p></div>`
                }
            }

        }
    }catch(e){
        console.log('error rendering toolbar', e);
    }

    document.getElementById("toolbar").innerHTML = html;
}