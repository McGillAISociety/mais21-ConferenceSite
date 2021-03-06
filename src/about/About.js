import React, {Component} from 'react';
import Title from '../Title.js';
import monster from './char3.png';

class About extends Component {
  render(){
    return (
        <section id = "about">

          <div className = "background-monster">
          <img className = "background-monster" src={monster} alt="monster"/>
          <Title titleColor = "#ffc18e"> An Undergrad AI Conference </Title>
          <p> McGill AI is excited to announce our first ever undergraduate AI
          conference: the McGill AI Learnathon! Kick off your winter semester
          with a fun, AI-filled day of workshops, talks, panels, and networking.
          The conference is intended for all high school, cégep, and undergraduates
          interested in AI; admission is completely free.
          <br/>
          <p style={{"font-size":"15px"}}>Registration for the conference includes:</p>
          <div class="wrapper">
            <h2 class="layer-slotA" style={{"grid-row":"layer-1"}}> </h2>
            <div class="sessionA sessionA-1 track-1" style={{"grid-column":"track-1-start / track-1-end", "grid-row":"layer-1"}}>
              Access to our day-long program, consisting of 3 tracks of
            research talks, hands-on workshops, and sponsor presentations</div>
            <div class="sessionA sessionA-1 track-2" style={{"grid-column":"track-2-start / track-2-end", "grid-row":"layer-1"}}>
             Access to our panels, on topics such as securing research as an
            undergraduate and working on AI</div>

            <h2 class="layer-slotA" style={{"grid-row":"layer-2"}}> </h2>
            <div class="sessionA sessionA-2 track-1" style={{"grid-column":"track-1-start", "grid-row":"layer-2"}}>The option to submit an ML project to our <a href="#fair">poster fair</a></div>
            <div class="sessionA sessionA-2 track-2" style={{"grid-column":"track-2-start", "grid-row":"layer-2"}}> Access to our career fair </div>
            </div>

          <br/>

          Come and listen to some awesome researchers in the field of AI!
          </p>
          </div>
      </section>
    );
  }
}
export default About;
