import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { setUserData } = useContext();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    console.log(formData);
    setFormData(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="form-items">
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        value={formData.password}
      />
      <br />
      <br />
      <button className="submit-buttom">Submit</button>
    </form>
  );
};

export default LoginPage;
