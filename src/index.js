import React from "react";
import ReactDOM from "react-dom";
import './index.css'
const App=()=>{
    return (
        <div>
            <a className="pic"><i class="fas fa-id-badge"></i></a>
            <h1>Alex</h1>
            <p>today at 5:00</p>
            <span>Great big post</span>
            <br></br>
            <a className="pic"><i class="fas fa-id-badge"></i></a>
            <h1>Sam</h1>
            <p>today at 7:51</p>
            <span>Informative.Thanks</span>
            <br></br>
            <a className="pic"><i class="fas fa-id-badge"></i></a>
            <h1>Jane</h1>
            <p>today at 9:01</p>
            <span>Looks great</span>
        </div>
    )
}
ReactDOM.render(<App/>,document.querySelector('#root'));