import './Checkout.css'
function Checkout(){
    return(
        <>
            <div className="container">
                <div className="container-1">
                    <h1 id="title">Maadu</h1>
                    <h2 id="description">International Phone Input / Dial Code <br /> Select for Webflow Checkout</h2>
                    <h4 id="info-1">See more info + </h4>
                    <h4 id="info-2">See more components on Pinecone's </h4>
                    <a href="#" id="private-collection">Private Library Collection</a> <br />
                    <button id="btn-1">Need an Expert</button>
                    <button id="btn-2">Clone</button>
                </div>
                <div className="container-2">
                    <div className="part-1">
                        <p>Home  2  Checkout</p>
                        <h1>Get the clonable</h1>
                        <p>Follow the steps below to get the clonable</p>
                        <ol>
                            <li>Go to the pages panel, and open the checkout page. You'll find a form there.</li>
                            <li>Please copy the code from the page settings head and footer and paste it into your page settings or the website's custom code section.</li>
                            <li>Make sure to map the correct inputs with correct ids.</li>
                        </ol>
                    </div>
                    <div className="part-2">
                        <label htmlFor="">Name</label> <br />
                        <input type="text" placeholder="Your Name"/><br />
                        <label htmlFor="">Email</label><br />
                        <input type="email" name="email" id="email" placeholder="name@example.com" /> <br />
                        <label htmlFor="">Billing Adderess</label> <br />
                        <input type="text" name="" id=""  placeholder="123 Main Street"/> <br />
                        <input type="text" name="" id=""  placeholder="Trichy, Tamil Nadu"/> <br />
                        <label htmlFor="" id="city">City</label> <label htmlFor="" id="postal-code">Postal Code</label> <br />
                        <input type="text" name="" id="i-city" placeholder="Trichy"/>
                        <input type="number" name="" id="i-post" placeholder="620017"/><br />
                        <label htmlFor="">Country</label><br />
                        <select name="Country" id="Country">
                            <option value="">Select a Country</option>
                            <option value="">India</option>
                            <option value="">Japan</option>
                        </select> <br />
                        <label htmlFor="">Phone Number</label><br />
                        <input type="number" name="phone-number" id="phone-number" placeholder="8793749544"/> <br />
                        <button id="btn-submit">Submit</button>
                        

                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;