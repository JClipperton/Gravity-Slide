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
		}
		
		/**
		 * Update Method for Platform Class
		 */
		public update(): void {
			// moves platform left
			this.x -= this._speed;
			if (this.x < 0 - this.width) {
				this.x = 800;
			}
		}	
		
	}
	
}