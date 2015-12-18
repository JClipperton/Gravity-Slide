module objects {
	export class Ship extends Phaser.Sprite {
		// PRIVATE INSTANCE VARIABLES
		private _player: objects.Player;		
		private _speed: number;
		
		private _arrow: Phaser.Image;
		private _shipSound: Phaser.Sound;
		private _collisionSound: Phaser.Sound;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor(game: Phaser.Game, player: objects.Player, x: number, y: number, width: number, spriteString: string, speed: number) {
			super(game, x, y, spriteString);
			this.game = game;
			this._player = player;
			this.x = x;			
			
			this.width = width;
			this._speed = (speed * 2);
			
			// assign audio
			
			// set up animation
			this.loadTexture('ship');
			this.animations.add('go', [0, 1], 10, true);
			this.animations.play('go');
			
			// show warning
			this._arrow = this.game.add.image(700, y, 'arrow');
			this._arrow.scale.setTo(-0.5, 0.5);
			this.game.time.events.add(Phaser.Timer.HALF, this._fadeArrow, this);
			
			// enable physics
			this.game.physics.enable(this, Phaser.Physics.ARCADE);
			this.body.immovable = true;
			this.body.mass = 5;
		}
		
		/** Update Method for Ship Class */
		public update(): void {
			// moves ship left
			this.x -= this._speed;
			
			// kills/marks offscreen ship for cleanup
			if (this.x == 0 - this.width) {
				this.kill();					
			}
			
			if (this.game.physics.arcade.collide(this._player, this)) {
				console.log("HIT");
				
				this._player.body.velocity.x += 500;
				//this._player.body.velocity.y -= 20;
				//this._player.body.enableBody = false;
				//this._player.body.collideWorldBounds = false;
				//this._player.body.allowGravity = false;
				
			}
						
		}
		
		// PRIVATE METHODS +++++++++++++++++++	
		private _fadeArrow(): void {
			this.game.add.tween(this._arrow).to( { alpha: 0}, 250, Phaser.Easing.Linear.None, true);
		}
	}
}