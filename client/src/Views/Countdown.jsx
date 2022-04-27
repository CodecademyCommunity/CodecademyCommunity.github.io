export const Countdown = ({memberCount}) => {

      return (
        <main className="container has-text-centered">
            <h1 className="is-size-1">Discord Server Countdown</h1>
            <p className="p-3">Member Count: {memberCount ? memberCount : 'Loading...'}</p>
        </main>
    );
  };
  