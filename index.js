var form = document.getElementById('add-todo')
form.onsubmit = function(e){
    //stop form from auto submitting
    e.preventDefault()
    console.log('submitted')

    // access the data entered by user
    var dataEl = document.querySelector('input').value
    console.log(dataEl)

    //validate user input: void if string only contains whitespace (ie. spaces, tabs, null or line breaks
    if (!dataEl.replace(/\s/g, '').length) {
      console.log('string only contains whitespace (ie. spaces, tabs or line breaks)')
      return
    }


    //access To Do List
    var ulEl = document.getElementById('todo-list')
    //access placeholder
    
    
    //create new list item
    var liElement = document.createElement('li') 
    var buttonElement = document.createElement('button') 
    
    //assign input to list element and add to ul
    liElement.textContent = (dataEl)
    ulEl.appendChild(liElement)

    //reset form field
    document.querySelector('input').value = ''

}





// var target = "";
// var parent = "";
// var page = "";