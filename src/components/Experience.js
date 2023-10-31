import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import DevOps from '../images/devOps.png';
import PM from '../images/product-management.png';

import 'react-vertical-timeline-component/style.min.css';

import '../css/Experience.css';

function Experience() {
  return (
    <div className="Experience text-center">
    <h1>Experience</h1>

  <Timeline lineColor={'#ddd'}>
    <TimelineItem
      key="001"
      dateText="03/2023 – Present"
      dateInnerStyle={{ background: '#48a802' , color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#0502a8' }}>Pilot Flying J</h3>
      <h4 style={{ color: '#0502a8' }}>{/*<img src={DevOps}  className='mx-1 rounded-circle' width='45px' height='25px'  alt='loading..' />*/}Product Manager II</h4>
      <p>
      Leading the design of parking reservation and mobile fueling experience on the myRewardsPlus app for truck drivers to decrease transaction failures by 50%.
      </p>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="09/2022 – 12/2022"
      dateInnerStyle={{ background: '#48a802', color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#0502a8' }}>The Home Depot</h3>
      <h4 style={{ color: '#0502a8'}}>{/*<img src="https://img.icons8.com/bubbles/50/000000/man-in-green-tie.png" alt='loading..' />*/}Product Manager</h4>
      <p>
      Performed competitive analysis, evaluated best practices across big box retailers, and got leadership buy-in for coupon marketing and digital transformation strategies to save margins worth $34Mn.
      </p>
    </TimelineItem>
    <TimelineItem
      key="003"
      dateText="08/2021 – 12/2021"
      dateInnerStyle={{ background: '#48a802' , color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#0502a8' }}>Vedantu Innovations Pvt Ltd</h3>
      <h4 style={{ color: '#0502a8' }}>{/*<img src="https://img.icons8.com/color/48/000000/teacher.png" alt='loading..' />*/}Product Associate</h4>
      <p>
      Conducted 100 customer interviews and successfully reduced user onboarding drop-off rate by 50% after identifying 3 major user pain points and performing hypothesis validation via A/B tests.
      </p>

    </TimelineItem>
    <TimelineItem
      key="004"
      dateText="07/2019 – 07/2021"
      dateInnerStyle={{ background: '#48a802', color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#0502a8' }}>Amadeus</h3>
      <h4 style={{ color: '#0502a8' }}>{/*<img src="https://img.icons8.com/color/48/000000/class.png" alt='loading..' />*/}Software Engineer</h4>
      <p>
      Received 3 quarterly high-flyer awards for going above and beyond for taking ownership to automate 3 major process workflows that reduced ~40 hrs/week in workload and saved ~30K USD/year.
      </p>
    </TimelineItem>
  </Timeline>
    </div>
  );
}

export default Experience;
