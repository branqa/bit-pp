var formModule = (function () {

var formSelectors = {
    subjectSelector: '.add-subject',
    studentSelector: '.add-student-name',
    gradeSelector: '.add-grade',
    passedSelector : '.exam-passed-count',
    passedPercentageSelector : '.exam-passed-percentage',
    failedSelector : '.exam-failed-count',
    failedPercentageSelector : '.exam-failed-percentage',
    errorSelector : '.error-message'
}


var subjectInput = document.querySelector(formSelectors.subjectSelector);
var studentInput = document.querySelector(formSelectors.studentSelector);
var gradeInput = document.querySelector(formSelectors.gradeSelector);
var totalPassed = document.querySelector(formSelectors.passedSelector);
var passedPercentage = document.querySelector(formSelectors.passedPercentageSelector);
var totalFailed = document.querySelector(formSelectors.failedSelector);
var failedPercentage = document.querySelector(formSelectors.failedPercentageSelector);
var errorOutput = document.querySelector(formSelectors.errorSelector);


function getFormData() {
    var formData = {};
    formData.subjectInputData = subjectInput.value;
    formData.studentInputData = studentInput.value;
    var nameAndSurname = studentInput.value.split(' ');
    formData.studentInputNameData = nameAndSurname[0];
    formData.studentInputSurnameData = nameAndSurname[1];
    formData.gradeInputData = gradeInput.value;
    return formData;
}


var errors = {
    OK: 'OK',
    MISSING_DATA: 'Missing data!',
    WRONG_STUDENT: 'Both name and surname should start with capitals.',
    WRONG_GRADE: 'A grade should be from 1 to 10.'
}


var studentValidation = function validateStudent(student) {
    var position = student.indexOf(' ');
    var name = student.slice(0, position);
    var surname = student.slice(position + 1);
    var nameUp = name.charAt(0).toUpperCase();
    var surnameUp = surname.charAt(0).toUpperCase();

    if (name.charAt(0) == nameUp || surname.charAt(0) == surnameUp) {
        return true;
    }
    return false;
}


function validation(subject, student, grade) {
    if (subject == '' || student == '' || grade == '') {
        return errors.MISSING_DATA;
    } else if (student.indexOf(' ') == -1) {
        return errors.WRONG_STUDENT;
    } else if (studentValidation(student) == false) {
        return errors.WRONG_STUDENT
    } else if (grade < 1 || grade > 10) {
        return errors.WRONG_GRADE;
    }
    return errors.OK;
}


function setError(message){
    errorOutput.textContent = message;
}

function clearError() {
    errorOutput.textContent = '';
}

function updateList(text) {
    // var text = document.createTextNode(student.getStudentData());
    var li = document.createElement('li');
    var ul = document.createElement('ul');
    li.appendChild(text);
    ul.appendChild(li);
    return ul;
}



function updateStatistics(pass, fail){

    totalPassed.textContent = pass;
    totalFailed.textContent = fail;
    passedPercentage.textContent = parseFloat(pass / (pass+fail) * 100).toFixed(2) + ' %';
    failedPercentage.textContent = parseFloat(fail / (pass+fail) * 100).toFixed(2) + ' %';

}

return {
    formSelectors : formSelectors,
    getFormData : getFormData,
    validation : validation,
    updateList :updateList,
    updateStatistics : updateStatistics,
    setError : setError,
    errors:errors,
    clearError : clearError
}

}) ();