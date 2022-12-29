import React from "react";

const SignupPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  function handleSubmit(event) {
    // event.preventDefault()
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="form-items">
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default SignupPage;
