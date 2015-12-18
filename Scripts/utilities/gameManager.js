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
            // TODO: make number of sections tied to level
            this._numberOfSections = 10;
        }
        /** Run initial set up for Game Manager Class */
        GameManager.prototype.start = function () {
            this._SpawnLevelSection();
            this.game.time.events.repeat(Phaser.Timer.SECOND * 6, this._numberOfSections, this._SpawnLevelSection, this);
        };
        /** Update Method for Game Manager Class */
        GameManager.prototype.update = function () {
            // while level timer is active
            for (var i = 0; i < this._platforms.length; i++) {
                this._platforms[i].update(); // run update on each platform
                if (this._platforms[i].alive == false) {
                    this._platforms.splice(i, 1);
                    console.log(this._platforms.length);
                }
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
        GameManager.prototype._SpawnLevelSection = function () {
            // choose a random section to spawn
            var sectionNumber = this._ChooseLevelSection();
            console.log("section number:" + sectionNumber);
            // select platform locations etc. based on section number
            switch (sectionNumber) {
                case 1:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 2:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 400));
                    this._platforms.push(this._SpawnPlatform(2000, 400));
                    this._platforms.push(this._SpawnPlatform(2400, 500));
                    this._platforms.push(this._SpawnPlatform(3200, 500));
                    break;
                case 3:
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(1600, 300));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 200));
                    this._platforms.push(this._SpawnPlatform(2800, 400));
                    this._platforms.push(this._SpawnPlatform(3200, 300));
                    break;
                case 4:
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(1600, 300));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 400));
                    this._platforms.push(this._SpawnPlatform(2800, 200));
                    this._platforms.push(this._SpawnPlatform(3200, 300));
                    break;
                case 5:
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(2000, 500));
                    this._platforms.push(this._SpawnPlatform(2800, 200));
                    this._platforms.push(this._SpawnPlatform(3200, 400));
                    break;
                // TODO: finish level instances
                case 6:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 7:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 8:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 9:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 10:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 11:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 12:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 13:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 14:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                case 15:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    break;
                default:
                    return console.log("Game Manager attempted to spawn undefined level section");
            }
            for (var i = 0; i < this._platforms.length; i++) {
                this.game.add.existing(this._platforms[i]);
            }
        };
        return GameManager;
    })();
    utilities.GameManager = GameManager;
})(utilities || (utilities = {}));
//# sourceMappingURL=gameManager.js.map