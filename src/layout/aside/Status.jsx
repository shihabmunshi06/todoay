import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../app/features/filters";

import Checkmark from "../../components/svg/Checkmark";

export default function Status() {
    const fetchedStatus = useSelector(state => state.filters.status);

    const dispatch = useDispatch();
    const statuses = [
        { label: "All", value: "all" },
        { label: "Complete", value: "complete" },
        { label: "Incomplete", value: "incomplete" },
    ];

    const handleClick = (value) => {
        dispatch(setStatus(value));
    };

    return (
        <div className="status-shadow">
            <fieldset className="status">
                <legend>Status</legend>
                {statuses.map((status) => (
                    <div className={`input-label-wrapper ${status.value} ${status.value === fetchedStatus ? "active" : ""}`} key={status.value}>
                        <div className="input-checkmark-wrapper">
                            <input
                                type="radio"
                                name="status"
                                id={status.value}
                                value={status.value}
                                checked={fetchedStatus === status.value}
                                onChange={() => handleClick(status.value)}
                            />
                            <Checkmark />
                        </div>
                        <label htmlFor={status.value}>{status.label}</label>
                    </div>
                ))}
            </fieldset>
        </div>

    );
}
