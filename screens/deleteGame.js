function handleSubmitDelete(){
    try{
        localStorage.removeItem("dovetail");
        document.getElementById("modal").style.display = "none";
        setSnackbar(`<p>${HERO.name} has been deleted.</p>`);
    }catch(error){
        setSnackbar(`<p>Error deleting saved game.</p>`);
    }
}

function deleteGame(){
    let valid = false;

    try{
        let hero_temp = localStorage.getItem("dovetail");
        if(hero_temp){
            valid = true;
            HERO = JSON.parse(hero_temp);
        }else{
            valid = false;
            setSnackbar(`<p>Error deleting saved game.</p>`);
        }
    }catch(error){
        setSnackbar(`<p>Error deleting saved game.</p>`);
    }

    return `
        <div>
            <table style="width: 100%">
                <tbody>
                    <tr>
                        <td><h2>Delete Game</h2></td>
                        <td>
                            <div style="float: right">
                                <button onclick="handleClose()">Close</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <p>
                Are you sure you would like to delete this saved file from your browser cache?  This process cannot be undone.
            </p>

            <p>${valid ? 'Name: ' + HERO.name : `Could not find a saved character.`}</p>

            <br /><br />
            <center>
                <button class="danger" onclick="handleSubmitDelete()">Delete Game</button>
                <button onclick="handleCancel()">Cancel</button>
            </center>
        </div>
    `
}