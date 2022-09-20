import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import "../LandingPage/LandingPage.css"

export default function LandingPage({ setUser }) {
    const [showAuth, setShowAuth] = useState(false);

    return (
    <div className="landingPageContainer">
            <h1> Welcome to Shop List</h1>         
        <div id="landingpage" className="d-flex justify-content-center">
        { showAuth ?
            <AuthPage setUser={setUser}/>
            :
            ''
        }
            <button onClick={() => setShowAuth(!showAuth)} className="btn btn-primary">
          {showAuth ? '': 'Click Here to Sign Up'}  
            </button>
        {/* // render no button when page button click */}
          </div>
    </div>    
    );
}