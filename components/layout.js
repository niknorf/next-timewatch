import Menu from "./Menu/Menu";

export default function Layout({ children }) {
	return (
		<>
			<div className="App">
				<main>{children}</main>
				<Menu />
				<style jsx>{`
					.App {
						height: 100vh;
						background-color: #d6d6d6;
						display: flex;
						justify-content: center;
						flex-direction: column;
						align-items: center;
						padding: 0 16px;
					}
				`}</style>
			</div>
		</>
	);
}
