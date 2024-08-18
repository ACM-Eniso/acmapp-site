import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"
import himoz from "../../assets/himoz.png"

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
                <div>

                    <a href="https://www.youtube.com/watch?v=Og_bA70eKvk">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <button className="btn">Let's go <img src={dark_arrow} alt=""/></button>
                        <img src={himoz}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
