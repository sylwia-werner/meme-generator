import { ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary";

interface Props {
	children: ReactNode;
	onClick: () => void;
	type?: "submit" | "reset" | "button";
	disabled?: boolean;
	variant: ButtonVariant;
	fullWidth?: boolean;
}

export const Button = ({
	children,
	onClick,
	type = "button",
	disabled,
	variant,
	icon,
	fullWidth = false,
}: Props) => {
	return (
		<button
			className={`button ${variant} ${fullWidth ? "fullWidth" : ""}`}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
