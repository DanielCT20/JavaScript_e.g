const baseDatos = []

const R = "Daniel"

baseDatos.push(R)

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

download("assets.txt", JSON.stringify(baseDatos));

// allow download multiples files
function downloadContract() {
    console.log(assetArray)
    download("assets.txt", assetArray);
}