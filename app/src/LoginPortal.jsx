import fingerprint from './assets/fingerprint.png'
import cooking from './assets/cooking.mp4'
function LoginPortal(){
    return(
        <>
            
            <div className="container">
                <img src={fingerprint} alt="finger-Print" />
                <form action="" className="Form">
                    <input type="text" placeholder="Enter your User Name"/>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" />
                    <input type="password" name="password" id="password" placeholder="Enter Password" />
                    <select name="drop" id="drop">
                        <option value="--Select User Type--">--Select User Type--</option>
                        <option value="Chef">Chef</option>
                        <option value="Foodie">Foodie</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
                <p id="info">By creating an account, you agree and accept our 
                    <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                </p>
                <hr id='line'/>
                <a href="#" id="error">Forgot Password</a>
                
            </div>
        </>
    );
}

export default LoginPortal;