function setupKeyboardEvents() {

    textArea.addEventListener('keydown', (e) => {

        /* TAB HANDLING */
        if (e.key === 'Tab') {

            e.preventDefault();

            const start = textArea.selectionStart;
            const end = textArea.selectionEnd;

            textArea.value =
                textArea.value.substring(0, start) +
                '  ' +
                textArea.value.substring(end);

            textArea.selectionStart = textArea.selectionEnd = start + 2;

            saveFileContent(textArea.value);

            updateLineNumbers();
        }

        /* ENTER HANDLING */
        if (e.key === 'Enter') {

            e.preventDefault();

            const start = textArea.selectionStart;
            const end = textArea.selectionEnd;

            const before = textArea.value.substring(0, start);

            const lineStart = before.lastIndexOf('\n') + 1;

            const currentLine = before.substring(lineStart);

            const indentMatch = currentLine.match(/^\s*/);

            const indent = indentMatch ? indentMatch[0] : '';

            const shouldCloseBrace =
                currentLine.trim().endsWith('{');

            if (shouldCloseBrace) {

                textArea.value =
                    textArea.value.substring(0, start) +
                    '\n' + indent + '  ' +
                    '\n' + indent +
                    textArea.value.substring(end);

                const newPos = start + indent.length + 3;

                textArea.selectionStart =
                    textArea.selectionEnd = newPos;

            } else {

                textArea.value =
                    textArea.value.substring(0, start) +
                    '\n' + indent +
                    textArea.value.substring(end);

                const newPos = start + 1 + indent.length;

                textArea.selectionStart =
                    textArea.selectionEnd = newPos;
            }

            saveFileContent(textArea.value);

            updateLineNumbers();
        }

    });

}