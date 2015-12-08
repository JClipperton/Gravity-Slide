module scenes {
	export class Play extends Phaser.State {
		// Instance Variables
		public game: Phaser.Game;
		
		private _textValue: Phaser.Text;
		private _updateCount: number;		
		private _gameOverButton: Phaser.Button;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
		}
		
		create(): void {
			var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
			this._textValue = this.game.add.text(0,0,"0", style);
			this._updateCount = 0;
			
			this._gameOverButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'firstaid', this._gameOverButton_Clicked);
			this._gameOverButton.anchor.setTo(0.5);
		}
		
		update(): void {
			this._textValue.text = ("Frames Updated: " + this._updateCount++).toString();
		}
		
		render(): void {
			this.game.debug.text("This is drawn in the render method", 0, 80);
		}
		
		// PRIVATE METHODS
		private _gameOverButton_Clicked():void {
			this.game.state.start("Over");
		}
	}
}