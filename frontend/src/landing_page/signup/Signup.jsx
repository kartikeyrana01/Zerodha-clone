import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar"; 


function Signup() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
   

  // Signup handler
  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:3002/api/auth/signup", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      alert("Signup successful, logged in!");
      setShowModal(false); // modal close
       navigate("/dashboard")
      
    } catch (err) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <h1 className="text-center mt-5 fs-3">
          Open a free demat and trading account online
        </h1>
        <p className="text-center mt-3 fs-4">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img
            src="media/images/account_open.svg"
            alt=""
            className="ms-[100px] mt-5"
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-5">
          <h2 className="fs-4">Signup now</h2>
          <p> Or track your existing application</p>

          {/* Trigger Button */}
          <button
            className="btn btn-primary"
            style={{ width: "200px", height: "50px" }}
            onClick={() => setShowModal(true)}
          >
            Signup Now
          </button> <br />
          <p>already have account <Link href="/signin" style={{textDecoration:"none"}} >Sign in</Link> here</p>

          <br /> <br /> <br />
          <p className="fs-6">
            By proceeding, you agree to the Zerodha{" "}
            <span className="text-primary">terms </span>&{" "}
            <span className="text-primary">privacy policy</span>
          </p>
        </div>
      </div>

      {/* Signup Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
              <h4 className="mb-3">Create your account</h4>

              <input
                type="email"
                placeholder="Enter Email"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleSignup}>
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
