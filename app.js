function updateTime(){
    var currentDate = new Date();
    if(currentDate.getMinutes()<=9){
        var time = currentDate.getHours()+":0"+currentDate.getMinutes();
    }
    else{
        var time = currentDate.getHours()+":"+currentDate.getMinutes();
    }
    document.querySelector("#time-sub").innerHTML=time;
    document.querySelector("#time-main").innerHTML=time;
    
    var day = currentDate.getDay();
    if(day==0){
        document.querySelector("#date-main").innerHTML="Sunday";
    }
    if(day==1){
        document.querySelector("#date-main").innerHTML="Monday";
    }
    if(day==2){
        document.querySelector("#date-main").innerHTML="Tuesday";
    }
    if(day==3){
        document.querySelector("#date-main").innerHTML="Wednesday";
    }
    if(day==4){
        document.querySelector("#date-main").innerHTML="Thursday";
    }
    if(day==5){
        document.querySelector("#date-main").innerHTML="Friday";
    }
    if(day==6){
        document.querySelector("#date-main").innerHTML="Saturday";
    }

}

const inner_main = document.querySelector(".inner-main");


var interval = setInterval(updateTime,0);

const icons = document.querySelectorAll("ion-icon");
icons.forEach(icon => {
    icon.classList.add("iconActive");
})

function openMessage(e){
    if(!e.target.classList.contains("class")&&!e.target.classList.contains("msg")) return;
    main.innerHTML = `
    <div class="message-content">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos ab fugiat nesciunt minus.</span>
        <hr class="below-Message">
    </div>          
    `
}


const main = document.querySelector(".main-section");
main.addEventListener("click",openMessage);

function showIconSection(){
    clearInterval(interval);    
    icons.forEach(icon => {
        if(icon===this && this.dataset.name==="message"){ //only for message button
            if(this.classList.contains("iconActive")){
                icon.classList.remove("iconActive");
                if(this.dataset.name==="message"){
                    main.innerHTML = `
                        <div class="inner-main-message">
                            <div class="class">
                                <span class="msg">Java</span>
                                <hr>
                            </div>                        
                            <div class="class">
                                <span class="msg">Html</span>
                                <hr>
                            </div>
                            <div class="class">
                                <span class="msg">Css</span>
                                <hr>
                            </div>
                        </div>
                    `
                }
            }
            else{
                this.classList.add("iconActive");
                main.innerHTML = `
                    <div class="inner-main">
                        <h4 class="time-main" id="time-main"></h4>
                        <p class="date-main" id="date-main"></p>
                    </div>
                `
                interval = setInterval(updateTime,0);
            }
        }
        // for other icons
        // else{
        //     icon.classList.add("iconActive");
        // }
    });
}


icons.forEach(icon => icon.addEventListener("click",showIconSection));

