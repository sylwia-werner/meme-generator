import { ReactNode } from "react";
import "./MainLayout.css";

interface Props {
	children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
	return (
		<>
			<header className="header">
				<h1>Meme Generator</h1>
			</header>
			<main className="main">
				<div className="container">{children}</div>
			</main>
		</>
	);
};
