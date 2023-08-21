import {Link} from 'react-router-dom'

export const MenuBar = () => {
    return (
    <nav><ul className="d-flex decoration-none gap-2 p-2 justify-content-between">
        <div>
            <h1>TableFriend</h1>
        </div>
        <div className='d-flex decoration-none gap-3 p-2 justify-content-end'>
            <li><Link className="btn nav-button" to="/">HOME</Link></li>
            <li><Link className="btn nav-button" to="/usuarios">USUÁRIOS</Link></li>
            <li><Link className="btn nav-button" to="/login">LOGIN</Link></li>
        </div>
    </ul></nav>
  )
}
