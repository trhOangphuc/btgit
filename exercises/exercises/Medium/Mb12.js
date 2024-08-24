function RandomB12(a){
    return parseInt(Math.random()*(2*a)-a);
}
document.getElementById('runB12').addEventListener('click', function(){
    let randomaB12 = parseInt(document.getElementById('randomaB12').value);
    if(isNaN(randomaB12)){
        alert("Vui lòng nhập đùng kiểu dữ liệu là một số nguyên!");
        document.getElementById('randoma').focus();
        return;
    }
    let result = RandomB12(randomaB12);
    document.getElementById('ketquaB12').value = result;
});