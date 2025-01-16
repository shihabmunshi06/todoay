import { useDispatch, useSelector } from "react-redux";
import { setPriority } from "../../app/features/filters";

export default function Priority() {
    const fetchedPriority = useSelector((state) => state.filters.priority);
    const dispatch = useDispatch();
    const priorities = [
        { label: "Top", value: "top" },
        { label: "Mid", value: "mid" },
        { label: "Low", value: "low" },
    ];

    const handleClick = (value) => {
        dispatch(setPriority(value));
    };

    return (
        <div className="priority-shadow">
            <fieldset className="priority">
                <legend>Priority</legend>
                {priorities.map((priority) => (
                    <div key={priority.value} className="label-input-wrapper">
                        <input
                            type="checkbox"
                            name="priority"
                            id={priority.value}
                            value={priority.value}
                            checked={fetchedPriority.includes(priority.value)}
                            onChange={() => handleClick(priority.value)}
                        />

                        <label htmlFor={priority.value}>
                            {priority.label}
                        </label>
                    </div>
                ))}
            </fieldset>
        </div>

    );
}
