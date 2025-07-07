import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img'/>
        
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      
      <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tomorroq's Leaders Today</h2>
      <p>Embark on a tranformative educational jouney with our
         university's comprehensive education progress . Our cuttind-edge
         curriculum is designed to empower students with the knowlwdge , 
         skills, and experiences needed to excel in the dynamic field of education .</p>
      <p>With a focus on innovation hands-on learning , and personalized mentoeship impact in classrooms , schools , and communities . </p>
      <p>Whether you aspire to become a teacher , adminstrator , conunselor , or educaion leader , our divers range of programs offers the perfect pathway to achieve your goald and unlock your full potential in shapinf your goals and unlock your full potentia in shaping the future of education</p>
      </div>
    </div>
  )
}

export default About
