import styles from "./Header.module.css";

const Header = () => {
	return (
		<>
			<header>
				<title>NBA leaders</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</header>
			<h1 className={styles.title}>2021 Season Averages</h1>
		</>
	);
};

export default Header;