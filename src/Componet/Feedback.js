import pele  from '../assets/images/pele.webp'
import football from '../assets/images/football.jpg'
function Feedback(){
    return(
        <div class="feedback-section">
        <div class="image-container">
            <img src={pele} alt="Pele holding World Cup and soccer ball" class="responsive-image"/>
            <img src={football}alt="" className='imagesecond' />
        </div>
        <div class="feedback-container">
            <h2>We value your feedback!</h2>
            <form action="#" method="post" class="feedback-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required/>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" required/>
                </div>

                <div class="form-group">
                    <label for="rating">Rate us</label>
                    <select id="rating" name="rating" required>
                        <option value="" disabled selected>Choose rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="comments">Comments</label>
                    <textarea id="comments" name="comments" placeholder="Your feedback" rows="4" required></textarea>
                </div>

                <button type="submit" class="submit-btn">Submit Feedback</button>
            </form>
        </div>
    </div>
    )
}
export default Feedback