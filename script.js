function SumbitAction(form){
    var form = document.getElementById("itForm");
    var accept = document.getElementById("accept");
    accept.innerHTML = "Спасибо "+form.name.value+" за отправку заявки. Ожидайте.";
}