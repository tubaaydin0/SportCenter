//--------------------------------------------OUR CLASSES BUTTONS START------------------------------------------------------------------------

const ourClasses=document.querySelector("#classes");
ourClasses.addEventListener("click", (e) => {
    if(e.target.id=="yoga"){
        yoga();
        
    }
    else if(e.target.id=="group"){
        group();
    }
    else if(e.target.id=="solo"){
        solo();
    }
    
    
    
    else if(e.target.id="stretching"){
        stretching();
    }
    else{
        console.log("Buton id yok!");
    }

})


function yoga(){
    
    document.querySelector("#classes-content .classes-text h5").innerHTML = "Why are your Yoga?";
    document.querySelector("#classes-content .classes-text h5 span").innerHTML = "When comes YogaYour Time?"
    document.querySelector("#classes-content  img").src = "/images/yoga.jpg";
} 

function group(){
    
    document.querySelector("#classes-content .classes-text h5").innerHTML = "Why are your Group?";
    document.querySelector("#classes-content .classes-text h5 span").innerHTML = "When comes Group Your Time?"
    document.querySelector("#classes-content  img").src = "/images/group.webp";
}

function solo(){
    
    document.querySelector("#classes-content .classes-text h5").innerHTML = "Why are your Solo?";
    document.querySelector("#classes-content .classes-text h5 span").innerHTML = "When comes Solo Your Time?"
    document.querySelector("#classes-content  img").src = "/images/solo.jpg";
} 

function stretching() {
    document.querySelector("#classes-content .classes-text h5").innerHTML = "Why are your Stretching?";
    document.querySelector("#classes-content .classes-text h5 span").innerHTML = "When comes Stretching Your Time?"
    document.querySelector("#classes-content  img").src = "/images/stret.webp";
}
//--------------------------------------------OUR CLASSES BUTTONS END--------------------------------------------------------------


//--------------------------------------------BMI CALCULATOR START--------------------------------------------------------------
                                            /*Değerlendirme Kriteri 8*/

const height= document.querySelector("#height");
const weight= document.querySelector("#weight");
const ucgen= document.querySelector("section .bmi-img2");
height.addEventListener("input", () =>{
    console.log(height.value)
})

weight.addEventListener("input", () =>{
    console.log(weight.value)

})

let bmiResult=height.addEventListener("input", () =>{

let bmi=(weight.value / ((height.value/100) * (height.value/100)));
if(height.value<=0 || height.value<=0){
   bmi=0;
}




 if(bmi > 0 && bmi < 18.5){
    ucgen.style.left=18 + "%";
  
}else if(bmi >= 18.5 && bmi <= 24.9){
    ucgen.style.left=34 + "%";
}else if (bmi >= 25 && bmi <= 29.9) {
    ucgen.style.left=50 + "%";
}
else if (bmi >= 30 && bmi<= 34.9) {
    ucgen.style.left=67 + "%";
}
else if(bmi>=35) {
        
    ucgen.style.left=90+ "%";
}else{
    ucgen.style.left=0+ "%";
}

})

weight.addEventListener("input", () =>{

    let bmi=(weight.value / ((height.value/100) * (height.value/100)));
    if(height.value<=0 || height.value<=0){
       bmi=0;
    }
    
    if(bmi > 0 && bmi < 18.5){
        ucgen.style.left=18 + "%";
      
    }else if(bmi >= 18.5 && bmi <= 24.9){
        ucgen.style.left=34+ "%";
    }else if (bmi >= 25 && bmi <= 29.9) {
        ucgen.style.left=50 + "%";
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        ucgen.style.left=67+ "%";
    }
    else if(bmi>=35) {
        
        ucgen.style.left=90+ "%";
    }else{
        ucgen.style.left=0+ "%";
    }

})

//--------------------------------------------BMI CALCULATOR END--------------------------------------------------------------

//--------------------------------------------NAVBAR BACKGROUND START---------------------------------------------------------

                                          /*Değerlendirme Kriteri 9*/
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('#header .container .banner');
   
    if (window.scrollY >10) {
        navbar.classList.add('navbar-bground');
    } else {
        navbar.classList.remove('navbar-bground');
    }
});

//--------------------------------------------NAVBAR BACKGROUND END------------------------------------------------------------