document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('.parallax__layer__text', 8, {
        y:  50
    })
    .to('.parallax__layer__6', 8, {
        y: -500
    }, '-=8')
    .to('.parallax__layer__5', 8, {
        y: -450
    }, '-=8')
    .to('.parallax__layer__4', 8, {
        y: -400
    }, '-=8')
    .to('.parallax__layer__3', 8, {
        y: -325
    }, '-=8')
    .to('.parallax__layer__2', 8, {
        y: -250
    }, '-=8')
    .to('.parallax__layer__1', 8, {
        y: -175
    }, '-=8')
    .to('.parallax__layer__0', 8, {
        y: -100
    }, '-=8')
    .to('.content__section', 8, {
        y: -500
    }, '-=8')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.parallax__section',
        duration: '200%',
        triggerHook: 0,
    })
    .setTween(timeline)
    .setPin('.parallax__section')
    .addTo(controller);
})