import React from "react";
import container from "./MainPage.module.css";
import classNames from "classnames";

const styles = {
	mainDiv: "flex flex-col py-[100px] sm:max-w-[500px] lg:max-w-[800px] ",
	mainText: "text-white font-bold leading-10 text-[36px] md:text-6xl",
	mainParagraph: "pt-7 pb-20 md:text-2xl",
	mainBtn:
		"text-white font-semibold bg-[#FF8C38] align-center justify-center rounded-md py-3  md:text-3xl cursor-pointer hover:bg-[#E17654] hover:text-slate-100"
};

const divStyles = classNames(styles.mainDiv, container.container);

const MainPage = () => {
	return (
		<main className={container.layout}>
			<div className={styles.mainDiv}>
				<h2 className={styles.mainText}>You got the travel plans, we got the travel vans.</h2>
				<p className={styles.mainParagraph}>
					Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make
					your perfect road trip.
				</p>
				<button className={styles.mainBtn}>Find your van</button>
			</div>
		</main>
	);
};

export default MainPage;
