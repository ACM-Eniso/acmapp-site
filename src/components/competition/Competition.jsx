import './Competition.css'
import competition_1 from '../../assets/competition_1.jpg'
import competition_2 from '../../assets/competition_2.jpg'
import competition_3 from '../../assets/competition_3.jpg'


const Competition = () => {
    return (
        <div className="competitions" >
            <div className="competition">
                <img src={competition_1}/>
                <div className="caption">
                    <p>Info Night</p>
                </div>
            </div>
            <div className="competition">
                <img src={competition_2}/>
                <div className="caption">
                    <p>Sousse Collegiate Programming Context</p>
                </div>
            </div>
            <div className="competition">
                <img src={competition_3}/>
                <div className="caption">
                    <p>Winter Cup</p>
                </div>
            </div>
        </div>
    );
};

export default Competition;
