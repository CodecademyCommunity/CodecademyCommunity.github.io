import giphy1 from '../assets/img/giphy1.gif';
import giphy2 from '../assets/img/giphy2.gif';

export const Countdown = ({memberCount}) => {

      const images = [giphy1, giphy2];

      return (
        <main className="container has-text-centered">
            <h1 className="is-size-1">Codecademy Discord Server</h1>
            <h2 className="is-size-2" id="count-to-header">Count to 60k:</h2>

            { memberCount >= 60000 &&
            <figure className="image-is-square" id="gif">
              <img src={images[Math.floor(Math.random() * images.length)]}/>
            </figure>
            }
            
            <div className="blob">         
              <p id="members">{memberCount}</p>
            </div>

            <p className="milestone" id="milestone50k">Feb 3rd '22 50k</p>
            <p className="milestone" id="milestone40k">Nov 7th '21 40k</p>
            <p className="milestone" id="milestone30k">Aug 11th '21 30k</p>
            <p className="milestone" id="milestone20k">Jun 9th '21: 20k</p>
            <p className="milestone" id="milestone10k">Mar 25th '21: 10k</p>
        </main>
    );
  };
  