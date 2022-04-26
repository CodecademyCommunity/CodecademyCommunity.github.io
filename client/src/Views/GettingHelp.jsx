export const GettingHelp = () => {
  return (
    <main className="container has-text-centered">
      <h1 className="is-size-1">How to get Coding Help</h1>
      <p className="p-3">
        This is a guide on how to get help when you run into a problem while
        coding.
      </p>
      <p className="p-3">
        Most people are very keen to offer help if they can, but we have noticed
        a few problems people make that mean it is harder for others to help
        them. This might cause you to get frustrated, and not get the help you
        need.
      </p>
      <article className="container has-background-white p-6 mt-4">
        <section>
          <h2 className="is-size-2">1. Let us see your code</h2>
          <div className="content">
            <p>
              We probably cannot help you with your problem if we cannot see
              what's wrong! And sometimes it is not immediately clear what is
              wrong. We may need to test and edit the code ourselves to diagnose
              and find a solution to the problem.
            </p>
            <ul>
              <li>
                Put the code in a format we can edit. Screenshots or photos of
                the screen will not work for this, as people would have to type
                out all of your code just to start helping.
              </li>
              <li>
                Include all of your code. If you just put part of the code that
                you think is the problem, we cannot help if it turns out the
                problem is in another part of your code. This is a big issue in
                CSS, where other parts of your CSS file can change things
                everywhere.
              </li>
              <li>
                If you change something, post the updated code. This helps
                people see if you have made error when you have made
                corrections.
              </li>
              <li>
                Use sites like{' '}
                <a className="link" href="https://github.com/">
                  Github
                </a>{' '}
                or{' '}
                <a className="link" href="https://jsfiddle.net/">
                  jsFiddle
                </a>{' '}
                to post your code in a way that people can see and work with it.
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section>
          <h2 className="is-size-2">2. Tell us your problem</h2>
          <div className="content">
            <p>
              If you have a bug in your code, tell us what it is. Give as much
              information as possible. What is the bug? What are the error
              messages? Did it work before and then fail when something changed?
            </p>
          </div>
        </section>
        <hr />
        <section>
          <h2 className="is-size-2">3. Tell us what you have tried</h2>
          <div className="content">
            <p>
              Community members have better success with troubleshooting when
              they state what they have already tried themselves. This context
              allows others to chime in with more helpful suggestions, and it
              lets us know that you are willing to put in the work and are not
              simply expecting to be handed an answer.
            </p>
            <p>
              Writing out the steps you have already taken also has a funny way
              of helping you see where you went wrong &mdash; sometimes even
              before we do! This is known as "rubber duck debugging" and is a
              valuable tool in every developer's toolkit.
            </p>
          </div>
        </section>
        <hr />
        <section>
          <h2 className="is-size-2">
            4. Let us know where your task comes from
          </h2>
          <div className="content">
            <p>
              The Codecademy Community has rules against helping others with
              school assignments or assessments. Stating what you are working
              on, like an exercise or project from Codecademy, freeCodeCamp, The
              Odin Project, etc. lets people know that you are not asking them
              to help you with your homework.
            </p>
            <p>
              Link to the page if it is a Codecademy lesson or project. Many of
              us have completed these projects, but it is difficult to navigate
              back to find our solutions. If you include a link to the
              excercise, we can easily bring up our answers and compare code to
              find errors.
            </p>
          </div>
        </section>
        <hr />
        <section>
          <h2 className="is-size-2">
            5. Be aware of the following super handy resources to catch simple
            errors
          </h2>
          <div className="content">
            <p>
              <a className="link" href="https://validator.w3.org/">
                W3C website validator
              </a>
              : putting your page in here will let you know about many simple
              errors, such as unclosed tags.
            </p>
            <p>
              <a className="link" href="https://text-compare.com/">
                Text Compare
              </a>
              : Works like the diff built into codecademy. When you cannot see
              where you have made an error, and you are sure it looks like an
              example. This tool is useful for seeing where easily missed
              mistakes may be present.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};
