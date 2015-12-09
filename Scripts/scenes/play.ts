module scenes {
	export class Play extends Phaser.State {
		// Instance Variables
		public game: Phaser.Game;
		
		private _bg: Phaser.Image;

		private _gameOverButton: Phaser.Button;
		
		private _player: objects.Player;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
		}

		create(): void {
			// start the physics engine
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			
			this._bg = new Phaser.Image(this.game, 0, 0, 'sky');
			this.add.existing(this._bg);
			
			// debug button to game over screen
			this._gameOverButton = this.game.add.button(750, 550, 'firstaid', this._gameOverButton_Clicked);
			this._gameOverButton.anchor.setTo(0.5);
			
			// add player
			this._player = new objects.Player(this.game, 400, 300, 'dude', 0.2, 300);
			this.add.existing(this._player);
			
		}

		update(): void {
			// console.log(this._player.body);
		}

		render(): void {
			
		}
		
		// PRIVATE METHODS
		private _gameOverButton_Clicked(): void {
			this.game.state.start("Over");
		}
	}
}