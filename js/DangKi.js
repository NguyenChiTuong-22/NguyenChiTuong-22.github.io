
function KiemTraTenDN(){
    var re = /^[A-Za-z]\w*/;
    if(re.test(document.getElementById('txtTen').value.trim())==false){
        tendn.innerText = " *Bắt buộc, bắt đầu bằng ký tự in hoa";
        return false;
    }
    else{
        tendn.innerText = " *";
        return true;
    }
}
function KiemTraPassWord(){
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(re.test(document.getElementById('txtPass').value.trim())==false){
        pass.innerText = " *Bắt buộc, phải có chữ, số, ít nhất 8 ký tự";
        return false;
    }
    else{
        pass.innerText ="*";
        return true;
    }
}
function KiemTraXacNhanPassWord(){
    if(document.getElementById('txtNLP').value!=document.getElementById('txtPass').value){
        nlp.innerText = " * Mật khẩu không khớp";
        return false;
    }
    else{
        nlp.innerText = " *"; 
        return true;
    }
}
function KiemTraSDT() {
    var re=/^[0]\d{2}\d{3}\d{4}/;
    if (re.test(document.getElementById('txtSDT').value.trim()) == false){
        sdt.innerText = " *Phải nhập theo mẫu xxx.xxxx.xxx";
        return false;
    }    
    else{
        sdt.innerText = " *";
        return true;
    }     
}  
function SubmitForm(){
            if(KiemTraTenDN()==false || KiemTraPassword()==false
            ||KiemTraXacNhanPassword()==false || KiemTraSDT() == false)
                alert("Bạn chưa nhập đầy đủ và đúng thông tin!");
            else
            {
                var tt1=document.getElementById("txtTen").value;
                alert("xin chào " +tt1);
                return true;
            }
        }