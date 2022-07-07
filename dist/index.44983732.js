function calc() {
    var type_services1 = document.getElementById("type_services");
    var type_goods2 = document.getElementById("type_goods");
    var slider = document.getElementById("range");
    var result = document.getElementById("result");
    var output1 = document.getElementById("output");
    var price = 0;
    price += parseInt(type_services1.options[type_services.selectedIndex].value);
    more = parseInt(slider.value);
    price = parseInt(type_goods2.value) + price;
    result.innerHTML = price * more;
    output.innerHTML = more;
} //   type_services.onchange = () => calculate();
 //   type_goods.onchange = () => calculate();
 //   slider.onchange = () => calculate();
 //   function calc() {
 //      type_services1Value = type_services.value;
 //      type_goods2Value = type_goods.value;
 //      rangeValue = range.value;
 //      var sum = 0;
 //  var a = +type_services1Value;
 //  var b = +type_goods2Value;
 //  var c = +rangeValue;
 //  sum = a + b;
 //  document.getElementById("result").value = sum;
 //}
 //function getTotal() {
 //   var first = document.getElementById("type_services").innerText;
 //   first1 = parseInt(type_services.options[type_services.selectedIndex].value);
 //   var second = document.getElementById("type_goods").innerText;
 //   second2 = parseInt(type_goods.value);
 //   var third = document.getElementById("range").value;
 //   var fourth = document.getElementById("result").innerText;
 //   result.innerHTML =  third; 
 // }

//# sourceMappingURL=index.44983732.js.map
