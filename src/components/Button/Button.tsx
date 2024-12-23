import { ReactNode } from "react";
import { IconVariant } from "../Icon/icon.types";
import Icon from "../Icon/Icon";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary";

interface Props {
	children: ReactNode;
	onClick: () => void;
	type?: "submit" | "reset" | "button";
	disabled?: boolean;
	variant: ButtonVariant;
	icon?: IconVariant;
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
			{icon && <Icon variant={icon} />}
		</button>
	);
};
