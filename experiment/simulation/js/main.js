'use strict';

(function() {
    console.log("printdropdown");
    generateDropdown();
})();

// this function generate the dropdown
function generateDropdown() {
    console.log("printdropdown");
    var dropdown = ['Select Boundary Type', 'One Equal Span', 'Two Equal Span', 'Two Unequal Spans']
    var select = document.getElementById("dropdown");
    for (var i = 0; i < dropdown.length; i++) {
        var optn = dropdown[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
    document.getElementById("procedure-message").innerHTML = "Select Boundary Type from the dropdown menu";
}

function onSelection() {
    var selectedDropdown = document.getElementById("dropdown");
    console.log(selectedDropdown);
    var selectedDropdownval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
    if (selectedDropdownval === "One Equal Span") {
        document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
        //    document.getElementById("main-beam1").style.display="block";   

    } else if (selectedDropdownval === "Fixed Beam") {
        console.log("testboya");
        document.getElementById("main-beam1").style.display = "none";
        document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
    } else if (selectedDropdownval === "One Side Fixed One Side SS") {
        console.log("testboya");
        document.getElementById("main-beam1").style.display = "none";
        document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
    } else if (selectedDropdownval === "Two Side SS") {
        console.log("testboya");
        document.getElementById("main-beam1").style.display = "none";
        document.getElementById("procedure-message").innerHTML = "<li>Select the load type, check the input parameters and click on Start button</li>" + "<li>Observe the beam of Deflection and pay attention to the shear force and bending moment in the observation section </li>";
    }
}


//this function shows the animations in the observations section 
function showObservations(ele1, ele2) {
    var path1 = document.getElementsByClassName(ele1)[0].getElementsByTagName("path")[0];
    var path1Val = path1.getAttribute("d")
    var path2 = document.getElementsByClassName(ele2)[0].getElementsByTagName("path")[0];
    var path2Val = path2.getAttribute("d")
    animateObserve(ele1, path1Val);
    console.log(path1Val);
    // animateObserve(ele2, path2Val);
    console.log(path2Val);
}
var previousClickedarrow = [];
var previousClickedEle = [];
var previousClickedBeam = [];
var previousClickedMainBeam = [];
var mainBeamDisplay = [];

// function play() {
//    // moveArrowDown("arrow", 150);
//     // const myTimeout = setTimeout(playSimulation, 2000);
//     // setTimeout(playSimulation, 3000);
//     // playSimulation();
// }

function playSimulation() {
    console.log("printplay");
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;
            var selectedDropdown = document.getElementById("dropdown");
            console.log(selectedDropdown);
            var selectedDropdownval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
            var lengthval = document.getElementById("length").value
            console.log(lengthval);
            var depthval = document.getElementById("depth").value
            console.log(depthval);


            
            if (previousClickedEle.length > 0) {
                for (var i = 0; i < previousClickedEle.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedEle[i]).style.display = "none";
                }
            }

            if (previousClickedBeam.length > 0) {
                for (var i = 0; i < previousClickedBeam.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedBeam[i]).style.display = "none";
                }
            }
            if (previousClickedMainBeam.length > 0) {
                for (var i = 0; i < previousClickedMainBeam.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedMainBeam[i]).style.display = "none";
                }
            }
            if (mainBeamDisplay.length > 0) {
                for (var i = 0; i < mainBeamDisplay.length; i++) {
                    console.log("test");
                    document.getElementById(mainBeamDisplay[i]).style.display = "none";
                }
            }
            if (value === "Point Load" && selectedDropdownval === "One Equal Span") {
                document.getElementById("arrow").style.display = "block";
                moveArrowDown("arrow", 150);
                const myTimeout = setTimeout(function() { previousClickedEle.push("set1");
                document.getElementById("set1").style.display = "block";
                //document.getElementById("procedure-message").innerHTML = "Select Cantilever from the dropdown menu";
                // document.getElementById("mes1").innerHTML = "Shear force is constant throughout the beam";
                // document.getElementById("mes2").innerHTML = "Maiximum bending movement occurs at the initial fixed end";
                cantiPlBeam("#canti-pl-main-beam", "#canti-beam-pl");
                previousClickedBeam.push("beam1");
                document.getElementById("beam1").style.display = "none";
                // console.log("beam1");
                previousClickedMainBeam.push("main-beam1");
                document.getElementById("main-beam1").style.display = "none";
                mainBeamDisplay.push("main-beam1");
                document.getElementById("main-beam1").style.display = "block";
                //showObservations('svg-sfd','svg-bmd');
                animateObserve('.canti-pl-sfd path', 'M 0 200 L 800 200 L 800 150 L 400 150 L 400 300 L 200 300 L 200 100 L 0 100 L 0 200');
                animateObserve('.canti-pl-bmd path', ' M 0 150 L 800 150 L 350 200 L 350 150 L 350 200 L 150 100 L 0 150');}, 2000);
            }
            if (value === "UDL" && selectedDropdownval === "Cantilever") {
                document.getElementById("arrow-udl").style.display = "block";
                moveArrowDown("arrow-udl", 80);
                const myTimeout = setTimeout(function() {previousClickedEle.push("set2");
                document.getElementById("set2").style.display = "block";
                document.getElementById("mes3").innerHTML = "Maximum shear force occurs at the fixed end";
                document.getElementById("mes4").innerHTML = "text message bm";
                // console.log("test");
                cantiUdlBeam("#canti-udl-main-beam", "#canti-beam-udl");
                previousClickedBeam.push("beam2");
                document.getElementById("beam2").style.display = "none";
                previousClickedMainBeam.push("main-beam2");
                document.getElementById("main-beam2").style.display = "block";
                animateObserve('.canti-udl-sfd path', 'M 100 300 L 450 300 L 100 400 L 100 300 L 100 300');
                animateObserve('.canti-udl-bmd path', 'M 100 300 Q 250 300 500 300 C 350 300 150 350 100 400 Q 100 400 100 300');}, 100);
               
            }
            if (value === "Point Load" && selectedDropdownval === "Fixed Beam") {
                document.getElementById("arrow").style.display = "block";
                moveArrowDown("arrow", 150);
                const myTimeout = setTimeout(function() {previousClickedEle.push("set3");
                document.getElementById("set3").style.display = "block";
                document.getElementById("mes5").innerHTML = "Shear force is constant throughout the beam";
                document.getElementById("mes6").innerHTML = "Maximum Positive B.M at center and negative B.M at fixed end";
                fixedPlBeam("#fixed-pl-main-beam", "#fixed-beam-pl");
                previousClickedBeam.push("beam3");
                document.getElementById("beam3").style.display = "none";
                previousClickedMainBeam.push("main-beam3");
                document.getElementById("main-beam3").style.display = "block";
                animateObserve('.fix-pl-sfd path', 'M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                animateObserve('.fix-pl-bmd path', 'M 150 150 L 450 150 L 450 250 L 150 250 L 150 150 L 150 250 L 300 50 L 450 250');}, 100);      
               
            }
            if (value === "UDL" && selectedDropdownval === "Fixed Beam") {
                document.getElementById("arrow-udl").style.display = "block";
                moveArrowDown("arrow-udl", 100);
                const myTimeout = setTimeout(function() { previousClickedEle.push("set4");
                document.getElementById("set4").style.display = "block";
                document.getElementById("mes7").innerHTML = "text message of sf";
                document.getElementById("mes8").innerHTML = "text message of bm";
                fixedUdlBeam("#fixed-udl-main-beam", "#fixed-beam-udl");
                previousClickedBeam.push("beam4");
                document.getElementById("beam4").style.display = "none";
                previousClickedMainBeam.push("main-beam4");
                document.getElementById("main-beam4").style.display = "block";
                animateObserve('.fix-udl-sfd path', 'M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                animateObserve('.fix-udl-bmd path', 'M 150 200 L 450 200 L 450 250 L 150 250 L 150 200 L 150 250 Q 300 0 450 250');}, 100);
               
            }
            if (value === "Point Load" && selectedDropdownval === "One Side Fixed One Side SS") {
                document.getElementById("arrow").style.display = "block";
                moveArrowDown("arrow", 150);
                const myTimeout = setTimeout(function() {previousClickedEle.push("set5");
                document.getElementById("set5").style.display = "block";
                document.getElementById("mes9").innerHTML = "Shear force varies linearly, maximum SF occurs at initial fixed ends";
                document.getElementById("mes10").innerHTML = "Maximum B.M occurs at fixed end";
                onessPlBeam("#oness-pl-main-beam", "#oness-beam-pl");
                previousClickedBeam.push("beam5");
                document.getElementById("beam5").style.display = "none";
                previousClickedMainBeam.push("main-beam5");
                document.getElementById("main-beam5").style.display = "block";
                animateObserve('.oness-pl-sfd path', 'M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                animateObserve('.oness-pl-bmd path', 'M 100 200 L 100 200 L 400 200 L 400 250 L 300 150 L 100 200');}, 70);
           

                
            }
            if (value === "UDL" && selectedDropdownval === "One Side Fixed One Side SS") {
                document.getElementById("arrow-udl").style.display = "block";
                moveArrowDown("arrow-udl", 100);
                const myTimeout = setTimeout(function() {  previousClickedEle.push("set6");
                document.getElementById("set6").style.display = "block";
                document.getElementById("mes11").innerHTML = "text message of sf";
                document.getElementById("mes12").innerHTML = "text message of bm";
                onessUdlBeam("#oness-udl-main-beam", "#oness-beam-udl");
                previousClickedBeam.push("beam6");
                document.getElementById("beam6").style.display = "none";
                previousClickedMainBeam.push("main-beam6");
                document.getElementById("main-beam6").style.display = "block";
                animateObserve('.oness-udl-sfd path', 'M 100 200 L 100 200 L 500 200 L 450 300 L 100 150 Q 100 200 100 200');
                animateObserve('.oness-udl-bmd path', 'M 100 200 L 100 200 L 500 200 L 500 250 Q 250 50 100 200');}, 100);
              
            }
            if (value === "Point Load" && selectedDropdownval === "Two Side SS") {
                document.getElementById("arrow").style.display = "block";
                moveArrowDown("arrow", 150);
                const myTimeout = setTimeout(function() { previousClickedEle.push("set7");
                document.getElementById("set7").style.display = "block";
                document.getElementById("mes13").innerHTML = "Shear force varies linearly, maximum SF occurs at fixed ends";
                document.getElementById("mes14").innerHTML = "Maximum Positive B.M at center and negative B.M at fixed end";
                twossPlBeam("#twoss-pl-main-beam", "#twoss-beam-pl");
                previousClickedBeam.push("beam7");
                document.getElementById("beam7").style.display = "none";
                previousClickedMainBeam.push("main-beam7");
                document.getElementById("main-beam7").style.display = "block";
                animateObserve('.twoss-pl-sfd path', 'M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                animateObserve('.twoss-pl-bmd path', 'M 100 300 L 300 300 L 200 250 L 100 300');}, 100);
               
            }
            if (value === "UDL" && selectedDropdownval === "Two Side SS") {
                document.getElementById("arrow-udl").style.display = "block";
                moveArrowDown("arrow-udl", 100);
                const myTimeout = setTimeout(function() { previousClickedEle.push("set8");
                document.getElementById("set8").style.display = "block";
                document.getElementById("mes15").innerHTML = "text message of sf";
                document.getElementById("mes16").innerHTML = "text message of bm";
                twossUdlBeam("#twoss-udl-main-beam", "#twoss-beam-udl");
                previousClickedBeam.push("beam8");
                document.getElementById("beam8").style.display = "none";
                previousClickedMainBeam.push("main-beam8");
                document.getElementById("main-beam8").style.display = "block";
                animateObserve('.twoss-udl-sfd path', 'M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                animateObserve('.twoss-udl-bmd path', 'M 100 300 L 400 300 Q 250 150 100 300');}, 100);
               
            }
        }
    }
}