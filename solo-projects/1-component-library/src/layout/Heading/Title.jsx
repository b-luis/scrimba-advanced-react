import React from "react";

const styles = {
	titleStyle: "font-marker md:text-4xl lg:text-5xl py-2"
};

const Title = ({ children }) => {
	return <h2 className={styles.titleStyle}>{children}</h2>;
};

export default Title;
