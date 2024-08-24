
function Tinhtien(checkin, checkout){
    let quadem =24;
    let giovao = parseInt(checkin);
    let giora = parseInt(checkout);
    let sogio= giora - giovao;
    let thanhtien = 0;
    if(sogio >= quadem){
        return 160 + (sogio - quadem)*40; 
    }
    if(sogio <= 2){
        return thanhtien= sogio* 70;
    }
    else{
        return thanhtien=2*70 +(sogio-2)*50;
    }
}
document.getElementById('runB13').addEventListener('click', function(event){
    event.preventDefault();
    let checkinB13 = parseInt(document.getElementById('checkinTime').value);
    let checkoutB13 = parseInt(document.getElementById('checkoutTime').value);
    if(isNaN(checkinB13) || isNaN(checkoutB13) || checkinB13 <=0 || checkoutB13 <= 0){
        alert("Vui lòng nhập giờ là một số nguyên dương !");
        document.getElementById('checkinTime').focus();
        return;
    }
        let result = Tinhtien(checkinB13, checkoutB13);
        document.getElementById('money').value= result;
});

