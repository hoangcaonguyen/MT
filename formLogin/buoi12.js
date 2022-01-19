const myForm = document.getElementById("myForm");
let userName = document.getElementById("fname").value;
let passWord = document.getElementById("lpass").value;
myForm.addEventListener("submit", function ( event ){
    if(userName == null && passWord == null){
        alert(" chua nhap tai khoan mat khau!");
    }else{
        if(passWord.length > 8){
            if(userName.includes(" ")||passWord.includes(" ")){
                alert("khong duoc chua space!!");
            }else{
                if(userName === "nguyen" && passWord === "nguyen123"){
                    alert(" dang nhap thanh cong !");
                }else{
                    alert(" sai user name hoac password !");
                }
            }
        }else if(passWord.length < 8){
            alert(" mat khau phai 8 ky tu tro len");
        }
    }
});