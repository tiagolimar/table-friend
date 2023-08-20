import {Link} from 'react-router-dom'

export const MenuBar = () => {
    return (
    <nav className="bg-dark"><ul className="d-flex decoration-none gap-4 p-3 justify-content-end">
        <li><Link className="btn btn-warning" to="/">HOME</Link></li>
        <li><Link className="btn btn-warning" to="/usuarios">USUÁRIOS</Link></li>
        <li><Link className="btn btn-warning" to="/login">&#128270;LOGIN</Link></li>
    </ul></nav>
  )
}
