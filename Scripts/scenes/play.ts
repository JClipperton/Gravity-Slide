module scenes {
	export class Play extends Phaser.State {
		// Instance Variables
		public game: Phaser.Game;

		private _gameOverButton: Phaser.Button;
		
		private _player: objects.Player;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
		}

		create(): void {
			// start the physics engine
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			
			// debug text
			var style = { font: "30px Arial", fill: "#ff0000", align: "center" };
			
			// debug button to game over screen
			this._gameOverButton = this.game.add.button(750, 550, 'firstaid', this._gameOverButton_Clicked);
			this._gameOverButton.anchor.setTo(0.5);
			
			// add player
			this._player = new objects.Player(this.game, 400, 300, 'dude', 0.2, 300);
			
			// physics set up
			
			this._player.body.collideWorldBounds = true;
		}

		update(): void {
			console.log(this._player.position.y);
		}

		render(): void {
			
		}
		
		// PRIVATE METHODS
		private _gameOverButton_Clicked(): void {
			this.game.state.start("Over");
		}
	}
}