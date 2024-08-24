function tongAunB(array1, array2){
    return array2.filter(n => !array1.includes(n)).length;
}

document.getElementById('themmang1B10').addEventListener('click', function(event) {
    event.preventDefault();
    let length = document.getElementById('lengthB10').value;
    let array1B10 = [];
    document.getElementById('inputmang1B10').innerHTML = ""; // Clear previous inputs
    for (let i = 0; i < length; i++) {
        let label = document.createElement('label');
        label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 1`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "text";
        input.id = `ptu1B10_${i + 1}`; 
        input.name = `ptu1B10_${i + 1}`; 
        document.getElementById('inputmang1B10').appendChild(br);
        document.getElementById('inputmang1B10').appendChild(label);
        document.getElementById('inputmang1B10').appendChild(input);
    }
    let btnLuu1B10 = document.createElement('button');
    btnLuu1B10.type = "button";
    btnLuu1B10.textContent = "Lưu";
    btnLuu1B10.addEventListener('click', function() {
        array1B10 = [];
        for (let j = 0; j < length; j++) {
            let ptu1 = parseFloat(document.querySelector(`input[name="ptu1B10_${j + 1}"]`).value);
            if (isNaN(ptu1)) {
                alert("Vui lòng nhập đúng kiểu dữ liệu!");
                document.getElementById(`ptu1B10_${j + 1}`).focus();
                return;
            }
            array1B10.push(ptu1);
        }
        alert("Mảng 1 đã được lưu!");
    });
    document.getElementById('inputmang1B10').appendChild(btnLuu1B10);
});

    document.getElementById('themmang2B10').addEventListener('click', function(event) {
        event.preventDefault();
        let length = document.getElementById('lengthB10').value;
        let array2B10 = [];
        document.getElementById('inputmang2B10').innerHTML = ""; // Clear previous inputs
        for (let i = 0; i < length; i++) {
            let label = document.createElement('label');
            label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 2`;
            let br = document.createElement('br');
            let input = document.createElement('input');
            input.type = "text";
            input.id = `ptu2B10_${i + 1}`; 
            input.name = `ptu2B10_${i + 1}`; 
            document.getElementById('inputmang2B10').appendChild(br);
            document.getElementById('inputmang2B10').appendChild(label);
            document.getElementById('inputmang2B10').appendChild(input);
        }
        let btnLuu2B10 = document.createElement('button');
        btnLuu2B10.type = "button";
        btnLuu2B10.textContent = "Lưu";
        btnLuu2B10.addEventListener('click', function() {
            array2B10= [];
            for (let j = 0; j < length; j++) {
                let ptu2 = parseFloat(document.querySelector(`input[name="ptu2B10_${j + 1}"]`).value);
                if (isNaN(ptu2)) {
                    alert("Vui lòng nhập đúng kiểu dữ liệu!");
                    document.getElementById(`ptu2B10_${j + 1}`).focus();
                    return;
                }
                array2B10.push(ptu2);
            }
            alert("Mảng 2 đã được lưu!");
        });
        document.getElementById('inputmang2B10').appendChild(btnLuu2B10);
});
document.getElementById('runB10').addEventListener('click', function(){
    let array1= [];
    let array2= [];

    let length1 = document.querySelectorAll(`#inputmang1B10 input`).length;
    for(let i= 0; i< length1; i++){
        let ptu1 = parseFloat(document.querySelector(`input[name="ptu1B10_${i + 1}"]`).value);
        if(!isNaN(ptu1)){
            array1.push(ptu1);
        }
    }

    let length2 = document.querySelectorAll(`#inputmang2B10 input`).length;
    for(let j= 0; j< length2; j++){
        let ptu2 = parseFloat(document.querySelector(`input[name="ptu2B10_${j + 1}"]`).value);
        if(!isNaN(ptu2)){
            array2.push(ptu2);
        }
    }
   
    let result = tongAunB(array1, array2);
    document.getElementById('ketquaB10').value = result;
});
