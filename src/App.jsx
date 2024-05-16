import Profile from './components/profile'
import Header from './components/header'
import Image from './components/image.jsx';
import './App.css'
import {people} from './images/faces/index.js';
import {botoquinA} from './images/moment_a/index.js'
import {botoquinB} from './images/moment_b/index.js'

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
 


        <h2>Momento A</h2>
        <h3>Botiquín</h3>
        <p className='parrafo'><strong>Elementos del botiquín:</strong> Agua potable, tapabocas, gel antibacterial, algodón, baja lenguas, venda elástica, gasa, silbato, toalla alcoholada, copitos, jeringa, bisturí, preservativo, analgésicos, curitas, toalla higiénica, guantes, esparadrapo, termómetro</p>
        
        <figure>
          <p className='figure-title'>Imagen 1</p>
          <img
              src={botoquinA.botiquin1}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Vista general  
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 2</p>
          <img
              src={botoquinA.botiquin2}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Vista general  
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 3</p>
          <img
              src={botoquinA.botiquin3}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Materiales
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 4</p>
          <img
              src={botoquinA.botiquin4}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Botiquín cerrado
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 5</p>
          <img
              src={botoquinA.botiquin5}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Botiquín cerrado
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 5</p>
          <img
              src={botoquinA.botiquin5}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Botiquín cerrado
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 6</p>
          <img
              src={botoquinA.botiquin6}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Botiquín cerrado con sus materiales
          </figcaption>
        </figure>

        <h3>Kit de emergencia</h3>

        <figure>
          <p className='figure-title'>Imagen 7</p>
          <img
              src={botoquinA.botiquin7}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Kit de emergencia cerrado con sus materiales
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 8</p>
          <img
              src={botoquinA.botiquin8}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Kit de emergencia cerrado con sus materiales
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 9</p>
          <img
              src={botoquinA.botiquin9}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Kit de emergencia cerrado con sus materiales
          </figcaption>
        </figure>

        <figure>
          <p className='figure-title'>Imagen 10</p>
          <img
              src={botoquinA.botiquin10}
              alt="Foto general"
              width="400"
              height="341" />
          <figcaption className='image-description'>
            Kit de emergencia cerrado con sus materiales
          </figcaption>
        </figure>
  


        <h2>Momento B</h2>
        <h3>Presentación sismos</h3>
        <p className='parrafo'>
          Se realizó una presentación en <a href="https://www.canva.com/design/DAGE96lFxw0/wY_vxJIcoBUBigkRfS4czA/edit"> Canva</a>  sobre la importancia de la preparación ante una emergencia 
        </p>
        <figure>
          <p className='figure-title'>Figura 7</p>
          <img
            src={botoquinB.slides}
            alt="La cabeza y el torso de un esqueleto de dinosaurio;
                    tiene una cabeza grande con dientes largos y afilados"
            width="400"
            height="341" />

          <figcaption className='image-description'>
            Portada de la presentación
          </figcaption>
        </figure>

        <h3>Mitigaciones estructurales</h3>

        
        <p className='parrafo'>
        Se determinó que la casa era muy segura y consiente sobre los peligros en caso de sismos, es por esto que se realizaron dos mitigaciones estructarles, siendo ambas relacionadas con la limpieza de estantes las cuales contenían elementos que podrían caer en la cabeza.        </p>
        
        <h3>Antes</h3>
          <figure>
            <p className='figure-title'>Figura 8</p>
            <img
              src={botoquinB.antes}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="400"
              height="341" />

            <figcaption className='image-description'>
              los peligros en caso de sismos
            </figcaption>
          </figure>
          <figure>
            <p className='figure-title'>Figura 8</p>
            <img
              src={botoquinB.antesSegunda}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="400"
              height="341" />

            <figcaption className='image-description'>
              los peligros en caso de sismos
            </figcaption>
          </figure>
          
        <h3>Después</h3>
        <figure>
            <p className='figure-title'>Figura 8</p>
            <img
              src={botoquinB.despues}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="400"
              height="341" />

            <figcaption className='image-description'>
              los peligros solucionados en caso de sismos
            </figcaption>
          </figure>
          <figure>
            <p className='figure-title'>Figura 8</p>
            <img
              src={botoquinB.despuesSegunda}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="400"
              height="341" />

            <figcaption className='image-description'>
              los peligros solucionados en caso de sismos
            </figcaption>
          </figure>

          <h3>Punto de encuentro</h3>
          <p>En este caso se estipuló un punto de encuentro para toda la familian, siendo un parque en un punto central, para que en caso de alguna emergencia toda la familia se pueda reunir. </p>
          <p><strong>Parque El Country, Av. C. 127 #11d-90, Bogotá</strong> </p>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3688116867165!2d-74.0380692!3d4.7058313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8553326b13c5%3A0x3050d7c401c94fc8!2sParque%20El%20Country!5e0!3m2!1ses-419!2sco!4v1715891406883!5m2!1ses-419!2sco' width="600" height="450"></iframe>
          <figure>
            <p className='figure-title'>Figura 9</p>
            <img
              src={botoquinB.evacuar1}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Evacuando la casa
            </figcaption>
          </figure>
          <figure>
            <p className='figure-title'>Figura 10</p>
            <img
              src={botoquinB.evacuar2}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Evacuando la casa
            </figcaption>
          </figure>



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
