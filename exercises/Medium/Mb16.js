function taoDayFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}
document.getElementById('runB16').addEventListener('click', function() {
    let soPhanTu = parseInt(document.getElementById('m').value);
    if (isNaN(soPhanTu) || soPhanTu <= 0) {
        alert('Vui lòng nhập một số nguyên dương hợp lệ!');
        return;
    }
    let result = taoDayFibonacci(soPhanTu);
    document.getElementById('ketquaB16').value = result.join(', ');
});