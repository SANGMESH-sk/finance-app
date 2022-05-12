import react from 'react';
import image from "../Assets/coins-g94ba81a8e_1920.jpg"
import images from "../Assets/family-moving-using-boxes.jpg"
import image1 from "../Assets/real-estate-gb118f5575_1920.jpg"
const Carasoul = () => {
    return (
        <div className='container-fluid bg-info'>
            <div className='row' >
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active mt-5">
                            <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2020/12/06/12/05/doctor-5808573__480.png"alt="First slide"/>
                        </div>
                        <div class="carousel-item ">
                            <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2019/11/23/09/25/marketing-4646598_1280.png" alt="Second slide"/>
                        </div>
                        <div class="carousel-item mt-5">
                            <img class="d-block w-100"src="https://cdn.pixabay.com/photo/2021/08/29/18/22/help-6583966__480.png" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


            </div>

        </div>
    )
}
export default Carasoul;
