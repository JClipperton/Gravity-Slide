var utilities;
(function (utilities) {
    // GAME MANAGER CLASS
    var GameManager = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function GameManager(game, player, level, speed) {
            this._platforms = new Array();
            this._pickups = new Array();
            this.game = game;
            this.player = player;
            this._currentLevel = level;
            this._levelSpeed = speed;
        }
        GameManager.prototype.create = function () {
            this._SpawnLevelSection(1);
        };
        /** Update Method for Game Manager Class */
        GameManager.prototype.update = function () {
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
        };
        // PRIVATE METHODS
        /** randomly picks a number between 1 and 15 */
        GameManager.prototype._ChooseLevelSection = function () {
            return this.game.rnd.between(1, 15);
        };
        /** returns a new platform object  */
        GameManager.prototype._SpawnPlatform = function (x, y, width) {
            console.log("spawn platform");
            var tempWidth = width || 400;
            return new objects.Platform(this.game, x, y, tempWidth, 'platformAnimGreen', this._levelSpeed);
        };
        /** returns a new pickup object */
        GameManager.prototype._SpawnPickup = function (x, y, blue) {
            blue = blue || false;
            if (blue) {
                return new objects.PickUp(this.game, this.player, 0, 0, 'pickupBlue', this._levelSpeed);
            }
            else {
                return new objects.PickUp(this.game, this.player, 0, 0, 'pickupGrey', this._levelSpeed);
            }
        };
        /** creates appropriate objects for selected level section */
        GameManager.prototype._SpawnLevelSection = function (sectionNumber) {
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
        };
        GameManager.prototype._StartSectionTimer = function () {
            this._levelSection = this._ChooseLevelSection();
            //this.game.time.events.add(Phaser.Timer.SECOND * 4, this._SpawnLevelSection(this._levelSection), this);
        };
        return GameManager;
    })();
    utilities.GameManager = GameManager;
})(utilities || (utilities = {}));
//# sourceMappingURL=gameManager.js.map