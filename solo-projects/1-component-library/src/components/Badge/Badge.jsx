import React from "react";
import classNames from "classnames";
import styles from "./Badge.module.css";

const Banner = ({ color, shape }) => {
	const bannerColor = color ? `${styles[color]}` : "";
	const bannerShape = `${shape === "pill" ? styles.pill : styles.square}`;
	const allClasses = classNames(bannerColor, bannerShape, styles.badge);

	return <div className={allClasses}>Badge</div>;
};

export default Banner;
