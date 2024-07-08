function Chia2mang(array1, array2) {
    let result = [];
    
    // Kiểm tra nếu hai mảng có độ dài khác nhau
    if (array1.length !== array2.length) {
        alert("Hai mảng phải có cùng độ dài !");
        return result;
    }
    
    // Chia từng phần tử tương ứng của hai mảng và đẩy vào mảng kết quả
    for (let i = 0; i < array1.length; i++) {
        // Kiểm tra phần tử thứ i của mảng array2 có bằng 0 không (tránh chia cho 0)
        if (array2[i] === 0) {
            alert(`Phần tử thứ ${i + 1} của mảng thứ hai là 0, không thể thực hiện phép chia.`);
            return result; // Trả về mảng rỗng nếu có phép chia cho 0
        }
        
        let divisionResult = array1[i] / array2[i];
        result.push(divisionResult);
    }
    
    return result;
}
document.getElementById('themmang1B6').addEventListener('click', function(event){
    event.preventDefault();
    let length = document.getElementById('lengthB6').value;
    let array1B6 = []
    document.getElementById('inputmang1B6').innerHTML="";
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i + 1} của mảng 1`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.id = `pt1B6_${i+1}`;
        input.type = 'text';
        input.name = `pt1B6_${i+1}`;
        document.getElementById('inputmang1B6').appendChild(br);
        document.getElementById('inputmang1B6').appendChild(label);
        document.getElementById('inputmang1B6').appendChild(input);
    }
    let btnLuuB6 = document.createElement('button');
    btnLuuB6.type= "button";
    btnLuuB6.textContent = "Lưu";
    btnLuuB6.addEventListener('click', function(){
        array1B6=[];
        for(let j=0; j< length; j++){
            let ptu1= parseFloat(document.querySelector(`input[name="pt1B6_${j+1}"]`).value);
            if(isNaN(ptu1)){
                alert('Vui lòng nhập đúng kiểu dữ liệu !');
                document.getElementById(`pt1B6_${j+1}`).focus();
                return;
            }
            array1B6.push(ptu1);
        }
        alert("Mảng 1 đã được lưu !");
    });
    document.getElementById('inputmang1B6').appendChild(btnLuuB6);
});
document.getElementById('themmang2B6').addEventListener('click', function(event){
    event.preventDefault();
    let length = document.getElementById('lengthB6').value;
    let array2B6 = []
    document.getElementById('inputmang2B6').innerHTML="";
    for(let i=0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i + 1} của mảng 1`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.id = `pt2B6_${i+1}`;
        input.type = 'text';
        input.name = `pt2B6_${i+1}`;
        document.getElementById('inputmang2B6').appendChild(br);
        document.getElementById('inputmang2B6').appendChild(label);
        document.getElementById('inputmang2B6').appendChild(input);
    }
    let btnLuu2B6 = document.createElement('button');
    btnLuu2B6.type= "button";
    btnLuu2B6.textContent = "Lưu";
    btnLuu2B6.addEventListener('click', function(){
        array2B6=[];
        for(let j=0; j< length; j++){
            let ptu2= parseFloat(document.querySelector(`input[name="pt2B6_${j+1}"]`).value);
            if(isNaN(ptu2)){
                alert('Vui lòng nhập đúng kiểu dữ liệu !');
                document.getElementById(`pt2B6_${j+1}`).focus();
                return;
            }
            array2B6.push(ptu2);
        }
        alert("Mảng 2 đã được lưu !");
    });
    document.getElementById('inputmang2B6').appendChild(btnLuu2B6);
});
document.getElementById('runB6').addEventListener('click', function(){
    let array1B6 =[];
    let array2B6 =[];

    let length1 = document.querySelectorAll('#inputmang1B6 input').length;
    for(let i=0; i<length1; i++){
        let ptu1= parseFloat(document.querySelector(`input[name="pt1B6_${i+1}"]`).value);
        if(!isNaN(ptu1)){
            array1B6.push(ptu1);
        }
    }
    let length2 = document.querySelectorAll('#inputmang2B6 input').length;
    for(let i=0; i<length2; i++){
        let ptu2= parseFloat(document.querySelector(`input[name="pt2B6_${i+1}"]`).value);
        if(!isNaN(ptu2)){
            array2B6.push(ptu2);
        }
    }
    let chiamang = Chia2mang(array1B6, array2B6);
    document.getElementById('mangmoiB6').value= chiamang.join(", ");
    console.log("Chia 2 mảng:", chiamang); 
});