module objects {
	export enum PlayerState { IDLE, RUNNING, JUMPING }

	export class Player extends Phaser.Sprite {
		// PRIVATE INSTANCE VARIABLES
		private _bounce: number;
		private _gravity: number;
		private _input: Phaser.CursorKeys;
		private _playerState: PlayerState;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor(game: Phaser.Game, x: number, y: number, spriteString: string, bounce: number, gravity: number) {
			super(game, x, y, spriteString);
			
			// set registration point to the center of the objects
			this.anchor.setTo(0.5, 0.5);
			
			this.game.physics.arcade.enable(this);

			this._bounce = bounce; // bounciness of the player
			this._gravity = gravity; // pull of gravity on the player			
						
			// enable keyboard input
			this._input = this.game.input.keyboard.createCursorKeys();
		}
		
		/** 
		 * Update Method for Player Class
		*/
		public update(): void {
			// update inputs
			this.body.velocity.x = 0;
			if (this._input.left.isDown) {
				//  Move to the left
				this.body.velocity.x = -150;
				this.animations.play('left');
				this._playerState = PlayerState.RUNNING;
			} else if (this._input.right.isDown) {
				//  Move to the right
				this.body.velocity.x = 150;
				this.animations.play('right');
				this._playerState = PlayerState.RUNNING;
			} else {
				//  Stand still
				this.animations.stop();
				this.frame = 4;
				this._playerState = PlayerState.IDLE;
			}    
			//  Allow the player to jump if they are touching the ground
			if (this._input.down.isDown && this.body.touching.up) {
				this.body.velocity.y = 350;
				this._playerState = PlayerState.JUMPING;
			}
			
			// update gravity
		}
	}
}