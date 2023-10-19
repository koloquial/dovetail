function handleClose(){
    document.getElementById("modal").style.display = "none";
}

function handleAccordion(val){
    console.log('value', val)
    if(document.getElementById(val).style.display === 'inline-block'){
        document.getElementById(val).style.display = 'none';
    }else{
        document.getElementById(val).style.display = 'inline-block';
    }
}

function wiki(){
    return `
    <div style="background-color: #000000; margin: 0; padding: 5px 25px 5px 25px; border-bottom: 1px solid black;">
        <table style="width: 100%">
            <tbody>
                <tr>
                    <td><h2>Wiki</h2></td>
                    <td>
                        <div style="float: right">
                            <button onclick="handleClose()">Close</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <br />

    <div class='menu-content'>

        <h3>Index</h3>
        <table style="width: 100%">
            <tr>
                <td>
                    <ul>
                        <li>
                            <p><a href="#controls">Controls</a></p>
                            <ul><li>Computer, Mobile</li></ul>
                        </li>
                        <li>
                            <p><a href="#hud">HUD</a></p>
                            <ul><li>Toolbar, Health, Stamina, Map</li></ul>
                        </li>
                        <li>
                            <p><a href="#menus">Menus</a></p>
                            <ul><li>Inventory, Build</li></ul>
                        </li>
                    </ul>
                </td>
            </tr>
        </table>

        <br /><br />
        <hr />

        <h3 id="controls">Controls</h3>
        
        <div 
            id='accordion-controls-computer' 
            class="accordion" 
            onclick="handleAccordion('controls-computer')">
            <span class="material-symbols-outlined">
                computer
            </span>&nbsp;&nbsp;&nbsp;Computer
        </div>
        
        <div id='controls-computer' class="panel">
        
        <table style="width: 100%">
            <tr>
                <td style="vertical-align: top;">
                    <div style='display: inline-block;'>
                        <table>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            north
                                        </span>
                                    </div>
                                </td>
                                <td><p>Move north</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            south
                                        </span>
                                    </div>
                                </td>
                                <td><p>Move south</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            east
                                        </span>
                                    </div>
                                </td>
                                <td><p>Move east</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            west
                                        </span>
                                    </div>
                                </td>
                                <td><p>Move west</p></td>
                            </tr>
                        </table>
                    </div>
                </td>

                <td style="vertical-align: top;">
                    <div style='display: inline-block;'>
                        <table>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        I
                                    </div>
                                </td>
                                <td><p>Open inventory</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                    M
                                    </div>
                                </td>
                                <td><p>Open map</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        B
                                    </div>
                                </td>
                                <td><p>Open build menu</p></td>
                            </tr>
                            <tr>
                            <td>
                                <div class='keyboard-icon'>
                                    A
                                </div>
                            </td>
                            <td><p>Action</p></td>
                        </tr>
                        </table>
                    </div>
                </td>

                <td style="vertical-align: top;">
                    <div style='display: inline-block;'>
                        <table>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        Z
                                    </div>
                                </td>
                                <td><p>Toggle toolbar selection left</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                    X
                                    </div>
                                </td>
                                <td><p>Toggle toolbar action selection right</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        1-5
                                    </div>
                                </td>
                                <td><p>Toolbar action selection hotkey</p></td>
                            </tr>
                        </table>
                    </div>
                </td>
            </table>
        </div>

        <div 
            id='accordion-controls-mobile' 
            class="accordion" 
            onclick="handleAccordion('controls-mobile')">
                <span class="material-symbols-outlined">
                    smartphone
                </span>&nbsp;&nbsp;&nbsp;Mobile
        </div>
    
        <div id='controls-mobile' class="panel">
            <p>
                <b>Mobile controls are hidden by default</b>. To enable mobile controls click the <i>Settings</i> <span class="material-symbols-outlined">settings</span> icon then click the <i>Gamepad</i> slider. <b><u>Note:</u></b> this game was designed with desktop first in mind.
            </p>

            <table style="width: 100%">
            <tr>
                <td style="vertical-align: top;">
                    <div style='display: inline-block;'>
                        <table>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_up
                                        </span>
                                    </div>
                                </td>
                                <td><p>Move north</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_down
                                        </span>
                                    </div>
                                </td>
                                <td><p>Move south</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_right
                                        </span>
                                    </div>
                                </td>
                                <td><p>Move east</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_left
                                        </span>
                                    </div>
                                </td>
                                <td><p>Move west</p></td>
                            </tr>
                        </table>
                    </div>
                </td>

                <td style="vertical-align: top;">
                    <div style='display: inline-block;'>
                        <table>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            backpack
                                        </span>
                                    </div>
                                </td>
                                <td><p>Open inventory</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                           map
                                        </span>
                                    </div>
                                </td>
                                <td><p>Open map</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class='keyboard-icon'>
                                        <span class="material-symbols-outlined">
                                            construction
                                        </span>
                                    </div>
                                </td>
                                <td><p>Open build menu</p></td>
                            </tr>
                            <tr>
                            <td>
                                <div class='keyboard-icon'>
                                    <span class="material-symbols-outlined">
                                        target
                                    </span>
                                </div>
                            </td>
                            <td><p>Action</p></td>
                        </tr>
                        </table>
                    </div>
                </td>
                </tr>
            </table> 
        </div>

        <h3 id="hud">HUD</h3>
        <div 
            id='accordion-hud-health' 
            class="accordion" 
            onclick="handleAccordion('hud-health')">
            <span class="material-symbols-outlined">
                favorite
            </span>&nbsp;&nbsp;&nbsp;Health
        </div>
        
        <div id='hud-health' class="panel">
            <p>Represented by a red meter.</p>
        </div>

        <div 
            id='accordion-hud-stamina' 
            class="accordion" 
            onclick="handleAccordion('hud-stamina')">
            <span class="material-symbols-outlined">
                battery_horiz_000
            </span>&nbsp;&nbsp;&nbsp;Stamina
        </div>
        
        <div id='hud-stamina' class="panel">
            <p>Represented by a green meter.</p>
        </div>
    `
}