var list_grades = {
  a: 5,
  b: 4,
  c: 3,
  d: 2,
  e: 1,
  "1": "E",
  "2": "D",
  "3": "C",
  "4": "B",
  "5": "A"
};

var total_points = 0;
var total_grade = 0;

document.getElementById("coolest_form").addEventListener("submit", function(e){
  e.preventDefault();
  total_points = 0;
  total_grade = 0;
  var grades = document.getElementsByClassName("grade");
  var points = document.getElementsByClassName("point");
  for(x in grades) {
    var grade = grades[x].value;
    if(grade != undefined) grade = grade.toLowerCase();
    var g = list_grades[grade];
    var p = parseFloat(points[x].value);
    if(g != undefined && p != undefined){
      total_points = total_points + p;
      total_grade = total_grade + (g * p);
    }
  }
  var result_grade_number = total_grade / total_points;
  var result_grade_letter = list_grades[Math.round(result_grade_number).toString()];
  document.getElementById("final_grade").value = result_grade_number;
  document.getElementById("letter_grade").value = result_grade_letter;
});

function gradesOnly(event){
  if(event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 13 || event.keyCode == 65 || event.keyCode == 66 || event.keyCode == 67 || event.keyCode == 68 || event.keyCode == 69){
    return true;
  } return false;
}

document.getElementById("add_grade").addEventListener("click", function(e){
  document.getElementById('grade_cont').insertAdjacentHTML('beforeend', '<div class="grade_cont_in">Grade: <input class="grade" onkeydown="return gradesOnly(event);" required type="text" placeholder="grade" /> Points: <input type="number" class="point" placeholder="points" required step="7.5" /></div>');
});

document.getElementById("remove_grade").addEventListener("click", function(e){
  document.getElementsByClassName("grade_cont_in")[document.getElementsByClassName("grade_cont_in").length-1].remove();
})
