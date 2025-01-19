import { useState } from "react";
import { useDispatch } from "react-redux";

import { editTodo, completeTodo, setPriority } from "../../app/features/todos";

import ButtonWrapper from "./ButtonWrapper";
import PriorityCircles from "./PriorityCircles";

export default function TodoCard({ data }) {
    const { id, heading, details, status, priority } = data;

    const dispatch = useDispatch()

    const handleInputHeight = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }


    const handleComplete = () => {
        dispatch(completeTodo(id))
    }

    const [editState, setEditState] = useState(false)
    const handleEdit = () => {
        setEditState(true)
    }

    const [edit, setEdit] = useState({
        heading: heading,
        details: details
    })
    const handleTodoChange = (e) => {
        const { id, value } = e.target
        setEdit(prev => ({
            ...prev,
            [id]: value
        }))
    }
    const handleChangeSubmit = (e) => {
        e.preventDefault()
        dispatch(editTodo({
            id: id,
            status: status,
            priority: priority,
            ...edit
        }))
        setEditState(false)
    }

    const handlePriorityChange = (value) => {
        dispatch(setPriority({ id, priority: value }))
    };

    return (
        <div className={`todo-card-shadow ${priority} ${status === "complete" ? "complete" : ""}`}>
            <div className="todo-card">
                <PriorityCircles priority={priority} handlePriorityChange={handlePriorityChange} />

                {editState === false ?
                    <>
                        <h1>{heading}</h1>
                        <p>{details}</p>
                    </>

                    :
                    <form onSubmit={handleChangeSubmit}>
                        <textarea onInput={handleInputHeight} onChange={handleTodoChange} type="text" id="heading" value={edit.heading} />
                        <textarea onInput={handleInputHeight} onChange={handleTodoChange} type="text" id="details" value={edit.details} />
                        <button type="submit">edit changes</button>
                    </form>
                }

                <ButtonWrapper handleEdit={handleEdit} handleComplete={handleComplete} />


            </div>
        </div>

    )
}
