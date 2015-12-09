module scenes {
	export class Title extends Phaser.State {
		// Instance Variables
		public game: Phaser.Game; // required in each scene
		
		private _preloadBar: Phaser.Sprite;
		private _titleScreenImage: Phaser.Sprite;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor() {
			super();
		}
		
		// load all game assets
        public preload(): void {
			// set up preloader image
			this._preloadBar = this.add.sprite(200, 500, 'preload-bar');
			this.load.setPreloadSprite(this._preloadBar);
			
            // graphics go here
            this.game.load.image('logo', '../Assets/images/Phaser-Logo-Small.png');
            this.game.load.image('sky', '../Assets/images/sky.png');
            this.game.load.image('platform', '../Assets/images/platform.png');
			this.game.load.image('platform2', '../Assets/images/platform2.png');
			this.game.load.image('star', '../Assets/images/star.png');
			this.game.load.image('gem', '../Assets/images/diamond.png');
			this.game.load.image('firstaid', '../Assets/images/firstaid.png');
            
            // spritesheets go here
            this.game.load.spritesheet('dude', '../Assets/images/dude.png', 32, 48);
            this.game.load.spritesheet('baddie', '../Assets/images/baddie.png', 32, 48);
            
            // audio goes here
            this.game.load.audio('gameover', '../Assets/audio/badEnd.wav');
        }
		
		create(): void {
			var tween = this.add.tween(this._preloadBar).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this._loadLogo, this);	// load logo on complete					
			
			this.input.onTap.addOnce(this._titleClicked,this);
		}
		
		private _titleClicked(): void {
			this.game.state.start("Play");
		}
		
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