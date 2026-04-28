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