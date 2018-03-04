function  Subject(nameOfSubject) {
    this.nameOfSubject = nameOfSubject;
}

Subject.prototype.getSubjectName = function (){
    return this.nameOfSubject;
}
