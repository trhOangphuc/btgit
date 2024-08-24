function pheptinh(a, b) {
    if (b <= 0) {
        return NaN; // Tránh phép chia cho 0 và các trường hợp b <= 0
    }
    while (a >= b) {
        a -= b;
    }
    return a;
}

    document.getElementById('runB9').addEventListener('click', function() {
        event.preventDefault();
        let numbersB9 = [];
        for(let i= 0; i< 2; i++){
        let ktra = parseFloat(document.getElementById(`Sot${i+1}`).value);
        if(isNaN(ktra)){
            alert('Vui lòng nhập đúng dữ liệu vào textBox !');
            document.getElementById(`Sot${i+1}`).focus();
            return
        }
        numbersB9.push(ktra);
    }
        let n_a = numbersB9[0];
        let n_b = numbersB9[1];
        let result = pheptinh(n_a, n_b);
        document.getElementById('ketquaB9').value = result;
    });