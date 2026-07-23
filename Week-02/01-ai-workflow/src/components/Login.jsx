import { useState } from "react";
import "./Login.css";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        let newErrors = {};

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
        ) {
            newErrors.email = "Invalid email";
        }

        if (!form.password) {
            newErrors.password = "Password is required";
        } else if (form.password.length < 8) {
            newErrors.password = "Minimum 8 characters";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setLoading(true);

            // API Call Here

            console.log(form);

            await new Promise((resolve) => setTimeout(resolve, 1500));

            alert("Login Successful");
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form className="card" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className="field">
                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    {errors.email && <small>{errors.email}</small>}
                </div>

                <div className="field">
                    <label>Password</label>

                    <div className="password-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Password"
                            value={form.password}
                            onChange={handleChange}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {errors.password && <small>{errors.password}</small>}
                </div>

                <button className="login-btn" disabled={loading}>
                    {loading ? "Signing In..." : "Login"}
                </button>
            </form>
        </div>
    );
}