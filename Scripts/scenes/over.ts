module scenes {
	export class Over extends Phaser.State {
		// Instance Variables
		public game: Phaser.Game;
		
		private _gameOverSound: Phaser.Sound;
		private _bg: Phaser.Image;
		private _gameOverText: Phaser.Text;
		private _resetGameButton: Phaser.Button;
		
		constructor() {
			super();
		}
		
		create(): void {
			// play game over sound
			this._gameOverSound = this.game.add.audio('gameover');
			this._gameOverSound.play();
			// add background
			this._bg = new Phaser.Image(this.game, 0, 0, 'sky');
			this.add.existing(this._bg);
			
			// define text style
			var style = { font:"65px Arial", fill:"#ff0000", boundsAlignH:"center", boundsAlignV:"middle" };
			
			// add text
			this._gameOverText = this.game.add.text(0, 0, "Game Over", style);
			this._gameOverText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2); // a little shadow for show
			
			// set text bounds
			this._gameOverText.setTextBounds(0, 200, 800, 100);
			
			// add reset game button
			this._resetGameButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'firstaid', this._resetGameButton_Clicked);
			this._resetGameButton.anchor.setTo(0.5);
		}
		
		// PRIVATE METHODS
		private _resetGameButton_Clicked():void {
			this.game.state.start("Title");
		}
	}
}