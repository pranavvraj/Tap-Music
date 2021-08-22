window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#6860b3", "#60c2d3"];
    const icon = document.querySelector(".icon");

     const light = {                //object
        "--bgcolor": "white",
        "--textcolor": "black",
        
      };

      const dark = {
        "--bgcolor": "black",
        "--textcolor": "white",
        
      };

      let isDark=false;
      icon.addEventListener("click",()=>{
        const theme = isDark ? light : dark;
         Object.keys(theme).map((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
      return 0;

    });

    isDark=!isDark;  //for color toggle
    if (isDark) {                      //for icon toggle
        icon.src = "./sun.png";
        }
        else{
            icon.src = "./moon.png";
        }
      })

    //Sound part
    pads.forEach((pad,index) => {                      //for loop to add eventlist to all pads
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });
    //Bubble part
    const createBubbles = (index)=> {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
        visual.removeChild(this);
        })
    }
})