import { useDispatch } from "react-redux";
import { setPriority } from "../app/features/todos";

import trash from "./svg/trash.svg"
import Complete from "./svg/Complete";
import Edit from "./svg/Edit";

import { deleteTodo, editTodo, completeTodo } from "../app/features/todos";
import { useState } from "react";

export default function TodoCard({ data }) {
    const { id, heading, details, status, priority } = data
    const dispatch = useDispatch()

    const [editState, setEditState] = useState(false)
    const [edit, setEdit] = useState({
        heading: heading,
        details: details
    })


    const priorities = ["top", "mid", "low"];

    const handleChange = (value) => {
        dispatch(setPriority({ id, priority: value }))
    };

    const handleDelete = () => {
        dispatch(deleteTodo(data))
    }

    const handleEdit = () => {
        setEditState(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editTodo({
            id: id,
            status: status,
            priority: priority,
            ...edit
        }))
        setEditState(false)
    }
    const handleTodoChange = (e) => {
        const { id, value } = e.target
        setEdit(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleInput = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }


    const handleComplete = () => {
        dispatch(completeTodo(id))
    }

    return (
        <div className={`todo-card-shadow ${status === "complete" ? "complete" : ""}`}>
            <div className="todo-card">

                {editState === false ?
                    <>
                        <h1>{heading}</h1>
                        <p>{details}</p>
                    </>

                    :
                    <form onSubmit={handleSubmit}>
                        <textarea onInput={handleInput} onChange={handleTodoChange} type="text" id="heading" value={edit.heading} />
                        <textarea onInput={handleInput} onChange={handleTodoChange} type="text" id="details" value={edit.details} />
                        <button type="submit">edit changes</button>
                    </form>
                }

                <div className="bottom-part">
                    <div className="button-wrapper">
                        <button onClick={handleComplete} className="complete">
                            <Complete />
                        </button>
                        <button onClick={handleDelete} className="delete">
                            <img src={trash} alt="" />
                        </button>
                        <button onClick={handleEdit} className="edit">
                            <Edit />
                        </button>
                    </div>

                    <fieldset className="priority-circles">

                        {priorities.map((e) => (
                            <input
                                key={e}
                                className={`${e} ${e === priority ? "active" : ""}`}
                                type="checkbox"
                                name="priority"
                                id={e}
                                value={e}
                                checked={e === priority}
                                onChange={() => handleChange(e)}
                            />

                        ))}

                    </fieldset>
                </div>


            </div>
        </div>

    )
}
