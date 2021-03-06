const announceNextTurn = (publicChannel, channelManager, className, ring, { contestants, round, turn }) => {
	publicChannel({
		announce:
`
⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅

round ${round}, turn ${turn + 1}

${contestants.map(contestant => contestant.monster.identityWithHp).join(' vs ')}

`

	});
};

module.exports = announceNextTurn;
