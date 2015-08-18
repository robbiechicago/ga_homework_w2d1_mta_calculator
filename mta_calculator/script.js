 window.onload = function() {
console.log("js linked: MTA stops calc");

//subway line arrays
var line_l = ['8th', '6th', 'Union Square', '3rd', '1st'];
var line_n = ['Times Square', '34th', '28th (N-Line)', '23rd (N-Line)', 'Union Square', '8th'];
var line_6 = ['Grand Central', '33rd', '28th (6-Line)', '23rd (6-Line)', 'Union Square', 'Astor Place'];
var all_lines_dup = line_l.concat(line_n, line_6);
var all_lines = all_lines_dup.filter(function(elem, pos){
  return all_lines_dup.indexOf(elem) === pos;
}).sort();

//Dynamically fill selects
var start_selector = document.getElementById('start-station');
for(var i = 0, len = all_lines.length; i < len; i++) {
  var opt = document.createElement('option');
  opt.innerHTML = all_lines[i];
  opt.value = all_lines[i];
  start_selector.appendChild(opt);
}

var start_change = start_selector.addEventListener('change', function(){
  console.log(start_selector.options[start_selector.selectedIndex].value);
  end_stations();
})

function end_stations() {
  var end_selector = document.getElementById('end-station');
  var startIndex = all_lines.indexOf(start_selector.options[start_selector.selectedIndex].value);
  var removeStart = all_lines.splice(startIndex,1);
  for(var i = 0, len = all_lines.length; i < len; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = all_lines[i];
    opt.value = all_lines[i];
    end_selector.appendChild(opt);
  }
}




//L-line button listener
var l_boom = document.getElementById('l-boom').addEventListener('click', stopCalc);

function stopCalc(start, end) {
  console.log("function stopCalc successfully called");
  var start_location = start_selector.options[start_selector.selectedIndex].value;
  var end_location = end_selector.options[end_selector.selectedIndex].value;
  console.log("start station: " + start_location);
  console.log("end station: " + end_location);
  result = Math.abs(line_l.indexOf(start_location) - line_l.indexOf(end_location));
  console.log(result);
  document.getElementById('result').innerHTML = result;
}




















} //END OF WINDOW.ONLOAD

//NOTES
// Use this:  yo = Math.abs(line_6.indexOf('33rd') - line_6.indexOf('Astor Place'));