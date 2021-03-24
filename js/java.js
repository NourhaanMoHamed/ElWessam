let counter = 0;
function right(){
    
    // let h = document.getElementById("head").innerText;
    let p = document.getElementById("para-slider").innerText;
    let source;

    let newPara;
    if (counter==0)
    {
        // 2 
       newPara=" The definition of investment in the language: it is derived from investment, which is a request to obtain a fruit, and the best investment you may make is to invest in the minds of your children and educate them because it is always a successful investment, so the fruit of your investment is culture and awareness and perhaps also reaping profits by applying what they have learned.";
       counter++
       source='../img/1.jpg';
    }
    else if(counter == 1){
        // 3
        newPara="Most parents now invest in the education of their children, believing in the saying: “Do not give me a fish, but teach me how to fish!” However, the more difficult choice remains to choose the appropriate school for the children in terms of academic, educational, health, cultural, social and financial level, so that they have a distinguished academic, health, cultural and educational school. This may violate the financial and social aspect at times, so parents must start by specifying their priorities, the low cost, the better education, or the good social and educational level?";
        counter ++;
        source='../img/Register.jpg';
    }
    else if(counter ==2){
        // 4;
        newPara="After the spread of the Covid-19 epidemic in the world and the imposition of distance education, obtaining a quality education has become one of the most difficult and complex endeavors, due to the addition of new elements to the equation difficult to investigate in choosing the appropriate school, as schools were not equipped in terms of technology and the extent of qualification Teachers and teachers to deal with modern devices and applications, in addition to the need to find new methods of communicating information and attracting students' attention.";
        counter=3;
        source='../img/Register.jpg';

    }
    else if(counter ==3){
        // 5 
        newPara="Therefore, it was very important to have schools specialized in providing information remotely through the use of professional platforms, advanced technology and qualified teachers. Therefore, Al-Wessam Online School offers its students:";
        counter=4;
        source='../img/Register.jpg';
    }
    else if(counter==4){
        newPara="When someone mentions the word investment the first thing that comes to mind is money.";
        counter=0;
        source='../img/Register.jpg';
        
    }
//    document.getElementById("head").innerText=newHead;
document.getElementById("para-slider").innerText=newPara;
//    document.getElementById("image-slider").src=source;
}
function left(){
    // let h = document.getElementById("head").innerText;
    let p = document.getElementById("para-slider").innerText;
    let source="../img/1.jpg";
    let newHead;
    let newPara;
    if (counter==0)
    {
        // 5
        newPara="Therefore, it was very important to have schools specialized in providing information remotely through the use of professional platforms, advanced technology and qualified teachers. Therefore, Al-Wessam Online School offers its students:";
        counter =4;
        source='../img/2.jpg';
        
    }
    else if(counter == 1){
        //1  
        newPara="When someone mentions the word investment the first thing that comes to mind is money.";
        counter=0;
        source='../img/Register.jpg';
        
    }
    else if(counter ==2){
        // 2
        newPara="The definition of investment in the language: it is derived from investment, which is a request to obtain a fruit, and the best investment you may make is to invest in the minds of your children and educate them because it is always a successful investment, so the fruit of your investment is culture and awareness and perhaps also reaping profits by applying what they have learned.";
        counter=1;
        source='../img/Register.jpg';
       
        
    }
    else if(counter ==3){
        newPara="Most parents now invest in the education of their children, believing in the saying: “Do not give me a fish, but teach me how to fish!” However, the more difficult choice remains to choose the appropriate school for the children in terms of academic, educational, health, cultural, social and financial level, so that they have a distinguished academic, health, cultural and educational school. This may violate the financial and social aspect at times, so parents must start by specifying their priorities, the low cost, the better education, or the good social and educational level?";
        counter=2;
        source='../img/Register.jpg';
       
    }
    else if(counter==4){
        newPara="After the spread of the Covid-19 epidemic in the world and the imposition of distance education, obtaining a quality education has become one of the most difficult and complex endeavors, due to the addition of new elements to the equation difficult to investigate in choosing the appropriate school, as schools were not equipped in terms of technology and the extent of qualification Teachers and teachers to deal with modern devices and applications, in addition to the need to find new methods of communicating information and attracting students' attention.";
        counter=3;
        source='../img/Register.jpg';
    }
//     alert(source);
//    document.getElementById("head").innerText=newHead;
   document.getElementById("para-slider").innerText=newPara;
//    document.getElementById("image-slider").src=source;
}
