module objects {
	// PARALLAX BACKGROUND CLASS
	export class ParallaxBackground {
		// PUBLIC INSTANCE VARIABLES
		private _game: Phaser.Game;
		// PRIVATE INSTANCE VARIABLES
		private _bgBack: Phaser.TileSprite;
		private _bgMiddle: Phaser.TileSprite;
		private _bgFront: Phaser.TileSprite;
		private _velocity: number;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor(game: Phaser.Game, x: number, imageStringBack: string, imageStringMid: string, imageStringFront: string, velocity: number) {			
			this._game = game;
			
			this._bgBack = new Phaser.TileSprite(this._game, x, 0, 480, 640, 'bgBack');
			this._bgMiddle = new Phaser.TileSprite(this._game, x, 0, 480, 640, 'bgMiddle');
			this._bgFront = new Phaser.TileSprite(this._game, x, 0, 480, 640, 'bgFront');
			
			this._velocity = velocity;
			
			this._game.add.existing(this._bgBack);
			this._game.add.existing(this._bgMiddle);
			this._game.add.existing(this._bgFront);
		}
		
		/**
		 * Update Method for Parallax Background Class
		 */
		update(): void {
			this._bgBack.tilePosition.x -= this._velocity * 0.2;
			this._bgMiddle.tilePosition.x -= this._velocity * 0.5;
			this._bgFront.tilePosition.x -= this._velocity * 0.9;
		}
	}
}