const Header = ({tabs}) => (
    <>
        <a id="logo-header">
			<span class="site-name">Ome rescate </span>
			<span class="site-desc">Enfermería / Atención a desastres / Informando</span>
		</a>
		<nav id='menu'>          
			<ul>
                {tabs.map(tab => <li key={tab.name}><a href={tab.href}>{tab.name}</a></li>)}
			</ul>
		</nav>
    </>  
  )
  
export default Header