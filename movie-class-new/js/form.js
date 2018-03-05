// Write all code that connects a user behaviour with application logic. 


var UIModule = (function () {

    var selectors = {
        subjectSelector: '.add-subject',
        nameAndSurnameSelector: '.add-student-name',
        gradeSelector: '.add-grade',
        buttonSelector: '.add-btn',
        errorSelector: '.errors',
        passedSelector: '.passed',
        failedSelector: '.failed'
    }


    var subjectOption = document.querySelector(selectors.subjectSelector);
    var nameAndSurnameInput = document.querySelector(selectors.nameAndSurnameSelector);
    var gradeInput = document.querySelector(selectors.gradeSelector);
    var buttonLog = document.querySelector(selectors.buttonSelector);
    var errorField = document.querySelector(selectors.errorSelector);
    var passField = document.querySelector(selectors.passedSelector);
    var failedField = document.querySelector(selectors.failedSelector);

    var error = {

        OK: 'OK',
        CHOOSE_SUBJECT: 'Subject is not selected',
        INSERT_NAME: 'Enter name',
        INSERT_SURNAME: 'Enter surname',
        SELECT_GRADE: 'Select grade'

    }

    // write a function that collects all the data from the form 
    //  dohvatanje vrednosti podataka
    function getFormData() {
        var formData = {}
        formData.subject = subjectOption.value;
        formData.nameAndSurname = nameAndSurnameInput.value;
        formData.grade = gradeInput.value;
        // formData.button = buttonLog.value;
        // formData.error = errorField.value;

        return formData;

    }

    // write a function that validates all collected data
    function validation(subject, firstName, lastName, grade) {
        var studentNameAndSurname = nameAndSurnameInput.value.split('');
        var firstName = studentNameAndSurname[0];
        var lastName = studentNameAndSurname[1];
        var valid = error.OK;

        if (subject == '-') {
            valid = error.CHOOSE_SUBJECT;
            errorField.innerHTML += error.CHOOSE_SUBJECT + "<br>";
        }
        if (firstName == '' || firstName[0] != firstName[0].toUpperCase()) {
            valid = error.INSERT_NAME;
            errorField.innerHTML += error.INSERT_NAME + "<br>";
        }
        if (lastName == undefined || lastName[0] != lastName[0].toUpperCase()) {
            valid = error.INSERT_SURNAME;
            errorField.innerHTML += error.INSERT_SURNAME + "<br>";
        }
        if (grade == '') {
            valid = error.SELECT_GRADE;
            errorField.innerHTML += error.SELECT_GRADE + "<br>";
        }

        return valid;
    }

    // write a function that updates the given list so it adds the new item at the end of the list
    function UpdateList(){
        var subject = new Subject(selectSubject); 
        var student = new Student(firstName, lastName);
        var exam = new Exam(subject, student, grade);

    }





    // var totalStudents = document.querySelector('.exam-total span');
    // var passedStudents = document.querySelector('.exam-passed-count');
    // var failedStudents = document.querySelector('.exam-failed-count');
    // var percentpassedStudents = document.querySelector('.exam-passed-percentage');
    // var percentfailedStudents = document.querySelector('.exam-failed-percentage');











    // var validationMessage = validation(selectSubject, firstName, lastName, grade);

    // if (validationMessage == error.OK) {

        // objekat subject

        

        // objekat student

       

        // write a function that updates the part of the page with the statistics

        numberOfStudents++;
        totalStudents.innerHTML = numberOfStudents;


        // objekat exam

       

        errorField.innerHTML = '';

        if (exam.hasPassed() == true) {
            passField.innerHTML += '<p class="item">' + exam.getExamInfo() + '</p>';
            numberOfPass++;
            passedStudents.innerHTML = numberOfPass;
            percentOfPass = numberOfPass / numberOfStudents * 100;
            percentpassedStudents.innerHTML = percentOfPass.toFixed(2) + '%';

            percentOfFailed = numberOfFailed / numberOfStudents * 100;
            percentfailedStudents.innerHTML = percentOfFailed.toFixed(2) + '%';

        } else {
            failedField.innerHTML += '<p class="item">' + exam.getExamInfo() + '</p>';
            numberOfFailed++;
            failedStudents.innerHTML = numberOfFailed;
            percentOfFailed = numberOfFailed / numberOfStudents * 100;
            percentfailedStudents.innerHTML = percentOfFailed.toFixed(2) + '%';

            percentOfPass = numberOfPass / numberOfStudents * 100;
            percentpassedStudents.innerHTML = percentOfPass.toFixed(2) + '%';
        }
    }




})();