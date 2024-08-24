function Swap(a, b, c) {
    let array = [a, b, c];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function OutputB1(numbers) {
    document.getElementById('KQa').value = numbers[0];
    document.getElementById('KQb').value = numbers[1];
    document.getElementById('KQc').value = numbers[2];
}


document.getElementById('runbt1').addEventListener('click', function(event) {
    event.preventDefault();
    let numbers = [];
    for (let i = 0; i < 3; i++) {
        let ktra = parseFloat(document.getElementById(`Bai1_${i + 1}`).value);
        if (isNaN(ktra)) {
            alert('Vui lòng nhập đúng kiểu dữ liệu vào textBox !');
            document.getElementById(`Bai1_${i + 1}`).focus();
            return;
        }
        numbers.push(ktra);
    }

    let sa = parseFloat(document.getElementById('Bai1_1').value);
    let sb = parseFloat(document.getElementById('Bai1_2').value);
    let sc = parseFloat(document.getElementById('Bai1_3').value);

    let Rswap = Swap(sa, sb, sc);
    OutputB1(Rswap);
});