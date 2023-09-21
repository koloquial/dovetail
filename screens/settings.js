function handleClose(){
    document.getElementById("modal").style.display = "none";
}

function handleSounds(id){
    playSound('system-slider');
    switch(id){
        case "system":
                if(SYSTEM){
                    SYSTEM = false;
                }else{
                    SYSTEM = true;
                }
            break;
        default:
            break;
    }
}

function settings(){

    return `
        <div>
            <h2>Settings</h2>
            <hr />
            
            <table>
                <tbody>
                <tr>
                <td>
                    <label class="switch">
                        <input 
                            id="MUTE-sounds" 
                            type="checkbox" 
                            onclick="handleSounds('mute');"
                            
                        />
                        <span class="slider round"></span>
                    </label>
                </td>
                <td><p>Mute All</p></td>
            </tr>
                    <tr>
                        <td>
                            <label class="switch">
                                <input 
                                    id="SYSTEM-sounds" 
                                    type="checkbox" 
                                    onclick="handleSounds('system');"
                                    
                                />
                                <span class="slider round"></span>
                            </label>
                        </td>
                        <td><p>System Sounds</p></td>
                    </tr>

                    <tr>
                        <td>
                            <label class="switch">
                                <input 
                                    id="BACKGROUND-sounds" 
                                    type="checkbox" 
                                    onclick="handleSounds('background');"
                                    
                                />
                                <span class="slider round"></span>
                            </label>
                        </td>
                        <td><p>Background Sounds</p></td>
                    </tr>

                    <tr>
                    <td>
                        <label class="switch">
                            <input 
                                id="BACKGROUND-sounds" 
                                type="checkbox" 
                                onclick="handleSounds('background');"
                                
                            />
                            <span class="slider round"></span>
                        </label>
                    </td>
                    <td><p>Sound Effects</p></td>
                </tr>

                </tbody>
            </table>
            

            <br /><br />
            <center>
                <button onclick="handleClose()">Close</button>
            </center>
        </div>
    `
}