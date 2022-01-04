import Head from "next/head";
import Input from "../components/Input/Input";
import Layout from "../components/layout";
import Time from "../components/Time/Time";
import Categories from "../components/Categories/Categories";
import Buttons from "../components/Buttons/Buttons";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Time Watch - New</title>
			</Head>
			<div className="App">
				<Input />
				<Time />
				<Categories />
				<Buttons />
			</div>
		</Layout>
	);
}
