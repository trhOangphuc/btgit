function MaxChan(arrayB11){
    let Min = arrayB11[0];
    for(let i = 0; i < arrayB11.length; i++){
        if(arrayB11[i] < Min){
            Min = arrayB11[i];
        }
    }
    return Min;
}

document.getElementById('addArrayB11').addEventListener('click', function(){
    event.preventDefault();
    let length= document.getElementById('lengthB11').value;
    let arrayB10= [];
    // Clear previous inputs
    document.getElementById('theInputB11').innerHTML = '';
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB11_${i+1}`;
        input.id = `ptuB11_${i+1}`;
        document.getElementById('theInputB11').appendChild(br);
        document.getElementById('theInputB11').appendChild(label);
        document.getElementById('theInputB11').appendChild(input);
    }
    let BtnArrB11 = document.createElement('button');
        BtnArrB11.type = 'button';
        BtnArrB11.textContent = 'Đồng ý';
        BtnArrB11.addEventListener('click', function(){
        arrayB11 = []; // Clear array before populating it again
        for(let j = 0; j < length; j++){
            let ktra = parseFloat(document.querySelector(`input[name="ptuB11_${j + 1}"]`).value);
            if(isNaN(ktra)){
                alert("Vui lòng nhập đúng dữ liệu cho mảng !");
                return;
            }
            arrayB11.push(ktra);
        }
    });
    document.getElementById('theInputB11').appendChild(BtnArrB11);
    document.getElementById('runB11').addEventListener('click', function () {
    let minb11 = MaxChan(arrayB11);
    document.getElementById('ketquaB11').value = minb11;
    });
});