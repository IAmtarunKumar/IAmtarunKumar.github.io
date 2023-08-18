let toggle = document.getElementById('toggle');
let body = document.querySelector('body');
toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon-fill');
    if(!this.classList.toggle('bi-brightness-high')){
        body.style.background = "#0f0c27";
        body.style.transition = "1s";     
        document.getElementById('user-detail-name').style.color = "white";
        document.getElementById('user-detail-name').style.transition = "1s";
        document.querySelector('#one>.text-1').style.color = "white";
        document.querySelector('#one>.text-1').style.transition = "1s";  
        document.querySelector('#one>.text-3>span').style.color = "white";
        document.querySelector('#one>.text-3>span').style.transition = "1s"; 
        document.querySelector('#resume-link-2').style.color = "white";
        document.querySelector('#resume-button-2').style.transition = "1s";
        document.querySelector('#resume-button-2').style.border = "1px solid #033a80";
        document.querySelector('#about>h1').style.color = "white";
        document.querySelector('#one>.text-3>span').style.transition = "1s";
        document.querySelector('#user-detail-intro').style.color = "white";
        document.querySelector('#user-detail-intro').style.transition = "1s";
        document.querySelector('#skills>h1').style.color = "white";
        document.querySelector('#skills>h1').style.transition = "1s";
        document.querySelector('#projects>h1').style.color = "white";
        document.querySelector('#projects>h1').style.transition = "1s";
        document.querySelector('.github-activity-calendar h1').style.color = "white";
        document.querySelector('.github-activity-calendar h1').style.transition = "1s";

        document.querySelector('#contact').style.color = "white";
        document.querySelector('#contact').style.background = "#0f0c27";

        document.querySelector('#contact').style.transition = "1s";

        document.querySelector('#git_cal').style.color = "white";
        document.querySelector('#git_cal').style.transition = "1s";
       
    }else{
        body.style.background = "rgba(20, 102, 209, 0.509)";
        body.style.transition = "2s";
        document.getElementById('user-detail-name').style.color = "#0f0c27";
        document.getElementById('user-detail-name').style.transition = "1s";
        document.querySelector('#one>.text-1').style.color = "#0f0c27";
        document.querySelector('#one>.text-1').style.transition = "1s";
        document.querySelector('#one>.text-3>span').style.color = "#0f0c27";
        document.querySelector('#one>.text-3>span').style.transition = "1s";
        document.querySelector('#resume-button-2>a').style.color = "#0f0c27";
        document.querySelector('#resume-button-2').style.transition = "1s";
        document.querySelector('#resume-button-2').style.border = "1px solid RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.color = "#0f0c27";
        document.querySelector('#about>h1').style.transition = "1s";
        document.querySelector('#user-detail-intro').style.color = "#0f0c27";
        document.querySelector('#user-detail-intro').style.transition = "1s";
        document.querySelector('#skills>h1').style.color = "#0f0c27";
        document.querySelector('#skills>h1').style.transition = "1s";
        document.querySelector('#projects>h1').style.color = "#0f0c27";
        document.querySelector('#projects>h1').style.transition = "1s";
        document.querySelector('.github-activity-calendar>h1').style.color = "black";
        document.querySelector('.github-activity-calendar>h1').style.transition = "1s";

        document.querySelector('#git_cal').style.color = "#0f0c27";
        document.querySelector('#git_cal').style.transition = "1s";

        
        document.querySelector('#contact').style.color = "#0f0c27";
        document.querySelector('#contact').style.background = "rgba(20, 102, 209, 0.509)";

        document.querySelector('#contact').style.transition = "1s";

 
       
    }
})


let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// typing text animation script
var typed = new Typed(".typing", {
    strings: ["A Full Stack Developer",  "A Node.js Backend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})


document.querySelector('#resume-link-1').addEventListener("click", () => {
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/file/d/1cXp6xEX33dueazlqRRMV6jf-KOuwiuaM/view?usp=sharing", "_blank");
})

document.querySelector('#resume-link-2').addEventListener("click", () => {
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/file/d/1cXp6xEX33dueazlqRRMV6jf-KOuwiuaM/view?usp=sharing", "_blank");
})




const sr = ScrollReveal({
    origin: 'left',
    distance: '120px',
    duration: 2000,
    reset: true
})

sr.reveal('#about h1', { delay: 200})
sr.reveal('.home-img', { delay: 600 })
sr.reveal('#user-detail-intro', { delay: 600 })
sr.reveal('.skill', { delay: 200 })

sr.reveal('.project', {})
sr.reveal('.project-card img', { delay: 0 })
sr.reveal('.project-title', { delay: 0 })
sr.reveal('.project-description', { delay: 0 })
sr.reveal('.project-tech-stack', { delay: 0 })
sr.reveal('.repo-links', { delay: 0 })

sr.reveal('#github-streak-stats', { delay: 200 })
sr.reveal('#github-top-langs', { delay: 400 })
sr.reveal('#github-stats-card', { delay: 600 })

 sr.reveal('.calendar', { delay: 600 })




//contect form

let url ="https://backend-portfolio-7j4x.onrender.com"
let form = document.querySelector("form")

form.addEventListener("submit" , (event)=>{

    event.preventDefault()

    let obj = {
        name : form.name.value ,
        email : form.email.value,
        massage : form.massage.value
    }

    console.log(obj)
    emailfun(obj)
})

async function emailfun(obj){
    try {
         let res =  await fetch(`${url}/mail`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
    
        if(res.ok){
            let data = await res.json()
            console.log(data)
            alert("Mail is Sent")
        }
        
    } catch (error) {
      console.log(error)  
    }

 
}

 