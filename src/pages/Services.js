import React from 'react'

const Services = () => {
    return (
        <div>
    <main class="main-nav">
        <div class="grid-item1">
            <div>
               <h1>Services</h1>
            </div>
            <div id="container">
                <h3 id="title">Website Design</h3>
                <p id="paragraf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempora beatae vero, suscipit quo nobis nihil placeat eum optio voluptates?</p>
                <p id="paragraf">Pricing: $1,000 - $3,000</p>
            </div>
            <div id="container">
                <h3 id="title">Website Maintenance</h3>
                <p id="paragraf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempora beatae vero, suscipit quo nobis nihil placeat eum optio voluptates?</p>
                <p id="paragraf">Pricing: $250 per month</p>
            </div>
            <div id="container">
                <h3 id="title">Website Hosting</h3>
                <p id="paragraf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempora beatae vero, suscipit quo nobis nihil placeat eum optio voluptates?</p>
                <p id="paragraf">Pricing: $25 per month</p>
            </div>
            </div>
           
    </main> 
        <div className="grid-item">
            <h3>Get A Quote</h3>
            <form class="form">
                <div>
                    <label for="name">Name</label><br/>
                    <input type="name" id="name" placeholder="Name"/>
                </div>
                <div>
                    <label for="email">Email</label><br/>
                    <input type="email" id="email" placeholder="Email Adress"/>
                </div>
                <div>
                    <label for="message">Message</label><br/>
                    <input type="text-area" id="text" placeholder="Message"/><br/><br/>
                    <button class="btn" type="submit">Send</button>
                </div>  
            </form>
        </div>
        </div>
    )
}

export default Services
