/* eslint-disable max-len */

const BaseCard = require('./base');

class DeathCard extends BaseCard {
	// Set defaults for these values that can be overridden by the options passed in
	constructor ({
		icon = '💀'
	} = {}) {
		super({ icon });
	}

	get stats () {
		return this.flavor;
	}

	effect (environment, monster) { // eslint-disable-line class-methods-use-this
		monster.die(environment);

		return !monster.dead;
	}
}

DeathCard.cardType = 'Death';
DeathCard.probability = 1;
DeathCard.description = 'It is dangerous out there...';

DeathCard.flavors = {
	death: [
		['Your monster mistakenly eats some green potatoes', 100]
	]
};

module.exports = DeathCard;
