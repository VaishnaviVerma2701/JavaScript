 let rendomNumber=console.log(Math.random()*100+1)

  const submit=document.querySelector('#subt')
  const userInput=document.querySelector('#guessField')
  const guessSlot = document.querySelector('.guesses')
  const remaining = document.querySelector('.lastResult')
  const lowOrHi = document.querySelector('.lowOrHi')
  const startOver = document.querySelector('.resultParas')

  const p = document.createElement('p')

  let prevGuess =[];
  let numGuess = 1;
  let playGame = true;


  if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
  }
// it check tha num btw 1 to 100 or not
  function validateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter the valid number')
    }
     else if(guess< 1){
        alert('please enter the  number more than 1')
    }
    else if(guess>100){
        alert('please enter the  number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over . Randam number was ${rendomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
  }

  // it check the num is = random num or less than or high
  function  checkGuess(guess) {
    if(guess === rendomNumber){
        displayMessage(`You guessed is right `)
    }
     else if(guess < rendomNumber){
        displayMessage(`Number is Tooo low`)
    }
    else if(guess > rendomNumber){
        displayMessage(`Number is Tooo high`)
    }

  }

  // it is clean the num , update the array , check the remaining num
   function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML+= `${guess} , `
    numGuess++;
    remaining.innerHTML=`${11-numGuess} `
   }
  // it is print the message
   function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
   }


   function newGame() {
     const newGameButton = document.querySelector('#newGame')
     newGameButton.addEventListener('click' , function(e){
        rendomNumber = parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess = 1
        guessSlot.innerHTML=''
        userInput.removeAttribute('disabled')
    startOver.removeChild(p)
        playGame = true  
     })
   }
    
   function endGame() {
    userInput.value =''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false;
    remaining.innerHTML=`${11-numGuess} `
    newGame()

   }