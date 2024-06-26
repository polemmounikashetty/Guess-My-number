
        //creating a secretNumber
        //Math.random(gives the point values like 0.46536547)
        //Math.random()*20-(gives the vaues between 1 and 20 including 0.something values)
        //removing the 0.somthing values we need to add+1------(Math.random()*20+1)
        //Math.trunc (removes the point values) and get the values btw (1 and 20)
       
       
        let secretNumber=Math.trunc(Math.random()*20+1);
        console.log(secretNumber);
         
        //Declaring the  defalut score and highscore 
        let score=20;
        let highscore=0;

        //Logic
        document.getElementById("check").addEventListener("click",()=>
            {
            //creating a variable to store the guessed values
            const guessedNo=Number(document.getElementById("guess").value);

            //if there is no number
            if(!guessedNo){
                document.querySelector(".msg").textContent="No Number!"
            }
    //when the palyer win
            else if(guessedNo===secretNumber)
            {
                document.querySelector(".msg").textContent="Correct Number!"

                document.querySelector(".number").textContent=secretNumber;
                document.querySelector("body").style.backgroundColor="green";
    
                     //highscore
                      if(score>highscore){
                          highscore=score;
          
                          document.querySelector('#highscore').textContent=highscore;
                      }
           }
    //when the guessnumber is too high
           else if(guessedNo > secretNumber)
            {
                if(score>1){
                document.querySelector(".msg").textContent="Too High!"
                score=score-1;
                document.getElementById("score").textContent=score;
                }
                else{
                    document.querySelector(".msg").textContent="Game Over!"
                    document.getElementById("score").textContent=0;
                }
            }
    //when the guessnumber is too high
            else if(guessedNo < secretNumber)
                {
                    if(score>1){
                    document.querySelector(".msg").textContent="Too low!"
                    score=score-1;
                    document.getElementById("score").textContent=score;
                    }
                    else{
                        document.querySelector(".msg").textContent="Game Over!"
                        document.getElementById("score").textContent=0;
                    }
                }

            });
 //for again button
    document.querySelector(".again").addEventListener('click',()=>{
           score=20;
           let secretNumber=Math.trunc(Math.random()*20+1);
           document.querySelector('.msg').textContent="Start Guessing...";
           document.getElementById('score').textContent=score;

           document.querySelector("body").style.backgroundColor="black";
           document.querySelector(".number").textContent="?"
           document.querySelector('#guess').value="";




    })    
    