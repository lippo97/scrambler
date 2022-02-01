const {randomCube, Search} = require('./min2phase');

module.exports = function getRandomScramble() {
	const cube = randomCube();
	return new Search().solution(cube, 21, 1e9, 0, 0x2);
};
