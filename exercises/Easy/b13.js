function daonguoc(arrayB13){
    return arrayB13.reverse();
}
document.getElementById('addArrayB13').addEventListener('click', function(){
    event.preventDefault();
    let length= document.getElementById('lengthB13').value;
    let arrayB13= [];
    // Clear previous inputs
    document.getElementById('theInputB13').innerHTML = '';
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB13_${i+1}`;
        input.id = `ptuB13_${i+1}`;
        document.getElementById('theInputB13').appendChild(br);
        document.getElementById('theInputB13').appendChild(label);
        document.getElementById('theInputB13').appendChild(input);
    }
    let BtnArrB13 = document.createElement('button');
        BtnArrB13.type = 'button';
        BtnArrB13.textContent = 'Đồng ý';
        BtnArrB13.addEventListener('click', function(){
        arrayB13 = []; // Clear array before populating it again
        for(let j = 0; j < length; j++){
            let ktra = parseFloat(document.querySelector(`input[name="ptuB13_${j + 1}"]`).value);
            if(isNaN(ktra)){
                alert("Vui lòng nhập đúng dữ liệu cho mảng !");
                return;
            }
            arrayB13.push(ktra);
        }
    });
    document.getElementById('theInputB13').appendChild(BtnArrB13);
    document.getElementById('runB13').addEventListener('click', function () {
    let result = daonguoc(arrayB13);
    document.getElementById('ketquaB13').value = result;
    });
});