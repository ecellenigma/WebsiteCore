
window.addEventListener('DOMContentLoaded',setup);

const circle_box_one = document.querySelector(".circle_box");
const circle_box_two = document.querySelector(".circle_box2");

function setup()
{
    const options = {
        threshold: 0,
        rootMargin:"0px 0px -150px 0px"
    };

    const observer = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
            entry.target.classList.add("expandd");
            entry.target.classList.add("expandd2");
            observer.unobserve(entry.target);
            }

            else{
                return;
            }
        });

    },options);

    circle_box_one.forEach(fader=>{
        observer.observe(fader);
    });
    circle_box_two.forEach(fader=>{
        observer.observe(fader);
    });
}




gsap.registerPlugin(ScrollTrigger);

// GSAP Animations Scrolls
gsap.to(".heading h1", {
    opacity:1,
    duration:1
});
gsap.to(".h1", {
    x:0,
    opacity:1,
    duration:1
});

gsap.to(".h2", {
    x:0,
    opacity:1,
    duration:1.5
});
gsap.to(".h3", {
    x:0,
    opacity:1,
    duration:2,
    

});

// Panel Scrolling

let sections = gsap.utils.toArray(".panel");


const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".panel_1",
        scrub:2,
        // markers:true,
        start:"top top",
        // end:"+=8500",
        end:"10000",
        pin:".ideathon",
    }

    
});


tl

.to(".ideathon_info_headerone",{x:3000 , duration:1000,delay:2},)
.to(".ideate_yourself",{opacity:0,duration:2000})
.to(".left h1",{opacity:1,duration:2000})
.to(".para_div_p1",{opacity:1,duration:2000,delay:0.2})
.to(".pass_two p",{x:0,opacity:1,duration:2000,delay:1})
.to(".team_image",{opacity:1,duration:2000,delay:2})
.to(".circle_div_one",{opacity:1,scale:1,duration:2000,delay:3})
.to(".circle_div_two",{opacity:1,scale:1,duration:2000,delay:3})
.to(".circle_div_thre",{opacity:1,scale:1,duration:3000,delay:3})
.to(".circle_div_thre",{opacity:1,duration:3000})
.to(".two_layer_div",{ x:"-100%",duration:500,delay:1},)
.to(".panel_2",{x:"-100%" , duration:1000},)
.to(".h-one h1",{y:"-100%" ,opacity:1, duration:3000},)
.to(".h-two h1",{y:"-100%" ,opacity:1,duration:3000,delay:"0.1s"})
.to(".h-three h1",{y:"-100%" ,opacity:1, duration:3000,delay:"0.2s"},)
.to(".para_div_p2",{opacity:1, duration:3000,delay:"0.4s"})
.to(".para_and_heading_p2 h2",{opacity:1 , duration:3000,},)
.to(".para_and_heading_p2 p",{x:0,opacity:1, duration:3000,},)
.to(".image_div_p2 img",{opacity:1 , duration:3000,},)
