function Tongchuoi(n){
    let chuoiso = n.toString();
    let tong = 0;
    for(let i=0; i<chuoiso.length; i++){
        tong += parseInt(chuoiso[i]);
    }
    return tong;
}
document.getElementById('runB15').addEventListener('click', function(){
    let songuyen = parseInt(document.getElementById('n').value);
    let result = Tongchuoi(songuyen);
    document.getElementById('ketquaB15').value= result;
});