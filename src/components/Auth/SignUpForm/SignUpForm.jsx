import { useState } from "react";
import { signUp } from "../../../../utilities/user-services";
import "./SignUpForm.css";

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    birthday: {
      dd: "",
      mm: "",
      yyyy: "",
    },
    error: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    if (name === "dd" || name === "mm" || name === "yyyy") {
      // Allow only numeric input
      if (/^\d*$/.test(value)) {
        let isValid = true;

        if (name === "dd" && (parseInt(value, 10) > 31 || value.length > 2)) {
          isValid = false;
        }

        if (name === "mm" && (parseInt(value, 10) > 12 || value.length > 2)) {
          isValid = false;
        }

        if (isValid) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            birthday: {
              ...prevFormData.birthday,
              [name]: value,
            },
            error: "",
          }));
        }
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
        error: "",
      });
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      const user = await signUp(data);
      setUser(user);
    } catch (error) {
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <>
      <form className="SignUpForm" autoComplete="off" onSubmit={handleSubmit}>
        <input
          minLength="3"
          maxLength="20"
          placeholder="Pick a Username"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          minLength="5"
          maxLength="20"
          placeholder="Your email address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          minLength="6"
          maxLength="20"
          placeholder="Create a password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          minLength="6"
          maxLength="20"
          placeholder="Confirm your password"
          type="password"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          required
        />
        <p>Please enter your date of birth</p>
        <div className="Birthday">
          <input
            placeholder="MM"
            minLength="2"
            maxLength="2"
            type="text"
            name="mm"
            value={formData.birthday.mm}
            onChange={handleChange}
            required
          />
          <input
            placeholder="DD"
            minLength="2"
            maxLength="2"
            type="text"
            name="dd"
            value={formData.birthday.dd}
            onChange={handleChange}
            required
          />

          <input
            placeholder="YYYY"
            minLength="4"
            maxLength="4"
            type="text"
            name="yyyy"
            value={formData.birthday.yyyy}
            onChange={handleChange}
            required
          />
        </div>
        <button className="SignUpBtn" type="submit" disabled={disable}>
          Create My Account
        </button>
      </form>
      <p className="Error2">{formData.error}</p>
    </>
  );
}
