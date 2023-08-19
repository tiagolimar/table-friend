export const MenuBar = () => {
  return (
    <nav className="bg-dark"><ul className="d-flex decoration-none gap-4 p-3 justify-content-end">
        <li><a className="btn btn-warning" href="/">HOME</a></li>
        <li><a className="btn btn-warning" href="/usuarios">USUÁRIOS</a></li>
        <li><a className="btn btn-warning" href="/login">&#128270;LOGIN</a></li>
    </ul></nav>
  )
}
