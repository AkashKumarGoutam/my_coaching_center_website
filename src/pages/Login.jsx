import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const db = getFirestore(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // Save user data to localStorage
        const userData = {
          uid: user.uid,
          displayName: userDoc.data().name || "User", // Get name from Firestore
        };
        localStorage.setItem("user", JSON.stringify(userData));

        alert("Login successful!");
        navigate("/");  
      } else {
        console.log("No such user found!");
        setError("User data not found.");
      }
    } catch (err) {
      console.error("Login error:", err.message);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="p-10 mt-20 flex justify-center items-center">
      <div className="p-6 border-2 border-gray-200 rounded-xl">
        <h1 className="text-xl font-semibold flex justify-center text-indigo-500 underline pb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="flex justify-between py-4">
            <label className="font-semibold text-black w-24">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="py-1 px-2 rounded-sm border-2 border-indigo-300 hover:border-indigo-600 transition duration-300"
              required
            />
          </div>
          <div className="flex justify-between py-4">
            <label className="font-semibold text-black w-24">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="py-1 px-2 rounded-sm border-2 border-indigo-300 hover:border-indigo-600 transition duration-300"
              required
            />
          </div>
          {error && <div className="text-red-500 text-center py-2">{error}</div>}
          <div className="flex justify-center items-center">
            <button className="bg-indigo-500 text-white p-1 px-2 rounded-lg">Login</button>
          </div>
          <div className="py-2 text-sm flex justify-center items-center">
            <h1>Don't have an account?</h1>
            <Link to="/register" className="text-indigo-600">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
