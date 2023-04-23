


//setInterval(UpdateTimer,10000);
function UpdateTimer(){

    let Minutes= document.getElementById("TimeMinutes");
    let Seconds= document.getElementById("TimeSeconds");

    let downMinutes =Minutes.value;
    let downSeconds =Seconds.value;
    Minutes.value ="";
    Seconds.value="";
    setInterval(updater,1000);
    function updater(){
        if (downSeconds>=0&&downMinutes>=0){
            document.getElementById("DisplayTimer").innerHTML=`${downMinutes}:${downSeconds--}`;
            if(downSeconds==0&&downMinutes>0){
                downSeconds=60;
                downMinutes--;
            }
        }else{
            clearInterval();
        }
        
    }
    
}
