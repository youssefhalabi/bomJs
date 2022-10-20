/*setTimeOut(function , milliseconds , param1 , param2) ; wait (seconds) before do function .
each setTimeOut return a unique number and this nb used for clearTimeOut(Id or number of SetTimeOut)

 Exemple :
*/
    


var txtTimeOut = document.getElementById("timeout");


var btn = document.getElementById("clrTime");
function writeMessage() {
    "use strict";
    
    txtTimeOut.textContent="hello after 2 seconds";
}
    
   var time = setTimeout(writeMessage,2000) ;

btn.onclick = function()
{
    clearTimeout(time);
};
//------------------------------------------------------


/* setInterval(function,milliseconds) ; every (seconds) do fucntion

clearInterval(Id or number of Setnterval)
*/

var txtcount = document.getElementById("txtcount");

var btncount = document.getElementById("btncount");
var i =1;
var index;
btncount.onclick = function ()
{
  
    if ( i ===1 )
    {
        i=0;
         index = setInterval(
            
            function()
            {
                if (txtcount.textContent >0)
                    {
                       txtcount.textContent--;
                        
                    }
                else
                    {
                        txtcount.textContent ="Done ...";
                        clearInterval(index);
                    }
            }
            
            ,100);
        console.log(i);
        console.log(index);
        btncount.innerHTML="Stop Count Down";
        
    }else
        {
            i=1;
            clearInterval(index);
            console.log(i);
            console.log(index);
               btncount.innerHTML="Start Count Down";
        }
    
};


//----------------- Open window-----------------

/*syntax = window.open(url , name or attr , specification , history replace);

name or attr = (_blank or _self )
history replace = true or false
*/
var btnOpen = document.getElementById("open");
var btnClose = document.getElementById("close");
 var idOpen;
btnOpen.onclick = function()
{
 idOpen = window.open("https://www.facebook.com","_blank","width=500,height=500,left=400,top=250,menubar=no,status=no","true");  

};


btnClose.onclick = function()
{
  idOpen.close();  
    console.log(idOpen);
};

//------------------Scroll---------------

//ScrollBy(X,Y)  nb only in pixels

document.getElementById("sclbottom").onclick = function(){
    
    "use strict" ;
    window.scrollBy(0,100);
};


document.getElementById("scltop").onclick = function(){
    
    "use strict" ;
    window.scrollBy(0,-100);
};

document.getElementById("sclleft").onclick = function(){
    
    "use strict" ;
    window.scrollBy(-100,0);
};

document.getElementById("sclright").onclick = function(){
    
    "use strict" ;
    window.scrollBy(100,0);
};


document.getElementById("scltotop").onclick = function(){
    
    "use strict" ;
  
     window.scrollTo(0,0);
    console.log(screen.availHeight);
};


document.getElementById("scltobottom").onclick = function(){
    
    "use strict" ;
 //console.log(window.outerHeight);
    var height = window.outerHeight;
    window.scrollToo(0,height);
    
};



/*------------- Location ------------------------
window.location.href;
window.location.search;
window.location.hash;
window.location.host;
window.location.hostname;
-----------------------------------------------
*/

/* ----------------History-----------------------

history.back();
history.forward();
history.go(number);

---------------------------------

*/










