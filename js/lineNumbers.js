function updateLineNumbers() {
    const lines = textArea.value.split('\n').length;

    let numbers = '';
    
    for(let i = 1; i <= lines;i++){
        numbers += i + '<br>';
    }
    lineNumbers.innerHTML = numbers;
}