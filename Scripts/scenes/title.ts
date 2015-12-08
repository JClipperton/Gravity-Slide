module scenes {
	export class Title extends Phaser.State {
		// Instance Variables
		public game: Phaser.Game;
		
		private _titleScreenImage: Phaser.Sprite;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
		}
		
		create(): void {
			this._titleScreenImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            this._titleScreenImage.anchor.setTo(0.5, 0.5);
			this.input.onTap.addOnce(this._titleClicked,this);
		}
		
		private _titleClicked(): void {
			this.game.state.start("Play");
		}
	}
}