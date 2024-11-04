import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"
import himoz from "../../assets/himoz.png";

const Hero = () => {
    return (
        <div className="hero container">
            <div className="heroText">
                <h1>Think
                    Twice.. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Code Once
                </h1>
                <p className="heroDesc">Want to learn about software engineering
                    solve algorithmic puzzles and
                    meet other developers and join a global coding community .
                </p>
                <div className="puzzle">
                    <img src={himoz}/>
                </div>
                <button  className="btn">Let's play</button>
            </div>
        </div>
    );
};

export default Hero;
