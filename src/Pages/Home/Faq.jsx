import React from 'react'

const Faq = () => {
  return (
    <div className='container mb-5'>
        <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-success opacity-75 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        When do you do your deliveries?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
      When you place an order, you will get your delivery in 15 minutes. You can also schedule your delivery to a preferred time.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-success opacity-75 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      How much does Oakphin charge?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        You only pay for the products in your order and a small delivery fee. There are no hidden fees, no service charges, and you get very good value for money.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-success opacity-75 text-light " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      What if something goes wrong with my order?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
      We go to extreme lengths to ensure that we deliver exactly what you order, and at the quality you expect. In the rare event that something goes wrong with your order, kindly send us a message via whatsapp, and we'll instantly resolve the issue.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button bg-success opacity-75 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      What delivery areas are covered by Oakphin? 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
      We currently deliver to some parts of Kwara, but we are expanding to Osun, Ogun, Oyo, and Lagos to serve more states.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Faq