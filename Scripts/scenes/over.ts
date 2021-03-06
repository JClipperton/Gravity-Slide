module scenes {
	// OVER CLASS (state 3)
	export class Over extends Phaser.State {
		// PUBLIC INSTANCE VARIABLES
		public game: Phaser.Game;
		
		// PRIVATE INSTANCE VARIABLES
		private _gameOverSound: Phaser.Sound;
		private _bg: Phaser.Image;
		private _gameOverText: Phaser.Text;
		private _resetGameButton: Phaser.Button;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
		}

		create(): void {
			// play game over sound
			this._gameOverSound = this.game.add.audio('gameover');
			this._gameOverSound.play(); // play sound on load
			
			// add background
			this._bg = new Phaser.Image(this.game, 0, 0, 'gameSplash2');
			this.add.existing(this._bg);
			
			// define text style
			var style = { font: "65px Ar Destine", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
			
			// add text
			this._gameOverText = this.game.add.text(-200, 0, "Game Over", style);
			this._gameOverText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2); // a little shadow for show
			
			// set text bounds
			this._gameOverText.setTextBounds(0, 200, 800, 100);
			
			// add reset game button
			this._resetGameButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'firstaid', this._resetGame);
			this._resetGameButton.anchor.setTo(700, 500);

			this.input.onTap.addOnce(this._resetGame, this);
		}
		
		// PRIVATE METHODS
		/** DEBUG-TEMP ---> sets game to title state */
		private _resetGame(): void {
			this.game.state.start("Title");
		}
	}
}