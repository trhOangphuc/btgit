function catChuoi(chuoi, viTriBatDau, soKyTu) {
    // Chuyển đổi vị trí bắt đầu và số ký tự cần cắt thành số nguyên
    let batDau = parseInt(viTriBatDau);
    let kyTuCanCat = parseInt(soKyTu);
    
    // Sử dụng phương thức substring để cắt chuỗi từ vị trí batDau và số kyTuCanCat ký tự
    let chuoiMoi = chuoi.substring(batDau, batDau + kyTuCanCat);
    return chuoiMoi;
}
document.getElementById('runB18').addEventListener('click', function(){
    let StringB18 = document.getElementById('StringB18').value;
    let StrDau = document.getElementById('StringDauB18').value;
    let soKT = document.getElementById('soKytu').value;
    let result = catChuoi(StringB18, StrDau, soKT);
    document.getElementById('chuoimoiB18').value = result;
});