document.addEventListener("DOMContentLoaded",function(){
    let lottieContainer = document.querySelectorAll(".animation");

    if(lottieContainer){
        LottieScrollTrigger({
            trigger: ".animation",
            start:"top center",
            endTrigger:".end-lot",
            end:`bottom center+=${document.querySelector('.animation').offsetHeight}`,
            render:"svg",
            target:".animation",
            path:"static/sample2/anima.json",
            scrub: 0,
            markers:false
        });
    }
});

function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
        target = gsap.utils.toArray(vars.target)[0],
        speed = { slow: "+=2000", medium: "+=1000", fast: "+=500" },  // Correcting the variable name
        st = {
            trigger: vars.trigger,
            end: speed[vars.speed] || "+=1000",  // Correcting the variable name
            scrub: 1,
            markers: true,  // Enable markers for debugging
        },
        ctx = gsap.context && gsap.context(),
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: false,
            autoplay: false,
            path: vars.path,  // Path to your Lottie JSON file
            rendererSettings: vars.rendererSettings || {
                preserveAspectRatio: "xMidYMid slice",
            },
        });
    for (let p in vars){
        st[p] = vars[p];
    }

    animation.addEventListener("DOMLoaded", function(){
        let createTween = function(){
            animation.frameTween=gsap.to(playhead,{
                frame:animation.totalFrames -1,
                ease:"none",
                onUpdate: () => animation.goToAndStop(playhead.frame,true),
                scrollTrigger:st,
            });
            return () => animation.destroy && animation.destroy();
        };
        ctx && ctx.add ? ctx.add(createTween):createTween();
    });
    return animation;
}