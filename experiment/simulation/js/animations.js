//arrow down animation
function moveArrowDown(id, position) {
    var elem = document.getElementById(id);
    console.log(elem);
    var pos = 0;
    clearInterval(id);
   const moveArrow = setInterval(frame, 10);

    function frame() {
        if (pos == position) {
            clearInterval(moveArrow);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.bottom = pos + 'px';
        }
    }

}
//arrow obervaitons
function animateObserve(ele, val) {

    anime({
        targets: ele,
        duration: 2000,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        direction: "alternate",
        delay: anime.stagger(200),
        d: [{
                value1: val
            },
            {
                value2: val
            }
        ],
        loop: false
    });
}


function cantiPlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-pl-main-beam', // target shape
        {
            path: '#canti-pl-main-beam'
        }, // from shape
        {
            path: '#canti-beam-pl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function cantiUdlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#canti-udl-main-beam', // target shape
        {
            path: '#canti-udl-main-beam'
        }, // from shape
        {
            path: '#canti-beam-udl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}


function fixedPlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#fixed-pl-main-beam', // target shape
        {
            path: '#fixed-pl-main-beam'
        }, // from shape
        {
            path: '#fixed-beam-pl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function fixedUdlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#fixed-udl-main-beam', // target shape
        {
            path: '#fixed-udl-main-beam'
        }, // from shape
        {
            path: '#fixed-beam-udl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function onessPlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#oness-pl-main-beam', // target shape
        {
            path: '#oness-pl-main-beam'
        }, // from shape
        {
            path: '#oness-beam-pl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function onessUdlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#oness-udl-main-beam', // target shape
        {
            path: '#oness-udl-main-beam'
        }, // from shape
        {
            path: '#oness-beam-udl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function twossPlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#twoss-pl-main-beam', // target shape
        {
            path: '#twoss-pl-main-beam'
        }, // from shape
        {
            path: '#twoss-beam-pl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}

function twossUdlBeam(id1, id2) {
    console.log(id1, id2)
    var tween = KUTE.fromTo('#twoss-udl-main-beam', // target shape
        {
            path: '#twoss-udl-main-beam'
        }, // from shape
        {
            path: '#twoss-beam-udl'
        }, // to shape
        { // options
            easing: 'easingCubicInOut',
            repeat: 0,
            duration: 2500
        }
    ).start();
}