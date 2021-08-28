// TODO: Declare any global variables we need
let numOfHeads = 0;
let numOfTails = 0;
let totalNumOfFlips = 0;

const heads = 1;
const tails = 0; 

let percentOfHeads = 0;
let percentOfTails = 0;


// ? maybe a max percentage??


document.addEventListener('DOMContentLoaded', function () {
    
    //  Add event listener and handler for flip and clear buttons

        // get the buttons 
     const flipButton = document.querySelector('#flip');
     const clearButton = document.querySelector('#clear');
     const pennyImage = document.querySelector('#penny-image');
     const status = document.querySelector('#message')
     const headsDisplay = document.querySelector('#heads')
     const tailsDisplay = document.querySelector('#tails')
     const headsPercentageDisplay = document.querySelector('#heads-percent')
     const tailsPercentageDisplay = document.querySelector('#tails-percent')

     function setImageToHeads(){
         return  pennyImage.setAttribute('src', './assets/images/penny-heads.jpg');
     }

        //  add event listener to button
    flipButton.addEventListener('click', function() {
         //  Determine flip outcome
         const outcome = Math.round(Math.random());
         console.log('outcome', outcome)



        if(outcome === heads){
            setImageToHeads();
            status.textContent = "You Flipped Heads";
            numOfHeads++;
            headsDisplay.textContent = numOfHeads;
        } else {
            pennyImage.setAttribute('src', './assets/images/penny-tails.jpg');
            status.textContent = "You Flipped Tails";
            numOfTails++;
            tailsDisplay.textContent = numOfTails;
        }

        console.log('heads count', numOfHeads)
        console.log('tails count', numOfTails)
        // THIS IS IMPORTANT 
        totalNumOfFlips = numOfHeads + numOfTails
        percentOfHeads = Math.round((numOfHeads / totalNumOfFlips) * 100)
        percentOfTails = Math.round((numOfTails / totalNumOfFlips) * 100)
        console.log('percentOfHeads',percentOfHeads)
        console.log('percentOfTails',percentOfTails)
        console.log('totalNumOfFlips', totalNumOfFlips)

        // headsPercentageDisplay.textContent = headsPercentageDisplay + '%' 
        headsPercentageDisplay.textContent = `${percentOfHeads}%`
        tailsPercentageDisplay.textContent = `${percentOfTails}%`
        // 100 + '%'  "100%"

    })

    clearButton.addEventListener('click', function(){
       // TODO: Reset global variables to 0
    //    window.location.reload();
    numOfHeads= 0;
    headsDisplay.textContent = numOfHeads;
    numOfTails=0;
    tailsDisplay.textContent = numOfTails;
    percentOfHeads=0;
    headsPercentageDisplay.textContent = `${percentOfHeads}%`
    percentOfTails =0;
    tailsPercentageDisplay.textContent = `${percentOfTails}%`
    totalNumOfFlips= 0;
    status.textContent = "Let's Get Rolling!"
    setImageToHeads()
    })

     

    

})