let questions = [
    {
        numb:1,
        question:'Who Created This?',
        answer:"Aung Kyaw Ching",
        options:[
            "Education Board",
            "Aung Kyaw Ching",
            "Foreign Company",
            "Nobody"
        ]
    },
    {
        numb: 2,
        question: "Who can be partner of this app?",
        answer: "Who Will Upload Question",
        options: [
          "Nobody",
          "Who Will Upload Question",
          "By Buying Share",
          "Everyone"
        ]
      },
      {
        numb: 3,
        question: "How to join as a partner?",
        answer: "By Contact with this app creator",
        options: [
          "By contact Ministry",
          "Without Requirement",
          "By Contact Education Board",
          "By Contact with this app creator"
        ]
      },
    
      {
        numb: 4,
        question: "How Can I Contact?",
        answer: "Whats App:- 01822107947",
        options: [
          "Whats App:- 01822107947",
          "Unavailable",
          "Unreachable",
          "By Facebook"
        ]
      },
]



function showResultBox(){
    RulesBox.classList.remove("activeInfo"); 
    Questions.classList.remove("activeQuiz"); 
    reslut_box.classList.add("activeResult");
    
    const scoreText = document.querySelector(".score_text"); 
    if(userScore > 2){//Change the good number
       let scoreTag = '<span>Congratulations You Got <p>'+ userScore +'</p> Out Of <p>'+questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
   else if(userScore > 1){// Change The Pass Number
        let scoreTag = '<span>Carry On 👌 You Got <p>'+ userScore +'</p> Out Of <p>'+questions.length +'</p></span>';
         scoreText.innerHTML = scoreTag; 
     }
     else{
        let scoreTag ='<span> I Am  Sorry You Got <p>'+ userScore +'</p> Out Of <p>'+ questions.length +'</p></span>'; 
    
        scoreText.innerHTML = scoreTag;
    }
   
}