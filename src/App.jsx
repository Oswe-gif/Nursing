import Profile from './components/profile'
import Header from './components/header'
import Image from './components/image.jsx';
import './App.css'
import {people} from './images/faces/index.js';

function App() {
  const users = [{
    name: "Jhoan Oswaldo Ome",
    profesion:"Ingenieria informática",
    semester:"Noveno semestre",
    photo: people.Jhoan
  },
  {
    name: "Juan Felipe Mejía",
    profesion:"Ingenieria informática",
    semester:"Noveno semestre",
    photo:people.Juan
  },
  {
    name: "Luisa Maria Moreno",
    profesion:"Administración y Servicio",
    semester:"Noveno semestre",
    photo:people.Luisa
  },
  {
    name: "Carol Sofia Vargas",
    profesion:"Economía y Finanzas",
    semester:"Quinto semestre",
    photo:people.Carol
  },
  {
    name: "Mariana Padilla Franco",
    profesion:" Ingeniería Química",
    semester:"Noveno semestre",
    photo:people.Mariana
  }

]
  const tabs=[{
    name:'¿Quiénes somos?', 
    href:"#us"
  },
  {
    name:'Evidencia', 
    href:"#evidence"
  },
  {
    name:'Reflexión', 
    href:"#reflection"
  }]

  return (
    <>
      <Header tabs={tabs}/>
      <div id="us">
        <h1>¿Quiénes somos?</h1>
      </div>
      <div>
      {users.map(user=>
        <Profile user={user} key={user.name}/>
      )}
      </div>
      <div id="evidence">
        <div class="container">
          <h1>Evidencia</h1>
        </div>
        <p className='parrafo'>
          La educación desempeña un papel fundamental en el desarrollo tanto personal como social de los individuos. No se limita solo a la adquisición de conocimientos académicos, sino que también fomenta habilidades sociales, valores éticos y un pensamiento crítico. A través de la educación, las personas pueden alcanzar su máximo potencial y contribuir de manera significativa a la sociedad. Además, proporciona herramientas para enfrentar los desafíos de la vida y adaptarse a un mundo en constante cambio. Por lo tanto, invertir en la educación es clave para construir un futuro próspero y sostenible para todas las comunidades
        </p>
        <h2>Momento A</h2>
          <p className='parrafo'>
          La educación desempeña un papel fundamental en el desarrollo tanto personal como social de los individuos. No se limita solo a la adquisición de conocimientos académicos, sino que también fomenta habilidades sociales, valores éticos y un pensamiento crítico. A través de la educación, las personas pueden alcanzar su máximo potencial y contribuir de manera significativa a la sociedad. Además, proporciona herramientas para enfrentar los desafíos de la vida y adaptarse a un mundo en constante cambio. Por lo tanto, invertir en la educación es clave para construir un futuro próspero y sostenible para todas las comunidades
          </p>
        <h2>Momento B</h2>
        <p className='parrafo'>
          La educación desempeña un papel fundamental en el desarrollo tanto personal como social de los individuos. No se limita solo a la adquisición de conocimientos académicos, sino que también fomenta habilidades sociales, valores éticos y un pensamiento crítico. A través de la educación, las personas pueden alcanzar su máximo potencial y contribuir de manera significativa a la sociedad. Además, proporciona herramientas para enfrentar los desafíos de la vida y adaptarse a un mundo en constante cambio. Por lo tanto, invertir en la educación es clave para construir un futuro próspero y sostenible para todas las comunidades.
        </p>
        <figure>
          <p className='figure-title'>Figura 1</p>
          <img
            src="https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg"
            alt="La cabeza y el torso de un esqueleto de dinosaurio;
                    tiene una cabeza grande con dientes largos y afilados"
            width="400"
            height="341" />

          <figcaption className='image-description'>
            Exposición de un T-Rex en el museo de la Universidad de Manchester.
          </figcaption>
        </figure>
        <p className='parrafo'>
          La educación desempeña un papel fundamental en el desarrollo tanto personal como social de los individuos. No se limita solo a la adquisición de conocimientos académicos, sino que también fomenta habilidades sociales, valores éticos y un pensamiento crítico. A través de la educación, las personas pueden alcanzar su máximo potencial y contribuir de manera significativa a la sociedad. Además, proporciona herramientas para enfrentar los desafíos de la vida y adaptarse a un mundo en constante cambio. Por lo tanto, invertir en la educación es clave para construir un futuro próspero y sostenible para todas las comunidades.
        </p>
      </div>
      <div id="reflection">
        <h1>Reflexión</h1>
        <p className='parrafo'>
          La educación desempeña un papel fundamental en el desarrollo tanto personal como social de los individuos. No se limita solo a la adquisición de conocimientos académicos, sino que también fomenta habilidades sociales, valores éticos y un pensamiento crítico. A través de la educación, las personas pueden alcanzar su máximo potencial y contribuir de manera significativa a la sociedad. Además, proporciona herramientas para enfrentar los desafíos de la vida y adaptarse a un mundo en constante cambio. Por lo tanto, invertir en la educación es clave para construir un futuro próspero y sostenible para todas las comunidades
        </p>
        <div>
          <p className='figure-title'>León en una fase</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZK9iP5PEhSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p className='image-description'>
            Exposición de un T-Rex en el museo de la Universidad de Manchester.
          </p>

        </div>
        
        <p className='parrafo'>
          La educación desempeña un papel fundamental en el desarrollo tanto personal como social de los individuos. No se limita solo a la adquisición de conocimientos académicos, sino que también fomenta habilidades sociales, valores éticos y un pensamiento crítico. A través de la educación, las personas pueden alcanzar su máximo potencial y contribuir de manera significativa a la sociedad. Además, proporciona herramientas para enfrentar los desafíos de la vida y adaptarse a un mundo en constante cambio. Por lo tanto, invertir en la educación es clave para construir un futuro próspero y sostenible para todas las comunidades
        </p>
      </div>
    </>
  )
}

export default App
