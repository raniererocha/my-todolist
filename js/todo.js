const title = document.getElementById("title")
const resume = document.getElementById("resume")
const send = document.getElementById("send")
const list = document.getElementById("list")

const memory = JSON.parse(localStorage.getItem('todo'))
const data = [];

    const createTodoItem = (data, memory) => {
        if (memory === null) {
            if (title.value === "") {
                throw new Error("Campo de título está vazio!")
            }
            let todoItem = {
                title : title.value,
                resume: resume.value,
                isComplete: false
            }
            data.push(todoItem)
            localStorage.setItem('todo', JSON.stringify(data))
            
            return data
        } else {
            data = memory
            if (title.value === "") {
                throw new Error("Campo de título está vazio!")
            }
            let todoItem = {
                title : title.value,
                resume: resume.value,
                isComplete: false
            }
            data.push(todoItem)
            localStorage.setItem('todo', JSON.stringify(data))
            
            return data
        }
    }

    

    const render = (data) => {
        list.innerHTML = ''
            if(data === null) {
                    list.innerHTML += `<li>
                    <h2>Nenhuma tarefa!</h2>
                </li>`
            } else {
                data.forEach(todoItem => {
                    let {title, resume, isComplete} = todoItem
                    list.innerHTML += `<li>
                    <article>
                        <h2>${title}</h2>
                        <p>${resume}</p>
                        <div>
                            <button>
                                Del
                            </button>
                            <button>
                                Concluir
                            </button>
                        </div>
                    </article>
                </li>`
                });
            }
        title.value = ''
        resume.value = ''
    }

    render(memory)

    send.addEventListener("click", () => {
        try {
            render(createTodoItem(data, memory))
        } catch (error) {
           console.log(error)
        }
    })