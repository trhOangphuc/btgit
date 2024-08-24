function catChuoi(chuoi, viTriBatDau, viTriKetThuc) {
    let batDau = parseInt(viTriBatDau);
    let ketThuc = parseInt(viTriKetThuc);
    // Sử dụng phương thức substring để cắt chuỗi từ viTriBatDau đến viTriKetThuc
    let chuoiMoi = chuoi.substring(batDau, ketThuc);
    return chuoiMoi;
}
document.getElementById('runB17').addEventListener('click', function(){
    let StringB17 = document.getElementById('StringB17').value;
    let StrDau = document.getElementById('StringDau').value;
    let StrCuoi = document.getElementById('StringCuoi').value;
    let result = catChuoi(StringB17, StrDau, StrCuoi);
    document.getElementById('chuoimoiB17').value = result;
});