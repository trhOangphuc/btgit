function RandomB11(a){
    return parseInt(Math.random()*a);
}
document.getElementById('runB11').addEventListener('click', function(){
    let randoma = parseInt(document.getElementById('randoma').value);
    if(isNaN(randoma)){
        alert("Vui lòng nhập đùng kiểu dữ liệu là một số nguyên!");
        document.getElementById('randoma').focus();
        return;
    }
    let result = RandomB11(randoma);
    document.getElementById('ketquaB11').value = result;
});