import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../app/features/filters";

import Checkmark from "../../components/svg/Checkmark";

export default function Status() {
    const fetchedStatus = useSelector(state => state.filters.status);

    const dispatch = useDispatch();
    const statuses = ["all", "complete", "incomplete",];

    const handleClick = (value) => {
        dispatch(setStatus(value));
    };

    return (
        <fieldset className="status">
            <legend>Status</legend>
            {statuses.map((status) => (
                <div
                    key={status}
                    className={`input-label-wrapper ${status} ${status === fetchedStatus ? "active" : ""}`}
                >
                    <div className="input-checkmark-wrapper">
                        <input
                            type="radio"
                            name="status"
                            id={status}
                            value={status}
                            checked={fetchedStatus === status}
                            onChange={() => handleClick(status)}
                        />
                        <Checkmark />
                    </div>
                    <label htmlFor={status}>{status}</label>
                </div>
            ))}
        </fieldset>

    );
}
