// document.getElementById("arrow").addEventListener("load", myFunction);

// function myFunction() {
//   document.getElementById("arrow").innerHTML = "arrow_down";
// }

var id = null;
function myFunction() {
  var elem = document.getElementById("arrow");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 140) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.down = pos + 'px'; 
    }
  }
}

function getOption() {
    selectElement = document.querySelector('#menu');
    boundaryType = selectElement.value;
    document.querySelector('.boundaryType').textContent = boundaryType;
    console.log(boundaryType);
}

function displayRadioValue() {
    var ele = document.getElementsByName('answer');
      
    for(i = 0; i < ele.length; i++) {
                  
        if(ele[i].type="radio") {
          
            if(ele[i].checked)
                document.getElementById("result").innerHTML
                            = ele[i].value;
        }
        
    }
}

