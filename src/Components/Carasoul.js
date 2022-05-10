import react from 'react';
import image from "../Assets/coins-g94ba81a8e_1920.jpg"
import images from "../Assets/family-moving-using-boxes.jpg"
import image1 from "../Assets/real-estate-gb118f5575_1920.jpg"
const Carasoul = () => {
    return (
        <div>
            <div row>
                <div className='col-md-6'>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={images} class="d-block img-fluid"  alt="..." />
                            </div>
                            <div class="carousel-item">
                            <img src={image1} class="d-block img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image} class="d-block img-fluid" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carasoul;