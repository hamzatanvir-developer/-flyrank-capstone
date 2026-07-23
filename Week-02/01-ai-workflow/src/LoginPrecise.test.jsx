import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPrecise from "./LoginPrecise";

describe("LoginPrecise Component", () => {
    test("Empty form submit shows errors", async () => {
        const user = userEvent.setup();

        render(<LoginPrecise />);

        const email = screen.getByLabelText(/email/i);
        const password = screen.getByLabelText(/password/i);

        await user.click(email);
        await user.tab();

        await user.click(password);
        await user.tab();

        expect(
            screen.getByText("Email is required")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Password is required")
        ).toBeInTheDocument();
    });

    test("Invalid email shows error", async () => {
        const user = userEvent.setup();

        render(<LoginPrecise />);

        const email = screen.getByLabelText(/email/i);

        await user.type(email, "invalidemail");
        await user.tab();

        expect(
            screen.getByText(
                "Please enter a valid email address"
            )
        ).toBeInTheDocument();
    });

    test("Password under 8 chars shows error", async () => {
        const user = userEvent.setup();

        render(<LoginPrecise />);

        const password =
            screen.getByLabelText(/password/i);

        await user.type(password, "1234567");
        await user.tab();

        expect(
            screen.getByText(
                "Password must be at least 8 characters"
            )
        ).toBeInTheDocument();
    });

    test("Valid input enables submit button", async () => {
        const user = userEvent.setup();

        render(<LoginPrecise />);

        const email = screen.getByLabelText(/email/i);
        const password =
            screen.getByLabelText(/password/i);

        const submit = screen.getByRole("button", {
            name: /login/i,
        });

        expect(submit).toBeDisabled();

        await user.type(email, "john@example.com");
        await user.tab();

        await user.type(password, "password123");
        await user.tab();

        expect(submit).toBeEnabled();
    });

    test("Successful submit shows success message", async () => {
        const user = userEvent.setup();

        render(<LoginPrecise />);

        const email = screen.getByLabelText(/email/i);
        const password =
            screen.getByLabelText(/password/i);

        await user.type(email, "john@example.com");
        await user.tab();

        await user.type(password, "password123");
        await user.tab();

        await user.click(
            screen.getByRole("button", {
                name: /login/i,
            })
        );

        expect(
            screen.getByText("Login successful!")
        ).toBeInTheDocument();
    });
});