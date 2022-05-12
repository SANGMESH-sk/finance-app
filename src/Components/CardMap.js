import react, { useState } from 'react';
import data from './data';
import Card from './Card'

const CardMap = () => {

    return (
        <div className=''>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='row gy-4'>
                        {
                            data.map((val, i) => {
                                return <Card imgsrc={val.imgsrc} title={val.title} money={val.money} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CardMap;