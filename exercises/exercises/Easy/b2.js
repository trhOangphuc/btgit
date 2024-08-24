

function aPowb(a, b) {
    let result = Math.pow(a, b);
    return result;
}

function OutputB2(s) {
    document.getElementById('ketquaB2').value = s;
}

document.getElementById('runB2').addEventListener('click', function(event) {
    event.preventDefault();
    let numbers = [];
    for (let i = 0; i < 2; i++) {
        let ktra = parseFloat(document.getElementById(`s${i + 1}`).value);
        if (isNaN(ktra)) {
            alert("Vui lòng nhập đúng dữ liệu vào textBox!");
            document.getElementById(`s${i + 1}`).focus();
            return;
        }
        numbers.push(ktra);
    }

    let sa = numbers[0];
    let sb = numbers[1];

    let Pow = aPowb(sa, sb);
    OutputB2(Pow);
});