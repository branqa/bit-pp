
document.querySelector(".add").addEventListener("click", collectData);

function collectData(){
var nameAndSurname = document.querySelector(".name-surname").value;
var grade = document.querySelector(".grade").value;

//validation
  var error = document.querySelector(".error-message");
  var errorMessage;
  var counter = 0;
  for (var i = 0; i < nameAndSurname.length; i++) {
    if (nameAndSurname[i] == " ") {
      var surNamefirst = nameAndSurname[i + 1];
      var t = i;
      counter++;
    }
  }

  if (counter > 1 || nameAndSurname[nameAndSurname.length - 1] == " ") {
    errorMessage = "Invalid input";
  } else if (nameAndSurname == "") {
    document.querySelector(".error-message").innerHTML = "";
    errorMessage = "Name and surname must be provided";
  } else if (nameAndSurname.indexOf(" ") == -1) {
    document.querySelector(".error-message").innerHTML = "";
    errorMessage = "Surname is required";
  } else if (nameAndSurname[0] != nameAndSurname[0].toUpperCase()) {
    document.querySelector(".error-message").innerHTML = "";
    errorMessage = "Name should start with capital";
  } else if (surNamefirst != surNamefirst.toUpperCase()) {
    document.querySelector(".error-message").innerHTML = "";
    errorMessage = "Surname should start with capital";
  } else if (grade == "") {
    document.querySelector(".error-message").innerHTML = "";
    errorMessage = "Grade is required";
  } else if (grade % 1 != 0) {
    document.querySelector(".error-message").innerHTML = "";
    errorMessage = "Grade shoud be integer";
  } else if (grade < 0 || grade > 11) {
    document.querySelector(".error-message").innerHTML = "";
    errorMessage = "You should input only number from 1 to 10";
  } else {
    document.querySelector(".error-message").innerHTML = "";
    errorMessage = "Valid input";
    var name = "";
    for (var i = 0; i < t; i++) {
      name += nameAndSurname[i];
    }
    var surname = "";
    for (var i= t+1; i<nameAndSurname.length;i++ ){
        surname+= nameAndSurname[i];
    }
    var updateList = function() {
      var student = new Student(name, surname);
      var subject = document.querySelector('.subject-select').value;
      var exam = new Exam(subject, student, grade);
      var ulPassed = document.querySelector('.who-passed');
      var ulFailed = document.querySelector('.who-failed');

      var newStudent = document.createElement('li');
      var passedStudentText = document.createTextNode(exam.hasPassed());
    newStudent.appendChild(passedStudentText);
    // newFailedStudent.appendChild(failedStudentText)
    if (grade>5){
    ulPassed.appendChild(newStudent);
    } else {
    ulFailed.appendChild(newStudent)
    }
    };
    updateList();
  }

  var emsg = document.createTextNode(errorMessage);
  error.appendChild(emsg);
}


