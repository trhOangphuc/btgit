function LayPt(arrayB7, vtDau, vtCuoi) {
    if (vtDau < 0 || vtCuoi >= arrayB7.length || vtDau > vtCuoi) {
        alert('Vui lòng nhập đúng dữ liệu (vị trí đầu, cuối thuộc mảng và vị trí đầu đứng trước vị trí cuối!');
        return [];
    }
    return arrayB7.slice(vtDau, vtCuoi + 1);
}
let arrayB7 = [];
document.getElementById('themmangB7').addEventListener('click', function(event){
    event.preventDefault();
    let length = document.getElementById('lengthB7').value;
    document.getElementById('inputmangB7').innerHTML=" ";
    for(let i= 0; i< length; i++){
        let label = document.createElement('label');
        label.textContent= `Nhập phần tử thứ ${i}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.id= `ptB7_${i}`;
        input.type= "text";
        input.name= `ptB7_${i}`;

        document.getElementById('inputmangB7').appendChild(br);
        document.getElementById('inputmangB7').appendChild(label);
        document.getElementById('inputmangB7').appendChild(input);
    }
    let btnLuuB7 = document.createElement('button');
    btnLuuB7.type= "button";
    btnLuuB7.textContent= "Lưu";
    btnLuuB7.addEventListener('click', function(){
        arrayB7 =[];
        for(let j=0; j<length; j++){
            let ptuB7 = parseFloat(document.querySelector(`input[name="ptB7_${j}"]`).value);
            if(isNaN(ptuB7)){
                alert("Vui lòng nhập đúng kiểu kiểu dữ liệu !");
                document.getElementById(`ptB7_${j}`).focus();
                return;
            }
            arrayB7.push(ptuB7);
        }
        alert("Mảng đã được lưu !"); 
    });
    document.getElementById('inputmangB7').appendChild(btnLuuB7);
});
document.getElementById('runB7').addEventListener('click', function () {
    let start = parseInt(document.getElementById('vtrDau').value);
    let end = parseInt(document.getElementById('vtrCuoi').value);
    let result = LayPt(arrayB7, start, end);
    document.getElementById('mangmoiB7').value = result.join(', ');
});