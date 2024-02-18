function checkCode() {
    var input = document.getElementById("codeInput").value;
    var messageElement = document.getElementById("message");
    if (input === "Fprce") {
        messageElement.innerHTML = "น้องฟอสเองจ้า";
    } if (input === "ควย"){
        messageElement.innerHTML = "ควย";
    }else{
        messageElement.innerHTML = "ผิดนะจ๊ะ!";
    }
}
