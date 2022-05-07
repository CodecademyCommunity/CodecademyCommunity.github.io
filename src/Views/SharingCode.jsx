import SingleLine from '../assets/img/singleline.png';
import Snippet from '../assets/img/snippet.png';
import CCSharing from '../assets/img/cc_sharing.png';

export const SharingCode = () => {
  return (
    <main className="has-text-centered">
      <div className="container p-2">
        <h1 className="is-size-1 is-size-2-mobile">
          How to share code effectively:
        </h1>
        <p className="mb-4 mt-2">
          A (non-exhaustive) list of some of the preferred ways to share code.
        </p>
      </div>
      <section className="container has-background-white mb-6 p-6">
        <div>
          <h2 className="is-size-2 is-size-3-mobile p-0">Small Snippets</h2>

          <p>
            If sharing a single line of code, wrap it in a pair of backticks ( `
            ):
          </p>
          <img src={SingleLine} alt="single line code" />

          <p>
            For a larger chunk of code, wrap it in three backticks ( ` ) with
            the name of the language:
          </p>
          <img src={Snippet} alt="multi line code" />
          <p>
            This has a number of benefits such as improved readability and
            syntax highlighting.
          </p>
        </div>
      </section>
      <section className="container has-background-white mb-6 p-6">
        <div>
          <h2 className="is-size-2 is-size-3-mobile p-0">Larger Code Files</h2>
          <p>
            If you need to send a larger code snippet or a whole file, please
            avoid uploading it directly as a file (as file uploads are not
            permitted for security reasons) and instead use one of the options
            listed below:
          </p>
          <hr />
          <section className="container">
            <h3 className="is-size-3">1. Exporting Code from Codecademy</h3>
            <p>
              If you need to export code directly from the Codecademy workspace,
              you can click on the Tools header on the navbar and export your
              code to a gist, which you can then share a link to:
            </p>
            <img src={CCSharing} alt="Codecademy Gist" />
          </section>
          <hr />
          <section className="container">
            <h3 className="is-size-3">2. Sharing off-platform code</h3>
            <p>
              To share off platform code you can use a code-sharing site. Some
              of these are:
            </p>
            <a className="site-link" href="https://gist.github.com/">
              GitHub Gist
            </a>
            <br />
            <a className="site-link" href="https://codepen.io/">
              Codepen
            </a>
            <br />
            <a className="site-link" href="https://jsfiddle.net/">
              JSFiddle
            </a>
            <p>
              Or you could share a link to a GitHub repository with your code.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};
