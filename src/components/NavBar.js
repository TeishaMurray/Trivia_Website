import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="menu-header">
                <h2>Menu</h2>
            </div>
            <div className="menu-list">
                <ul>
                    <div className="menu-items"><li><Link to="/">Home</Link></li></div>
                    <div className="menu-items"><li><Link to="/compscitrivia">Computer Science Trivia</Link></li></div>
                    <div className="menu-items"><li><Link to="/htmlquiz">HTML Quiz</Link></li></div>
                    <div className="menu-items"><li><Link to="/jsarrayquiz">JavaScript Array Methods Quiz</Link></li></div>
                    <div className="menu-items"><li><Link to="/resources">Resources</Link></li></div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar