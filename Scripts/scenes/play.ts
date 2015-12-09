module scenes {
	export class Play extends Phaser.State {
		// Instance Variables
		public game: Phaser.Game;
		
		private _bg: Phaser.Image;

		private _gameOverButton: Phaser.Button;
		private _platform: objects.Platform;
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
			
			// add platform
			this._platform = new objects.Platform(this.game, 400, 450, 400, 'platform', 5);
			this.add.existing(this._platform);
			
			// add player
			this._player = new objects.Player(this.game, 400, 50, 'dude', 0.2, 300);
			this.add.existing(this._player);
			
		}

		update(): void {
			// console.log(this._player.body);
			// this._updatePlayerGravity();
			this.game.physics.arcade.collide(this._player, this._platform);
		}

		render(): void {
			
		}
		
		// PRIVATE METHODS
		private _gameOverButton_Clicked(): void {
			this.game.state.start("Over");
		}
		
		/** Change characters gravity on the y-axis based on position */
		private _updatePlayerGravity() : void {
			if (this._player.y > this.game.height / 2) {
				this._player.body.gravity.y =  -this._player.y;
				console.log(this._player.body.gravity.y);
			} else {
				this._player.body.gravity.y = -this._player.y + 600;
				console.log(this._player.body.gravity.y);
			}
		}
	}
}