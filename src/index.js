document.addEventListener('DOMContentLoaded', function() {

  const newBoxFormContainer = document.querySelector('#new-box-form-container')

  newBoxFormContainer.innerHTML = `
    <form>
      <input type="text" placeholder="Box label..." />
      <input type="number" placeholder="Box length..." />
      <input type="number" placeholder="Box width..." />
      <input type="number" placeholder="Box height..." />
      <input type="submit" value="Submit" />
    </form>
  `

})
