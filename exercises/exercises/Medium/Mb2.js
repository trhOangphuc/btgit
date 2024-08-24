function Ghep2mang(array1, array2) {
    let array3 = [];
    let length = array1.length;

    for (let i = 0; i < length; i++) {
        array3.push(array1[i]);
        array3.push(array2[i]);
    }

    return array3;
}
document.getElementById('themmang1B2').addEventListener('click', function(event) {
    event.preventDefault();
    let length = document.getElementById('lengthB2').value;
    let array1B2 = [];
    document.getElementById('inputmang1B2').innerHTML = ""; // Clear previous inputs
    for (let i = 0; i < length; i++) {
        let label = document.createElement('label');
        label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 1`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "text";
        input.id = `ptu1_${i + 1}`;
        input.name = `ptu1_${i + 1}`;
        document.getElementById('inputmang1B2').appendChild(br);
        document.getElementById('inputmang1B2').appendChild(label);
        document.getElementById('inputmang1B2').appendChild(input);
    }
    let btnLuu1B2 = document.createElement('button');
    btnLuu1B2.type = "button";
    btnLuu1B2.textContent = "Lưu";
    btnLuu1B2.addEventListener('click', function() {
        array1B2 = [];
        for (let i = 0; i < length; i++) {
            let ptu1 = parseFloat(document.querySelector(`input[name="ptu1_${i + 1}"]`).value);
            if (isNaN(ptu1)) {
                alert("Vui lòng nhập đúng kiểu dữ liệu!");
                document.getElementById(`ptu1_${i + 1}`).focus();
                return;
            }
            array1B2.push(ptu1);
        }
        alert("Mảng 1 đã được lưu!");
    });
    document.getElementById('inputmang1B2').appendChild(btnLuu1B2);
    document.getElementById('themmang2B2').addEventListener('click', function(event) {
        event.preventDefault();
        let length = document.getElementById('lengthB2').value;
        let array2B2 = [];
        document.getElementById('inputmang2B2').innerHTML = ""; // Clear previous inputs
        for (let i = 0; i < length; i++) {
            let label = document.createElement('label');
            label.textContent = `Nhập phần tử thứ ${i + 1} của mảng 2`;
            let br = document.createElement('br');
            let input = document.createElement('input');
            input.type = "text";
            input.id = `ptu2_${i + 1}`;
            input.name = `ptu2_${i + 1}`;
            document.getElementById('inputmang2B2').appendChild(br);
            document.getElementById('inputmang2B2').appendChild(label);
            document.getElementById('inputmang2B2').appendChild(input);
        }
        let btnLuu2B2 = document.createElement('button');
        btnLuu2B2.type = "button";
        btnLuu2B2.textContent = "Lưu";
        btnLuu2B2.addEventListener('click', function() {
            array2B2 = [];
            for (let i = 0; i < length; i++) {
                let ptu2 = parseFloat(document.querySelector(`input[name="ptu2_${i + 1}"]`).value);
                if (isNaN(ptu2)) {
                    alert("Vui lòng nhập đúng kiểu dữ liệu!");
                    document.getElementById(`ptu2_${i + 1}`).focus();
                    return;
                }
                array2B2.push(ptu2);
            }
            alert("Mảng 2 đã được lưu!");
        });
        document.getElementById('inputmang2B2').appendChild(btnLuu2B2);
    });
});
document.getElementById('runB2').addEventListener('click', function() {
    let array1 = [];
    let array2 = [];
    
    let length1 = document.querySelectorAll('#inputmang1B2 input').length;
    for (let i = 0; i < length1; i++) {
        let ptu1 = parseFloat(document.querySelector(`input[name="ptu1_${i + 1}"]`).value);
        if (!isNaN(ptu1)) {
            array1.push(ptu1);
        }
    }
    
    let length2 = document.querySelectorAll('#inputmang2B2 input').length;
    for (let i = 0; i < length2; i++) {
        let ptu2 = parseFloat(document.querySelector(`input[name="ptu2_${i + 1}"]`).value);
        if (!isNaN(ptu2)) {
            array2.push(ptu2);
        }
    }
    
    if (array1.length !== array2.length) {
        alert("Hai mảng phải có cùng kích thước!");
        return;
    }

    let mangGhep = Ghep2mang(array1, array2);
    document.getElementById('mangmoiB2').value = mangGhep.join(", ");
    console.log("Mảng Ghép:", mangGhep); // In ra mảng ghép để kiểm tra
});
