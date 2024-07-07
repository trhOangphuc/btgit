
function countLe(cout){
    return cout.filter(num => num%2!==0).length;
}

document.getElementById('addArrayB5').addEventListener('click', function(){
    event.preventDefault();
    let length = document.getElementById('lengthB5').value;
    let arrayB5= [];
    // Clear previous inputs
    document.getElementById('theInputB5').innerHTML = '';
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB5_${i+1}`;
        input.id = `ptuB5_${i+1}`;
        document.getElementById('theInputB5').appendChild(br);
        document.getElementById('theInputB5').appendChild(label);
        document.getElementById('theInputB5').appendChild(input);
    }
    let BtnArrB5 = document.createElement('button');
        BtnArrB5.type = 'button';
        BtnArrB5.textContent = 'Đồng ý';
        BtnArrB5.addEventListener('click', function(){
        arrayB5 = []; // Clear array before populating it again
        for(let j = 0; j < length; j++){
            let ktra = parseFloat(document.querySelector(`input[name="ptuB5_${j + 1}"]`).value);
            if(isNaN(ktra)){
                alert("Vui lòng nhập đúng dữ liệu cho mảng !");
                return;
            }
            arrayB5.push(ktra);
        }
    });
    document.getElementById('theInputB5').appendChild(BtnArrB5);
    document.getElementById('runB5').addEventListener('click', function(){
        let countb5 = countLe(arrayB5);
        document.getElementById('ketquaB5').value = countb5;
    });
});