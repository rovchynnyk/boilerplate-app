module.exports = {
	setupFilesAfterEnv: ["<rootDir>/testSetup.js"],
	moduleNameMapper: {
		"\\.(css|less)$": "identity-obj-proxy"
	}
};
