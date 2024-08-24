function Snt(number) {
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    let sqrtNum = Math.sqrt(number);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
 
    return true;
}
document.getElementById('runB8').addEventListener('click', function(){
    event.preventDefault();
        let ktra = parseFloat(document.getElementById(`snt`).value);
        if(isNaN(ktra)){
            alert('Vui lòng nhập đúng dữ liệu vào textBox !');
            document.getElementById(`snt`).focus();
            return;
    };
    let result = Snt(ktra);
    if(result){
        document.getElementById('ketquaB8').value= 'Là số nguyên tố !';
    }
    else{
        document.getElementById('ketquaB8').value= 'Không phải là số nguyên tố !';
    }
});