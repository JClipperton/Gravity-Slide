module objects {
	// PICKUP CLASS
	export class PickUp extends Phaser.Sprite {
		// PRIVATE INSTANCE VARIABLES
		private _speed: number;
		private _value: number;
		private _player: objects.Player;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor(game: Phaser.Game, player: objects.Player, x: number, y: number, spriteString: string, speed: number) {
			super(game, x, y, spriteString)
			this._speed = speed;
			this._player = player;
			
			if (spriteString == 'pickupBlue') {
				this._value = 5;
			} else {
				this._value = 1;
			}
			
			// set up animation
			this.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
			this.animations.play('animate');
			
			// enable physics
			this.game.physics.enable(this, Phaser.Physics.ARCADE);
		}
		
		/** Update Method for PickUp Class */
		public update(): void {
			// moves pick up left
			this.x -= this._speed;
			if (this.x <0)
			this.x = 800;
			
			if (this.game.physics.arcade.intersects(this._player.body, this.body)) {
				// TODO: add scoring function to fire before destruction
				this.destroy();
			}
			
		}
	}
}