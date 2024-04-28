import './Header.css'
const Header = ({tabs}) => (
    <header className="header">
        <a className="logo-container">
			<span className="logo-text">Ome rescate </span>
			<span className="logo-subtext">Enfermería / Atención a desastres / Informando</span>
		</a>
		<nav className="nav-menu">          
			<ul className="nav-list"> 
                {tabs.map(tab => <li key={tab.name}><a href={tab.href} className="nav-link">{tab.name}</a></li>)}
			</ul>
		</nav>
    </header>  
  )
  
export default Header