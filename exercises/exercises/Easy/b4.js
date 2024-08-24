
function countChan(cout){
    return cout.filter(num => num%2===0).length;
}

document.getElementById('addArrayB4').addEventListener('click', function(){
    event.preventDefault();
    let length= document.getElementById('lengthB4').value;
    let arrayB4= [];
    // Clear previous inputs
    document.getElementById('theInputB4').innerHTML = '';
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB4_${i+1}`;
        input.id = `ptuB4_${i+1}`;
        document.getElementById('theInputB4').appendChild(br);
        document.getElementById('theInputB4').appendChild(label);
        document.getElementById('theInputB4').appendChild(input);
    }
    let BtnArrB4 = document.createElement('button');
        BtnArrB4.type = 'button';
        BtnArrB4.textContent = 'Đồng ý';
        BtnArrB4.addEventListener('click', function(){
        arrayB4 = []; // Clear array before populating it again
        for(let j = 0; j < length; j++){
            let ktra = parseFloat(document.querySelector(`input[name="ptuB4_${j + 1}"]`).value);
            if(isNaN(ktra)){
                alert("Vui lòng nhập đúng dữ liệu cho mảng !");
                return;
            }
            arrayB4.push(ktra);
        }
    });
    document.getElementById('theInputB4').appendChild(BtnArrB4);
    document.getElementById('runB4').addEventListener('click', function(){
        let countb4 = countChan(arrayB4);
        document.getElementById('ketquaB4').value = countb4;
    });
});