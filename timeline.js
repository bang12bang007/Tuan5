function timetoString(time){
    let diff=time/360000;
    let hh=Math.floor(diff);
    let diffmin=(diff-hh)*60;
    let mm=Math.floor(diffmin);

    let diffsec=(diffsec-mm) *60;
    let ss=Math.floor(diffsec);

    let diffms=(diffsec-ss)*100;
    let ms =Math.floor(diffms);

    let formattedMM=mm.toString().padStart(2,"0");
    let formattedSS=ss.toString().padStart(2,"0");
    let formattedMS=ss.toString().padStart(2,"0");
    return
    '${formattedMM}:${formattedSS}:${formattedMS}';
}

    let startTime;
    let elapsedTime=0;
    let TimeInterval;

    function print(txt){
        document.getElementById("display").innerHTML=txt;
    }
    function start(){
        startTime =Date.now() -elapsedTime;
        TimeInterval =setInterval(function printTime(){
            elapsedTime=Date.now() -startTime;
            print(timetoString(elapsedTime))
        },10 );
        showButton("pause")
    }
    function pause(){
        clearInterval(TimeInterval);
        showButton("play")
    }
    function reset(){
        clearInterval(TimeInterval);
        print("00:00:00");
        elapsedTime=0;
        showButton("play");
    }
    function showButton(buttonKey){
        const buttonToShow=buttonKey=="Play"?
        playButton:pauseButton;
        const buttonToHide=buttonKey=="Play"?
        pauseButton:playButton;
        buttonToShow.style.display="block";
        buttonToHide.style.display="none";
    }
    let playButton=document.getElementById("play");
    let pauseButton=document.getElementById("pause");
    let restButton=document.getElementById("Reset");

   playButton.addEventListener("click",start)
   playButton.addEventListener("click",pause)
   playButton.addEventListener("click",reset)
