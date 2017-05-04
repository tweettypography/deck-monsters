const HealCard = require('./heal');

class ReviveCard extends HealCard {
	constructor (options) {
		// Set defaults for these values that can be overridden by the options passed in
		const defaultOptions = {
			healthDice: {
				quantity: 2,
				sides: 4,
				transformations: [
					'sum',
					['add', 3]
				]
			}
		};

		super(Object.assign(defaultOptions, options));
	}
}

ReviveCard.cardType = 'Revive';
ReviveCard.probability = 10;
ReviveCard.description = 'Luckily, you happened to have a fairy in your pocket.';

module.exports = ReviveCard;
