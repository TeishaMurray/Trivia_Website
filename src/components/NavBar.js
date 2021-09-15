import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/compscitrivia">Computer Science Trivia</Link></li>
                <li><Link to="/htmlcssquiz">HTML + CSS Quiz</Link></li>
                <li><Link to="jsarrayquiz">JavaScript Array Methods Quiz</Link></li>
            </ul>
        </div>
    )
}

export default NavBar