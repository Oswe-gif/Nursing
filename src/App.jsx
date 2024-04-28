import Profile from './components/profile'
import Header from './components/header'
import './App.css'

function App() {
  const users = [{
    name: "Jhoan Oswaldo Ome Vega",
    profesion:"Ingenieria informática",
    semester:"Noveno",
    photo:"https://cdn.britannica.com/11/65311-050-B33FC90E/Gila-monster-on-sand.jpg"
  },
  {
    name: "Juan Felipe Mejia",
    profesion:"Ingenieria informática",
    semester:"Noveno",
    photo:"https://cdn.britannica.com/11/65311-050-B33FC90E/Gila-monster-on-sand.jpg"
  }]
  const tabs=[{
    name:'¿Quiénes somos?', 
    href:"#us"
  },
  {
    name:'Información', 
    href:"#information"
  }]

  return (
    <>
      <Header tabs={tabs}/>
      <div id="us">
        <h1>¿Quiénes somos?</h1>
      </div>
      
      {users.map(user=>
        <Profile user={user} key={user.name}/>
      )}
      
      <div id="information">
        <h1>Información</h1>
        <p>eddemmdeedmdemdekdemkmkdemkde</p>
        <p>eddemmdeedmdemdekdemkmkdemkde</p>
        <p>eddemmdeedmdemdekdemkmkdemkde</p>
        <p>eddemmdeedmdemdekdemkmkdemkde</p>
        <p>eddemmdeedmdemdekdemkmkdemkde</p>
        <p>eddemmdeedmdemdekdemkmkdemkde</p>
        <p>eddemmdeedmdemdekdemkmkdemkde</p>
        <p>eddemmdeedmdemdekdemkmkdemkde</p>
      </div>
    </>
  )
}

export default App
