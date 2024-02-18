function checkCode() {
    var input = document.getElementById("codeInput").value;
    var messageElement = document.getElementById("message");
    if (input === "ฟอส") {
        messageElement.innerHTML = "น้องฟอสเองจ้า";
    } if (input === "ควย"){
        messageElement.innerHTML = "ควย";
    }
}
