import { useDispatch } from "react-redux";

export default function PriorityCircles({ priority, handlePriorityChange }) {
    const priorities = ["top", "mid", "low"];

    return (
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
                    onChange={() => handlePriorityChange(e)}
                />

            ))}

        </fieldset>
    )
}
