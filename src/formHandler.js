import { pubSub } from "./pubsub";

export function formHandler() {

    const resetForm = (form) => {
        form.reset()
    }

    const todoForm = document.querySelector("#todoForm")
    console.log(todoForm)
    const submitTodo = document.querySelector("#todoSubmit");

    const getTodoArgs = () => {
    const todoTitle = document.querySelector("#todoTitle").value;
    const todoDescription = document.querySelector("#todoDescription").value;
    const todoDueDate = document.querySelector("#dueDate").value;
    const todoPriority = document.querySelector("#todoPriority").value;
    const todoArgs = [todoTitle, todoDescription, todoDueDate, todoPriority]
    return todoArgs;
    }

    submitTodo.addEventListener("click", (e) => {
        e.preventDefault();
        // pubsub for creating a new todo
        pubSub.publish('todoFormSubmitted', getTodoArgs());
        resetForm(todoForm);
    })





    const projectForm = document.querySelector("#projectForm")
    console.log(projectForm)

    const submitProject = document.querySelector('#projectSubmit')
    submitProject.addEventListener("click", (e) => {
        e.preventDefault();
        // pubSub for creating a new project
        pubSub.publish('projectFormSubmitted', document.querySelector('#projectForm input').value)
        console.log(document.querySelector('#projectForm input').value)
        resetForm(projectForm);
    })
}