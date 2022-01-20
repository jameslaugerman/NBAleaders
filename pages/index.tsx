import type { NextPage } from "next";
import PlayerCard from "./playerCard";
import styles from "../styles/Home.module.css";
import Header from "./header";
import Footer from "./footer";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<div className={styles.grid}>
					<PlayerCard playerId={115} name={"Steph Curry"} />;
					<PlayerCard playerId={125} name={"Demar DeRozan"} />;
					<PlayerCard playerId={115} />;
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
