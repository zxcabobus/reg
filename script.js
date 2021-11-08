function Valid(form){
    var accept = document.getElementById("accept")
    var form = document.getElementById("itForm")
    if(form.name.value==null || form.name.value=="")
    {
        accept.style.display = "none"
        alert("Введите имя")
    }
    else if(form.lastName.value==null || form.lastName.value=="")
    {
        accept.style.display = "none"
        alert("Введите фамилию")
    }
    else if(form.middleName.value==null || form.middleName.value=="")
    {
        accept.style.display = "none"
        alert("Введите отчество")
    }
    else if(form.mail.value==null || form.mail.value=="")
    {
        accept.style.display = "none"
        alert("Введите почту")
    }
    else if(form.middleName.value!=null || form.middleName.value!="")
    {
        accept.style.display = "inline"
    }
    else if(form.lastName.value!=null || form.lastName.value!="")
    {
        accept.style.display = "inline"
    }
    else if(form.name.value!=null || form.name.value!="")
    {
        accept.style.display = "inline"
    }
    else if (form.mail.value!=null || form.mail.value!="")
    {
        accept.style.display = "inline"
    }
}

function SumbitAction(form){
    var form = document.getElementById("itForm");
    var accept = document.getElementById("accept");
    accept.innerHTML = "Спасибо. " + form.lastName.value + " " + form.name.value + " " + form.middleName.value + " " + "Ваша заявка принята. Вам отправленно писмо на почту " + form.mail.value + "."
}
