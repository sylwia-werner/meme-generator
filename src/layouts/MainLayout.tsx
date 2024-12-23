import { ReactNode } from "react";
import "./MainLayout.css";

interface Props {
	children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
	return (
		<>
			<header className="header">
				<div className="container">
					<h1 className="heading">Meme Generator</h1>
				</div>
			</header>
			<main className="main">
				<div className="container">{children}</div>
			</main>
		</>
	);
};
