import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<a
					href="https://www.balldontlie.io/#introduction"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							src="/cryingjordan.jpeg"
							alt="ballDontLie"
							width={35}
							height={35}
						/>
					</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
