function Exam(subject, student, grade){
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
    return this.subject + ', ' + this.student;
}

Exam.prototype.hasPassed = function () {
    if (this.grade>5){
      return "Student " + this.student.getStudentData() + " has passed the exam " + this.subject + " with grade " + this.grade;
    }
else if (this.grade <=5){
      return "Student" + this.student.getStudentData() + " hasn't passed the exam " + this.subject + " with grade " + this.grade;
    }
}


     