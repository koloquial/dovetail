//global
let FILTER = 'All';

function addToToolbar(item) {
  if (HERO.toolbar.length < 5) {
    //add item to toolbar
    HERO.toolbar.push(HERO.inventory[item]);

    //remove item from inventory
    HERO.inventory.splice(item, 1);

    //update menus
    renderInventory();
    renderToolbar();
  } else {
    setSnackbar(`<p>Toolbar is full.</p>`);
  }
}

function renderInventory() {
  ACTIVE_MENU = 'inventory';
  document.getElementById('active-menu-heading').innerHTML = 'Inventory'
  let html = `
        <table style="width: 100%">
            <tr>
                <td>
            `;

            try {
              for (let i = 0; i < HERO.inventory.length; i++) {
                html += `
                          <div 
                              id='inventory-icon-${i}'
                              class='toolbar-icon-large ${HERO.inventory[i].style}'
                              onclick='addToToolbar(${i})'
                          >
                          </div>
                      `
                if (HERO.inventory[i].qty > 1) {
                  html += `<div class='inv-qty'><p>${HERO.inventory[i].qty}</p></div>`
                }
              }
            } catch (e) {
              console.log('error rendering inventory', e);
            }
            
      html += ` 
                </td>
            </tr>
        </table>
    `
  document.getElementById("menu-content").innerHTML = html;
}