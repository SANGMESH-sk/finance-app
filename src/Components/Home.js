import react from "react";
import Carasoul from './Carasoul';
import Services from "./Services";
import Footer from "./Footer"
import Horizontal from "./HoizontalScroll";
import CardMap from './CardMap';
import Card from './Card'

const Home = () => {
    return (
        <>
            <section id="header" className="">
                <div className=" nav_bg">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-lg-6  pt-5 pt-lg-0 order-2 order-lg-l  bg-info" >
                                    <h1 className="mt-5" style={{ color: 'white' }}>life insurence Corporation</h1>
                                    <h2 style={{ marginleft: "20px", color: 'white' }}>Insure your future, start today.</h2>
                                    <div className="row">
                                        <div className="col-md-5 col-sm-12" >
                                            <h2 style={{ color: 'red' }}>Create Wealth & Secure
                                                your Family's Future With Max Life    Investment Plans
                                            </h2>
                                        </div>
                                        <div className="col-md-2 col-sm-12" >
                                            <img src="https://www.maxlifeinsurance.com/static-page/assets/homepage/boman-desktop.webp" alt="" style={{ height: '200px', width: '200px' }} />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <a href="" className="btn-get-started">get started</a>
                                    </div>
                                </div>
                                <div className="col-md-6  col-lg-6 col-sm-6 order-2 order-lg-l">
                                    <Carasoul />
                                </div>
                            </div>
                            <div className="col-12">
                            <CardMap/>
                            </div>
                        </div>
                        <Horizontal />
                    </div>
                    <Footer />
                </div>
            </section>
        </>
    )
}
export default Home;