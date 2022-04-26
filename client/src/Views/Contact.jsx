import ModMailImg0 from '../assets/img/modmail0.png';
import ModMailImg1 from '../assets/img/modmail1.png';
import ModMailImg2 from '../assets/img/modmail2.png';

export const Contact = () => {
  return (
    <main className="container has-text-centered">
      <h1 className="is-size-1">Contact Us</h1>
      <p className="m-2">
        If there is an issue that requires staff attention, please do not ping
        or direct message a staff member to report it as this is against server
        rules and may result in a warn. Instead please use the ModMail bot with
        the method below to bring any issues to the mod team's attention.
      </p>
      <p className="mb-5">
        {' '}
        If the ModMail bot is offline and you need to report a serious violation
        of server rules, you can ping an online Admin or Moderator to bring our
        attention to the violation. However, please reserve this only for when
        the ModMail bot is down or if the violation requires immediate attention
        - for example if a user is spamming scam links.
      </p>
      <div className="container has-background-white p-3">
        <h2 className="is-size-2">The ModMail Bot</h2>
        <p>
          To report any issues you can use the ModMail bot to open a ticket with
          server staff.
        </p>
        <hr />
        <section>
          <h3 className="is-size-3">
            1. Send a message containing your issue to the bot
          </h3>
          <img src={ModMailImg0} alt="modmail bot profile" />
        </section>
        <hr />
        <section>
          <h3 className="is-size-3">
            2. Select the Codecademy Community server by reacting with the
            appropriate number
          </h3>
          <p>
            (You may have to use the arrow reactions to scroll if you are in a
            large number of servers)
          </p>
          <img src={ModMailImg1} alt="modmail menu" />
        </section>
        <hr />
        <section>
          <h3 className="is-size-3">3. Sent!</h3>
          <p>Your message has now been sent to server staff.</p>
          <img src={ModMailImg2} alt="modmail direct message" />
        </section>
      </div>
    </main>
  );
};
