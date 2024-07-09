function Search(a, b){
    return b.indexOf(a);
}
document.getElementById('SearchB8').addEventListener('click', function(){
    let chuoia = document.getElementById('Stringa').value.toLowerCase();
    let chuoib = document.getElementById('Stringb').value.toLowerCase();
    let vitri = document.getElementById('vitriB8');
    let result = Search(chuoia, chuoib);
    if(result !== -1){
        vitri.textContent = `Chuỗi a "${chuoia}" được tìm thấy tại vị trí "${result}" trong chuỗi b `;
    }
    else{
        vitri.textContent = "Không tìm thấy chuỗi a trong chuỗi b !";
    }
});
