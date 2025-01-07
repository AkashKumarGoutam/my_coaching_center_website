import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const db = getFirestore(app);

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userDoc = doc(db, "users", userCredential.user.uid);
      await setDoc(userDoc, {
        name,
        email,
        createdAt: new Date().toISOString(),
      });
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err.message);
      alert(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="p-10 mt-20 flex justify-center items-center">
      <div className="p-6 border-2 border-gray-200 rounded-xl">
        <h1 className="text-xl font-semibold flex justify-center text-indigo-500 underline pb-6">
          Register
        </h1>
        <form onSubmit={handleRegister}>
          <div className="flex justify-between py-4">
            <label className="font-semibold text-black w-24">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="py-1 px-2 rounded-sm border-2 border-indigo-300 hover:border-indigo-600 transition duration-300"
              required
            />
          </div>
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
          <div className="flex justify-center items-center">
            <button className="bg-indigo-500 text-white p-1 px-2 rounded-lg">Register</button>
          </div>
          <div className="py-2 text-sm flex justify-center items-center">
            <h1>Already have an account?</h1>
            <Link to="/login" className="text-indigo-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
