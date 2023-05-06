import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66; // Example: 66% of total tickets raised today

const Analytics = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: '25%', height: '25%', margin: '50px auto' }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <h1 style={{ fontSize: '36px' }}><b>Total Tickets Raised Today</b></h1>
    </div>
  );
};

export default Analytics;