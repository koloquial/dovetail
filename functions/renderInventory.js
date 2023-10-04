//global
let FILTER = 'All';

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
    let html = `
   
        <table style="width: 100%">
            <tr>
                <td><h1><b>Inventory</b></h1></td>
                <td>
                    <div style="float: right">
                        <form>
                            <fieldset>
                            <legend>Filter</legend>
                                <select id='filter-inventory'>
                                    <option>All</option>
                                    <option>Tool</option>
                                    <option>Resource</option>
                                    <option>Seed</option>
                                </select>
                            </fieldset>
                        </form>
                    </div>
                </td>
            </tr>
        </table>
        <hr />
    
    `

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
            if(HERO.inventory[i].qty > 1){
                html += `<div class='inv-qty'><p>${HERO.inventory[i].qty}</p></div>`
            }
        }
    }catch(e){
        console.log('error rendering inventory', e);
    }

    document.getElementById("menu-content").innerHTML = html;
}