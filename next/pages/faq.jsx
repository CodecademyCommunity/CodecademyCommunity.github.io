export default function FAQ () {
  return (
    <main className="has-text-centered">
      <h1 className="is-size-1">Frequently Asked Questions</h1>
      <section className="container has-background-white p-4">
        <h2 className="is-size-2">Q: Is Codecademy Down?</h2>
        <div className="content">
          <p>
            <b>A:</b> Most issues connecting to codecademy are caused by a local
            issue. If you are struggling to connect, try to ensure you have a
            strong internet connection and disable any VPNs, adblockers etc. If
            that does not work, attempt the steps in the below article:
          </p>
          <a href="https://help.codecademy.com/hc/en-us/articles/220441848-Connection-Lost-in-Codecademy-s-Learning-Environment">
            Connection Lost in Codecademy's Learning Environment
          </a>
          <p>
            And if the issue still persists, you can submit a support ticket to
            the Codecademy help center:
          </p>
          <a href="https://help.codecademy.com/hc/en-us">
            Codecademy Help Center
          </a>
        </div>

        <hr />

        <h2>Q: How long does [x] course take?</h2>
        <div className="content">
          <p>
            <b>A:</b> Estimates for the lengths of all Codecademy courses should
            be displayed in the catalogue page for the relevant course. However,
            it is important to remember that these are just estimates, and the
            actual time it may take to complete the course will not be the same
            for everyone.
          </p>
          <p>Estimates are also in the below help center articles:</p>
          <a href="https://help.codecademy.com/hc/en-us/articles/360012296653-Estimated-Career-Path-Completion-Times">
            Career Paths
          </a>
          <br />
          <a href="https://help.codecademy.com/hc/en-us/articles/360022742233-Estimated-Skill-Path-Completion-Times">
            Skill Paths
          </a>
        </div>

        <hr />

        <h2 className="is-size-2">
          Q: I have an issue with my account (including billing issues such as
          refunds)
        </h2>
        <div className="content">
          <p>
            <b>A:</b> As we are a primarily community-run server we do not have
            the ability to assist with billing issues, sorry! You will need to
            contact Codecademy support directly for any issues pertaining
            billing or your account:
          </p>
          <a href="https://help.codecademy.com/hc/en-us">
            Codecademy Help Center
          </a>
        </div>

        <hr />

        <h2 className="is-size-2">Q: Can someone review my code?</h2>
        <div className="content">
          <p>
            <b>A:</b> Absolutely, code reviews are a great learning opportunity
            and we thoroughly encourage them!
          </p>
          <p>
            Feel free to send your code (preferably in the form of a GitHub
            repo/gist or through a code-sharing site like Codepen or Replit and
            someone will hopefully be able to take a look.
          </p>
        </div>
      </section>
    </main>
  );
};
