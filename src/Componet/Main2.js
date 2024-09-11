import Mbappe from '../assets/images/MBAPPE.jpg'
import Suaraz from '../assets/images/SUARAZ.jpg'
import Maradona from '../assets/images/MARADONA.jpg'
import Benzeema from '../assets/images/BENZEEMA.jpg'
import Grizeman from '../assets/images/griz.jpg'

function Main2(){
   return(
    <div class="Main">
    <div class="container-1">
      <div class="imag-1">
        <div class="content-img">
          <img src={Mbappe} alt="Mbappe" />
          <h3>Kylian Mbappé</h3>
        </div>
      </div>
      <div class="imag-1">
        <div class="content-img">
          <img src={Maradona} alt="maradona" />
          <h3>Diego Maradona</h3>
        </div>
      </div>
      <div class="imag-1">
        <div class="content-img">
          <img src={Suaraz} alt="suaraz" />
          <h3>Luis Suárez</h3>
        </div>
      </div>
      <div class="imag-1">
        <div class="content-img">
          <img src={Benzeema} alt="Benzeema" />
          <h3>Karim Benzema
          </h3>
        </div>
      </div>
      <div class="imag-12">
        <div class="content-img">
          <img src={Grizeman} alt="Grizeman" />
          <h3>Antoine Griezmann
          </h3>
        </div>
      </div>
    </div>
  </div>

   )
}
export default Main2