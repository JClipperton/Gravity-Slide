module scenes {
	// TITLE CLASS (state 1)
	export class Title extends Phaser.State {
		// PUBLIC INSTANCE VARIABLES
		public game: Phaser.Game;
		
		// PRIVATE INSTANCE VARIABLES		
		private _titleScreenBg: Phaser.Image;
		private _preloadBar: Phaser.Sprite;
		private _titleScreenImage: Phaser.Sprite;
		private _phaserLogo: Phaser.Image;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
		}
		
		/** preloads all game assets */ 
        public preload(): void {
			// set up preloader image
			this._preloadBar = this.add.sprite(200, 500, 'preload-bar');
			this.load.setPreloadSprite(this._preloadBar);
			
            // graphics go here
            this.game.load.image('logo', '../Assets/images/logo300x300.jpg');
			this.game.load.image('firstaid', '../Assets/images/firstaid.png');
			this.game.load.image('arrow', '../Assets/images/arrow_red.png');
			this.game.load.image('bgBack', '../Assets/images/background_back.png');
			this.game.load.image('bgMiddle', '../Assets/images/background_middle.png');
			this.game.load.image('bgFront', '../Assets/images/background_front.png');
			this.game.load.image('mainSplash', '../Assets/images/Gravity Slide Splash.png');
			this.game.load.image('gameSplash2', '../Assets/images/gameSplash2.jpg');
            
            // spritesheets go here
			// ('asset key', 'url', width of each frame, height ditto, ?num of frames, ?margin btw frames, ?space btw frames)
			this.game.load.spritesheet('platformAnimGreen', '../Assets/images/platform_lit_spritesheet.png', 84, 11, 5);
			this.game.load.spritesheet('platformAnimBlue', '../Assets/images/platform_litblue_spritesheet.png', 84, 11, 5);
			this.game.load.spritesheet('pickupBlue', '../Assets/images/crystal_32_blue.png', 32, 32, 8);
			this.game.load.spritesheet('pickupGrey', '../Assets/images/crystal_32_grey.png', 32, 32, 8);
			
			// sprite atlas go here
			this.game.load.atlas('player', '../Assets/images/xeon_player.png', '../Assets/images/xeon_player.json')
			this.game.load.atlas('ship', '../Assets/images/ship_red.png', '../Assets/images/ship_red.json')
            
            // audio goes here
            this.game.load.audio('gameover', '../Assets/audio/badEnd.wav');
			this.game.load.audio('jump', '../Assets/audio/player_jump.wav');
			this.game.load.audio('pickupBlue', '../Assets/audio/pickup_currency.mp3');
			this.game.load.audio('pickupGrey', '../Assets/audio/pickup_shield.mp3');
			
			
        }
		
		create(): void {
			this._titleScreenBg = this.game.add.image(0, 0, 'gameSplash1');
			this.game.add.existing(this._titleScreenBg);
			var tween = this.add.tween(this._preloadBar).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this._loadLogo, this);	// load logo on complete					
			
			this.input.onTap.addOnce(this._titleClicked,this);
		}
		
		// PRIVATE METHODS
		/** loads next state on click */ 
		private _titleClicked(): void {
			this.game.state.start("Play");
		}
		
		/** adds logo to screen and animates it */
		private _loadLogo(): void {
			// add logo
			this._titleScreenImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            this._titleScreenImage.anchor.setTo(0.5, 0.5);
			
			// scale logo down initially
			this._titleScreenImage.scale.setTo(0.2, 0.2);
						
			// animate logo
			this.game.add.tween(this._titleScreenImage.scale).to({x: 1, y: 1}, 2000, Phaser.Easing.Bounce.Out, true);
		}
	}
}