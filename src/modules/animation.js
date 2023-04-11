import $ from "jquery";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

let tlHeader = gsap.timeline();

tlHeader.from([$('.header__top-menu'), $('.header__top-logo')], {
    opacity: 0,
    duration: 2,
})
    .from($('.stagger-link'), {
        y: -100,
        duration: 1,
        stagger: 0.1,
        ease: 'elastic',
    }, '-=2')
    .from($('.header__body-text'), {
        opacity: 0,
        x: 50,
        ease: 'back.out(4)',
        duration: 1,
    }, '-=1.5')
    .from($('.header__body-button'), {
        opacity: 0,
        x: -50,
        ease: 'back.out(4)',
        duration: 1,
    }, '<')

let tlServices = gsap.timeline({
    scrollTrigger: {
        trigger: $('.services'),
        start: 'top 90%',
        end: '50% center',
        scrub: true,
        // markers: true,
    }
})

tlServices.from($('.services__title'), {
    opacity: 0,
    y: -130,
    x: -200
})
    .from($('.services__aplication'), {
        opacity: 0,
        y: 150,
        x: 200,
    })

gsap.from($('.team__title'), {
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: $('.team__title-heading'),
        start: 'top 90%',
        // scrub: true,
        // markers: true,
    }
})

gsap.from($('.team__card-body'), {
    y: 100,
    opacity: 0,
    stagger: {
        each: 0.15,
        from: "start",
        ease: "power2",
    },
    scrollTrigger: {
        trigger: $('.team__cards'),
        start: 'top 90%'
    }
})
gsap.from($('.skills__title'), {
    y: -50,
    opacity: 0,
    duration: 1.3,
    scrollTrigger: {
        trigger: $('.skills__title'),
        start: 'top 80%',
    }
})

gsap.to($('.skills__level-diagramm'), {
    rotation: 360,
    transformOrigin: 'center 50%',
    duration: 0.5,
    stagger: {
        from: "random",
        each: 0.1,
    },
    scrollTrigger: {
        trigger: $('.skills__levels'),
        start: 'top 80%',
    }
})
gsap.from($('.skills__level-descr'), {
    x: -500,
    opacity: 0,
    duration: 0.7,
    ease: 'elastic',
    stagger: {
        from: "end",
        each: 0.1,
    },
    scrollTrigger: {
        trigger: $('.skills__level-descr'),
        start: '-200% bottom',
        // markers:true,
    }
})

gsap.from($('.portfolio'), {
    opacity: 0,
    x: -1000,
    ease: 'elastic(0.6,0.3)',
    duration: 1,
    scrollTrigger: {
        trigger: $('.portfolio'),
        start: '10% 80%',
        // markers:true,
    }
})

gsap.from($('.about'),{
    opacity: 0,
    x: 1000,
    ease: 'elastic(0.6,0.3)',
    duration: 1,
    scrollTrigger: {
        trigger: $('.about'),
        start: '10% 80%',
        // markers:true,
    }
})

gsap.from($('.get__title-heading'),{
    y: -50,
    opacity: 0,
    duration: 1.3,
    scrollTrigger: {
        trigger: $('.get__title-heading'),
        start: 'top 80%',
    }
})

gsap.from($('.footer__mark'),{
    opacity:0,
    y:-50,
    ease:'back',
    stagger:{
        each:0.1,
        from:'center',
    },
    scrollTrigger: {
        trigger: $('.get__body-button'),
        start: '10% 80%',
        // markers:true,
    }
})