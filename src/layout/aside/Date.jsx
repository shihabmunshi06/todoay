import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../app/features/filters";

import Checkmark from "../../components/svg/Checkmark";

export default function Date() {

    const fetchedDate = useSelector((state => state.filters.date))
    const dates = ["today", "yesterday", "all dates",];
    const dispatch = useDispatch()


    const handleClick = (value) => {
        dispatch(setDate(value))
    }

    return (
        <fieldset className="date">
            <legend>Date</legend>
            {dates.map((date) => (
                <div
                    key={status}
                    className={`input-label-wrapper ${date} ${date === fetchedDate ? "active" : ""}`}
                >
                    <div className="input-checkmark-wrapper">
                        <input
                            type="radio"
                            name="status"
                            id={date}
                            value={date}
                            checked={fetchedDate === date}
                            onChange={() => handleClick(date)}
                        />
                        <Checkmark />
                    </div>
                    <label htmlFor={date}>{date}</label>
                </div>
            ))}
        </fieldset>
    )
}
