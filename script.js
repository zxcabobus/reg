function SumbitAction(form){
    var form = document.getElementById("itForm")
    var accept = document.getElementById("accept")
    accept.innerHTML = "Спасибо за отправку заявки "+form.name.value+" Ожидайте."
}