//conversion of kms to miles
// 1 kilometers = 0.621371
// miles = kilometers * factor
function convert(){
    var kms = document.getElementById('data').value;
    const factor = 0.621371;
    var miles = kms * factor;
    document.getElementById('res').innerText = `${miles} miles`;
}