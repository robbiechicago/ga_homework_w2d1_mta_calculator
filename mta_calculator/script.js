 window.onload = function() {
console.log("js linked: MTA stops calc");

//subway line arrays
var line_l = ['8th', '6th', 'Union Square', '3rd', '1st'];
var line_n = ['Times Square', '34th', 'N-28th', 'N-23rd', 'Union Square', '8th'];
var line_6 = ['Grand Central', '33rd', '6-28th', '6-23rd', 'Union Square', 'Astor Place'];

//Dynamically fill selects
var lls = document.getElementById('line-l-start');
for(var i = 0, len = line_l.length; i < len; i++) {
  var opt = document.createElement('option');
  opt.innerHTML = line_l[i];
  opt.value = line_l[i];
  lls.appendChild(opt);
}
var lls_change = lls.addEventListener('change', function(){
  console.log(lls.options[lls.selectedIndex].value);

})

var lle = document.getElementById('line-l-end');
for(var i = 0, len = line_l.length; i < len; i++) {
  var opt = document.createElement('option');
  opt.innerHTML = line_l[i];
  opt.value = line_l[i];
  lle.appendChild(opt);
}




//L-line button listener
var l_boom = document.getElementById('l-boom').addEventListener('click', stopCalc);

function stopCalc(start, end) {
  console.log("function stopCalc successfully called");
  console.log("start station: " + lls.options[lls.selectedIndex].value);
  console.log("end station: " + lle.options[lle.selectedIndex].value);
}


























} //END OF WINDOW.ONLOAD

//NOTES
// Use this:  yo = Math.abs(line_6.indexOf('33rd') - line_6.indexOf('Astor Place'));