module objects {
	// PICKUP CLASS
	export class PickUp extends Phaser.Sprite {
		// PRIVATE INSTANCE VARIABLES
		private _player: objects.Player;
		private _speed: number;
		private _value: number;				
		private _pickupSound: Phaser.Sound;
		private _active: boolean;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor(game: Phaser.Game, player: objects.Player, x: number, y: number, spriteString: string, speed: number) {
			super(game, x, y, spriteString)
			this._speed = speed;
			this._player = player;
			this._active = true;
			
			// assign audio and value based on key
			if (this.key == 'pickupBlue') {
				this._pickupSound = new Phaser.Sound(this.game, 'pickupBlue', 1, false);
				this._value = 5;
			} else {
				this._pickupSound = new Phaser.Sound(this.game, 'pickupGrey', 1, false);
				this._value = 1;
			}
			
			// set up animation
			this.animations.add('animated', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
			this.animations.play('animated');
			
			// enable physics
			this.game.physics.enable(this, Phaser.Physics.ARCADE);
		}
		
		/** Update Method for PickUp Class */
		public update(): void {
			// moves pick up left
			this.x -= this._speed;
			
			// kills offscreen platforms for cleanup
			if (this.x == 0 - this.width) {
				this.kill();
			}
			
			// check collisions
			if (this.game.physics.arcade.intersects(this._player.body, this.body)) {				
				this._collectPickup();
			}
		}
		
		// PRIVATE METHODS
		/** deactivate and collect pickup */
		private _collectPickup(): void { // TODO: add scoring function to activate before destruction
			if (this._active) {
				
				this._pickupSound.play();
				this.alpha = 0;
				this.kill();
			}
			this._active = false;
		}

	}
}