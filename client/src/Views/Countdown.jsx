import { useEffect, useState } from 'react';
import './Countdown.css';
import giphy1 from '../assets/img/giphy1.gif';
import giphy2 from '../assets/img/giphy2.gif';

function calculateGoal(memberCount) {
  const previousGoal = Math.floor(memberCount / 10000) * 10000;
  const newGoal = Math.ceil(memberCount / 10000) * 10000;
  return Math.max(
    1000,
    memberCount > previousGoal + 100 ? newGoal : previousGoal
  );
}

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
}

export const Countdown = ({ memberCount }) => {
  const images = [giphy1, giphy2];
  const [goal, setGoal] = useState(calculateGoal(memberCount));

  useEffect(() => {
    setGoal(calculateGoal(memberCount));
  }, [memberCount]);

  return (
    <main className="container has-text-centered">
      <h1 className="is-size-1">Codecademy Discord Server</h1>
      <h2 className="is-size-2">Count to {kFormatter(goal)}</h2>

      {memberCount >= goal && (
        <figure className="image-is-square">
          <img src={images[Math.floor(Math.random() * images.length)]} />
        </figure>
      )}

      <div className="blob">
        <p id="members">{memberCount}</p>
      </div>

      <p className="milestone" id="milestone50k">
        Feb 3rd '22 50k
      </p>
      <p className="milestone" id="milestone40k">
        Nov 7th '21 40k
      </p>
      <p className="milestone" id="milestone30k">
        Aug 11th '21 30k
      </p>
      <p className="milestone" id="milestone20k">
        Jun 9th '21: 20k
      </p>
      <p className="milestone" id="milestone10k">
        Mar 25th '21: 10k
      </p>
    </main>
  );
};
