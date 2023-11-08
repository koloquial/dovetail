//global variables
//holds tree objects: [key] tree-${i}-${j}
const TREE_MEMORY = {};

function renderMap(location) {
  //get hero coordinates
  const heroCoordinates = HERO.getHeroCoordinates();

  //get device screen width/height
  const SCREEN_WIDTH = window.screen.width;
  const SCREEN_HEIGHT =  window.screen.height;

  //square size in pixels
  const SQUARE_SIZE = 70;

  //calculate size of game window based on grid size
  let mapWidthInTiles = SCREEN_WIDTH / SQUARE_SIZE;
  let mapHeightInTiles = SCREEN_HEIGHT / SQUARE_SIZE;

  //calculate the padding between the character and edge of map
  let rowPadding = mapHeightInTiles - 1;
  rowPadding = Math.ceil(rowPadding / 2);

  let colPadding = mapWidthInTiles - 1; 
  colPadding = Math.ceil(colPadding / 2);

  let startRow = heroCoordinates[0] - rowPadding;
  let startCol = heroCoordinates[1] - colPadding;

  let endRow = heroCoordinates[0] + rowPadding;

  let endCol = heroCoordinates[1] + colPadding;

  let html = `<table style="border-collapse: collapse;">`;

  for (let i = 0; i < location.length; i++) {

    if (i >= startRow && i <= endRow) {
      html += `<tr>`;

      for (let j = 0; j < location[i].length; j++) {
        if (j >= startCol && j <= endCol) {

          html += `<td id='cell-${i}-${j}' class='grid-square`;

          if (location[i][j].includes('g')) {
            html += ' grass'
          }

          if (location[i][j].includes('w')) {
            html += ' water'
          }

          if (location[i][j].includes('d')) {
            html += ' dirt'
          }

          if (location[i][j].includes('x')) {
            html += ' grass'
          }

          html += `'>`

          //location includes hero
          if (location[i][j].includes('h')) {
            switch (HERO.direction) {
              case 'up': html += `<div style="width: 1px solid black"><p>UP</p></div>`; break;
              case 'down':
                html += `
                                <center>
                                <div id="hero" class="hero-down">
                                    <div id="head" class="head-down">
                                        <div id="hair" class="hair-down-b"></div>
                                        <div id="face">
                                            <div id="left-eye" class='left-eye-down'>
                                                <div id="left-iris" class="left-iris-down"></div>
                                                <div id="left-pupil" class="left-pupil-down"></div>
                                                <div id="left-speck" class='left-speck-down'></div>
                                            </div>
                                            <div id="right-eye" class="right-eye-down">
                                                <div id="right-iris" class="right-iris-down"></div>
                                                <div id="right-pupil" class="right-pupil-down"></div>
                                                <div id="right-speck" class='right-speck-down'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="neck" class="neck-down"></div>
                                    <div id="torso" class="torso-down">
                                        <div id="left-arm" class="left-arm-down">
                                            <div id="left-shoulder" class="left-shoulder-down"></div>
                                            <div id="left-hand" class="left-hand-down"></div>
                                        </div>
                                        <div id="right-arm" class="right-arm-down">
                                            <div id="right-shoulder" class="right-shoulder-down"></div>
                                            <div id="right-hand" class="right-hand-down"></div>
                                        </div>
                                    </div>
                                    
                                        <div id="left-leg" class="left-leg-down">
                                            <div id="left-shoe" class="left-shoe-down"></div>
                                        </div>
                                        <div id="right-leg" class="right-leg-down">
                                            <div id="right-shoe" class="right-shoe-down"></div>
                                        </div>
                                    </div>
                                </div>
                                </center>
                                `
                break;
              case 'left':
                html += `<div style="width: 1px solid black"><p>LEFT</p></div>`; break;
              case 'right':
                html += `<div style="width: 1px solid black"><p>RIGHT</p></div>`; break;
              default: break;
            }
          }

          //location includes tree
          if (location[i][j].includes('o')) {
            if (TREE_MEMORY[`tree-${i}-${j}`]) {
              html += TREE_MEMORY[`tree-${i}-${j}`].render()
            } else {
              let newSrublory = new Srublory(i, j);
              TREE_MEMORY[`tree-${i}-${j}`] = newSrublory
              html += newSrublory.render()
            }
          }
          html += `</td>`;
        }
      }
      html += `</tr>`
    }
  }
  html += `</table>`

  try {
    document.getElementById("game-window").innerHTML = html;
    renderToolbar();
    // renderMiniMap();
    // renderStamina();
    // renderHealth();
    // checkGamepad();
  } catch (e) {
    setLoading(true, 10, () => {
      document.getElementById("game-window").innerHTML = html;
      renderToolbar();
      // renderMiniMap();
      // renderStamina();
      // renderHealth();
      // checkGamepad();
      setLoading(false);
    });
  }


}