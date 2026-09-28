let NodeMcuData = null;
let slider = document.getElementById("myRange");
let slider1 = document.getElementById("myRange1");
let slider2 = document.getElementById("kleurslider");

fetch("https://39300.hosts2.ma-cloud.nl/BetterHome/post.php")//get
.then(function(httpresponse){
  return (httpresponse.json())
}).then(function(json){

  //hier json inlezen en bewaren
  NodeMcuData = json;

  slider.value = NodeMcuData.lights[0] ? 1 : 0;
  slider1.value = NodeMcuData.lights[1] ? 1 : 0;
  slider2.value = NodeMcuData.lights[2] ? 1 : 0;

});

//fetch post als CLICK!
const d = new Date();
    document.getElementById("date1").innerHTML = d;

    slider.onclick = function () {
      ChangeLightState(0, slider.value);
      console.log("value: " + slider.value);
    }

    slider1.onclick = function () {
      ChangeLightState(1, slider1.value);
      console.log("value: " + slider1.value);
    }
    // Slider Slaapkamer
    slider2.onclick = function () {
      ChangeLightState(2, slider2.value);
      console.log("value: " + slider2.value);
    }
 
    
    function ChangeLightState(lightIndex, state){
      NodeMcuData.lights[lightIndex] = state > 0 ? true : false;




      fetch("https://39300.hosts2.ma-cloud.nl/BetterHome/post.php", {method: "POST", body:JSON.stringify(NodeMcuData)})
      .then(function(httpresponse){
      return (httpresponse.json())
      }).then(function(json){

        //hier json inlezen en bewaren
        NodeMcuData = json;
      });
    }

