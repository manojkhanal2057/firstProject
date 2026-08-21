// function giveIntro(sayName , sayAge , greet){
// sayName("manoj")
// sayAge(20)
// greet("Kapil")
// }

// giveIntro( function (name){
//     console.log("My name is ",name);
// }
// , function (age){
//     console.log("I am ",age ,"years old");
// },  function (user){
//     console.log("Good morning ", user);
// })\


function mark(num){
    function aGrade(){
        return "You get a car"
    }

    function bGrade(){
        return "You get a bike"
    }

    function cGrade(){
        return "you get a auto-rikasa"
    }

    if(num>50){
        return aGrade;
    }
    else if(num>30){
        return bGrade
    }else{
        return cGrade;
    }
}



console.log(mark(70)());

