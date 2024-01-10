document.getElementById("add_btn").addEventListener("click", function(event){
    event.preventDefault()

    let todo = document.getElementById("new_todo_item").value
    //create element
    //add content
    //append
    let ordered_list = document.getElementById("todo_list")
    //let li = document.createElement("li")
    //li.textContent = todo
    //console.log(li)
    //ordered_list.appendChild(li)


    fetch("http://localhost:3000/todos") //or put url in place of "quoted in brackets"
    .then(data => data.json())
    .then(usable_data => {
        
        usable_data.todos.forEach(todo => {
            let li = document.createElement("li")
            li.textContent = todo.name
            ordered_list.appendChild(li)
        });
    })
})

//Update from screenshot though appears to be up to date
//Unrelated note: Install postman;
//sudo snap install postman
