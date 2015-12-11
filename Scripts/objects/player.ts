module objects {
	export enum PlayerState { IDLE, RUNNING, JUMPING }

	export class Player extends Phaser.Sprite {
		// PRIVATE INSTANCE VARIABLES
		private _bounce: number;
		private _gravity: number;
		private _input: Phaser.CursorKeys;
		private _playerState: PlayerState;
		
		// SETTERS/GETTERS
		set Gravity(newGrav: number) {
			this._gravity = newGrav;
		}
		get Gravity(): number {
			return this._gravity;
		}
		
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor(game: Phaser.Game, x: number, y: number, spriteString: string, bounce: number, gravity: number) {
			super(game, x, y, spriteString);
			
			// set registration point to the center of the objects
			this.anchor.setTo(0.5, 0.5);	
			
			this._bounce = bounce; // bounciness of the player
			this._gravity = gravity; // pull of gravity on the player			
						
			// enable keyboard input
			this._input = this.game.input.keyboard.createCursorKeys();
			
			// enable physics
			this.game.physics.enable(this, Phaser.Physics.ARCADE);
			this.game.physics.arcade.enableBody(this);
			this.body.collideWorldBounds = true;
			this.body.gravity.y = this._gravity;
			this.body.bounce.y = this._bounce;
			
			// assign player animations
			this.animations.add('left', [0, 1, 2, 3], 10, true);
			this.animations.add('idle', [4], 10, true);
    		this.animations.add('right', [5, 6, 7, 8], 10, true);
		}
		
		/** 
		 * Update Method for Player Class
		*/
		public update(): void {
			// update inputs
			this._updateInputs();
		}
		
		// PUBLIC METHODS
		public flipSpriteY(): void {
			(this.y > this.game.height / 2) ? this.scale.y = -1: this.scale.y = 1;		
		}
		
		// PRIVATE METHODS +++++++++++++++++++
		/**
		 * method for moving the player
		 */
		private _updateInputs(): void {
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
				this.animations.play('idle');
				this._playerState = PlayerState.IDLE;
			}    
			//  Allow the player to jump if they are touching the ground
			if (this._input.up.isDown && this.body.touching.down) {
				this.body.velocity.y = -this.body.gravity.y;
				this._playerState = PlayerState.JUMPING;
				console.log("JUMPED UP!");
			}
		}	
	}
}