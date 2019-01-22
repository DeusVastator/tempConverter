function tempCalc() {
var submission = parseFloat(document.querySelector('#answer').value);
var temp = document.querySelector('input[name="temp"]:checked').value;
var fahrenheit = (submission - 32) * (5/9);
var celsius = (submission * (9/5)) + 32;

    
if (temp == 1) {
    document.querySelector('#calc').innerHTML = "The temperature entered " + submission + " fahrenheit which converts to " + fahrenheit.toFixed(3) + " celsius.";
        
    } else if (temp == 2) {
        document.querySelector('#calc').innerHTML = "The temperature entered " + submission + " celcius which converts to " + celsius.toFixed(3) + " fahrenheit.";
    
    } else {
        document.querySelector('#calc').innerHTML = "Error";
    }
}


