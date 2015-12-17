module utilities {
	// GAME MANAGER CLASS
	export class GameManager {
		// PUBLIC INSTANCE VARIABLES
		public game: Phaser.Game;
		public player: objects.Player;
		
		// PRIVATE INSTANCE VARIABLES
		private _currentLevel: number;
		private _levelSpeed: number;
		private _levelSection: number;

		private _platforms: objects.Platform[] = new Array<objects.Platform>();
		private _pickups: objects.PickUp[] = new Array<objects.PickUp>();

		private _levelTimer: Phaser.TimerEvent;
		private _spawnTimer: Phaser.TimerEvent;
		private _spawning: boolean;
		
		// CONSTRUCTOR ++++++++++++++++++++++++++
		constructor(game: Phaser.Game, player: objects.Player, level: number, speed: number) {
			this.game = game;
			this.player = player;
			this._currentLevel = level;
			this._levelSpeed = speed;			
		}		
		
		create(): void {
			this._SpawnLevelSection(1);
		}
		
		/** Update Method for Game Manager Class */
		update(): void {
			// while level timer is active {
			// 	if spawn timer counts down {
			// this._levelSection = this._ChooseLevelSection();
			// this._SpawnLevelSection(this._levelSection);
			// 	}
			// }
			for (var i = 0; i < this._platforms.length; i++) {
				this._platforms[i].update();
			}
			for (var i = 0; i < this._platforms.length; i++) {
				this.game.physics.arcade.collide(this.player, this._platforms[i]);
			}

		}
	
		
		// PRIVATE METHODS
		/** randomly picks a number between 1 and 15 */
		private _ChooseLevelSection(): number {
			return this.game.rnd.between(1, 15);
		}
		
		/** returns a new platform object  */
		private _SpawnPlatform(x: number, y: number, width?: number): objects.Platform {
			console.log("spawn platform");
			var tempWidth = width || 400;
			return new objects.Platform(this.game, x, y, tempWidth, 'platformAnimGreen', this._levelSpeed);
		}
		
		/** returns a new pickup object */
		private _SpawnPickup(x: number, y: number, blue?: boolean): objects.PickUp {
			blue = blue || false;
			if (blue) {
				return new objects.PickUp(this.game, this.player, 0, 0, 'pickupBlue', this._levelSpeed);
			}
			else {
				return new objects.PickUp(this.game, this.player, 0, 0, 'pickupGrey', this._levelSpeed);
			}
		}
		
		/** creates appropriate objects for selected level section */
		private _SpawnLevelSection(sectionNumber: number): void {
			console.log("in the spawn level function");
			switch (sectionNumber) {
				case 1:
					this._platforms.push(this._SpawnPlatform(800, 300));
					this._platforms.push(this._SpawnPlatform(1200, 200));
					this._platforms.push(this._SpawnPlatform(2000, 200));
					this._platforms.push(this._SpawnPlatform(2400, 100));
					this._platforms.push(this._SpawnPlatform(3200, 100));
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					break;
				case 5:
					break;
				case 6:
					break;
				case 7:
					break;
				case 8:
					break;
				case 9:
					break;
				case 10:
					break;
				case 11:
					break;
				case 12:
					break;
				case 13:
					break;
				case 14:
					break;
				case 15:
					break;
				default:
					console.log("Game Manager attempted to spawn undefined level section");
					break;
			}
			for (var i = 0; i < this._platforms.length; i++) {
				this.game.add.existing(this._platforms[i]);
				console.log("platform x: " + this._platforms[i].x + " y:" + this._platforms[i].y);
			}


		}

		private _StartSectionTimer(): void {
			this._levelSection = this._ChooseLevelSection();
			//this.game.time.events.add(Phaser.Timer.SECOND * 4, this._SpawnLevelSection(this._levelSection), this);
		}
	}
}