function addToExpression(value) {
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent += value; // Append button value to paragraph
}

function Erase() {
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent = ''; // Clear the paragraph
}

function Evaluate() {
    const expressionElement = document.getElementById('expression');
    try {
        const result = eval(expressionElement.textContent);
        expressionElement.textContent = result; // Show result in paragraph
    } catch (error) {
        expressionElement.textContent = 'Error';
    }
}

function Cofnij(){
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent = expressionElement.textContent.slice(0, -1);
}