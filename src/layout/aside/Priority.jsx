import { useDispatch, useSelector } from "react-redux";
import { setPriority } from "../../app/features/filters";

export default function Priority() {
    const fetchedPriority = useSelector((state) => state.filters.priority);
    const dispatch = useDispatch();
    const priorities = ["top", "mid", "low"];

    const handleClick = (value) => {
        dispatch(setPriority(value));
    };

    return (
        <fieldset className="priority">
            <legend>Priority</legend>
            {priorities.map((priority) => (
                <div
                    key={priority}
                    className={`input-label-wrapper ${priority} ${fetchedPriority.includes(priority) ? "active" : ""}`}
                >
                    <input
                        type="checkbox"
                        name="priority"
                        id={priority}
                        value={priority}
                        checked={fetchedPriority.includes(priority)}
                        onChange={() => handleClick(priority)}
                    />

                    <label htmlFor={priority}>
                        {priority}
                    </label>
                </div>
            ))}
        </fieldset>

    );
}
