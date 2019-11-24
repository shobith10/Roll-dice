let running =false;
var activeplayer;
const limit=20;
var sum=0; 
var sum1=0;
var flag=0;


function myFun(){
    sum=0;
    sum1=0;
    activeplayer=0;
     var start=document.getElementById("start");
    flag=1;
    if(!running){
        alert("Game has started");
        start.style.background = 'red ';
        start.value="STOP";
        start.style.color='white';
        document.getElementById("box1").style.boxShadow="0 0 10px #ff944d";
        running=true;
        
    }
    else if(running){
        flag=0;
        alert("Game has stopped");
        start.style.background = '#00b8e6';
        start.value="START"; 
        start.style.color='white';
        document.getElementById("rns").innerHTML=0;
        document.getElementById("rns1").innerHTML=0;
        document.getElementById("box1").style.boxShadow="";
        document.getElementById("box2").style.boxShadow="";
        score1.innerHTML=0;
        score.innerHTML=0;
        a=0;
        b=0;
        
        running=false;
       
    }
    if(flag==0)
    {
        document.getElementById("dice").src="dicenew.png";
    }

}
var a=0;
var b=0;
function hold()
{   
    if(flag==1)
    if(activeplayer==0)
    {
        activeplayer=1;
    document.getElementById("box2").style.boxShadow="0 0 10px #ff944d";
    document.getElementById("box1").style.boxShadow="";
    crun.innerHTML=0;
    a=a+sum;
        if(a>=100)
            {    
            alert("PLAYER 1 WIN");
            myFun()
            }
        else
           { score.innerHTML=a;
             sum=0;}
    }
    else
    {
        activeplayer=0;
        document.getElementById("box1").style.boxShadow="0 0 10px #ff944d";
        document.getElementById("box2").style.boxShadow="";
        crun1.innerHTML=0;
        b=b+sum1;
            if(b>=100)
            {    
            alert("PLAYER 2 WIN");
            myFun()
            }
            else
            {   score1.innerHTML=b;
                sum1=0;}
    }
}
var crun=document.getElementById("rns");
var score=document.getElementById("run");

            function rollone()
            {
            if(flag==1)
            if(activeplayer==0)
            {
            var pic=document.getElementById("dice");  
           
              
                var no=Math.floor((Math.random() * 6) + 1);
            if(no==6)
                 {pic.src="six.png";
                    sum=sum+6;
                crun.innerHTML=sum;
                }
            if(no==5){
                 pic.src="five.png";
                   sum=sum+5;
                    crun.innerHTML=sum;
                }
                    if(no==4){
                    pic.src="four.png";
                    sum=sum+4;
                    crun.innerHTML=sum;
                }
                if(no==3){
                    pic.src="three.png";
                    sum=sum+3;
                    crun.innerHTML=sum;
                }
                if(no==2){
                    pic.src="two.png";
                    sum=sum+2;
                    crun.innerHTML=sum;
                }
                if(no==1){
                    pic.src="one.png";
                    sum=0;
                    hold();
                   
                }  
         
        }

     }
     var crun1=document.getElementById("rns1");
     var score1=document.getElementById("run1");
     
                function rolltwo()
                {
                if(flag==1)
                if(activeplayer==1)
                    {
                     var pic=document.getElementById("dice"); 

                    var no=Math.floor((Math.random() * 6) + 1);
              if(no==6)
              {pic.src="six.png";
                  sum1=sum1+6;
              crun1.innerHTML=sum1;
              }
          if(no==5){
              pic.src="five.png";
              sum1=sum1+5;
              crun1.innerHTML=sum1;
          }
              if(no==4){
              pic.src="four.png";
              sum1=sum1+4;
              crun1.innerHTML=sum1;
          }
          if(no==3){
              pic.src="three.png";
              sum1=sum1+3;
              crun1.innerHTML=sum1;
          }
          if(no==2){
              sum1=sum1+2;
              pic.src="two.png";
              crun1.innerHTML=sum1;
            }
              if(no==1){
                            pic.src="one.png";
                            sum1=0;                 
                            hold();
                        
                      }

                }
        }
 
