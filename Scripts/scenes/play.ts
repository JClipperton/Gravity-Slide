module scenes {
	// PLAY CLASS (state 2)
	export class Play extends Phaser.State {
		// PUBLIC INSTANCE VARIABLES
		public game: Phaser.Game;
		public score: Phaser.Text;
		
		// PRIVATE INSTANCE VARIABLES
		private _objectManager: utilities.ObjectManager;
		private _background1: objects.ParallaxBackground;
		private _background2: objects.ParallaxBackground;
		private _player: objects.Player;
		private _bgMusic: Phaser.Sound;
		
		private _level: number = 2;
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
						
			// add player
			this._player = new objects.Player(this.game, 400, 50, 'player', 0.2, 300);
			this.add.existing(this._player);
			
			// add object manager
			this._objectManager = new utilities.ObjectManager(this.game, this._player, this._level, this._levelSpeed);
			this._objectManager.start();
			
			// add music
			this._bgMusic = new Phaser.Sound(this.game, 'music', 0.6, true);
			this._bgMusic.play();
			console.log("the music is: " + this._bgMusic.isPlaying);
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
	}
}