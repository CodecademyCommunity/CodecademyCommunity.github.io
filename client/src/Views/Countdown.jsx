import { useEffect, useState } from 'react';

export const Countdown = () => {
        const [memberCount, setMemberCount] = useState(null);
        useEffect(() => {
          (async () => {
            try {
              const data = await fetch(`/api/discord`);
              const { memberCount } = await data.json();
              setMemberCount(memberCount);
            } catch(err) {
              console.error(err);
            }
          })();
        }, []);
      return (
        <main className="container has-text-centered">
            <h1 className="is-size-1">Discord Server Countdown</h1>
            <p className="p-3">Member Count: {memberCount ? memberCount : 'Loading...'}</p>
        </main>
    );
  };
  