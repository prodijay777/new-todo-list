import { pubSub } from "./pubsub";

export function formHandler() {
    const todoForm = document.querySelector("#todoForm")
    console.log(todoForm)
    const submitTodo = document.querySelector("#todoSubmit");
    const todoTitle = document.querySelector("#todoTitle").value;
    const todoDescription = document.querySelector("#todoDescription").value;
    const todoDueDate = document.querySelector("#todoSubmit").value;
    const todoPriority = document.querySelector("#todoSubmit").value;
    submitTodo.addEventListener("click", () => {
        // pubsub for creating a new todo
        pubSub('todoFormSubmitted', )

    })





    const projectForm = document.querySelector("#projectForm")
    console.log(projectForm)

    const submitProject = document.querySelector('#projectSubmit')
    submitProject.addEventListener("click", () => {
        // pubSub for creating a new project
        pubSub.publish('projectFormSubmitted', document.querySelector('#projectForm input').value)
        console.log(document.querySelector('#projectForm input').value)
    })
}