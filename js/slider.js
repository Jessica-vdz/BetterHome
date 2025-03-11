const d = new Date();
    document.getElementById("date1").innerHTML = d;

    // Slider Woonkamer

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
    }

    // Slider Slaapkamer

    var slider1 = document.getElementById("myRange1");
    var output1 = document.getElementById("demo1");
    output1.innerHTML = slider1.value;

    slider1.oninput = function () {
      output1.innerHTML = this.value * 10;
    }

    // Slider Slaapkamer

    var slider2 = document.getElementById("kleurslider");
    var output2 = document.getElementById("demo2");
    output2.innerHTML = slider2.value;

    slider2.oninput = function () {
      output2.innerHTML = this.value;
    }