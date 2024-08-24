
function SumArrChan(arrayB7) {
    let sum = 0;
    for(let i = 0; i < arrayB7.length; i++){
        if(arrayB7[i] % 2 !== 0){
            sum += arrayB7[i];
        }
    }
    return sum;
}

document.getElementById('addArrayB7').addEventListener('click', function(){
    event.preventDefault();
    let length= document.getElementById('lengthB7').value;
    let arrayB7= [];
    // Clear previous inputs
    document.getElementById('theInputB7').innerHTML = '';
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB7_${i+1}`;
        input.id = `ptuB7_${i+1}`;
        document.getElementById('theInputB7').appendChild(br);
        document.getElementById('theInputB7').appendChild(label);
        document.getElementById('theInputB7').appendChild(input);
    }
    let BtnArrB7 = document.createElement('button');
        BtnArrB7.type = 'button';
        BtnArrB7.textContent = 'Đồng ý';
        BtnArrB7.addEventListener('click', function(){
        arrayB7 = []; // Clear array before populating it again
        for(let j = 0; j < length; j++){
            let ktra = parseFloat(document.querySelector(`input[name="ptuB7_${j + 1}"]`).value);
            if(isNaN(ktra)){
                alert("Vui lòng nhập đúng dữ liệu cho mảng !");
                return;
            }
            arrayB7.push(ktra);
        }
    });
    document.getElementById('theInputB7').appendChild(BtnArrB7);
    document.getElementById('runB7').addEventListener('click', function(){
        let sumb6 = SumArrChan(arrayB7);
        document.getElementById('ketquaB7').value = sumb6;
    });
});