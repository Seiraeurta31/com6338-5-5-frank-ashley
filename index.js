var form = document.getElementById('add-todo')

//define variable for test code compensation
const todoList = document.getElementById('todo-list')

form.onsubmit = function(e){
    //stop form from auto submitting
    e.preventDefault()
    
    // access the data etodoElntered by user
    var dataEl = document.querySelector('input').value
    
    //validate user input: void if string only contains whitespace (ie. spaces, tabs, null or line breaks
    if (!dataEl.replace(/\s/g, '').length) {
      console.log('string only contains whitespace (ie. spaces, tabs or line breaks)')
      return
    }

    //record user item input
    var ulEl = document.getElementById('todo-list')
    
    //create new list and button item
    var liElement = document.createElement('li') 
    var buttonElement = document.createElement('button')
    
    //assign user input item value to button  
    buttonElement.textContent = (dataEl)

    //appended button to the list item
    liElement.appendChild(buttonElement)
    
    //appended list item to list
    ulEl.appendChild(liElement)

    //when list button is clicked, call function to add strike or remove per status
    buttonElement.addEventListener('click', strike)

    //add strike to completed task (or) delete already striked task to remove
    function strike(){
        if(buttonElement.style.textDecoration == 'line-through'){
            this.parentElement.remove(liElement);
        }
        else{
            buttonElement.style.textDecoration = 'line-through'
        }
    }

    //reset form field
    document.querySelector('input').value = ''

}

