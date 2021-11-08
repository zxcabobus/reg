function Valid(form){
    var form = document.getElementById("itForm")
    if(form.name.value==null || form.name.value=="")
    {
        alert("Введите имя")
    }
    else if(form.lastName.value==null || form.lastName.value=="")
    {
        alert("Введите фамилию")
    }
    else if(form.middleName.value==null || form.middleName.value=="")
    {
        alert("Введите отчество")
    }
    else if(form.mail.value==null || form.mail.value=="")
    {
        alert("Введите почту")
    }
}

function SumbitAction(form){
    var form = document.getElementById("itForm")
    var accept = document.getElementById("accept");
    accept.innerHTML = "Спасибо "+form.name.value+" за отправку заявки. Ожидайте.";
}
