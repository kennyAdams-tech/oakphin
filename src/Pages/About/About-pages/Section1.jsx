import React from 'react'
import img from '../../../assets/bg1.jpg'
import img2 from '../../../assets/img3.jpg'
import logo from '../../../assets/logo.jpeg'
import './Sectio1.css'
import { useNavigate } from 'react-router-dom'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { LuPackageOpen } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiRider } from "react-icons/si";
import Testimonials from '../../Home/Testimonials.jsx'
import Teams from './Teams.jsx'





const section1 = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="card text-bg-dark container-fluid">
            <img src={logo} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h5 className="card-title text-center mt-4 ">About Us </h5>
                <p className="card-text text-center "><span onClick={() => navigate('/')}>Home</span> <span className='text-success mx-3 fw-bold'>/ About us</span></p>
                
            </div>
        </div>
            {/* end */}
        <div className="row g-4 mx-auto mt-2 container">
            <div className=" col-md-6 col-sm-12">
                <img src={img2} className="image-2" alt="..."/>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className='text-center'>
                    <div className="text-success fw-bold">ABOUT OAKPHIN</div>
                    <h2 className='h5'>Modern And Trusted Logistics Company</h2>
                    <p>With Oakphin, businesses selling drugs, groceries, and cosmetics may access Africa's sizable and expanding consumer market through a digital marketplace, logistics, and banking services. Oakphin helps consumers save time, and money, and earn rewards on each order they place. It also offers doorstep delivery to clients within 15 minutes of their order, giving them rapid access to reasonably priced goods and services. Through the provision of a platform that enables individual businesses, riders, and consumers to become healthier while selling and buying;Oakphin is leading a digital creative, and innovative movement to establish sustainable access to quality health, lifestyle, and wealth.Our model is in line with the pursuit of SDGs 1, 3, 8, 9, and 11, which are: No poverty; good health and wellbeing; decent work and economic growth; industry, innovation, and infrastructure; sustainable cities and communities. OAKPHIN is an integration of Q-commerce, logistics, and fintech into one platform for businesses and individuals.</p>
                    
    
                </div>
            </div>
            {/* end */}

            <div className=" about container  my-5">
                <div className="shadow-lg text-center">
                <GiWorld className='fs-1 text-success my-3 mx-auto'/>
                <h2 className='fw-bold'>5 +</h2>
                <p className='text-success'>States Covered</p>
                </div>
                <div className="shadow-lg text-center">
                <LuPackageOpen className='fs-1 text-success my-3 mx-auto'/>
                <h2 className='fw-bold'>200 +</h2>
                <p className='text-success'>Strategic Vendors</p>
                </div>
                <div className="shadow-lg text-center">
                <IoPersonCircleOutline className='fs-1 text-success my-3 mx-auto'/>
                <h2 className='fw-bold'>1800 +</h2>
                <p className='text-success'>Happy Shoppers</p>
                </div>
                <div className="text-center shadow-lg text-center">
                <SiRider className='fs-1 text-success my-3 mx-auto'/>
                <h2 className='fw-bold'>150 +</h2>
                <p className='text-success'>Smart Riders</p>
                </div>

            </div>

            {/* end */}
            
            <div className=" row text-center mb-5">
                <div className="col-md-6 col-sm-8 ">
                    <p className="h4 text-success">WHAT ARE WE DOING?</p>
                    <p className="lead">Africa’s products (pharmaceuticals, supermarkets, and cosmetics) supply chain is very poor and inefficient. Nigeria has one retail pharmacy per 57,000 inhabitants, with approximately 3,800 registered pharmacies and a population of 218 million. However, Nigeria needs to catch up to comparable Sub-Saharan African nations like South Africa (~1 every 19,000), Kenya (1 per 15,000), and Ghana (1 per 32,000) (TCHealth, 2024; WHO, 2014).We are building Africa’s largest digital product supply chain for sustainable economic, social, and healthcare delivery.</p>

                </div>
                <div className="col-md-6 col-sm-4">
                <img src={img2} className="image-2" alt="..."/>
                </div>
                <div className='mx-auto mt-3'>
                <p className="text-success h6 fw-bold">WHY CHOOSE US</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Low-cost and affordable products and services</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Timely access and efficient delivery</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Anti-counterfeit supply chain</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Access to finance</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>Bridging the poor supply chain gap</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>100% urban and rural coverage</p>
                    <p><IoMdCheckmarkCircle className='text-success fs-5'/>24/7 consultation and emergency response service</p>
                </div>
                <div>
                <div className='benefits mt-5'>
                <div className='text-success'>OTHER BENEFITS FOR VENDORS, RIDERS AND CUSTOMERS:</div>
                <div className="vendors">
                <p className='mt-3 lead'>VENDORS</p>
                Say goodbye to queues and frustrated customers in your store,
                Say goodbye to network errors or delays,
                Reach millions of customers around you who prefer to order online,
                Reduce overhead cost, increase sales, revenue and profit,
                Manage your online and offline business with us,
                Access free advert to increase visibility and reach more customers,
                Grow and expand your business with us to more locations,
                Free access to dispatch riders for fast delivery,
                Access to fund increase product stock, buy equipment or expand.
                </div>

                <div className="riders">
                <p className='mt-3 lead'>RIDERS</p>
                Save more than 60% of fuel cost working with us, Make up to N200,000 extra monthly delivering products, Get access to an electric motorcycle (electric Okada), Enjoy massive incentives and allowances.
                </div>
                
                <div className="customer">
                <p className='mt-3 lead'>CUSTOMERS</p>
                Order from your comfort zone, Save over 50% on your order, Earn cash back on your order, Enjoy instant, fast, and efficient doorstep delivery – within 15 minutes, Beat shopping, pick-up, and payment queues at stores, Explore the vast array of products that suit you with a click, Invest with us and enjoy over 250% ROI p.a, Beat traffic stress and transportation expenses while enjoying an amazing shopping experience, Be among the 1,000 beneficiaries of our Social Impact Program (SIP) annually.
                </div>

                </div>
                <div className="products mt-3">
                <div className="text-success lead mb-3 fw-bold">PRODUCTS</div>
                <b>Oakphin Vendor:</b> is a solution for businesses to reach their customers and sell faster. It is an online market space where they sell their customers both online and offline. Businesses can reach their business goals, increase productivity, and profit, and reduce overhead costs, with no more frustrated queues and network errors in payment processing. We support businesses to grow, scale manage, and expand businesses by bringing them closer to their customers. Customers can order their favorite product from the comfort of their home from a nearby store, save time, save cost, and earn while buying.  <br />

                <b>Oakphin Logistics:</b> is a solution for both vendors to deliver their products faster and for individuals to receive their orders within the shortest time. Vendors don’t have to spend to deliver their products to their customers and individuals don’t have to leave their location, they can source for a variety of products, buy, make payments, and receive their order without stress and get their order exactly 15 minutes. Riders can access electric motorcycles on hire purchase, pay in installments, and save more than 60% cost of fuel. <br />

                <b>Oakphinvest:</b> is a solution that provides financial support for businesses to grow and expand into more service offerings and locations either through dept. funding (loans) or equity funding (partnership). This comes with a 2-month – 1-year moratorium and low interest rate. Businesses can access up to N10,000,000for funding expansion, equipment purchase, or stock up/inventory purposes with a soft daily repayment plan of between 0.05% - 0.09%, T&C apply.
                It provides individual customers access to investment opportunities to save and spend conveniently and create robust wealth. Individuals can invest with Oakphin and have more than 250% ROI p.a. T&C applies.
                Investment plans available are: <br />
                Basic Go: it is designed to assist customers reach their goal/target(s) for 1 year. It is renewable yearly. Customers buy any number of units depending on their set goals. 1 unit is equivalent to N1,500. You have N30/unit daily ROI/20 days in a month for 1 year. Can only be withdrawn after one year. If you must withdraw before maturity day, a 30% fee shall be deducted. <br />
                Classic Go: it is designed to assist customers reach their goal/target(s), customers can save, invest, and spend happily. It is renewable every 3 years. Customers buy any number of units depending on their set goals. 1 unit is equivalent to N2,500. You have N30/unit daily ROI/20 days in a month for 3 years. Can only be withdrawn every 6 months. If you must withdraw before maturity day, a 30% fee shall be deducted. <br />
                Executive Go: it is designed to assist customers reach their goal/target(s), customers can save, invest, and spend happily. It is renewable every 5 years. Customers buy any number of units depending on their set goals. 1 unit is equivalent to N3,500. You have N50/unit daily ROI/20 days in a month for 5 years. Can only be withdrawn every quarter. If you must withdraw before maturity day, a 30% fee shall be deducted. <br />
                Chairman Go: it is designed to assist customers to reach their goal/target(s), customers can save, invest, and spend happily. It is renewable every 7 years. Customers buy any number of units depending on their set goals. 1 unit is equivalent to N5,000. You have N50/unit daily ROI/20 days in a month for 7 years. Can only be withdrawn every Bi – month. If you must withdraw before maturity day, a 30% fee shall be deducted.
                Bundle Pro: customers can divide their capital to invest in multiple plans at a go and enjoy massive ROI.
                </div>


                <div className="program">
                    <p className='fw-bold mt-5 text-success'>PROGRAMS</p>
                    Oakphin Social Impact Program – OSIP:  is an annual program aimed at reaching 1,000 beneficiaries to enjoy free healthcare worth up to N200,000 each.
                    Oakphin Referral Program – OREP: is designed to reward and encourage customers for good performance. Customers enjoy a cash bonus of up to N1,000 on every referral to sign up and buy on Oakphin. Customers enjoy a 1 unit bonus on every referral to invest in Oakphinvest.
                    Oakphin Cash Back – OCAB: is designed to encourage customers’ shopping experience, and improve purchasing power. Customers earn up to 5% cash back on all their purchases. They save and earn on every order made on Oakphin.
                    Product Demo Day/Wealth Creation Webinar: this is designed to introduce Oakphin to reach and expand to more markets and educate customer on how to improve their health, and lifestyle as they create wealth with us.
                </div>


                </div>
            </div>

            {/* end */}

            <div>
                <Testimonials/>
                <Teams/>
            </div>

        </div>

    </div>
  )
}

export default section1