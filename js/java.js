let counter = 0;
function right(){
    
    // let h = document.getElementById("head").innerText;
    let p = document.getElementById("para-slider").innerText;
    let photo = document.getElementById("image-slider").src;

    let newPara;
    if (counter==0)
    {
        //newHead="We are available all across the globe";
       newPara="2 The definition of investment in the language: it is derived from investment, which is a request to obtain a fruit, and the best investment you may make is to invest in the minds of your children and educate them because it is always a successful investment, so the fruit of your investment is culture and awareness and perhaps also reaping profits by applying what they have learned.";
       counter++
       photo.src="url('../img/1.jpg')";
    }
    else if(counter == 1){
        // newHead="Manufactured with the best materials";
        newPara="3 Most parents now invest in the education of their children, believing in the saying: “Do not give me a fish, but teach me how to fish!” However, the more difficult choice remains to choose the appropriate school for the children in terms of academic, educational, health, cultural, social and financial level, so that they have a distinguished academic, health, cultural and educational school. This may violate the financial and social aspect at times, so parents must start by specifying their priorities, the low cost, the better education, or the good social and educational level?";
        counter ++;
        photo.src="url('../img/Register.jpg')";
    }
    else if(counter ==2){
        // newHead="Discover innovative ways to decorate";
        newPara="4 After the spread of the Covid-19 epidemic in the world and the imposition of distance education, obtaining a quality education has become one of the most difficult and complex endeavors, due to the addition of new elements to the equation difficult to investigate in choosing the appropriate school, as schools were not equipped in terms of technology and the extent of qualification Teachers and teachers to deal with modern devices and applications, in addition to the need to find new methods of communicating information and attracting students' attention.";
        counter=3;
        photo.src="url('../img/Register.jpg')";

    }
    else if(counter ==3){
        // newHead="Discover innovative ways to decorate";
        newPara="5 Therefore, it was very important to have schools specialized in providing information remotely through the use of professional platforms, advanced technology and qualified teachers. Therefore, Al-Wessam Online School offers its students:";
        counter=4;
        photo.src="url('../img/Register.jpg')";
    }
    else if(counter==4){
        newPara="1 When someone mentions the word investment the first thing that comes to mind is money.";
        counter=0;
        photo.src="url('../img/Register.jpg')";
        
    }
//    document.getElementById("head").innerText=newHead;
document.getElementById("para-slider").innerText=newPara;
   document.getElementById("image-slider").src=photo;
}
function left(){
    // let h = document.getElementById("head").innerText;
    let p = document.getElementById("para-slider").innerText;
    let photo = document.getElementById("image-slider").src;
    let newHead;
    let newPara;
    if (counter==0)
    {
        // newHead="Manufactured with the best materials";
        newPara="5 Therefore, it was very important to have schools specialized in providing information remotely through the use of professional platforms, advanced technology and qualified teachers. Therefore, Al-Wessam Online School offers its students:";
        counter =4;
        photo.src="url('../img/Register.jpg')";
        
    }
    else if(counter == 1){
        // newHead="Discover innovative ways to decorate";
        newPara="1 When someone mentions the word investment the first thing that comes to mind is money.";
        counter=0;
        photo.src="url('../img/Register.jpg')";
        
    }
    else if(counter ==2){
        // newHead="We are available all across the globe";
        newPara="2 The definition of investment in the language: it is derived from investment, which is a request to obtain a fruit, and the best investment you may make is to invest in the minds of your children and educate them because it is always a successful investment, so the fruit of your investment is culture and awareness and perhaps also reaping profits by applying what they have learned.";
        counter=1;
        photo.src="url('../img/Register.jpg')";
       
        
    }
    else if(counter ==3){
        newPara="3 Most parents now invest in the education of their children, believing in the saying: “Do not give me a fish, but teach me how to fish!” However, the more difficult choice remains to choose the appropriate school for the children in terms of academic, educational, health, cultural, social and financial level, so that they have a distinguished academic, health, cultural and educational school. This may violate the financial and social aspect at times, so parents must start by specifying their priorities, the low cost, the better education, or the good social and educational level?";
        counter=2;
        photo.src="url('../img/Register.jpg')";
       
    }
    else if(counter==4){
        newPara="4 After the spread of the Covid-19 epidemic in the world and the imposition of distance education, obtaining a quality education has become one of the most difficult and complex endeavors, due to the addition of new elements to the equation difficult to investigate in choosing the appropriate school, as schools were not equipped in terms of technology and the extent of qualification Teachers and teachers to deal with modern devices and applications, in addition to the need to find new methods of communicating information and attracting students' attention.";
        counter=3;
        photo.src="url('../img/Register.jpg')";
    }
//    document.getElementById("head").innerText=newHead;
   document.getElementById("para-slider").innerText=newPara;
   document.getElementById("image-slider").src=photo;
}