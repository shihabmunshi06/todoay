import Complete from "../svg/Complete";
import Edit from "../svg/Edit";


export default function ButtonWrapper({ handleEdit, handleComplete }) {
    return (
        <div className="button-wrapper">
            <button onClick={handleEdit} className="edit">
                <Edit />
            </button>

            <button onClick={handleComplete} className="complete">
                <Complete />
            </button>
        </div>
    )
}
