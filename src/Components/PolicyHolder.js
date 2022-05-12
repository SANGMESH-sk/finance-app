import react from 'react';

const Policyholder = () => {
    return (
        <div className='' style={{backgroundcolor:'aliceblue'}}>
            <div className='container  ' >
                <div className='row  ' >
                    <div className='col-md-4 col-sm-12 'style={{color:'black',backgroundColor:'white'}}>
                        <center>
                        <img className='img-fluid mt-5 ' src="https://uiic.co.in/sites/default/files/NoofPolicyHolders_2.png" />
                        <h3>17410498</h3>
                       
                        <h1 className='mb-5'>  No.of Policy Holders</h1>
                        </center>

                    </div>
                    <div className='col-md-4 col-sm-12  'style={{color:'black',backgroundColor:'white'}}>
                        <center>
                        <img className='img-fluid mt-5' src="https://uiic.co.in/sites/default/files/ClaimsSettled_0.png" />
                        <h3>6879518 </h3> 
                       <h1> No.of Claim Settled</h1>  </center>
                    </div>
                    <div className='col-md-4 col-sm-12  ' style={{color:'black',backgroundColor:'white'}}>
                        <center>
                        <img className='img-fluid mt-5'  src="https://uiic.co.in/sites/default/files/OfficeNetwork_0_0.png" />
                       <h3>2352</h3>
                      
                        <h1>  Office Network  world</h1>   </center>
                    </div>
                  


                </div>

            </div>



        </div>
    )
}
export default Policyholder;