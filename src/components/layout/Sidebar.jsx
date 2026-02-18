export default function Sidebar() {
  return <aside>
    <div className="logoSide">FassiauCRM</div>
    <nav className="navSide">
        <a><i class="fa-solid fa-gauge"></i> Dashboard</a>
         <a className="active"><i class="fa-solid fa-user-group"></i> Clients</a>
          <a><i class="fa-solid fa-gears"></i> Paramètres</a>
    </nav>
    <div className="userSide">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZyRgxyRdSwmDcWr7roq1lmoX_OLPkXMcOAKBH66Cz0tQ6pzxBAknG150XkUGbfqnkU-PxkU4loCefdopFlpCncT5NPGyG0ReFSgf1ojm8xbySdEGdxv5Kt5grYzsW1fyfhhbN-QgJ2ozt8Kcc5Ec0HCNdJn-jvbo6Wd0txbj0ORA5i14jt1wVY-NyJ-MEdTGpzFZhL4y5HYRz6qW24kGn2ZUClmJvKDzWvQvwVOjK5y07UVmBdFv7PZWLz9GNuedfW2HwILsj4Rlf" />
        <p>Cyril Fassiau</p>
        </div>
  </aside>
}