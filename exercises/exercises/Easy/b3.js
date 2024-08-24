
function Chanle(a,b){
    if(a%2 === 0 && b%2 === 0){
        return "Cùng chẵn !";
    }
    else if(a%2 !== 0 && b%2 !== 0){
        return "Cùng lẻ !";
    }
    else if(a%2 === 0 && b%2 !==0){
        return `${a} = "Số chẵn" và ${b} = "Số lẻ"`;
    }
    else{
        return `${a} = "Số lẻ" và ${b} = "Số Chẵn"`;
    }
}
function Output(s) {
    document.getElementById('ketquaB3').value = s;
}
document.getElementById('runB3').addEventListener('click', function(){
    event.preventDefault();
    let numbers2 = [];
    for(let i= 0; i< 2; i++){
        let ktra = parseFloat(document.getElementById(`ss${i+1}`).value);
        if(isNaN(ktra)){
            alert('Vui lòng nhập đúng dữ liệu vào textBox !');
            document.getElementById(`ss${i+1}`).focus();
            return
        }
        numbers2.push(ktra);
    }
    let na = numbers2[0];
    let nb = numbers2[1];
    let result = Chanle(na,nb);
    Output(result);
});