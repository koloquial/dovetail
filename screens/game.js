function game() {
  if (!HERO) {
    loadGame();
  }

  return `
    <center>
        <div id='game-container'>
            <div id="game-window" class="game-window"></div>
            <div id="toolbar" class="toolbar"></div>
            <div id="menu" class="menu">
                <div style="background-color: #000000; margin: 0; padding: 5px 25px 5px 25px; border-bottom: 1px solid black;">
                    <table style="width: 100%">
                        <tbody>
                            <tr>
                                <td><h2 id='active-menu-heading'></h2></td>
                                <td>
                                    <div style="float: right">
                                        <button onclick="openMenu()">Close</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div id='menu-content' class='menu-content'>
                </div>
            </div>
            <div id="status-update" class="status-update"></div>
            <div id="minimap" class="minimap"></div>
            <div id="stamina-bar" class="stamina-bar"></div>
            <div id="health-bar" class="health-bar"></div>
            <div id="fishing-window" class="fishing-window">
                <div id="fishing-game" class="fishing-game"></div>
            </div>
        </div>
    </center>
    <script>
    ${renderMap(HERO.location)}
    </script>
    
    `
}