const files = {
    "index.js": "",
    "style.css": "",
    "main.js": ""
};

function saveFileContent(content) {
    files[currentFile] = content;
}

function loadFileContent(fileName) {
    return files[fileName];
}
