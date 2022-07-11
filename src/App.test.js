import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('home page', () => {
  it('renders the Home page', () => {
    render(<App />);
    expect(
      screen.getByText(/Welcome to the Codecademy Discord Community/)
    ).toBeInTheDocument();
  });
});

describe('navigation of navbar links', () => {
  it('navigates to and renders the Server Staff page', async () => {
    render(<App />);
    const user = userEvent.setup();
    const serverStaffLink = screen.getAllByText('Server Staff')[0];
    await user.click(serverStaffLink);
    expect(screen.getAllByText(/Admins/)[0]).toBeInTheDocument();
  });

  it('navigates to and renders the Contact Us page', async () => {
    render(<App />);
    const user = userEvent.setup();
    const contactUsLink = screen.getAllByText('Contact Us')[0];
    await user.click(contactUsLink);
    expect(screen.getAllByText(/The ModMail Bot/)[0]).toBeInTheDocument();
  });

  it('navigates to and renders the Sharing Code page', async () => {
    render(<App />);
    const user = userEvent.setup();
    const sharingCodeLink = screen.getAllByText('Sharing Code')[0];
    await user.click(sharingCodeLink);
    expect(screen.getByText(/Small Snippets/)).toBeInTheDocument();
  });

  it('navigates to and renders the Getting Help page', async () => {
    render(<App />);
    const user = userEvent.setup();
    const gettingHelpLink = screen.getAllByText('Getting Help')[0];
    await user.click(gettingHelpLink);
    expect(screen.getByText(/Let us see your code/)).toBeInTheDocument();
  });

  it('navigates to and renders the Resources page', async () => {
    render(<App />);
    const user = userEvent.setup();
    const resourcesLink = screen.getAllByText('Resources')[0];
    await user.click(resourcesLink);
    expect(screen.getByText(/Frontend Mentor/)).toBeInTheDocument();
  });

  it('navigates to and renders the FAQ page', async () => {
    render(<App />);
    const user = userEvent.setup();
    const faqLink = screen.getAllByText('FAQ')[0];
    await user.click(faqLink);
    expect(screen.getByText(/Is Codecademy Down/)).toBeInTheDocument();
  });
});
