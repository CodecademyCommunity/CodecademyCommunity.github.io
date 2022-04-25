import { useEffect, useState } from 'react';

export default function DiscordStats() {
    const [memberCount, setMemberCount] = useState(null);
    useEffect(() => {
      (async () => {
        try {
          const res = await fetch(`/api/discord-stats`);
          const data = await res.json();
          setMemberCount(data.memberCount);
          return data;
        } catch(err) {
          console.error(err);
        }
      })();
    }, []);

    
  return (
    <main className="has-text-centered">
      <div className="container p-2">
        <h1 className="is-size-1 mt-6">Discord Stats</h1>
        <p className="mb-6">
            {memberCount ? `Member Count: ${memberCount}` : 'Loading...'}
        </p>
      </div>
    </main>
  );
};
