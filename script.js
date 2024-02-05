function calculateRoot() {
    // Get the input value
    var inputValue = document.getElementById("number").value;

    // Check if the input is a valid number
    if (isNaN(inputValue) || inputValue === "") {
        document.getElementById("result").innerHTML = "Please enter a valid number";
        return;
    }

    // Get the selected root type
    var rootType = document.getElementById("rootType").value;

    // Calculate the root based on the selected type
    var result;
    if (rootType === "square") {
        result = Math.sqrt(parseFloat(inputValue));
        document.getElementById("result").innerHTML = "Square Root: " + result.toFixed(2);
    } else if (rootType === "cube") {
        result = Math.cbrt(parseFloat(inputValue));
        document.getElementById("result").innerHTML = "Cube Root: " + result.toFixed(2);
    }
}
