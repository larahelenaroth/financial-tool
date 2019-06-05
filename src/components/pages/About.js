import React from 'react';
import me from '../../me.JPG';

/* 
  About the developer aka me :)
    * Background & Education
    * Professional Experience
      * College
      * SKIM
      * Fitch Ratings
      * L'Oréal
    * Personal
*/

const About = () => {
  return (
    <div
      style={{
        marginTop: '75px',
        padding: '3%'
      }}
    >
      <h2 className="heading-6 margin-b">About Lara H Roth</h2>
      <p className="flex justify-content-center">
        <img
          src={me}
          alt="me"
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '40vh'
          }}
        />
      </p>
      <h2 className="label-2 dls-gray-05 margin-b margin-t">{`Background & Education`}</h2>
      <p className="">
        I was born in San Francisco, CA and raised between Canada, Minneapolis,
        and New York. After graduating high school, I moved to Canada to pursue
        statistics in college. After one year, I moved to New York to be closer
        to family. At Baruch College (CUNY), I graduated with a bachelors in
        Statistics and Quantitative Modeling with special permission to make
        half of my major a computer science degree. I also graduated with a
        minors in Women and Gender Studies.
      </p>
      <h2 className="label-2 dls-gray-05 margin-b margin-t">
        Professional Experience
      </h2>
      <p>
        In college, I worked and had three internships. The last internship
        became a full-time job after graduation with one month off to travel in
        between. I was the head of the development team for the Americas at{' '}
        <a href="https://skimgroup.com/">SKIM</a>, mainly focusing on the
        front-end shopping simulation and experience respondents would interact
        with for market research insights. I single-handedly developed the
        interaction for a new methodology that was piloted while I was working
        there.
      </p>
      <p>
        In July of 2018, I started a new position with{' '}
        <a href="https://www.fitchratings.com/site/home">Fitch</a> as a
        developer in Operations. There, I concentrated on the data side of
        application development. I consulted internally to create new schemas,
        replacing legacy application dependencies for the new process automation
        I was developing. The processes I alone automated saved analysts about
        50% of their time per committee as well as saved the firm about one
        million dollars in the process.
      </p>
      <p>
        My old bosses from SKIM joined the advanced analytics team at{' '}
        <a href="https://www.loreal.com/">L'Oréal</a>. They asked me to contract
        for them to build a reusable shopping platform to collect insights into
        marketing, similar to my first full-time professional role. Utilizing
        weekends and free weeknights, I collaborated with the team at L'Oréal to
        deliver a analyst and respondent friendly data collection tool with a
        nice UI.
      </p>
      <h2 className="label-2 dls-gray-05 margin-b margin-t">Personal</h2>
      <p>
        Growing up, I was a classicly trained ballet dancer. I attended the{' '}
        <a href="https://www.joffreyballetschool.com/">Joffrey Ballet School</a>{' '}
        here in New York, as well as the{' '}
        <a href="https://www.rwb.org/">Royal Winnipeg Ballet School</a>. My home
        studio, <a href="https://hopkinsdance.com/">Hopkins Dance Center</a> is
        where I would call the studio home. Currently, I plan to complete my
        yoga teacher training certificate by the end of 2019 with the vision of
        teaching at least one class a week and maintain a fitness lifestyle
        attending Steps on Broadway every so often and eating well. I am a proud
        mother of Lieba the black cat and maintain a very close relationship
        with my brother, sister, and mother.
      </p>
    </div>
  );
};

export default About;
