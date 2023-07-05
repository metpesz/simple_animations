let controller = new ScrollMagic.Controller;

let scene = new ScrollMagic.Scene({
    duration: 10000,
    triggerElement: '.video',
    triggerHook: 0,
})
.addIndicators()
.setPin('.video')
.addTo(controller);

let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    const video = document.querySelector('video')
    delay += (scrollpos - delay) * accelAmount;

    video.currentTime = scrollpos;
}, 66.6)

// gsap.to('.content__box1', {
//     duration: 2,
//     scrollTrigger: '.content__box1',
//     opacity: 0,
//   });

gsap.registerPlugin(ScrollTrigger);

gsap.from('.content__box1', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.content__box1',
      start: 'top 80%',
    },
    duration: 2
  });
  gsap.registerPlugin(ScrollTrigger);

gsap.from('.content__box2', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.content__box2',
      start: 'top 80%',
    },
    duration: 2
  });
  gsap.registerPlugin(ScrollTrigger);

gsap.from('.content__box3', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.content__box3',
      start: 'top 80%',
    },
    duration: 2
  });
  gsap.registerPlugin(ScrollTrigger);

gsap.from('.content__box4', {
    scrollTrigger: {
      trigger: '.content__box4',
      start: 'top 80%',
    },
    duration: 2,
    x: -100,
    opacity: 0,
  });
  gsap.registerPlugin(ScrollTrigger);

gsap.from('.content__box5', {
    scrollTrigger: {
      trigger: '.content__box5',
      start: 'top 80%',
    },
    duration: 2,
    x: 100,
    opacity: 0,
  });
  gsap.registerPlugin(ScrollTrigger);

gsap.from('.content__box6', {
    scrollTrigger: {
      trigger: '.content__box6',
      start: 'top 90%',
    },
    duration: 2,
    y: 100,
    opacity: 0,
  });
  gsap.registerPlugin(ScrollTrigger);

gsap.from('.content__box7', {
    scrollTrigger: {
      trigger: '.content__box7',
      start: 'top 90%',
    },
    duration: 2,
    y: 100,
    opacity: 0,
  });
  gsap.registerPlugin(ScrollTrigger);