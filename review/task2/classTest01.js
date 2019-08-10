/*방법1(과제에서 원하는 방식?)(aka.깔끔)*/
function student (info){

    this.getName = function(){
       return info.name;
    };
    this.toString = function(){
       return "ID: " + info.id + "  /Name: " + info.name 
       + "  /영어점수: " + info.scoreEnglish + "  /수학점수: " + info.scoreMath;
    };
    this.getAverage = function(){
       return(info.scoreEnglish + info.scoreMath) / 2;
    };
    
};

var stu1 = new student({id: 1004, name: '조준영', scoreEnglish: 80, scoreMath: 50});
alert(stu1.toString());
alert(stu1.getName() + '의 평균점수: ' + stu1.getAverage());
///////

/*방법2(이방법은 외않되?)*/
function student2(){
    this.id = 0;
    this.name = "";
    this.scoreEnglish = 0;
    this.scoreMath = 0;
     
    this.getName = function(){
        return this.name;
     };
     this.toString = function(){
        return "ID: " + this.id + "  /Name: " + this.name 
        + "  /영어점수: " + this.scoreEnglish + "  /수학점수: " + this.scoreMath;
     };
     this.getAverage = function(){
        return(this.scoreEnglish + this.scoreMath) / 2;
     };
 };

var stu2 = new student2();
stu2.id = 7272;
stu2.name = "꼬르꼬";
stu2.scoreEnglish = 10;
stu2.scoreMath = 76;

alert(stu2.toString());

    ///중간에 원하는 값만 쉽게 변경 가능한데
stu2.name = "꼬르꼬투"
alert(stu2.getName() + '의 평균점수: ' + stu2.getAverage());
///////

/*방법3(객체 리터럴) 찾다가 이런방법도 있어서 해봄*/
//싱글톤이라 하나밖에 생성 못해서 클래스는 아니긴한듯
var student3 = {
    id : 0,
    name : '',
    scoreEnglish : 0,
    scoreMath : 0,
    toString : function(e){
       return "ID: " + this.id + "  /Name: " + this.name 
       + "  /영어점수: " + this.scoreEnglish + "  /수학점수: " + this.scoreMath;
    },
    getAverage : function(e){
       return (this.scoreEnglish * 1 + this.scoreMath * 1) / 2;
    },
    getName : function(e){
       return this.name;
    }
};

student3.id = 7272;
student3.name = '꼬꼬';
student3.scoreEnglish = 70;
student3.scoreMath = 10;
alert(student3.toString());
alert(student3.getName() +"의 평균점수 : " + student3.getAverage());
