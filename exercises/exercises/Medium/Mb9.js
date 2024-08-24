function tongAinB(array1, array2){
    return array2.filter(n => array1.includes(n)).length;
}

document.getElementById('themmang1B9').addEventListener('click', function(event) {
    event.preventDefault();
    let length = document.getElementById('lengthB9').value;
    let array1B6 = [];
    document.getElementById('inputmang1B9').innerHTML = ""; // Clear previous inputs
    for (let i = 0; i < length; i++) {
        let label = document.createElement('label');
        label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 1`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "text";
        input.id = `ptu1B9_${i + 1}`; 
        input.name = `ptu1B9_${i + 1}`; 
        document.getElementById('inputmang1B9').appendChild(br);
        document.getElementById('inputmang1B9').appendChild(label);
        document.getElementById('inputmang1B9').appendChild(input);
    }
    let btnLuu1B9 = document.createElement('button');
    btnLuu1B9.type = "button";
    btnLuu1B9.textContent = "Lưu";
    btnLuu1B9.addEventListener('click', function() {
        array1B9 = [];
        for (let j = 0; j < length; j++) {
            let ptu1 = parseFloat(document.querySelector(`input[name="ptu1B9_${j + 1}"]`).value);
            if (isNaN(ptu1)) {
                alert("Vui lòng nhập đúng kiểu dữ liệu!");
                document.getElementById(`ptu1B9_${j + 1}`).focus();
                return;
            }
            array1B9.push(ptu1);
        }
        alert("Mảng 1 đã được lưu!");
    });
    document.getElementById('inputmang1B9').appendChild(btnLuu1B9);
});

    document.getElementById('themmang2B9').addEventListener('click', function(event) {
        event.preventDefault();
        let length = document.getElementById('lengthB9').value;
        let array2B9 = [];
        document.getElementById('inputmang2B9').innerHTML = ""; // Clear previous inputs
        for (let i = 0; i < length; i++) {
            let label = document.createElement('label');
            label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 2`;
            let br = document.createElement('br');
            let input = document.createElement('input');
            input.type = "text";
            input.id = `ptu2B9_${i + 1}`; 
            input.name = `ptu2B9_${i + 1}`; 
            document.getElementById('inputmang2B9').appendChild(br);
            document.getElementById('inputmang2B9').appendChild(label);
            document.getElementById('inputmang2B9').appendChild(input);
        }
        let btnLuu2B9 = document.createElement('button');
        btnLuu2B9.type = "button";
        btnLuu2B9.textContent = "Lưu";
        btnLuu2B9.addEventListener('click', function() {
            array2B9= [];
            for (let j = 0; j < length; j++) {
                let ptu2 = parseFloat(document.querySelector(`input[name="ptu2B9_${j + 1}"]`).value);
                if (isNaN(ptu2)) {
                    alert("Vui lòng nhập đúng kiểu dữ liệu!");
                    document.getElementById(`ptu2B9_${j + 1}`).focus();
                    return;
                }
                array2B9.push(ptu2);
            }
            alert("Mảng 2 đã được lưu!");
        });
        document.getElementById('inputmang2B9').appendChild(btnLuu2B9);
});
document.getElementById('runB9').addEventListener('click', function(){
    let array1= [];
    let array2= [];

    let length1 = document.querySelectorAll(`#inputmang1B9 input`).length;
    for(let i= 0; i< length1; i++){
        let ptu1 = parseFloat(document.querySelector(`input[name="ptu1B9_${i + 1}"]`).value);
        if(!isNaN(ptu1)){
            array1.push(ptu1);
        }
    }

    let length2 = document.querySelectorAll(`#inputmang2B9 input`).length;
    for(let j= 0; j< length2; j++){
        let ptu2 = parseFloat(document.querySelector(`input[name="ptu2B9_${j + 1}"]`).value);
        if(!isNaN(ptu2)){
            array2.push(ptu2);
        }
    }
   
    let result = tongAinB(array1, array2);
    document.getElementById('ketquaB9').value = result;
});
