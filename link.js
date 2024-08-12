// triangle
function CalculateTriangleArea (){
    const base = getInputValue('triangle-base');
    const hight = getInputValue('triangle-hight');
    if(isNaN(base) || isNaN(hight)){
        alert("Please insert a number...");
        return;
    }
    const  area =0.5 * base * hight;
    setInputValue('triangle-area',area);
    AddToCalculationEntry('triangle',area);
}
// rectangle
function CalculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = width * length;
    setInputValue('rectangle-area',area);
    AddToCalculationEntry('rectangle',area);
}
// parallelogram
function CalculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const hight = getInputValue('parallelogram-hight');
    const area = base * hight;
    setInputValue('parallelogram-area',area);
    AddToCalculationEntry('parallelogram',area);
}
// Rhombus
function CalculateRhombusArea(){
    const d1 = getInputValue('Rhombus-d1');
    const d2 = getInputValue('Rhombus-d2');
    const area = 0.5 * d1 * d2;
    setInputValue('Rhombus-area',area);
    AddToCalculationEntry('Rhombus',area);
}
// Pentagon
function CalculatePentagonArea(){
    const p = getInputValue('Pentagon-p');
    const b = getInputValue('Pentagon-b');
    const area = 0.5 * p * b;
    setInputValue('Pentagon-area',area);
    AddToCalculationEntry('Pentagon',area);
}
// Ellipse
function CalculateEllipseArea(){
    const A = getInputValue('Ellipse-a');
    const B = getInputValue('Ellipse-b');
    const area = 3.1416 * A * B;
    setInputValue('Ellipse-area',area);
    AddToCalculationEntry('Ellipse',area);
}
// Add Calculation Entry 
function AddToCalculationEntry(areaType,area){
    const CalculateArea = document.getElementById('calculation-area');
    const count = CalculateArea.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count+1}. ${areaType} ${area}cm<sup>2</sup>`;
    CalculateArea.appendChild(p);
}

// reusable input field 
function getInputValue (FieldId){
    const InputField = document.getElementById(FieldId);
    const FieldValue = InputField.value;
    const CurrentField = parseFloat(FieldValue);
    return CurrentField;
}
function setInputValue (elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area + 'cm';
}