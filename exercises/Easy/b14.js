function timViTri(soCanTim, mangSo) {
    for (let i = 0; i < mangSo.length; i++) {
        if (mangSo[i] === soCanTim) {
            return i; // Trả về vị trí đầu tiên của số cần tìm trong mảng
        }
    }
    return -1; // Trường hợp không tìm thấy số trong mảng
}

let arrayB14 = []; // Đặt biến arrayB14 ở phạm vi toàn cục

document.getElementById('addArrayB14').addEventListener('click', function(event) {
    event.preventDefault();
    let length = document.getElementById('lengthB14').value;
    document.getElementById('theInputB14').innerHTML = '';

    for (let i = 0; i < length; i++) {
        let label = document.createElement('label');
        label.textContent = `Nhập phần tử thứ ${i + 1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "number";
        input.name = `ptuB14_${i + 1}`;
        input.id = `ptuB14_${i + 1}`;
        document.getElementById('theInputB14').appendChild(br);
        document.getElementById('theInputB14').appendChild(label);
        document.getElementById('theInputB14').appendChild(input);
    }

    let BtnArrB14 = document.createElement('button');
    BtnArrB14.type = 'button';
    BtnArrB14.textContent = 'Đồng ý';
    BtnArrB14.addEventListener('click', function() {
        arrayB14 = [];
        for (let j = 0; j < length; j++) {
            let ktra = parseFloat(document.querySelector(`input[name="ptuB14_${j + 1}"]`).value);
            if (isNaN(ktra)) {
                alert("Vui lòng nhập đúng dữ liệu cho mảng!");
                return;
            }
            arrayB14.push(ktra);
        }
        alert("Dữ liệu mảng đã được lưu");

        // Sự kiện click của nút "Run" sẽ được thêm vào sau khi dữ liệu mảng được cập nhật
        document.getElementById('runB14').addEventListener('click', function() {
            let socantim = parseFloat(document.getElementById('searchPT').value);
            let result = timViTri(socantim, arrayB14);
            document.getElementById('ketquaB14').value = result;
        });
    });

    document.getElementById('theInputB14').appendChild(BtnArrB14);
});