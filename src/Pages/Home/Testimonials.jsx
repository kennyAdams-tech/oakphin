import React from 'react'
import Slider from "react-slick";
import './Testimonials.css'
import logo from '../../assets/logo.jpeg'


const Testimonials = () => {

        const settings = {

          autoplay: true,
        
        };

  return (
    <div className='container'>
        <div className='my-5'>
            <p className="text-success text-center fw-bold">Testimonials</p>
            <h2 className=" text-center">What Our Clients Says</h2>

            <div className="testimonials my-4">
                <Slider {...settings}>
                <div className='card shadow p-4'>
                   <div>
                        <div className='header'>
                            <img src={logo} alt="" />
                            <div>
                                <h3 className='fs-5'>Mrs Jola-Jesu Ahmodu</h3>
                                <p className="lead">MD Jorim Mega Store, Ibadan</p>
                            </div>
                        </div>
                        <div className="lead">
                        Leveraging on Oakphin's innovation has been a great boost to our business. Our business has experienced a growing 25% increase in orders within 2 months of partnership.
                        </div>
                   </div>
                </div>
                <div className='card shadow p-4'>
                   <div>
                        <div className='header'>
                            <img src={logo} alt="" />
                            <div>
                                <h3 className='fs-5'>Mrs Monishola Abifarin</h3>
                                <p className="lead">  CEO TJED Medical & Superstore, Offa</p>
                            </div>
                        </div>
                        <div className="lead">
                        We are glad we partnered with Oakphin at this early stage. We have increased visibility both online and offline, increased customer orders and save over 20% on operational and overhead cost in 3 months.
                        </div>
                   </div>
                </div>
                <div className='card shadow p-4'>
                   <div>
                        <div className='header'>
                            <img src={logo} alt="" />
                            <div>
                                <h3 className='fs-5'>Mr Bamidele Oladejo</h3>
                                <p className="lead"> Oakphin shopper, Ilorin</p>
                            </div>
                        </div>
                        <div className="lead">
                            I enjoyed using Oakphin to order all my products, from drugs to groceries to cosmetics because of their fast, reliable and outstanding services and packages. I gave them 5 star.
                        </div>
                   </div>
                </div>
                <div className='card shadow p-4'>
                   <div>
                        <div className='header'>
                            <img src={logo} alt="" />
                            <div>
                                <h3 className='fs-5'>Ayanfe Emmanuel</h3>
                                <p className="lead"> Oakphin shopper,Ilorin</p>
                            </div>
                        </div>
                        <div className="lead">
                            Oakphin's innovation and creativity is top notch. Their prices are affordable and pocket friendly, fast delivery, and excellent customer service all makes them stand out.
                        </div>
                   </div>
                </div>
                <div className='card shadow p-4'>
                   <div>
                        <div className='header'>
                            <img src={logo} alt="" />
                            <div>
                                <h3 className='fs-5'>Ilerioluwa</h3>
                                <p className="lead">Oakphin shopper, Ogbomoso</p>
                            </div>
                        </div>
                        <div className="lead">
                          One of the things I enjoyed most is Oakphin's Cash Back and Investment opportunity which has greatly improved me economically. I can buy, save and earn. Though I encouraged them to improve their services.
                        </div>
                   </div>
                </div>
                
            </Slider>
            </div>
        </div> 
        
    </div>
  )
}

export default Testimonials