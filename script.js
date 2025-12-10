function smooth(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
smooth()

function cursorEffect(){
    var page1 =document.querySelector(".page1-content")
var cur =document.querySelector(".cursor")

// page1.addEventListener("mousemove",function(dets){

//     cur.style.left=dets.x+"px"
//     cur.style.top=dets.y+"px"
// })

page1.addEventListener("mousemove",function(dets){

    gsap.to(cur,{
        x:dets.x,
        y:dets.y
    })
})

page1.addEventListener("mouseenter",function(){
    gsap.to(cur,{
       scale:1,
       opacity:1, 
      
    })
})

page1.addEventListener("mouseleave",function(){
    gsap.to(cur,{
        scale:0,
        opacity:0,
      
    })
})
}
cursorEffect()


function page2Ani(){
  gsap.from(".elem h1",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
      start:"top 30%",
    end:"top 80%",
    
    scrub:2
    }

})
gsap.from(".page2 .top h2",{
    y:120,
    duration:0.1,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
      start:"top 70%",
    end:"top 70%",
    // markers:true,
    scrub:2

    }

})
}
page2Ani()

function page5Ani(){
  gsap.from(".elem2 h1",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
      start:"top 30%",
    end:"top 80%",
    
    scrub:2
    }

})
gsap.from(".page5 .top2 h2",{
    y:120,
    duration:0.1,
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
      start:"top 70%",
    end:"top 70%",
    // markers:true,
    scrub:2

    }

})
}
page5Ani()

function cur2Eff(){
  var page6 = document.querySelector(".page6")
  var cur2 = document.querySelector(".cursor2")

 page6.addEventListener("mousemove",function(dets){

gsap.to(cur2,{
    x:dets.x,
    y:dets.y,
   
  })
 })
 page6.addEventListener("mouseenter",function(){
  gsap.to(cur2,{
     scale:1,
     opacity:1, 
    
  })
})

page6.addEventListener("mouseleave",function(){
  gsap.to(cur2,{
      scale:0,
      opacity:0,
    
  })
})
}

cur2Eff()


function swipe(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 18,
    loop: true,
  
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // Mobile phones
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      // Large mobile
      480: {
        slidesPerView: 1.5,
        spaceBetween: 12
      },
      // Tablets
      768: {
        slidesPerView: 2.5,
        spaceBetween: 15
      },
      // Desktop
      1024: {
        slidesPerView: 4,
        spaceBetween: 18
      }
    }
  });
}
swipe()

var tl =gsap.timeline()

tl.from(".loader h2",{
       x:100,
       duration:0.6,
       stagger:0.3,
       opacity:0
})
tl.to(".loader h2",{
    x:-50,
    duration:0.5,
    stagger:0.2,
    opacity:0
})
tl.to(".loader",{
  opacity:0
})

tl.to(".loader",{
       display:"none"
})
tl.from(".page1-content  h1 span",{
  y:"-10",
  duration:0.6,
  stagger:0.2,
  opacity:0,
  ease:Expo.easeInOut
})
gsap.from(".page8 h1",{
  y:120,
  stagger:0.2,
  duration:0.8,
  opacity:0,
  scrollTrigger:{
      trigger:".page8",
      scroller:".main",
    start:"top 30%",
  end:"top 900%",
  
  scrub:2
  }

})

gsap.from(".page3 .page-top h1",{
  y:120,
  stagger:0.2,
  duration:0.8,
  opacity:0,
  scrollTrigger:{
      trigger:".page3",
      scroller:".main",
    start:"top 30%",
  end:"top 80%",
  
  scrub:2
  }

})
gsap.from(".botfot h1 span",{
  y:"-200",
  duration:1,
  stagger:0.2,
  opacity:0,
  ease:Expo.easeInOut,
  scrollTrigger:{
    trigger:".page9",
    scroller:".main",
    start:"top 10%",
    end:"top 90%",


scrub:2
}
})
gsap.from(".midfot h2",{
  y:120,
  stagger:0.2,
  duration:0.8,
  opacity:0,
  scrollTrigger:{
      trigger:".page9",
      scroller:".main",
    start:"top 50%",
  end:"top 90%",

  
  scrub:2
  }})
gsap.from(".rright h4 , .lleft h2,.lleft button",{
  y:120,
  stagger:0.2,
  duration:0.8,
  opacity:0,
  scrollTrigger:{
      trigger:".page9",
      scroller:".main",
    start:"top 60%",
  end:"top 90%",
 
  
  scrub:2
  }})

  


  document.getElementById("year").textContent = new Date().getFullYear();

