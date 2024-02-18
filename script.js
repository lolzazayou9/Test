function checkCode() {
    var input = document.getElementById("codeInput").value;
    var messageElement = document.getElementById("message");
    if (input === "Force") {
        messageElement.innerHTML = "น้องฟอสเองจ้า";
    } else if (input === "ควย"){
        messageElement.innerHTML = "ควย";
    }else if (input === "แมว"){
        messageElement.innerHTML = "cat";
    }else{
        messageElement.innerHTML = "ผิดนะจ๊ะ!";
    }
}
