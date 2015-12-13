module objects {
	// PLATFORM CLASS
	export class Platform extends Phaser.Sprite {
		// PRIVATE INSTANCE VARIABLES
		private _speed: number;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor(game: Phaser.Game, x: number, y: number, width: number, spriteString: string, speed: number) {
			super(game, x, y, spriteString);
			this._speed = speed;
			
			this.height = 25;
			this.width = width;
			
			this._changeSprite(this.y);		
			
			// enable physics
			this.game.physics.enable(this, Phaser.Physics.ARCADE);
			this.body.immovable = true;
		}
		
		/**
		 * Update Method for Platform Class
		 */
		public update(): void {
			// moves platform left
			this.x -= this._speed;
			if (this.x < 0 - this.width) {
				this.x = 800;
				this.y = (Math.random() * 600) + 1;	
				this._changeSprite(this.y);			
			}
		}
		
		private _changeSprite(localY: number): void {
			
			if (localY <= (this.game.height * 0.5)) {
				this.loadTexture('platformAnimGreen');
				console.log(localY + ": above the center, " + this.key);
			} else {
				this.loadTexture('platformAnimBlue');
				console.log(localY + ": below the center, " + this.key);
			}
			this.animations.add('animated', [0, 1, 2, 3, 4], 10, true);
			this.animations.play('animated');				
		}	
		
	}
	
}