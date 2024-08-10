import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
    return (
        <div className="hero container">
            <div className="heroText">
                <h1>Think Twice.. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Code Once
                </h1>
                <p className="heroDesc">Want to learn about software engineering
                    solve algorithmic puzzles and
                    meet other developers and join a global coding community .
                </p>
                <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    );
};

export default Hero;
