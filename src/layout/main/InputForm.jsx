import { useState } from "react"
import { addTodo } from "../../app/features/todos"
import { useDispatch } from "react-redux"

export default function InputForm() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")


    const [inputFocus, setInputFocus] = useState(false)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleTextChange = (e) => {
        setDetails(e.target.value)
    }
    const handleFocus = () => {
        setInputFocus(true)
    }
    const handleBlur = () => {
        setInputFocus(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({
            heading: title,
            details: details,
            status: "incomplete",
            priority: "top"
        }))

    }
    return (
        <div className="input-form-shadow">
            <form className="input-form" onSubmit={handleSubmit} action="/">
                <div className={`input-wrapper ${inputFocus && "active"}`}>
                    <input
                        name="title"
                        placeholder="type your todo"
                        onChange={handleTitleChange}
                        value={title}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <input
                        name="text"
                        placeholder="type alternate texts"
                        onChange={handleTextChange}
                        value={details}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>

                <button>add</button>
            </form>
        </div>

    )
}
