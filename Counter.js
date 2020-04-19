// JS CODES BEGINS //

var a = document.getElementsByClassName('button1');
var b = document.getElementsByClassName('button2');
var c = document.getElementsByClassName('zero');
var why_increase = document.getElementsByClassName('about_counters');
var bcos = document.getElementsByClassName('bcos');


why_increase[0].addEventListener("click",myfunc);
a[0].addEventListener("click",myfunc1);
b[0].addEventListener("click",myfunc2);


/* HERE, I WANT TO CREATE A SINGLE AND DOUBLE CLICK FUNCTION ON THE SAME HTML ELEMENT. THE TRICK IS TO USE AN 'IF-ELSE' STATEMENT IN THE FUNCTION*/

/* I DECLAERED 'click_count' AS A VARIABLE WITH A VALUE OF '0' */

var click_count = 0;

//THEN I DECLARED MY FUNCTION

function myfunc(){
		
/* THEN IF 'click_count%2' EQUALS '0', DO THIS ELSE DO THAT */
/* OR IF YOU WANT SOMETHING TO HAPPEN EVERY '3' USE 'click_count%3' EQUALS '0', DO THIS ELSE DO THAT */

if (click_count%2 == 0){
bcos[0]	.style.opacity	= 1;
		}
else{
bcos[0]	.style.opacity	= 0;		
}		
		
//SEE, IT'S SIMPLE.
/*FINALLY, INCREMENT THE 'click_count'. BECAUSE WE WANT THE VALUE TO KEEP INCREASING AS THE USER'S CLICK ON THE HTML ELEMENT KEEPS INCREASING*/
//IT WAS FUN WRITING THIS PARTICULAR FUNCTION.

click_count++;
}


//NOTE THAT ++i AND i++ IS NOT THE SAME.
/*++i INCREMENTS THE VARIABLE IMMEDIATELY, ON THAT LINE SO THAT 'i = 1 ; console.log(++i);' GIVES 'i = 2'.*/
/* BUT FOR 'i++', THE VARIABLE IS NOT INCREMENTED IMMEDIATELY. SO THAT 'i = 1 ; console.log(i++);' GIVES 'i =1'.*/
/* BUT 'i = 1 ; i++ ; console.log(i++);' GIVES 'i =2'.*/
/*AAND 'i = 1 ; ++i console.log(++i);' GIVES 'i =2'.*/
//NOTICE THE DIFFERENCE?
/*I LEARNT THIS YESTERDAY, ALL THANKS TO ECX CHALLENGES*/


/* THIS FUNCTION IS TO INCREMENT THE VALUE OF '0' IN A GIVEN ELEMENT IN THE HTML */
//HERE, 'd' IS INITIALLY '0'.

var d = 0;

//I DECLARE MY FUNCTION

function myfunc1(){

/* BY DOING THIS, THE VALUE IN THE INNERHTML OF THE GIVEN ELEMENT IS INCREMENTED IMMEDIATELY AS EXPLAINED EARLIER */

c[0].innerHTML = ++d;			

/*IF THE INNER VALUE IS EQUIVALENT TO '0' DO THIS, ELSE DO THAT.*/

if (c[0].innerHTML == 0){
c[0].style.color ="black"
		}		
if (c[0].innerHTML > 0){
c[0].style.color ="green"
		}	
}


//I USED A SIMILAR METHOD AS ABOVE.

function myfunc2(){
c[0].innerHTML = --d;

if (c[0].innerHTML == 0){
c[0].style.color ="black"
		}			
		
if (c[0].innerHTML < 0){
c[0].style.color ="red"
		}	

}

//IN THE END THEY BECOME A PIECE OF CAKE

// JS CODES END //
