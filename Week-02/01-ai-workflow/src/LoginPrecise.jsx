import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./LoginPrecise.css";

const schema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),

    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
});

export default function LoginPrecise() {
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur",
        reValidateMode: "onBlur",
    });

    const onSubmit = () => {
        setSuccessMessage("Login successful!");
    };

    return (
        <div className="login-container">
            <form
                className="login-form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2>Login</h2>

                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email")}
                    />

                    {errors.email && (
                        <p className="error">{errors.email.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password">
                        Password
                    </label>

                    <div className="password-wrapper">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register("password")}
                        />

                        <button
                            type="button"
                            className="toggle-btn"
                            onClick={() =>
                                setShowPassword((prev) => !prev)
                            }
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="error">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!isValid}
                    className="submit-btn"
                >
                    Login
                </button>

                {successMessage && (
                    <p className="success">
                        {successMessage}
                    </p>
                )}
            </form>
        </div>
    );
}