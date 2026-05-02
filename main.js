const textArea = document.querySelector('.code-area');
const lineNumbers = document.querySelector('.line-numbers');
const tabs = document.querySelectorAll('.tab');

const files = {
    "index.js": "",
    "style.css": "",
    "main.js": ""
};

let currentFile = "index.js";

function updateLineNumbers(){
    const lines = textArea.value.split('\n').length;

    let numbers = '';
    for (let i = 1; i <= lines; i++){
        numbers += i + '<br>';
    }

    lineNumbers.innerHTML = numbers;
}

/* FIXED INPUT */
textArea.addEventListener('input', () => {
    files[currentFile] = textArea.value;
    updateLineNumbers();
});

/* SCROLL */
textArea.addEventListener('scroll', () => {
    lineNumbers.scrollTop = textArea.scrollTop;
});

/* Tab Handling */


textArea.addEventListener('keydown', (e) => {

    // TAB HANDLING
    if (e.key === 'Tab') {
        e.preventDefault();

        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;

        textArea.value =
            textArea.value.substring(0, start) +
            '  ' +
            textArea.value.substring(end);

        textArea.selectionStart = textArea.selectionEnd = start + 2;

        files[currentFile] = textArea.value;
        updateLineNumbers();
    }

    // ENTER AUTO INDENT
    if (e.key === 'Enter') {
        e.preventDefault();

        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;

        const before = textArea.value.substring(0, start);
        const lineStart = before.lastIndexOf('\n') + 1;
        const currentLine = before.substring(lineStart);

        const indentMatch = currentLine.match(/^\s*/);
        const indent = indentMatch ? indentMatch[0] : '';

        textArea.value =
            textArea.value.substring(0, start) +
            '\n' + indent +
            textArea.value.substring(end);

        const newPos = start + 1 + indent.length;
        textArea.selectionStart = textArea.selectionEnd = newPos;

        files[currentFile] = textArea.value;
        updateLineNumbers();
    }
});



/* TAB SWITCH */
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        files[currentFile] = textArea.value;

        currentFile = tab.textContent.trim();

        textArea.value = files[currentFile];

        updateLineNumbers();
    });
});

/* INIT */
textArea.value = files[currentFile];
updateLineNumbers();