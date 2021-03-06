module objects {
	// PLAYER STATE ENUM
	export enum PlayerState { IDLE, RUNNING, JUMPING }
	// PLAYER CLASS
	export class Player extends Phaser.Sprite {
		// PRIVATE INSTANCE VARIABLES
		private _bounce: number;
		private _gravity: number;
		private _input: Phaser.CursorKeys;
		private _playerState: PlayerState;

		private _jumpSound: Phaser.Sound;
		
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
			
			// set registration point to the center of the object
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
			/*
			this.animations.add('left', [0, 1, 2, 3], 10, true);
			this.animations.add('idle', [4], 10, true);
			this.animations.add('right', [5, 6, 7, 8], 10, true);
			*/
			this.animations.add('run', [0,1,2,3,4,5,6,7,8,9], 15, true);
			
			
			// assign player sounds
			this._jumpSound = new Phaser.Sound(this.game, 'jump', 0.6);
		}
		
		/** Update Method for Player Class */
		update(): void {
			// update inputs
			this._updateInputs();
		}
		
		render(): void {
		}
		
		// PUBLIC METHODS
		public flipSpriteY(): void {
			(this.y > this.game.height * 0.5) ? this.scale.y = -1 : this.scale.y = 1;
		}
		
		// PRIVATE METHODS +++++++++++++++++++	
		/** method to make the player jump */
		private _jump(): void {
			this.body.velocity.y = -this.body.gravity.y;
			this._playerState = PlayerState.JUMPING;
			this._jumpSound.play();
		}
		
		/** method for moving the player */
		private _updateInputs(): void {
			this.body.velocity.x = 0;
			if (this._input.left.isDown) {
				//  Move to the left
				this.body.velocity.x = -150;
				this.scale.x = -1;
				this._playerState = PlayerState.RUNNING;
			} else if (this._input.right.isDown) {
				//  Move to the right
				this.body.velocity.x = 150;
				this.scale.x = 1;
				this._playerState = PlayerState.RUNNING;
			} else {
				//  Stand still
				this.animations.play('run');
				this._playerState = PlayerState.IDLE;
			}    
			//  Allow the player to jump if they are touching the ground and not already jumping
			if (this._playerState != PlayerState.JUMPING) { // makes sure player is not already jumping
				if ((this._input.up.isDown) && (this.body.touching.down) && (this.y < this.game.height * 0.5)) {
					this._jump();
				}
				if ((this._input.down.isDown) && (this.body.touching.up) && (this.y > this.game.height * 0.5)) {
					this._jump();
				}
			}

		}
	}
}