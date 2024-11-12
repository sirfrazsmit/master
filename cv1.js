var temp_1 = document.getElementById("cv-templete")
var temp_2 = document.getElementById("cv-form")
var object_1 = document.getElementById("object")
var name_1 = document.getElementById("name")
var fname_1 = document.getElementById("fname")
var cnic_1 = document.getElementById("cnic")
var mobile_1 = document.getElementById("mobile")
var email_1 = document.getElementById("email")
var education_1 = document.getElementById("education")
var experience_1 = document.getElementById("experience")
var skills_1 = document.getElementById("skill")
var address_1 = document.getElementById("address")




function validData() {
    if (name_1.value == "" || fname_1.value == "" || cnic_1.value == "" || mobile.value == "" || email_1.value == "") {
        return false
    }

    else {
        return true

    }
}
function temp1() {
    if (validData() == false) {
        alert("please enter data")
    }
    temp_1.style.display = 'block'
    temp_2.style.display = 'none'


    document.getElementById("namet").innerText = name_1.value
    document.getElementById("namept").innerText = name_1.value
    document.getElementById("fnamet").innerText = fname_1.value
    document.getElementById("cnict").innerText = cnic_1.value
    document.getElementById("mobilet").innerText = mobile_1.value
    document.getElementById("emailt").innerText = email_1.value
    document.getElementById("expt").innerText = experience_1.value
    document.getElementById("educationt").innerText = education_1.value
    document.getElementById("objt").innerText = object_1.value
    document.getElementById("skillt").innerText = skills_1.value
    document.getElementById("addresst").innerText = address_1.value

    var file = document.getElementById("imgPro").files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function () {
        document.getElementById("imgtemp").src=reader.result;
    };



}
function printcv() {
    window.print();
}
