import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Countdown from 'react-countdown'; 

const CountdownPage = () => {
    const targetDate = new Date(2027, 6, 10).getTime(); 

    const today = new Date();
    const formattedToday = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <span>The game jam has started!</span>;
    } else {
      // Render the countdown timer
      return (
        <>
          <div className="date-container">
            <p>Today's Date: {formattedToday}</p>
            <p>Game Jam Date: June 1, 2024</p>
          </div>
          <div className="countdown-item">
            {days} <span>Days</span>
          </div>
          <div className="countdown-item">
            {hours} <span>Hours</span>
          </div>
          <div className="countdown-item">
            {minutes} <span>Minutes</span>
          </div>
          <div className="countdown-item">
            {seconds} <span>Seconds</span>
          </div>
        </>
      );
    }
  };

  return (
    <Layout pageTitle="Countdown to the next jam!">
      <Countdown date={targetDate} renderer={renderer} /> 
    </Layout>
  );
};

export const Head = () => <Seo title="Countdown to the next jam!" />;

export default CountdownPage;
