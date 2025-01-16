export default function MobileNav({ toggleAside }) {
    return (
        <nav className="mobile-nav">
            <ul>
                <li onClick={() => toggleAside()}>button</li>
                <li>Today</li>
                <li>Previous</li>
            </ul>
        </nav>
    )
}
