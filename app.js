// const btn = document.querySelectorAll(".btn-down");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

const article = document.querySelectorAll(".article");
article.forEach(function (item) {
    const btn = item.querySelector(".btn-down");

   
    btn.onclick = function () {
        //  check for the accordination
        
        answer.forEach(function (event) {
            let ans = item.querySelector(".answer");
            if (event === ans) {
              event.classList.add('show-text')
            } else {
                event.classList.remove('show-text')
            }
           
        })
         
        //  To check for question color
         
           question.forEach(function (e) {
            let quiz = item.querySelector(".question")
            if (e === quiz) {
                e.classList.toggle('color-quiz');
            } 
                
            
           
        })
         
         

        }
    
})
