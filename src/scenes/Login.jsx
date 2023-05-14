import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleButton from "react-google-button";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./secrets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login({ user, setUser, setInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
    // setUser(_user)
  };

  // console.log(user)

  const handleSubmit = async () => {
    try {
      const _user = await signInWithEmailAndPassword(auth, email, password);
      setUser(_user);
    } catch {
      console.error("Wrong Email or Password");
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          name = "email"
          type="email" 
          placeholder="Enter email" 
          required={true}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        name="password"
        required={true}
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <GoogleButton
        className="google-login"
        onClick={handleGoogleLogin}
        type="light"
        htmltype="submit"
      ></GoogleButton>
    </Form>
  );
}
