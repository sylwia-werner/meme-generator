import { Portal } from "../Portal/Portal";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

import { useEffect, useRef } from "react";
import "./Modal.css";

interface Props {
	title: string;
	onClose?: () => void;
	className?: string;
	wrapperClass?: string;
	children?: React.ReactNode;
}

const Modal = ({
	title,
	children,
	onClose,
	className,
	wrapperClass,
}: Props) => {
	const wrapRef = useRef<HTMLDivElement>(null);
	useBodyScrollLock(true);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const listener = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			onClose?.();
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", listener);
		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, [listener]);

	return (
		<Portal>
			<div
				onClick={({ target }) => {
					if (target === wrapRef.current) onClose?.();
				}}
				role="presentation"
				className={`wrapper-container ${className || ""} `}
			>
				<div ref={wrapRef} className="wrapper-inner">
					<div
						className={`modal-container wrapper-modal ${
							wrapperClass || ""
						}`}
					>
						{onClose && (
							<button
								className="modal-close-button"
								type="button"
								onClick={onClose}
							>
								X
							</button>
						)}
						<div className="modal-inner">
							<h3 className="modal-title">{title}</h3>
							{children}
						</div>
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
