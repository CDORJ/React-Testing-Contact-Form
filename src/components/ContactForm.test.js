import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("that ContactForm renders", () => {
  render(<ContactForm />);
});

test("Testing Input Forms", async () => {
  render(<ContactForm />);

  //testing first name field
  const name = screen.getByLabelText(/First Name/i);
  //   console.log(name)
  await userEvent.type(name, "Chad");
  expect(name).toHaveValue("Chad");

  //testing the last name field
  const lastName = screen.getByLabelText(/Last Name/i)
  await userEvent.type(lastName, "Diaz")
  expect(lastName).toHaveValue("Diaz")

  //testing email field
  const email = screen.getByTestId(/email/i)
  await userEvent.type(email, "test@test.com")
  expect(email).toHaveValue('test@test.com')

  //testing message field
  const message = screen.getByLabelText(/message/i)
  await userEvent.type(message, 'now is the time');
  expect(message).toHaveValue('now is the time')

//   testing the submit
  const submit = screen.getByTestId(/submit/i);
  await userEvent.click(submit);

//   const pre = await screen.getByTestId(/pre/i);
//   await expect(pre).toBeInTheDocument();
});