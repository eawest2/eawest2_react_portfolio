import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I am a new and avid <span className="highlight">JavaScript</span> developer,
              with a desire to learn much more.
            </p>
            <p>
              I'm often remarked upon for my creativity and dedication to solving problems,
              which often results in novel solutions to complex issues. I have five years experience
              in IT Support, and have worked hard that entire time to expand my catalogue of skills
              and experience such that I am able to bring inventive solutions to almost any problem.
            </p>
            <p>
              In my spare time, I perform in a regional <span className="highlight">Live Action Role Playing</span> community,
              and use hsitorical methods to make armor out of steel. I am a 10 year veteran of
              a 501c3 charity costuming organization <span className="highlight">The Mandalorian Mercs Costume Club</span>,
              where we donate time and money to visit children in hospitals, provide tuition assitance to needful children,
              and to improve our communities on the whole.
            </p>
            <p>
              My  <span className="highlight">passion</span> has always been to make things that myself
              and others find useful, engaging, and entertaining. I feel that my expansion into WebDev
              is a natural growth of that drive and energy.
            </p>
            <p>
              I have experience with numerous technologies, such as Javascript, React, Node, Express,
              MongoDB, MYSQL and MSSQL, Git, GitHub, Heroku, CSS, and HTML.
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
