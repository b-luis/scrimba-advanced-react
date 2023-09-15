import React from "react";

const styles = {
	badgeDivStyle: "flex justify-around md:justify-between flex-wrap font-semibold px-2 py-4"
};

const BadgeContainer = ({ children }) => {
	return <section className={styles.badgeDivStyle}>{children}</section>;
};

export default BadgeContainer;
