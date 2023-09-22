function handleSubmit(){
    if(document.getElementById("name").value && document.getElementById("name").value !== ""){
        let newHero = new Hero(document.getElementById("name").value);

        newHero.save();

        document.getElementById("modal").style.display = "none";

        setSnackbar(`<p>${newHero.name} has been created.</p>`);

        changeScreen(game);
    }else{
        setSnackbar(`<p>Please enter a valid name.</p>`);
    }
}

function handleCancel(){
    document.getElementById("modal").style.display = "none";
}

function newGame(){
    return `
        <div>
            <table style="width: 100%">
                <tbody>
                    <tr>
                        <td><h2>New Game</h2></td>
                        <td>
                            <div style="float: right">
                                <button onclick="handleClose()">Close</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <center>
            <div id="hero-preview" class="hero-preview">
                <div id="head" class="head-down">
                    <div id="hair" class="hair-down-b"></div>
                    <div id="face">
                        <div id="left-eye">
                            <div id="left-eye-iris"></div>
                            <div id="left-eye-pupil"></div>
                            <div id="left-eye-speck"></div>
                        </div>
                        <div id="right-eye">
                            <div id="right-eye-iris"></div>
                            <div id="right-eye-pupil"></div>
                            <div id="right-eye-speck"></div>
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

            <div style="display: inline-block;">
                <form>
                    <fieldset>
                        <legend>Appearance</legend>

                        <div style="display: block;">
                            <form>
                                <fieldset>
                                    <legend>Hair</legend>
                                        <select name="hair">
                                            <option value="volvo">Volvo</option>
                                        </select>
                                </fieldset>
                            </form>
                        </div>

                        <div style="display: block;">
                            <form>
                                <fieldset>
                                    <legend>Skin</legend>
                                        <select name="skin">
                                            <option value="volvo">Volvo</option>
                                        </select>
                                </fieldset>
                            </form>
                        </div>

                        <div style="display: block;">
                            <form>
                                <fieldset>
                                    <legend>Eyes</legend>
                                        <select name="eyes">
                                            <option value="volvo">Volvo</option>
                                        </select>
                                </fieldset>
                            </form>
                        </div>
                    </fieldset>
                </form>
            </div>
           
            
            <br /><br />
            <center>
                <button onclick="handleSubmit()">Start Game</button>
            </center>
        </div>
    `
}