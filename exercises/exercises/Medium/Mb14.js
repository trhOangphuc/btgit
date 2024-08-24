function Tinhthue(arrayB14){
    let tongthue=0;
    for(let i=0; i<arrayB14.length; i++){
        let thunhap = arrayB14[i];
        let thue= 0;
        if(thunhap > 50000000){
           thue= thunhap*(20/100);
        }
        else if(thunhap >= 20000000 && thunhap <= 50000000){
           thue= thunhap*(10/100);
        }
        else{
           thue= thunhap*(5/100);
        }
        tongthue +=thue;
    } 
    return tongthue;
}
document.getElementById('nhapmang').addEventListener('click', function(event){
    event.preventDefault();
    let length = document.getElementById('lengthB14').value;
    let arrayB14 = [];
    document.getElementById('inputmangB14').innerHTML="";
    for(let i= 0; i<length; i++){
        let label= document.createElement('label');
        label.textContent=`Thu nhập tháng thứ ${i+1}`;
        let br = document.createElement('br');
        let input = document.createElement('input');
        input.type = 'text';
        input.id= `thang_${i+1}`;
        input.name= `thang_${i+1}`;

        document.getElementById('inputmangB14').appendChild(br);
        document.getElementById('inputmangB14').appendChild(label);
        document.getElementById('inputmangB14').appendChild(input);
    }
    let btnLuuB14 = document.createElement('button');
    btnLuuB14.type= 'button';
    btnLuuB14.textContent= 'Lưu';
    btnLuuB14.addEventListener('click', function(){
        arrayB14 = [];
        for(let j=0; j< length; j++){
            let thang = parseFloat(document.querySelector(`input[name="thang_${j+1}"]`).value);
            if(isNaN(thang)){
                alert('Vui lòng nhập đúng dữ liệu lương tháng !');
                document.getElementById('`input[name="thang_${j+1}"]`').focus();
                return;
            }
            arrayB14.push(thang);
        }
        alert('Dữ liệu đã được lưu !');
    });
    document.getElementById('inputmangB14').appendChild(btnLuuB14);
    document.getElementById('runB14').addEventListener('click', function(){
        let result= Tinhthue(arrayB14).toString();
        document.getElementById('thue').value = result;
    });
});
