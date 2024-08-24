
document.getElementById('addArrayB6').addEventListener('click', function(){
    event.preventDefault();
    let length= document.getElementById('lengthB6').value;
    let arrayB6= [];
    // Clear previous inputs
    document.getElementById('theInputB6').innerHTML = '';
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB6_${i+1}`;
        input.id = `ptuB6_${i+1}`;
        document.getElementById('theInputB6').appendChild(br);
        document.getElementById('theInputB6').appendChild(label);
        document.getElementById('theInputB6').appendChild(input);
    }
    let BtnArrB6 = document.createElement('button');
        BtnArrB6.type = 'button';
        BtnArrB6.textContent = 'Đồng ý';
        BtnArrB6.addEventListener('click', function(){
        arrayB6 = []; // Clear array before populating it again
        for(let j = 0; j < length; j++){
            let ktra = parseFloat(document.querySelector(`input[name="ptuB6_${j + 1}"]`).value);
            if(isNaN(ktra)){
                alert("Vui lòng nhập đúng dữ liệu cho mảng !");
                return;
            }
            arrayB6.push(ktra);
        }
    });
    document.getElementById('theInputB6').appendChild(BtnArrB6);
    document.getElementById('runB6').addEventListener('click', function () {
        
    let sum = 0;
    for(let i = 0; i < arrayB6.length; i++){
        if(arrayB6[i] % 2 === 0){
            sum += arrayB6[i];
        }
    }
        document.getElementById('ketquaB6').value = sum;
    });
});