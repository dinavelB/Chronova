import { Form } from "react-router";

export async function action() {
  return null;
}

export default function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <Form method="post">
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </Form>
    </div>
  );
}
