import { useState } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBXx4a0qXtMEOhHsqDjEOgvu_tyCtDcA9c",
  authDomain: "lacetalk-web-iv.firebaseapp.com",
  projectId: "lacetalk-web-iv",
  storageBucket: "lacetalk-web-iv.appspot.com",
  messagingSenderId: "16978065296",
  appId: "1:16978065296:web:35f905c632c7d903dda515"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignUpForm({ user, setUser }) {
  const navigate = useNavigate()
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      navigate('/home')
    } catch (error) {
      alert(error);
    }
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      alert(error);
    }
  }

  if(user) {
    return <h2>Welcome User {user.email}</h2>
  }

  return (
    <>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            value={email}
            type="email" 
            placeholder="Enter Email" 
            onChange={ e => setEmail(e.target.value) }
          />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password" 
            onChange={ e => setPassword(e.target.value) }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="success" size="lg" type="submit">Submit</Button>
        </Form.Group>
      </Form>

      <Button onClick={signInWithGoogle} variant="dark" size="lg">Sign in with Google</Button>
    </>
  )
}
