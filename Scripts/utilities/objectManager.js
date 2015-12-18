var utilities;
(function (utilities) {
    // GAME MANAGER CLASS
    var ObjectManager = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function ObjectManager(game, player, level, speed) {
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
        ObjectManager.prototype.start = function () {
            this._SpawnLevelSection();
            this.game.time.events.repeat(Phaser.Timer.SECOND * 6, this._numberOfSections, this._SpawnLevelSection, this);
        };
        /** Update Method for Game Manager Class */
        ObjectManager.prototype.update = function () {
            // while level timer is active
            // for every platform...
            for (var pIndex = 0; pIndex < this._platforms.length; pIndex++) {
                this._platforms[pIndex].update(); // run update on each platform
                // if they're marked dead...
                if (this._platforms[pIndex].alive == false) {
                    this._platforms.splice(pIndex, 1); // cut them out of the array
                }
            }
            // for every pickup...
            for (var pIndex = 0; pIndex < this._pickups.length; pIndex++) {
                this._pickups[pIndex].update(); // run update on each pickup				
                // if they're marked dead...
                if (this._pickups[pIndex].alive == false) {
                    console.log(this._pickups[pIndex].alive);
                    this._pickups.splice(pIndex, 1); // cut them out of the array
                }
            }
            // check collisions
            for (var pIndex = 0; pIndex < this._platforms.length; pIndex++) {
                this.game.physics.arcade.collide(this.player, this._platforms[pIndex]);
            }
        };
        // PRIVATE METHODS
        /** randomly picks a number between 1 and 15 */
        ObjectManager.prototype._ChooseLevelSection = function () {
            return this.game.rnd.between(1, 5); // TODO: Set back to 15
        };
        /** returns a new platform object  */
        ObjectManager.prototype._SpawnPlatform = function (x, y, width) {
            var tempWidth = width || 400;
            return new objects.Platform(this.game, x, y, tempWidth, 'platformAnimGreen', this._levelSpeed);
        };
        /** returns a new pickup object */
        ObjectManager.prototype._SpawnPickup = function (x, y, blue) {
            blue = blue || false;
            if (blue) {
                return new objects.PickUp(this.game, this.player, x, y, 'pickupBlue', this._levelSpeed);
            }
            else {
                return new objects.PickUp(this.game, this.player, x, y, 'pickupGrey', this._levelSpeed);
            }
        };
        /** creates appropriate objects for selected level section */
        ObjectManager.prototype._SpawnLevelSection = function () {
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
                    this._pickups.push(this._SpawnPickup(1800, 150, true));
                    break;
                case 2:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 400));
                    this._platforms.push(this._SpawnPlatform(2000, 400));
                    this._platforms.push(this._SpawnPlatform(2400, 500));
                    this._platforms.push(this._SpawnPlatform(3200, 500));
                    this._pickups.push(this._SpawnPickup(1800, 450, true));
                    break;
                case 3:
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(1600, 300));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 200));
                    this._platforms.push(this._SpawnPlatform(2800, 400));
                    this._platforms.push(this._SpawnPlatform(3200, 300));
                    this._pickups.push(this._SpawnPickup(3000, 450));
                    break;
                case 4:
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(1600, 300));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 400));
                    this._platforms.push(this._SpawnPlatform(2800, 200));
                    this._platforms.push(this._SpawnPlatform(3200, 300));
                    this._pickups.push(this._SpawnPickup(3000, 150));
                    break;
                case 5:
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(2000, 500));
                    this._platforms.push(this._SpawnPlatform(2800, 200));
                    this._platforms.push(this._SpawnPlatform(3200, 400));
                    this._pickups.push(this._SpawnPickup(2200, 550));
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
            // add platforms to scene
            for (var pIndex = 0; pIndex < this._platforms.length; pIndex++) {
                this.game.add.existing(this._platforms[pIndex]);
            }
            // add pickups to scene
            for (var pIndex = 0; pIndex < this._pickups.length; pIndex++) {
                this.game.add.existing(this._pickups[pIndex]);
            }
        };
        return ObjectManager;
    })();
    utilities.ObjectManager = ObjectManager;
})(utilities || (utilities = {}));
//# sourceMappingURL=objectManager.js.map