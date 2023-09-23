function handleClose(){
    document.getElementById("modal").style.display = "none";
}

function wiki(){
    return `
        <div>
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
            <hr />
            
            <button>Controls</button>
            
        </div>
    `
}