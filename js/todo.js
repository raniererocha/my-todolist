const title = document.getElementById("title")
const resume = document.getElementById("resume")
const send = document.getElementById("send")
const list = document.getElementById("list")


const data = [];

    const createTodoItem = (data) => {
        if (title.value === "") {
            throw new Error("Campo de título está vazio!")
        }
        let todoItem = {
            title : title.value,
            resume: resume.value,
            isComplete: false
        }
        data.push(todoItem)
        return data
    }

    

    const render = (data) => {
        list.innerHTML = ''
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
        title.value = ''
        resume.value = ''
    }


    send.addEventListener("click", () => {
        try {
            render(createTodoItem(data))
        } catch (error) {
            alert('Por favor, digite o título da ToDo')
        }
    })