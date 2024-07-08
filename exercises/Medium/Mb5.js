function Tich2mang(array1B5, array2B5) {
    let result = [];
    if (array1B5.length !== array2B5.length) {
        alert("Hai mảng phải có cùng độ dài !");
        return result; // Trả về mảng rỗng nếu độ dài không bằng nhau
    }
    for (let i = 0; i < array1B5.length; i++) {
        result.push(array1B5[i] * array2B5[i]);
    }
    return result;
}
document.getElementById('themmang1B5').addEventListener('click', function(event) {
    event.preventDefault();
    let length = document.getElementById('lengthB5').value;
    let array1B4 = [];
    document.getElementById('inputmang1B5').innerHTML = ""; // Clear previous inputs
    for (let i = 0; i < length; i++) {
        let label = document.createElement('label');
        label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 1`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "text";
        input.id = `ptu1B5_${i + 1}`; 
        input.name = `ptu1B5_${i + 1}`; 
        document.getElementById('inputmang1B5').appendChild(br);
        document.getElementById('inputmang1B5').appendChild(label);
        document.getElementById('inputmang1B5').appendChild(input);
    }
    let btnLuu1B5 = document.createElement('button');
    btnLuu1B5.type = "button";
    btnLuu1B5.textContent = "Lưu";
    btnLuu1B5.addEventListener('click', function() {
        array1B5 = [];
        for (let j = 0; j < length; j++) {
            let ptu1 = parseFloat(document.querySelector(`input[name="ptu1B5_${j + 1}"]`).value);
            if (isNaN(ptu1)) {
                alert("Vui lòng nhập đúng kiểu dữ liệu!");
                document.getElementById(`ptu1B5_${j + 1}`).focus();
                return;
            }
            array1B4.push(ptu1);
        }
        alert("Mảng 1 đã được lưu!");
    });
    document.getElementById('inputmang1B5').appendChild(btnLuu1B5);
});

    document.getElementById('themmang2B5').addEventListener('click', function(event) {
        event.preventDefault();
        let length = document.getElementById('lengthB5').value;
        let array2B5 = [];
        document.getElementById('inputmang2B5').innerHTML = ""; // Clear previous inputs
        for (let i = 0; i < length; i++) {
            let label = document.createElement('label');
            label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 2`;
            let br = document.createElement('br');
            let input = document.createElement('input');
            input.type = "text";
            input.id = `ptu2B5_${i + 1}`; 
            input.name = `ptu2B5_${i + 1}`; 
            document.getElementById('inputmang2B5').appendChild(br);
            document.getElementById('inputmang2B5').appendChild(label);
            document.getElementById('inputmang2B5').appendChild(input);
        }
        let btnLuu2B5 = document.createElement('button');
        btnLuu2B5.type = "button";
        btnLuu2B5.textContent = "Lưu";
        btnLuu2B5.addEventListener('click', function() {
            array2B5= [];
            for (let j = 0; j < length; j++) {
                let ptu1 = parseFloat(document.querySelector(`input[name="ptu2B5_${j + 1}"]`).value);
                if (isNaN(ptu1)) {
                    alert("Vui lòng nhập đúng kiểu dữ liệu!");
                    document.getElementById(`ptu2B5_${j + 1}`).focus();
                    return;
                }
                array2B5.push(ptu1);
            }
            alert("Mảng 2 đã được lưu!");
        });
        document.getElementById('inputmang2B5').appendChild(btnLuu2B5);
    
});

document.getElementById('runB5').addEventListener('click', function() {
    let array1 = [];
    let array2 = [];
    
    let length1 = document.querySelectorAll('#inputmang1B5 input').length;
    for (let i = 0; i < length1; i++) {
        let ptu1 = parseFloat(document.querySelector(`input[name="ptu1B5_${i + 1}"]`).value);
        if (!isNaN(ptu1)) {
            array1.push(ptu1);
        }2
    }
    
    let length2 = document.querySelectorAll('#inputmang2B5 input').length;
    for (let i = 0; i < length2; i++) {
        let ptu2 = parseFloat(document.querySelector(`input[name="ptu2B5_${i + 1}"]`).value);
        if (!isNaN(ptu2)) {
            array2.push(ptu2);
        }
    }
    
    if (array1.length !== array2.length) {
        alert("Hai mảng phải có cùng kích thước!");
        return;
    }

    let tichmang = Tich2mang(array1, array2);
    document.getElementById('mangmoiB5').value = tichmang.join(", ");
    console.log("Tích 2 mảng:", tichmang); // In ra mảng ghép để kiểm tra
});
