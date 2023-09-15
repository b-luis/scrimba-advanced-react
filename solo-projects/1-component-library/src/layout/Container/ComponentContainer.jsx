import React from "react";

const styles = {
	mainContainer:
		"flex flex-col align-center justify-center w-full md: max-w-[500px] lg:max-w-[900px] text-center mx-auto m-5"
};

const ComponentContainer = ({ children }) => {
	return <div className={styles.mainContainer}>{children}</div>;
};

export default ComponentContainer;
