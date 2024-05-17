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
        <p className='parrafo'><strong>Elementos del kit de emergencia:</strong> Agua, alimentos no perecederos, ropa, artículos de aseo personal, botiquín de primeros auxilios, documentos importantes, linterna, radio portátil, encendedor, baterías de repuesto, navaja.</p>

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
        <iframe src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGE96lFxw0&#x2F;98KXNZVHlFU4nVeP2InthQ&#x2F;view?embed' width="600" height="450"></iframe>
        
        <h3>Mitigaciones estructurales</h3>

        
        <p className='parrafo'>
        Se determinó que la casa era muy segura y consiente sobre los peligros en caso de sismos, es por esto que se realizaron dos mitigaciones estructarles, siendo ambas relacionadas con la limpieza de estantes las cuales contenían elementos que podrían caer en la cabeza.        </p>
        
        <h3>Antes</h3>
          <figure>
            <p className='figure-title'>Imagen 12</p>
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
            <p className='figure-title'>Imagen 13</p>
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
            <p className='figure-title'>Imagen 14</p>
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
            <p className='figure-title'>Imagen 15</p>
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
          <p className='parrafo'>En este caso se estipuló un punto de encuentro para toda la familian, siendo un parque en un punto central, para que en caso de alguna emergencia toda la familia se pueda reunir. </p>
          <p ><strong>Parque El Country, Av. C. 127 #11d-90, Bogotá</strong> </p>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3688116867165!2d-74.0380692!3d4.7058313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8553326b13c5%3A0x3050d7c401c94fc8!2sParque%20El%20Country!5e0!3m2!1ses-419!2sco!4v1715891406883!5m2!1ses-419!2sco' width="600" height="450"></iframe>
          <figure>
            <p className='figure-title'>Imagen 16</p>
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
            <p className='figure-title'>Imagen 17</p>
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
          <h3>Presentación primeros auxilios</h3>
          <p className='parrafo'>Se realizó una presentación en <a href="https://www.canva.com/design/DAGDiU_q6QQ/W-9U-yZvqvazB4sbAVL1IA/edit?utm_content=DAGDiU_q6QQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"> Canva</a>  sobre capacitación de primeros auxilios.</p>
          <iframe src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDiU_q6QQ&#x2F;7w0CKUK9Xd93dQCN7nro4A&#x2F;view?embed' width="600" height="450"></iframe>

          <figure>
            <p className='figure-title'>Imagen 18</p>
            <img
              src={botoquinB.capacitacion1}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 19</p>
            <img
              src={botoquinB.capacitacion2}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 20</p>
            <img
              src={botoquinB.capacitacion3}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 21</p>
            <img
              src={botoquinB.capacitacion4}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 22</p>
            <img
              src={botoquinB.capacitacion5}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 23</p>
            <img
              src={botoquinB.capacitacion6}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 24</p>
            <img
              src={botoquinB.capacitacion7}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 25</p>
            <img
              src={botoquinB.capacitacion8}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 26</p>
            <img
              src={botoquinB.capacitacion9}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 27</p>
            <img
              src={botoquinB.capacitacion10}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 28</p>
            <img
              src={botoquinB.capacitacion11}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 29</p>
            <img
              src={botoquinB.capacitacion11}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 30</p>
            <img
              src={botoquinB.capacitacion12}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          
          <figure>
            <p className='figure-title'>Imagen 31</p>
            <img
              src={botoquinB.capacitacion13}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>

          <figure>
            <p className='figure-title'>Imagen 32</p>
            <img
              src={botoquinB.capacitacion14}
              alt="La cabeza y el torso de un esqueleto de dinosaurio;
                      tiene una cabeza grande con dientes largos y afilados"
              width="350"
              height="341" />

            <figcaption className='image-description'>
              Capacitación de la familia.
            </figcaption>
          </figure>


      </div>

      <div id="reflection">
        <h1>Reflexión</h1>
        <p className='parrafo'>
        Mauro Vargas - Padre: Considero que estar preparado para una emergencia es importante ya que puede significar salvar o no una vida. Además, nunca viene mal conocimiento que sirva para proteger a la familia.
        </p>
        <p className='parrafo'>
        Gloria Delgado - Madre: Estar preparada para una emergencia es importante ya que al estar en una ciudad como Bogotá que ocurren temblores constantemente, tener una ruta de escape y saber que hacer en una situación de emergencia es de mucha ayuda, aparte ayuda a no sentir tanto miedo al momento de que pase        </p>
      </div>
    </>
  )
}

export default App
