module scenes {
	export class Play extends Phaser.State {
		// Instance Variables
		public game: Phaser.Game;
		
		private _background1: objects.ParallaxBackground;
		private _background2: objects.ParallaxBackground;	
		private _gameOverButton: Phaser.Button;
		private _player: objects.Player;
		private _platforms: objects.Platform[] = new Array<objects.Platform>();
		
		private _numberOfPlatforms: number = 5;		
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
		}

		create(): void {
			// start the physics engine
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			
			// ADD OBJECTS
			// add scrolling background
			this._background1 = new objects.ParallaxBackground(this.game, 0, 'bgBack', 'bgMiddle', 'bgFront', 5);
			this._background2 = new objects.ParallaxBackground(this.game, 480, 'bgBack', 'bgMiddle', 'bgFront', 5);
			
			// TODO: remove ==> debug button to game over screen
			this._gameOverButton = this.game.add.button(750, 550, 'firstaid', this._gameOverButton_Clicked);
			this._gameOverButton.anchor.setTo(0.5);			
			
			// add platforms			
			for (var platform = 0; platform < 5; platform++) {
				var tempWidth: number = 400;
				var tempY: number = (platform * 100) + 100;
				var tempX: number = (platform * tempWidth);
				var tempPlatform: objects.Platform = new objects.Platform(this.game, tempX, tempY, tempWidth, 'platform', 5);
				this._platforms.push(tempPlatform);
				
				this.add.existing(tempPlatform);
			}
			
			// add player
			this._player = new objects.Player(this.game, 400, 50, 'dude', 0.01, 300);
			this.add.existing(this._player);
			
		}

		update(): void {
			this._background1.update();
			this._background2.update();
			
			this._updatePlayerGravity();
			for (var i = 0; i < this._numberOfPlatforms; i++) {
				this.game.physics.arcade.collide(this._player, this._platforms[i]);
			}	
		}

		render(): void {
			
		}
		
		// PRIVATE METHODS
		private _gameOverButton_Clicked(): void {
			this.game.state.start("Over");
		}
		
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