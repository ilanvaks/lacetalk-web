import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./secrets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css"

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
  };

  const handleSubmit = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
    } catch {
      console.error("Wrong Email or Password");
    }
  };

  // Function to handle navigation to the sign-up page
  const handleSignUp = () => {
    navigate("/signup");
  }

  const handleJSubmit = (e) => {
    e.preventDefault();
  
    fetch("https://lacetalk-iv.web.app/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Wrong Email or Password");
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem("jwt", data["x-auth-token"]);
        setUser(data);
        navigate("/home");
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  };
  

  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser(false);
  //       // setGoogleUser(false);
  //       navigate("/home")
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };


  return (
    <Form className="d-flex align-items-center">
      <div className="login-box">
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
      <Button variant="primary" type="submit" onClick={handleJSubmit}>
        Submit
      </Button>
      <Button variant="secondary" onClick={handleSignUp}>
        Sign Up
      </Button>
      <br />
      <br />
      <button className="google-button" onClick={handleGoogleLogin}>
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" className="svg-1">
  <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" className="blue"></path>
  <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" className="green"></path>
  <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" className="yellow"></path>
  <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" className="red"></path>
</svg>
<span className="text">Continue with Google</span>
</button>
</div>
    </Form>
  );
}
