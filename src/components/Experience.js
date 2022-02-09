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
      dateText="08/2021 – 12/2021"
      dateInnerStyle={{ background: '#61b8ff' , color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#e86971' }}>Vedantu</h3>
      <h4 style={{ color: '#e86971' }}><img src={PM}  className='mx-1' width='38px' height='38px'  alt='loading..' />Product Associate</h4>
      <p>
      - Responsible for product analytics, A/B experiment setup and collecting & analysing qualitative feedback from customers
      </p>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="07/2019 – 07/2021"
      dateInnerStyle={{ background: '#e86971' , color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#61b8ff' }}>Amadeus Software Labs</h3>
      <h4 style={{ color: '#61b8ff' }}><img src={DevOps}  className='mx-1 rounded-circle' width='45px' height='25px'  alt='loading..' />DevOps Engineer</h4>
      <p>
      - Responsible for automating manual tasks and processes
      </p>
      <p>
      - Working on migration of in-house applications to cloud
      </p>
      <p>
      - Technologies: Python, Ansible, Shell scripting, Jenkins, Docker, Kubernetes, Jsonnet
      </p>
    </TimelineItem>
    <TimelineItem
      key="003"
      dateText="06/2020 – 06/2021"
      dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#e86971' }}>upGrad</h3>
      <h4 style={{ color: '#e86971'}}><img src="https://img.icons8.com/bubbles/50/000000/man-in-green-tie.png" alt='loading..' />Evangelist</h4>
      <p>
      - Counseled around 10 leads and helped 1 to convert to a learner at upGrad
      </p>
    </TimelineItem>
    <TimelineItem
      key="058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW"
      dateText="06/2019 – 10/2020"
      dateInnerStyle={{ background: '#e86971' , color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#61b8ff' }}>Neebal Technologies</h3>
      <h4 style={{ color: '#61b8ff' }}><img src="https://img.icons8.com/color/48/000000/teacher.png" alt='loading..' />Teacher</h4>
      <p>
      - Taught programming languages like C, C++, Java and Python
      </p>

    </TimelineItem>
    <TimelineItem
      key="005"
      dateText="07/2018 – 03/2019"
      dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#e86971' }}>Sardar Patel Institute of Technology</h3>
      <h4 style={{ color: '#e86971' }}><img src="https://img.icons8.com/color/48/000000/class.png" alt='loading..' />Teaching Assistant, Mathematics</h4>
      <p>
      - Responsible for creating assignments, conducting class tests
      </p>
    </TimelineItem>
  </Timeline>
    </div>
  );
}

export default Experience;
