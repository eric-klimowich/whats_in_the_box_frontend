//************************* Global Variables **************************//
const boxesUrl = "http://localhost:3000/api/v1/boxes";
let allBoxesArray = []
//********************** End of Global Variables **********************//


//******************** Listen for DOMContentLoaded ********************//
document.addEventListener('DOMContentLoaded', function() {

//**************** Variables Local to DOMContentLoaded ****************//
  const newBoxFormContainer = document.querySelector('#new-box-form-container')
  const boxesContainer = document.querySelector('#boxes-container')
//************* End of Variables Local to DOMContentLoaded ************//


//************************** Fetch All Boxes **************************//
  fetch(boxesUrl)
    .then(r => r.json())
    .then(allBoxes => {
      allBoxesArray = allBoxes
      console.log(allBoxesArray)
      renderAllBoxes(allBoxesArray)
    })
//*********************** End of Fetch All Boxes **********************//


//*************************** New Box Form ****************************//
  newBoxFormContainer.innerHTML = `
    <form>
      <input type="text" placeholder="Box label..." />
      <input type="number" placeholder="Box length..." />
      <input type="number" placeholder="Box width..." />
      <input type="number" placeholder="Box height..." />
      <input type="submit" value="Submit" />
    </form>
  `
//************************ End of New Box Form ************************//

//**************************** Functions ******************************//
  const renderAllBoxes = (allBoxesArray) => {
    allBoxesArray.forEach((singleBox) => {
      renderSingleBox(singleBox)
    })
  }

  const renderSingleBox = (box) => {
    boxesContainer.innerHTML += `
      <p>${box.label}</p>
    `
  }
//************************* End of Functions **************************//

})


//***************** End of Listen for DOMContentLoaded ****************//
