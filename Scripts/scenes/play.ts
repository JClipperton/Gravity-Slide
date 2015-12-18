module scenes {
	// PLAY CLASS (state 2)
	export class Play extends Phaser.State {
		// PUBLIC INSTANCE VARIABLES
		public game: Phaser.Game;
		
		// PRIVATE INSTANCE VARIABLES
		private _objectManager: utilities.ObjectManager;
		private _background1: objects.ParallaxBackground;
		private _background2: objects.ParallaxBackground;	
		private _gameOverButton: Phaser.Button;
		private _player: objects.Player;
		private _ship: objects.Ship;
		
		private _level: number = 1;
		private _levelSpeed: number;	
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
			if (this._level >= 3) {
				this._levelSpeed = 5;
			} else {
				this._levelSpeed = 4;
			}
		}

		create(): void {
			// start the physics engine
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			
			// ADD OBJECTS
			// add scrolling background
			this._background1 = new objects.ParallaxBackground(this.game, 0, 'bgBack', 'bgMiddle', 'bgFront', this._levelSpeed);
			this._background2 = new objects.ParallaxBackground(this.game, 480, 'bgBack', 'bgMiddle', 'bgFront', this._levelSpeed);
			
			// TODO: remove ---> debug button to game over screen
			this._gameOverButton = this.game.add.button(750, 550, 'firstaid', this._gameOverButton_Clicked);
			this._gameOverButton.anchor.setTo(0.5);			
						
			// add player
			this._player = new objects.Player(this.game, 400, 50, 'player', 0.2, 300);
			this.add.existing(this._player);
			
			// add ship
			this._ship = new objects.Ship(this.game, this._player, 1200, 300, 200, 'ship', (this._levelSpeed));
			this.add.existing(this._ship);
			
			// add object manager
			this._objectManager = new utilities.ObjectManager(this.game, this._player, this._level, this._levelSpeed);
			this._objectManager.start();	
		}
		
		update(): void {
			// scroll background
			this._background1.update();
			this._background2.update();
			this._updatePlayerGravity();
			this._objectManager.update()			
		}

		render(): void {
		}
		
		// PRIVATE METHODS		
		/** Change characters gravity on the y-axis based on position */
		private _updatePlayerGravity() : void {
			if (this._player.y > this.game.height / 2) {
				//player is below center line
				this._player.body.gravity.y =  -this._player.y;
				this._player.flipSpriteY();
			} else {
				// player is above center line
				this._player.body.gravity.y = -this._player.y + 600;
				this._player.flipSpriteY();
			}
		}
		
		/** DEBUG-TEMP ---> sets game to over state */
		private _gameOverButton_Clicked(): void {
			this.game.state.start("Over");
		}		
	}
}