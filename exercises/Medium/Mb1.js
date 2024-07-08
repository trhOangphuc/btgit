function Tangdan(arrayB1){
    return arrayB1.slice().sort();
}
function Giamdan(arrayB1){
    return arrayB1.slice().sort().reverse();
}
document.getElementById('themptB1').addEventListener('click', function(){
    event.preventDefault();
    let length = document.getElementById('lengthB1').value;
    let arrayB1 = [];
    document.getElementById('inputB1').innerHTML="";
    for(let i= 0; i<length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = "text";
        input.id = `ptuB1_${i+1}`;
        input.name = `ptuB1_${i+1}`;
        document.getElementById('inputB1').appendChild(br);
        document.getElementById('inputB1').appendChild(label);
        document.getElementById('inputB1').appendChild(input);
    }
    let btnLuu= document.createElement('button');
    btnLuu.type = "button";
    btnLuu.textContent ="Lưu";
    btnLuu.addEventListener('click', function(){
        arrayB1 = [];
        for(let i=0; i<length; i++){
            let ptu = document.querySelector(`input[name= "ptuB1_${i+1}"]`).value;
            if(ptu.trim()===""){
                alert('Vui lòng nhập đúng kiểu dữ liệu !');
                document.getElementById(`ptuB1_${i+1}`).focus();
                return;
            }
            arrayB1.push(ptu);
        }
        alert('Mảng đã được cập nhật !');
        document.getElementById('runB1').addEventListener('click', function(){
            let sxTang = Tangdan(arrayB1);
            let sxGiam = Giamdan(arrayB1);
            document.getElementById('tdB1').value= sxTang.join(", ");
            document.getElementById('gdB1').value= sxGiam.join(", ");
        });
    });
    document.getElementById('inputB1').appendChild(btnLuu);
});