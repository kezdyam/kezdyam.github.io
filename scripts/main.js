/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Annelise Kezdy
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "";

rhit.SayingsManager = class {
	constructor() {
        this.prevRandom = 0;
        this.sayings = [
            "Few are born brave, many become so through training and force of discipline.   -Vegetius",
            "Far better is to have a stout heart always and suffer one's share of evils, than to ever be fearing what may happen.   -Herodotus",
            "The desire for safety stands against every great and noble enterprise.   -Tacitus",
            "A collision at sea can ruin your entire day.   -Samwise",
            "The gods favor the bold.   -Ovid",
            "It is a bad plan that cannot be altered.   -Pulibius Syrus",
            "If a man does not know to what port he is sailing, no wind is favourable.   -Seneca",
            "Ah! The generals! They are numerous but not good for much!   -Aristophanes",
            "Fortune favours the brave.   -Terence"
        ];
	}

    getRandomSaying() {
        let randomNum = Math.floor(Math.random() * this.sayings.length);
        return this.sayings[randomNum];
    }

}

rhit.ViewController = class {
	constructor() {
		this.sayingsManager = new rhit.SayingsManager();

		const sayingsButton = document.getElementById("sayingsButton");
        sayingsButton.onclick = (event) => {
            console.log("Clicked sayingsButton");
            this.updateView();
        };
        this.updateView();
	}

    updateView() {
        document.getElementById("aFamousSaying").innerHTML = this.sayingsManager.getRandomSaying();
    }
}

rhit.main = function () {
	console.log("Ready");
	viewController = new rhit.ViewController();
};

rhit.main();