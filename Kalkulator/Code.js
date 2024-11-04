

function Dodaj(value) {
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent += value; 
}

function Wyczyść() {
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent = ''; 
}

function Oblicz() {
    const expressionElement = document.getElementById('expression');
    try {
        const result = eval(expressionElement.textContent);
        expressionElement.textContent = result; 
    } catch (error) {
        expressionElement.textContent = 'Błąd';
    }
}

function Cofnij(){
    const expressionElement = document.getElementById('expression');
    expressionElement.textContent = expressionElement.textContent.slice(0, -1);
}
