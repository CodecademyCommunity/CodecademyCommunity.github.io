import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './app';

window.scroll = jest.fn();

test('renders the Home page', () => {
  render(<App />);
  expect(
    screen.getAllByText(/Welcome to the Codecademy Discord Community/i)[0]
  ).toBeInTheDocument();
});

test('navigates to and renders the Server Staff page', async () => {
  render(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByTestId('server-staff-link'));
  expect(screen.getAllByText(/Admins/i)[0]).toBeInTheDocument();
});

test('navigates to and renders the Contact Us page', async () => {
  render(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByTestId('contact-us-link'));
  expect(screen.getAllByText(/The ModMail Bot/i)[0]).toBeInTheDocument();
});

test('navigates to and renders the Sharing Code page', async () => {
  render(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByTestId('sharing-code-link'));
  expect(screen.getByText(/small snippets/i)).toBeInTheDocument();
});

test('navigates to and renders the Getting Help page', async () => {
  render(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByTestId('getting-help-link'));
  expect(screen.getByText(/Let us see your code/i)).toBeInTheDocument();
});

test('navigates to and renders the Resources page', async () => {
  render(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByTestId('resources-link'));
  expect(screen.getByText(/Frontend Mentor/i)).toBeInTheDocument();
});

test('navigates to and renders the FAQ page', async () => {
  render(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByTestId('faq-link'));
  expect(screen.getByText(/Is Codecademy Down/i)).toBeInTheDocument();
});
