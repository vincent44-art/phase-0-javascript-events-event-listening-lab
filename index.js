function addingEventListener() {
}
function addingEventListener() {
    // Select the button element
    const input = document.getElementById('button');
  
    // Define the event handler function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Attach event listener
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to activate the event listener
  addingEventListener();
  
