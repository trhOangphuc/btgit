function Chia2mang(array1B6, array2B6) {
    let result = [];
    if (array1B6.length !== array2B6.length) {
        alert("Hai mảng phải có cùng độ dài !");
        return result; // Trả về mảng rỗng nếu độ dài không bằng nhau
    }
    for (let i = 0; i < array1B6.length; i++) {
        result.push(array1B6[i] / array2B6[i]);
    }
    return result;
}
document.getElementById('themmang1B6').addEventListener('click', function(event) {
    event.preventDefault();
    let length = document.getElementById('lengthB6').value;
    let array1B6 = [];
    document.getElementById('inputmang1B6').innerHTML = ""; // Clear previous inputs
    for (let i = 0; i < length; i++) {
        let label = document.createElement('label');
        label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 1`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "text";
        input.id = `ptu1B6_${i + 1}`; 
        input.name = `ptu1B6_${i + 1}`; 
        document.getElementById('inputmang1B6').appendChild(br);
        document.getElementById('inputmang1B6').appendChild(label);
        document.getElementById('inputmang1B6').appendChild(input);
    }
    let btnLuu1B6 = document.createElement('button');
    btnLuu1B6.type = "button";
    btnLuu1B6.textContent = "Lưu";
    btnLuu1B6.addEventListener('click', function() {
        array1B6 = [];
        for (let j = 0; j < length; j++) {
            let ptu1 = parseFloat(document.querySelector(`input[name="ptu1B6_${j + 1}"]`).value);
            if (isNaN(ptu1)) {
                alert("Vui lòng nhập đúng kiểu dữ liệu!");
                document.getElementById(`ptu1B6_${j + 1}`).focus();
                return;
            }
            array1B6.push(ptu1);
        }
        alert("Mảng 1 đã được lưu!");
    });
    document.getElementById('inputmang1B6').appendChild(btnLuu1B6);
});

    document.getElementById('themmang2B6').addEventListener('click', function(event) {
        event.preventDefault();
        let length = document.getElementById('lengthB6').value;
        let array2B6 = [];
        document.getElementById('inputmang2B6').innerHTML = ""; // Clear previous inputs
        for (let i = 0; i < length; i++) {
            let label = document.createElement('label');
            label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 2`;
            let br = document.createElement('br');
            let input = document.createElement('input');
            input.type = "text";
            input.id = `ptu2B6_${i + 1}`; 
            input.name = `ptu2B6_${i + 1}`; 
            document.getElementById('inputmang2B6').appendChild(br);
            document.getElementById('inputmang2B6').appendChild(label);
            document.getElementById('inputmang2B6').appendChild(input);
        }
        let btnLuu2B6 = document.createElement('button');
        btnLuu2B6.type = "button";
        btnLuu2B6.textContent = "Lưu";
        btnLuu2B6.addEventListener('click', function() {
            array2B6= [];
            for (let j = 0; j < length; j++) {
                let ptu2 = parseFloat(document.querySelector(`input[name="ptu2B6_${j + 1}"]`).value);
                if (isNaN(ptu2)) {
                    alert("Vui lòng nhập đúng kiểu dữ liệu!");
                    document.getElementById(`ptu2B6_${j + 1}`).focus();
                    return;
                }
                array2B6.push(ptu2);
            }
            alert("Mảng 2 đã được lưu!");
        });
        document.getElementById('inputmang2B6').appendChild(btnLuu2B6);
    
});

document.getElementById('runB6').addEventListener('click', function() {
    let array1 = [];
    let array2 = [];
    
    let length1 = document.querySelectorAll('#inputmang1B6 input').length;
    for (let i = 0; i < length1; i++) {
        let ptu1 = parseFloat(document.querySelector(`input[name="ptu1B6_${i + 1}"]`).value);
        if (!isNaN(ptu1)) {
            array1.push(ptu1);
        }2
    }
    
    let length2 = document.querySelectorAll('#inputmang2B6 input').length;
    for (let i = 0; i < length2; i++) {
        let ptu2 = parseFloat(document.querySelector(`input[name="ptu2B6_${i + 1}"]`).value);
        if (!isNaN(ptu2)) {
            array2.push(ptu2);
        }
    }
    
    if (array1.length !== array2.length) {
        alert("Hai mảng phải có cùng kích thước!");
        return;
    }

    let chiamang = Chia2mang(array1, array2);
    document.getElementById('mangmoiB6').value = chiamang.join(", ");
    console.log("Hiệu 2 mảng:", chiamang); // In ra mảng ghép để kiểm tra
});
