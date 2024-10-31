const expressionElement = document.getElementById('expression');

function addToExpression(value) {
    expressionElement.textContent += value; // Append button value to paragraph
}

function Erase() {
    expressionElement.textContent = ''; // Clear the paragraph
}

function Evaluate() {
    try {
        const result = eval(expressionElement.textContent);
        expressionElement.textContent = result; // Show result in paragraph
    } catch (error) {
        expressionElement.textContent = 'Error';
    }
}

function Cofnij(){
    expressionElement.textContent = expressionElement.textContent.slice(0, -1);
}
