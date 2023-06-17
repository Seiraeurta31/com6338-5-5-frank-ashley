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
    
    
    //create new list and button item
    var liElement = document.createElement('li') 
    var buttonElement = document.createElement('button')
    
    //assign dataEL to button  
    buttonElement.textContent = (dataEl)

    //appended button to the list item
    liElement.appendChild(buttonElement)
    console.log(liElement)
    
    //appended list item to list
    ulEl.appendChild(liElement)

    console.log(ulEl)

    //when button clicked, call function to add strike or remove
    buttonElement.addEventListener('click', strike)
    console.log(buttonElement.innerHTML + "inner HTML")

    //add strike to completed task (or) delete already striked task to remove
    function strike(){
        if(buttonElement.style.textDecoration == 'line-through'){
            this.parentElement.remove(liElement);
        }
        else{
           //add strike \
        console.log('striked')
        buttonElement.style.textDecoration = 'line-through'
        }
    }

    //reset form field
    document.querySelector('input').value = ''

}
