import Ronaldo from '../assets/images/RONALDO.jpg'
import Messi from '../assets/images/MESSI.jpg'
import Neymer from '../assets/images/NEYMER.jpg'
import Lewandowski from '../assets/images/LEWANDOWSKI.jpg'
import Haaland from '../assets/images/haaland.jpg'
// Main

function Main(){
    return(
        <div class="Main">
  <div class="container-1">
    <div class="imag-1">
      <div class="content-img">
        <img src={Ronaldo} alt="Ronaldo" />
        <h3>Cristiano Ronaldo</h3>
      </div>
    </div>
    <div class="imag-1">
      <div class="content-img">
        <img src={Messi} alt="messi" />
        <h3>Lionel Messi</h3>
      </div>
    </div>
    <div class="imag-1">
      <div class="content-img">
        <img src={Neymer} alt="neymer" />
        <h3>Neymer jr</h3>
      </div>
    </div>
    <div class="imag-1">
      <div class="content-img">
        <img src={Lewandowski} alt="lewandowski" />
        <h3>Robert Lewandowski
        </h3>
      </div>
    </div>
    <div class="imag-12">
      <div class="content-img">
        <img src={Haaland} alt="Erling Haaland " />
        <h3>Erling Haaland 
        </h3>
      </div>
    </div>
    
   
    
  </div>
</div>

       
        
    )
}
export default Main