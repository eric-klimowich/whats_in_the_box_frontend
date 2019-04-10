//************************* Global Variables **************************//
const boxesUrl = "http://localhost:3000/api/v1/boxes";
let allBoxesArray = []
//********************** End of Global Variables **********************//


//******************** Listen for DOMContentLoaded ********************//
document.addEventListener('DOMContentLoaded', function() {

//**************** Variables Local to DOMContentLoaded ****************//
  const addBoxFormContainer = document.querySelector('#add-box-form-container')
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
  addBoxFormContainer.innerHTML = `
    <form id="add-box-form">
      <input id="box-label" type="text" placeholder="Box label..." />
      <input id="box-length" type="number" placeholder="Box length..." />
      <input id="box-width" type="number" placeholder="Box width..." />
      <input id="box-height" type="number" placeholder="Box height..." />
      <input type="submit" value="Submit" />
    </form>
  `
//************************ End of New Box Form ************************//


//****************************** Add Box ******************************//
  addBoxFormContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event.target)
    let boxLabel = event.target.querySelector('#box-label').value
    let boxLength = event.target.querySelector('#box-length').value
    let boxWidth = event.target.querySelector('#box-width').value
    let boxHeight = event.target.querySelector('#box-height').value
    // console.log(boxLabel)
    document.querySelector('#add-box-form').reset()

    fetch(boxesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        label: boxLabel,
        length: boxLength,
        width:  boxWidth,
        height: boxHeight
      })
    })
  })
//*************************** End of Add Box **************************//


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
