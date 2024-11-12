import React from 'react'
import kenny from '../../../assets/kenny.jpg'
import tolu from '../../../assets/tolu.jpeg'
import david from '../../../assets/david.jpeg'
import funke from '../../../assets/funke.jpeg'
import sesan from '../../../assets/olusesan.jpeg'
import biyi from '../../../assets/biyi.jpeg'

const Teams = () => {
  return (
    <div className='mb-4'>
        <div className="text-center text-success fw-bold mb-4">OUR TEAM</div>
        <div className="row gy-4">
            <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="card">
                <img src={tolu} height='300'  className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title lead">Founder / CEO</h5>
                <h5 className="card-title">Tolu Bolaji, Oluwole</h5>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="card">
                <img src={funke} height='300' className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title lead">Co-founder / MD</h5>
                <h5 className="card-title">Toluwalase Funke, Akano</h5>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="card">
                <img src={sesan} height='300' className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title lead">Co-founder / Chief Operation Officer</h5>
                <h5 className="card-title">Engr. Olusesan Olumayode</h5>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="card">
                <img src={david} height='300' className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title lead">Chief Investment and Partnership Officer (CIPO)</h5>
                <h5 className="card-title">David Victor, Akano</h5>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="card">
                <img src={biyi} height='300' className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title lead">Chief Growth Officer (CGO)</h5>
                <h5 className="card-title">Akinyemi, Olabisi Agboola</h5>
                </div>
            </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
            <div className="card">
                <img src={kenny} height='300' className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title lead">Chief Innovation Technology Officer (CITO)</h5>
                <h5 className="card-title">Adams Kehinde</h5>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Teams