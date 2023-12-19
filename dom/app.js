document.getElementById("add_btn").addEventListener("click", function(event){
    event.preventDefault()

    let todo = document.getElementById("new_todo_item").value
    //create element
    //add content
    //append
    let ordered_list = document.getElementById("todo_list")
    let li = document.createElement("li")
    li.textContent = todo
    //console.log(li)
    ordered_list.appendChild(li)
})