function Maxmang(arrayB10){
    let Max = arrayB10[0];
    for(let i = 0; i < arrayB10.length; i++){
        if(arrayB10[i] > Max){
            Max = arrayB10[i];
        }
    }
    return Max;
}

document.getElementById('addArrayB10').addEventListener('click', function(){
    event.preventDefault();
    let length= document.getElementById('lengthB10').value;
    let arrayB10= [];
    // Clear previous inputs
    document.getElementById('theInputB10').innerHTML = '';
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB10_${i+1}`;
        input.id = `ptuB10_${i+1}`;
        document.getElementById('theInputB10').appendChild(br);
        document.getElementById('theInputB10').appendChild(label);
        document.getElementById('theInputB10').appendChild(input);
    }
    let BtnArrB10 = document.createElement('button');
        BtnArrB10.type = 'button';
        BtnArrB10.textContent = 'Đồng ý';
        BtnArrB10.addEventListener('click', function(){
        arrayB10 = []; // Clear array before populating it again
        for(let j = 0; j < length; j++){
            let ktra = parseFloat(document.querySelector(`input[name="ptuB10_${j + 1}"]`).value);
            if(isNaN(ktra)){
                alert("Vui lòng nhập đúng dữ liệu cho mảng !");
                return;
            }
            arrayB10.push(ktra);
        }
        document.getElementById('runB10').addEventListener('click', function () {
            let maxB10 = Maxmang(arrayB10);
            document.getElementById('ketquaB10').value = maxB10;
    });
    });
    document.getElementById('theInputB10').appendChild(BtnArrB10);
});