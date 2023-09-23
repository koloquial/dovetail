function handleClose(){
    document.getElementById("modal").style.display = "none";
}

function handleSounds(id){
    switch(id){
        case "mute": MUTE ? MUTE = false : MUTE = true; MUTE ? stopSound('music') : '' ; break;
        case "system": SYSTEM ? SYSTEM = false : SYSTEM = true; SYSTEM ? stopSound('system') : '' ; break;
        case "music": MUSIC ? MUSIC = false : MUSIC = true; MUSIC ? stopSound('music') : '' ; break;
        default:
            break;
    }
}

function settings(){
    return `
        <div>
            <table style="width: 100%">
                <tbody>
                    <tr>
                        <td><h2>Settings</h2></td>
                        <td>
                            <div style="float: right">
                                <button onclick="handleClose()">Close</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <div style="display: inline-block">
                <form>
                    <fieldset>
                        <legend>Sound</legend>

                        <div style="display: block">
                            <fieldset>
                                <legend>Mute</legend>
                                <label class="switch">
                                <input 
                                    id="MUTE-sounds" 
                                    type="checkbox" 
                                    onclick="handleSounds('mute');"
                                />
                                    <span class="slider round"></span>
                                </label>
                            </fieldset>
                        </div>

                        <div style="display: block">
                            <fieldset>
                                <legend>System</legend>
                                <label class="switch">
                                    <input 
                                        id="SYSTEM-sounds" 
                                        type="checkbox" 
                                        onclick="handleSounds('system');"
                                    />
                                        <span class="slider round"></span>
                                </label>
                            </fieldset>
                        </div>

                        <div style="display: block">
                            <fieldset>
                                <legend>Music</legend>
                                <label class="switch">
                                    <input 
                                        id="MUSIC-sounds" 
                                        type="checkbox" 
                                        onclick="handleSounds('music');"
                                    />
                                        <span class="slider round"></span>
                                </label>
                            </fieldset>
                        </div>

                        <div style="display: block">
                            <fieldset>
                                <legend>Background</legend>
                                <label class="switch">
                                    <input 
                                        id="BACKGROUND-sounds" 
                                        type="checkbox" 
                                        onclick="handleSounds('background');"
                                    />
                                        <span class="slider round"></span>
                                </label>
                            </fieldset>
                        </div>

                        <div style="display: block">
                            <fieldset>
                                <legend>Effects</legend>
                                <label class="switch">
                                    <input 
                                        id="SFX-sounds" 
                                        type="checkbox" 
                                        onclick="handleSounds('sfx');"
                                    />
                                        <span class="slider round"></span>
                                </label>
                            </fieldset> 
                        </div>

                    </fieldset>
                </form>
            </div>

            
        </div>
    `
}