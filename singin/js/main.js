function changer(event) {   
    let select = document.getElementById("select");
    let select2 = document.getElementById("select2");
    let choose = document.getElementById("choose");
    if (event.target.value == "level1") {
        select2.style.display = "none"
        choose.style.display ="none"
    }else {
        select2.style.display = "block"
        choose.style.display ="block"
    }
};



let number = document.getElementById("id");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let select = document.getElementById("select");
let select2 = document.getElementById("select2");


submit.addEventListener("click", function(e) {
e.preventDefault();

function check1(){
    if(select2.style.display == "none"){
        if(number.value == 30006011609093 && password.value == 1234 && select.value != "none") {
            window.location = "../page/index.html";  
        }
    }else if(select2.style.display == "block"){
        if(number.value == 30006011609093 && password.value == 1234 && select.value != "none" && select2.value != "none") {
            window.location = "../page/index.html";  
        }
    }
}
check1();

function check2(){
    if(select2.style.display == "none"){
        if(number.value == 44 && password.value == 44 && select.value != "none" ) {
            window.location = "../page2/index.html";  
        }
    }else if(select2.style.display == "block"){
        if(number.value == 44 && password.value == 44 && select.value != "none" && select2.value != "none") {
            window.location = "../page2/index.html";   
        }
    }
}
check2();

function check3(){
    if(select2.style.display == "none"){
        if(number.value == 33 && password.value == 33 && select.value != "none" ) {
            window.location = "../page3/index.html";  
        }
    }else if(select2.style.display == "block"){
        if(number.value == 33 && password.value == 33 && select.value != "none" && select2.value != "none") {
            window.location = "../page3/index.html";   
        }
    }else{
        if(number.value == "" || password.value == ""){
            alert("Sorry ID and Password is Wrong");
        }else{
            if(number.value != "" || password.value != ""){
                alert("Please select your level or your section");
            }
        }
    }

}
check3();


// if(number.value == "" && password.value == ""){
// }else{
//     alert("Sorry ID and Password is Wrong");
//     // alert("Please select your level");
// }

// else if (number.value == 44 || password.value == 44 ) {
//     window.location = "http://127.0.0.1:5500/page2/index.html";
// } 
// else if (number.value == 33 || password.value == 33) {
//     window.location = "http://127.0.0.1:5500/page3/index.html";
// }
// else {
//     if(number.value != "" && password.value != ""){
//         alert("Please select your level");
//     }else{
//         alert("Sorry ID and Password is Wrong");
//     }
// }
}
);


// submit.addEventListener("click", function(e) {
//     e.preventDefault();
//     if(number.value == 33 || password.value == 33) {
//         window.location = "../page3/index.html";
//     }
// });
// submit.addEventListener("click", function(e) {
//     e.preventDefault();
//     if(number.value == 44 || password.value == 44) {
//         window.location = "../page2/index.html";
//     }
// });





