export default function TopPart() {
    const date = new Date();

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const suffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    const modifiedDate = `${day}${suffix(day)} ${month}, ${year}`;

    return (

        <div className="top-part">
            <div className="date">
                <p>{modifiedDate}</p>
            </div>

            <div className="right-side">
                <p><span>4</span> tasks left</p>
                <button>complete all</button>
            </div>
        </div>
    )
}
