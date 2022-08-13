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
    duration:2
});
gsap.to(".h3", {
    x:0,
    opacity:1,
    duration:2,
});



const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".panel_container",
        scrub:2,
        start:"top top",
        // end:"+=8500",
        end:"+=5000",
        pin:".ideathon",
    }
});

tl
.to(".ideathon_info_headerone",{x:1800 , duration:3000},)
.to(".ideate_yourself",{opacity:0,duration:1000})
.to(".left h1",{opacity:1,duration:1000,scrub:false})
.to(".para_div_p1",{opacity:1,duration:1000})
.to(".pass_two p",{x:0,opacity:1,duration:1000})
.to(".team_image",{opacity:1,duration:1500,delay:2})
.to(".circle_div",{opacity:1,scale:.8,duration:1500})
.to(".layer.one",{opacity:0,scale:1,duration:2000})
.to(".panel_2",{x:"-100%" , duration:2000},)
.to(".h-one h1",{opacity:1, duration:500},)
.to(".h-two h1",{opacity:1,duration:500})
.to(".h-one h1",{opacity:0, duration:500},)
.to(".h-three h1",{opacity:1, duration:500},)
.to(".h-two h1",{opacity:0,duration:500})
.to(".h-three h1",{opacity:0, duration:500},)
.to(".para_div_p2",{opacity:1, duration:3000,delay:"1s"})
.to(".para_and_heading_p2 h2",{opacity:1 , duration:3000,})
.to(".para_and_heading_p2 p",{x:0,opacity:1, duration:3000,})
.to(".image_div_p2 img",{opacity:1 , duration:3000,});





gsap.to(".circle_box1",{
    y:"0",
    opacity:1,
    scrollTrigger:{
                    trigger:".buisness_insights",
                    start:"top top",
                    end:"bottom bottom",
                  }
    });
gsap.to(".circle_box2",{
    y:"50%",
    opacity:1,
    scrollTrigger:{
        trigger:".buisness_insights",
        start:"top top",
        end:"bottom bottom",
    }
});
gsap.to(".circle_box3",{
    x:"0",
    opacity:1,
    duration:0.7,
    delay:0.7, 
    scrollTrigger:{
        trigger:".buisness_insights",
        start:"top",
    }
});
gsap.to(".circle_box4",{
    x:"50%",
    opacity:1,
    duration:0.7,
    delay:0.7,
    scrollTrigger:{
        trigger:".buisness_insights",
        start:"top",
    }
});


gsap.to(".circle_box_heading",{
    opacity:1,
    duration:1.6,
    delay:0.7,
    scrollTrigger:{
        trigger:".buisness_insights",
        start:"top",
    }
});

const t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".buisness_insights",
        start:"top top",
        end:"+=700",
        pin:".info_container",
        toggleActions:"play none none none"
    }
});

t2
.to(".box1",{opacity:1,duration:0.5})
.to(".box2",{opacity:1,duration:0.5})
.to(".box3",{opacity:1,duration:0.5})
.to(".box4",{opacity:1,duration:0.5});