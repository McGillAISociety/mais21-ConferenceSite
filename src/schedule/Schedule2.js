import React, {Component} from 'react';
import Title from '../Title.js';
import monster1 from './char1.png';

class Schedule2 extends Component{
  render(){
    return (
      <section id="schedule2">
      <div className = "background-monster">
      <img className = "background-monster" src={monster1} alt="monster"/>
        <div className = "main-content">
        <Title titleColor= "#ffc18e"> Schedule </Title>
        <div className="scheduleContainer">


          <h2 className="time-slot" style={{"grid-row": "time-0945"}}>9:45am</h2>
          <div className="session session-1 track-all" style={{
            "grid-column":"track-1-start / track-3-end",
            "grid-row":"time-0945 / time-1000"}}
          >
            <h3 className="session-title">Opening Ceremony</h3>
          </div>

          <h2 className="time-slot" style={{"grid-row": "time-1000"}}>10:00am</h2>
          <div className="session session-2 track-all" style={{"grid-column":"track-1-start / track-3-end", "grid-row":"time-1000 / time-1100", 'background-color':'#8becff'}}>
            <h3 className="session-title">Keynote: Pablo Castro</h3>
          </div>

          <h2 className="time-slot" style={{"grid-row": "time-1100"}}>11:00am</h2>
          <div className="session session-3 track-1" style={{"grid-column":"track-1-start", "grid-row":"time-1100"}}>
            <h3 className="session-title">Prof. David Rolnick</h3>
          </div>
          <div className="session session-3 track-2" style={{"grid-column":"track-2-start", "grid-row":"time-1100"}}>
            <h3 className="session-title">Sandi Mak</h3>
          </div>
          <div className="session session-3 track-3" style={{"grid-column":"track-3-start", "grid-row":"time-1100"}}>
            <h3 className="session-title">Wrnch</h3>
          </div>

          <h2 className="time-slot" style={{"grid-row": "time-1200"}}>12:00pm</h2>
          <div className="session session-4 track-all" style={{"grid-column":"track-1-start / track-3-end", "grid-row":"time-1200 / time-1300"}}>
            <h3 className="session-title">Lunch / Break</h3>
          </div>

          <h2 className="time-slot" style={{"grid-row": "time-1300"}}>1:00pm</h2>
          <div className="session session-5 track-1" style={{"grid-column":"track-1-start", "grid-row":"time-1300"}}>
            <h3 className="session-title">Prof. AJung Moon</h3>
          </div>
          <div className="session session-5 track-2" style={{"grid-column":"track-2-start", "grid-row":"time-1300"}}>
            <h3 className="session-title">KC Tsiolis</h3>
          </div>
          <div className="session session-5 track-3" style={{"grid-column":"track-3-start", "grid-row":"time-1300"}}>
            <h3 className="session-title"> </h3>

          </div>

          <h2 className="time-slot" style={{"grid-row": "time-1400"}}>2:00pm</h2>
          <div className="session session-6 track-1" style={{"grid-column":"track-1-start", "grid-row":"time-1400"}}>
            <h3 className="session-title">Prof. William Hamilton</h3>
          </div>
          <div className="session session-6 track-2" style={{"grid-column":"track-2-start", "grid-row":"time-1400"}}>
            <h3 className="session-title">Margarita Mayoral Villa</h3>
          </div>
          <div className="session session-6 track-3" style={{"grid-column":"track-3-start", "grid-row":"time-1400"}}>
            <h3 className="session-title">Microsoft</h3>
          </div>

          <h2 className="time-slot" style={{"grid-row": "time-1500"}}>3:00pm</h2>
          <h2 className="time-slot" style={{"grid-row": "time-1600"}}>4:00pm</h2>
          <div className="session session-7 track-all" style={{"grid-column":"track-1-start / track-3-end", "grid-row":"time-1500 / time-1700", 'background-color':'#8becff'}}>
            <h3 className="session-title">Networking Fair</h3>
          </div>

          <h2 className="time-slot" style={{"grid-row": "time-1700"}}>5:00pm</h2>
          <div className="session session-8 track-all" style={{"grid-column":"track-1-start / track-3-end", "grid-row":"time-1700 / time-1800", 'background-color':'#ffa9a8'}}>
            <h3 className="session-title">AI Experiences Panel</h3>
          </div>

          <h2 className="time-slot" style={{"grid-row": "time-1800"}}>6:00pm</h2>
          <div className="session session-9 track-all" style={{"grid-column":"track-1-start / track-3-end", "grid-row":"time-1800 / time-1900", "background-color": "#ffc18e"}}>
            <h3 className="session-title">Closing Ceremony</h3>
          </div>






          </div>

          </div>
        </div>
      </section>
    );
  }
}
export default Schedule2;
