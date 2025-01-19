import { useSelector } from "react-redux"

import TodoCard from "../../components/todocard/TodoCard"

export default function Todos() {

    const todos = useSelector(state => state.todos.todos)

    return (
        <div className="todos">

            {todos ?
                todos.map(e => <TodoCard key={e.id} data={e} />) :
                <p>todo is loading</p>
            }

        </div>
    )
}

