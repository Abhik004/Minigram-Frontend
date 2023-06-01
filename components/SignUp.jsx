import React, { useState } from "react";
import Link from "next/link";
import { signup } from "../pages/api/api";
import styles from "../styles/Login.module.css";
function SignUp() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSignUpData((prevSignUpData) => ({
      ...prevSignUpData,
      [name]: value,
    }));
  }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   signup(signUpData).then()

  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      signUpData.email === "" ||
      signUpData.username === "" ||
      signUpData.password === "" ||
      signUpData.name === ""
    ) {
      alert("Please fill the required details");
    }
    setSignUpData({...signUpData});
    console.log(signUpData);
    await signup(signUpData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token',res.data);
        alert("Sign up sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.miniGramSignUp}>
      <div className={styles.miniGramSignUpContainer}>
        <div className={styles.miniGramSignUpSubContainer}>
          <div className={styles.miniGramSignUpContainerContent}>
            <h2>Get Started Now</h2>
            <p>Enter your credentials to access your account</p>
          </div>

          <form className={styles.miniGramSignUpInfo} onSubmit={handleSubmit}>
            {/* <label htmlFor="phoneno">Mobile Number</label>
            <input
              name="phoneno"
              type="text"
              placeholder="Enter your mobile number"
              onChange={handleChange}
              value={signUpData.phoneno}
            /> */}
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              onChange={handleChange}
              value={signUpData.email}
            />
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              onChange={handleChange}
              value={signUpData.username}
            />
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your Full Name"
              onChange={handleChange}
              value={signUpData.name}
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create Password"
              onChange={handleChange}
              value={signUpData.password}
            />
            <button>Sign Up</button>
          </form>
          <div className={styles.miniGramsignUpFooter}>
            <p>
              Already have an account? <Link href="/signin">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
