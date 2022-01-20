import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface playerIdProps {
	playerId: number;
	name: string;
}

// to-do : clean up typescript on ANY
const PlayerCard: any = (props: playerIdProps) => {
	const [points, setPoints] = useState();
	const [assists, setAssists] = useState();
	const [rebounds, setRebounds] = useState();

	useEffect(() => {
		axios
			.get(
				`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${props.playerId}`
			)
			.then((res) => {
				const playerPoints = res.data.data[0].pts;
				const playerAssists = res.data.data[0].ast;
				const playerRebounds = res.data.data[0].reb;

				setPoints(playerPoints);
				setAssists(playerAssists);
				setRebounds(playerRebounds);
			});
	}, []);

	return (
		<a href="https://nextjs.org/docs" className={styles.card}>
			<h2>{props.name} &rarr;</h2>
			<img src="/steph.jpeg"></img>
			<p>Points - {points}</p>
			<p>Rebounds - {rebounds}</p>
			<p>Assists - {assists}</p>
		</a>
	);
};

export default PlayerCard;
