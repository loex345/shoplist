import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import "../LandingPage/LandingPage.css"

export default function LandingPage({ setUser }) {
    const [showAuth, setShowAuth] = useState(false);

    return (
    <div className="landingPageContainer">
            <img src="https://i.imgur.com/J01Q5D5.png"/>        
        <div id="landingpage" className="d-flex justify-content-center">
        { showAuth ?
            <AuthPage setUser={setUser}/>
            :
            ''
        }
            <button onClick={() => setShowAuth(!showAuth)} className="btn btn-primary">
          {showAuth ? '': 'Click Here for Access'}  
            </button>
        {/* // render no button when page button click */}
          </div>
    </div>    
    );
}