import type { NextPage } from "next";
import PlayerCard from "../components/playerCard";
import styles from "../styles/Home.module.css";
import Header from "./header";
import Footer from "./footer";
import fetchAPI from "../components/api";

const Home: any = ({ steph, demar, ja }: any) => {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<div className={styles.grid}>
					<PlayerCard
						pts={steph.pts}
						ast={steph.ast}
						reb={steph.reb}
						img="/steph.jpeg"
						name="Steph Curry"
					/>
					<PlayerCard
						pts={demar.pts}
						ast={demar.ast}
						reb={demar.reb}
						img="/demar.jpeg"
						name="Demar DeRozan"
					/>
					<PlayerCard
						pts={ja.pts}
						ast={ja.ast}
						reb={ja.reb}
						img="/ja.jpeg"
						name="Ja Morant"
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export async function getStaticProps() {
	const API_URL = (playerId: number) =>
		`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId}`;

	const steph = await fetchAPI(API_URL(115));
	const demar = await fetchAPI(API_URL(125));
	const ja = await fetchAPI(API_URL(666786));
	return {
		props: { steph, demar, ja },
	};
}

export default Home;
