import React from "react";
import PlayerCard from "./Components/PlayerCard";
import styles from "./App.module.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
	return (
		<div className="container">
			<main className={styles.main}>
				<Header />
				<div className={styles.grid}>
					<PlayerCard player="Steph Curry" id={125} img="/steph.jpeg" />
					<PlayerCard player="Demar Derozan" id={115} img="/demar.jpeg" />
					<PlayerCard player="Ja Morant" id={666786} img="/ja.jpeg" />
				</div>
				<Footer />
			</main>
		</div>
	);
}

export default App;
