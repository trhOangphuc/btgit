function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * tinhGiaiThua(n - 1);
    }
}

document.getElementById('runB15').addEventListener('click', function(event) {
    event.preventDefault();
    
    let ktra = parseFloat(document.getElementById('so').value);
    if (isNaN(ktra)) {
        alert('Vui lòng nhập đúng dữ liệu vào textBox !');
        document.getElementById('so').focus();
        return;
    }
    
    let result = tinhGiaiThua(ktra);
    document.getElementById('ketquaB15').value = result;
});