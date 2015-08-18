 window.onload = function() {
console.log("js linked: MTA stops calc");

//subway line arrays
var line_l = ['8th', '6th', 'Union Square', '3rd', '1st'];
var line_n = ['Times Square', '34th', '28th (N-Line)', '23rd (N-Line)', 'Union Square', '8th'];
var line_6 = ['Grand Central', '33rd', '28th (6-Line)', '23rd (6-Line)', 'Union Square', 'Astor Place'];
//create merged array (minus duplicate Union Squares) for the selectors
var all_lines_dup = line_l.concat(line_n, line_6);
var all_lines = all_lines_dup.filter(function(elem, pos){
  return all_lines_dup.indexOf(elem) === pos;
}).sort();

//Dynamically fill selects
//First the starting station...
var start_selector = document.getElementById('start-station');
for(var i = 0, len = all_lines.length; i < len; i++) {
  var opt = document.createElement('option');
  opt.innerHTML = all_lines[i];
  opt.value = all_lines[i];
  start_selector.appendChild(opt);
}

//changing the start selector runs the function to fill the end selector
var start_change = start_selector.addEventListener('change', function(){
  console.log(start_selector.options[start_selector.selectedIndex].value);
  end_stations();
})

// filling the end selector to include all stations except the start station
var end_selector = document.getElementById('end-station');
function end_stations() {
  var startIndex = all_lines.indexOf(start_selector.options[start_selector.selectedIndex].value);
  var removeStart = all_lines.splice(startIndex,1);
  for(var i = 0, len = all_lines.length; i < len; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = all_lines[i];
    opt.value = all_lines[i];
    end_selector.appendChild(opt);
  }
}

//create variables for start and end stations


//calc button listener
var calc = document.getElementById('l-boom').addEventListener('click', lines);


//find if the end station is on the same line as the start station
function lines() {
  // debugger
  var start_location = start_selector.options[start_selector.selectedIndex].value;
  var end_location = end_selector.options[end_selector.selectedIndex].value;
  //get start line
  if(line_l.indexOf(start_location) !== -1) {
    var start_line = "line_l";
  } else if(line_n.indexOf(start_location) !== -1) {
    var start_line = "line_n";
  } else {
    var start_line = "line_6";
  }
  //get end line
  if(line_l.indexOf(end_location) !== -1) {
    var end_line = "line_l";
  } else if(line_n.indexOf(end_location) !== -1) {
    var end_line = "line_n";
  } else {
    var end_line = "line_6";
  }
  //deal with Union Square
  if (start_location === "Union Square") {
    start_line === end_line;
  }
  if (end_location === "Union Square") {
    end_line = start_line;
  }
  //Select one or two lines
  if(start_line = end_line) {
    OneLine(start_location, end_location, start_line);
  } else {
    TwoLines(start_location, end_location, start_location, end_line);
  }
}

//calculation where only one line is used
function OneLine(start, end, line) {
  console.log("function OneLine successfully called");
  console.log("start station: " + start);
  console.log("end station: " + end);
  console.log("line: " + line);
  console.log("line.indexOf(start): " + line.indexOf(start));
  console.log("line.indexOf(end): " + line.indexOf(end));
  //NEEDS EDITING!!!!
  result = Math.abs(line.indexOf(start) - line.indexOf(end));
  console.log(result);
  document.getElementById('result').innerHTML = result;
}

function TwoLines(start, end, sLine, eLine) {
  console.log("Two Lines not yet done");
}








} //END OF WINDOW.ONLOAD

//NOTES
// Use this:  yo = Math.abs(line_6.indexOf('33rd') - line_6.indexOf('Astor Place'));