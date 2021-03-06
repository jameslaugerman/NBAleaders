import React, { useState, useEffect } from "react";
import styles from "./PlayerCard.module.css";

export default function PlayerCard({ id, img, player }) {
	const [post, getPost] = useState([]);

	useEffect(() => {
		const API = `https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${id}`;

		const fetchPost = () => {
			fetch(API)
				.then((res) => res.json())
				.then((res) => {
					const playerData = res.data;
					console.log(playerData);
					getPost(playerData);
				});
		};
		fetchPost();
	}, [id]);

	return (
		<div className={styles.card}>
			<h2>{player}</h2>
			<div>
				{post.map((player, i) => {
					return (
						<div key={i}>
							<img src={img} alt="Credit - theringer.com"></img>
							<p>Games Played - {player.games_played}</p>
							<p>PPG - {player.pts}</p>
							<p>RPG - {player.reb}</p>
							<p>APG - {player.ast}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
