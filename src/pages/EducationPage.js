import '../css/EducationPage.css';
import Background from "../images/arctic-fox.jpeg";
import Graph from "../images/green.png";
import {Link} from 'react-router-dom';
import actions from "../data/daily_content.json";
import AnimalInfo from '../components/AnimalInfo';

function EducationPage(props){
    const content = actions
    return <div className="eduPage">
            <div className="info">
               <h3>Meet Your Arctic Animal!</h3> 
               <br></br>
               <section>
                <AnimalInfo /> 
               </section>
            </div>
            <div className="action">
                    <img id="green" src={ Graph } width="400" height="400" aria-label="Environmental protection illustration"></img>
                   <div className='actionIntro'>
                    <h4>What can we do as individuals?</h4>
                    <br></br>
                        <p>
                        There are many ways in our daily life that we can take practical actions on cutting our carbon footprint. Putting on an extra layer and turning down the heating a degree or two can effectively reduce the amount of greenhouse gas emissions. 
                        Turn off lights and appliances when you don't need them to save power. Also, replace light bulbs with LEDs or other low-energy lights. 
                        Choose public transportation or carpool with others to reduce the frequency of using private vehicles. Though these small changes seem to be trivial, however, 
                        if every individual begins to change a little bit, we will eventually make a profound impact on our environment. By learning the facts about these amazing animals and taking daily quizzes, we will help you donate money to Arctic Animal Protection organizations. 
                        </p>
                        </div>
                        <br></br>
                <div className="dailyAction">
                    <h4>Action of the Day - </h4>
                    <br></br>
                    <p><strong>{content[props.index].action}</strong></p>
                </div>
             
            </div>
            <div className="impact">
                <h4>Impacts of Your Action - </h4>
                <p>{content[props.index].impact}</p>
            </div>
        <br></br>
        <div className='quizSection' role="img" aria-label="Background image to start quiz section" style={{ 
                width: '100vw',
                height: '80vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                backgroundImage: `url(${Background})`}}>
            <h1 className="intro" style={{ 
                fontWeight: 'bold'}}>Ready to save more Arctic wildlifes Forever?</h1>
            <br></br>
            <Link to='/quiz'>
                <button className="quiz-button"> TAKE THE QUIZ! </button>
            </Link>
        </div>
    </div>;
}

export default EducationPage;