function handleClose(){
    playSound('system-back');
    document.getElementById("modal").style.display = "none";
}

function handleSounds(id){
    playSound('system-slider');
    switch(id){
        case "mute":
            if(MUTE){
                MUTE = false;
                stopSound('music');
            }else{
                MUTE = true;
            }
        break;
        case "system":
                if(SYSTEM){
                    SYSTEM = false;
                }else{
                    SYSTEM = true;
                }
            break;
        case "music":
            if(MUSIC){
                MUSIC = false;
                stopSound('music');
            }else{
                MUSIC = true;
            }
        break;
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
                        <script>
                            console.log('test')
                        </script>

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

            <div style="display: inline-block; vertical-align: top;">
                <form>
                    <fieldset>
                        <legend>Controls</legend>

                        <p>
                            Use the arrow keys to move.
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    `
}