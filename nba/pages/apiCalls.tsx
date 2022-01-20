import axios from "axios";

const url = (num: number) =>
	`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${num}`;

let stephUrl = url(115);

const asyncExample = async () => {
	try {
		let data = await (await axios(stephUrl)).data.data[0].pts;
		console.log(data); //200
	} catch (err) {
		console.log(err);
	}
};

export default asyncExample;
