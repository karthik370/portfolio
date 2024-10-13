//hovering
const home=document.getElementById("home");
const homecontent=document.getElementsByClassName("main-home");
const about=document.getElementById("about");
const aboutcontent=document.getElementsByClassName("main-about");
home.addEventListener('click',e=>{
    homecontent[0].style.display="block";
    aboutcontent[0].style.display="none";
    projectcontent[0].style.display="none";
    resumecontent[0].style.display="none";
})

about.addEventListener("click",e=>{
    aboutcontent[0].style.display="block";
    homecontent[0].style.display="none";
    projectcontent[0].style.display="none";
    resumecontent[0].style.display="none";
})
const project=document.getElementById("projects");
const projectcontent=document.getElementsByClassName("main-projects");
project.addEventListener("click",e=>{
    projectcontent[0].style.display="block";
    homecontent[0].style.display="none";
    aboutcontent[0].style.display="none";
    resumecontent[0].style.display="none";
})
const resume=document.getElementById("resume");
const resumecontent=document.getElementsByClassName("main-resume");
resume.addEventListener("click",e=>{
    resumecontent[0].style.display="block";
    projectcontent[0].style.display="none";
    homecontent[0].style.display="none";
    aboutcontent[0].style.display="none";
})
//

//hamburger
const navbar=document.getElementsByClassName("nav-items");
const navbar1=document.querySelectorAll(".nav-content1");
document.querySelector(".hamburger").addEventListener("click",e=>{
    console.log(navbar[0]);
    navbar[0].style.display="flex";
    document.querySelector(".wrong").style.display="block";
})
document.querySelector(".wrong").addEventListener("click",e=>{
    document.querySelector(".wrong").style.display="none";
    navbar[0].style.display="none";
})
//
const downbtn=document.getElementsByClassName("downbtn")[0];
downbtn.addEventListener('click', e => {
    let img = document.querySelector(".get img");
    console.log(img);
    if (img != null) {
        let imgatr = img.getAttribute("src");
        downbtn.setAttribute("href",imgatr);
    }
    else{
        downbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL}`)
    }
})