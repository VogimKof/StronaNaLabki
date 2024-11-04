

function addToExpression(value) {
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent += value; 
}

function Erase() {
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent = ''; 
}

function Evaluate() {
    const expressionElement = document.getElementById('expression');
    try {
        const result = eval(expressionElement.textContent);
        expressionElement.textContent = result; 
    } catch (error) {
        expressionElement.textContent = 'Error';
    }
}

function Cofnij(){
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent = expressionElement.textContent.slice(0, -1);
}
