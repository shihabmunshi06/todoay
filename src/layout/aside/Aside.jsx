import Status from "./Status"
import Priority from "./Priority"
import Date from "./Date"

export default function Aside({ aside, toggleAside }) {
    return (
        <div className={`aside-dark-bg ${aside ? "active" : ""}`}>
            <div className="aside">
                <Status />
                <Priority />
                <Date />
            </div>
            <button onClick={() => toggleAside()}>close</button>
        </div>

    )
}
