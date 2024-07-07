function Tong(arrayB12){
    let sum = 0;
    for(let i = 0; i < arrayB12.length; i++){
            sum += arrayB12[i];
    }
    return sum;
}

document.getElementById('addArrayB12').addEventListener('click', function(){
    event.preventDefault();
    let length= document.getElementById('lengthB12').value;
    let arrayB12= [];
    // Clear previous inputs
    document.getElementById('theInputB12').innerHTML = '';
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB12_${i+1}`;
        input.id = `ptuB12_${i+1}`;
        document.getElementById('theInputB12').appendChild(br);
        document.getElementById('theInputB12').appendChild(label);
        document.getElementById('theInputB12').appendChild(input);
    }
    let BtnArrB12 = document.createElement('button');
        BtnArrB12.type = 'button';
        BtnArrB12.textContent = 'Đồng ý';
        BtnArrB12.addEventListener('click', function(){
        arrayB12 = []; // Clear array before populating it again
        for(let j = 0; j < length; j++){
            let ktra = parseFloat(document.querySelector(`input[name="ptuB12_${j + 1}"]`).value);
            if(isNaN(ktra)){
                alert("Vui lòng nhập đúng dữ liệu cho mảng !");
                return;
            }
            arrayB12.push(ktra);
        }
    });
    document.getElementById('theInputB12').appendChild(BtnArrB12);
    document.getElementById('runB12').addEventListener('click', function () {
    let TBC = Tong(arrayB12)/ length;
    document.getElementById('ketquaB12').value = TBC;
    });
});