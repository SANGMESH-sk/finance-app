import react, { useState } from "react";
import Carasoul from './Carasoul';
import Services from "./Services";
import Footer from "./Footer"
import Horizontal from "./HoizontalScroll";
import CardMap from './CardMap';
import Card from './Card';
import Policy from './PolicyHolder';



const Home = () => {
    const [data,setData] = useState('green')
    const bgcolor=()=>{
        setData('red');
    }
    return (
        <>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-12 ">
                            <div className="row bg-info">
                                <div className="col-md-6 col-lg-6  pt-5 pt-lg-0 order-2 order-lg-l  bg-info" >
                                    <h1 className="mt-5" style={{ color: 'white', marginLeft: "20px" }}>Life Insurence Corporation</h1>
                                    <h2 style={{ marginLeft: "20px", color: 'white' }}>Insure Your Future, Start Today.</h2>
                                    <div className="row" >
                                        <div className="col-md-6 col-sm-12" style={{marginLeft:'20px' }} >
                                            <h2 style={{ color: 'red',  }}>Create Wealth & Secure
                                                your Family's Future With Max Life    Investment Plans
                                            </h2>
                                        </div>
                                        <div className="col-md-2 col-sm-12" >
                                            <img src="https://www.maxlifeinsurance.com/static-page/assets/homepage/boman-desktop.webp" alt="" style={{ height: '250px', width: '250px' }} />
                                        </div>
                                    </div>
                                    <div className="mb-3" style={{marginLeft:'20px',   }}>
                                        <button  className="btn-get-started" style={{backgroundColor:data}} onClick={bgcolor}>get started</button>
                                    </div>
                                </div>
                                <div className="col-md-6  col-sm-12 col-sm order-2 order-lg-l mt-3">
                                    <Carasoul />
                                </div>
                            </div>
                            <div className="col-12">
                            <CardMap/>
                            </div>
                        </div>
                        <Horizontal />
                        <br></br>
                        <Policy/>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <Footer />
        </>
    )
}
export default Home;