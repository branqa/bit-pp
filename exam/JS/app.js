var appModule = (function (formModule, dataModule) {
    var pass = 0;
    var fail = 0;
    document.querySelector('.add-btn').addEventListener('click', function () {
        formModule.clearError();
        var form = formModule.getFormData();
        var allData = dataModule.allInOne(form.subjectInputData, form.studentInputNameData, form.studentInputSurnameData, form.gradeInputData)
        var passedExam = document.querySelector('.passed-list');
        var failedExam = document.querySelector('.failed-list');
        var examInfo = document.createTextNode(allData.getExamInfo());

        var validationResult = formModule.validation(form.subjectInputData, form.studentInputData, form.gradeInputData);
        
        if (validationResult == 'OK') {
            
            if (allData.hasPassed() == true) {
                    pass++;
                passedExam.appendChild(formModule.updateList(examInfo));
            } else {
                fail++;
                failedExam.appendChild(formModule.updateList(examInfo));
            }
            formModule.updateStatistics(pass, fail);
        } else {
            formModule.setError(validationResult);
        }

    })


})(formModule, dataModule);