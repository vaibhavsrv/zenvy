function setupTabs() {

    tabs.forEach(tab => {

        tab.addEventListener('click', () => {

            tabs.forEach(t => {
                t.classList.remove('active');
            });

            tab.classList.add('active');

            saveFileContent(textArea.value);

            currentFile = tab.textContent.trim();

            textArea.value =
                loadFileContent(currentFile);

            updateLineNumbers();

        });

    });

}