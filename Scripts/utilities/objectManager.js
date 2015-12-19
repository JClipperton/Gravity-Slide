var utilities;
(function (utilities) {
    // OBJECT MANAGER CLASS
    var ObjectManager = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function ObjectManager(game, player, level, speed) {
            this._platforms = new Array();
            this._pickups = new Array();
            this._ships = new Array();
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
            this.game.time.events.repeat(Phaser.Timer.SECOND * 7, this._numberOfSections, this._SpawnLevelSection, this);
        };
        /** Update Method for Game Manager Class */
        ObjectManager.prototype.update = function () {
            // while level timer is active
            // for every platform...
            for (var pIndex = 0; pIndex < this._platforms.length; pIndex++) {
                this._platforms[pIndex].update(); // ...run update
                // if they're marked dead...
                if (this._platforms[pIndex].alive == false) {
                    this._platforms.splice(pIndex, 1); // cut them out of the array
                }
            }
            // for every pickup...
            for (var puIndex = 0; puIndex < this._pickups.length; puIndex++) {
                this._pickups[puIndex].update(); // ...run update				
                // if they're marked dead...
                if (this._pickups[puIndex].alive == false) {
                    this._pickups.splice(puIndex, 1); // cut them out of the array
                }
            }
            // for every ship...
            for (var shipIndex = 0; shipIndex < this._ships.length; shipIndex++) {
                this._ships[shipIndex].update(); // ...run update				
                console.log(this._ships.length);
                // if they're marked dead...
                if (this._ships[shipIndex].alive == false) {
                    this._ships.splice(shipIndex, 1); // cut them out of the array
                }
            }
            // check platform collisions
            for (var pIndex = 0; pIndex < this._platforms.length; pIndex++) {
                this.game.physics.arcade.collide(this.player, this._platforms[pIndex]);
            }
        };
        // PRIVATE METHODS
        /** randomly picks a number between 1 and 15 */
        ObjectManager.prototype._ChooseLevelSection = function () {
            return this.game.rnd.between(1, 15);
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
        /** return a new ship object */
        ObjectManager.prototype._SpawnShip = function (x, y) {
            return new objects.Ship(this.game, this.player, x, y, 200, 'ship', this._levelSpeed);
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
                    this._pickups.push(this._SpawnPickup(1800, 150));
                    this._pickups.push(this._SpawnPickup(3000, 50));
                    this._pickups.push(this._SpawnPickup(3800, 50, true));
                    if (this._currentLevel > 1) {
                        this._ships.push(this._SpawnShip(1200, 350));
                    }
                    break;
                case 2:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 400));
                    this._platforms.push(this._SpawnPlatform(2000, 400));
                    this._platforms.push(this._SpawnPlatform(2400, 500));
                    this._platforms.push(this._SpawnPlatform(3200, 500));
                    this._pickups.push(this._SpawnPickup(1800, 450));
                    this._pickups.push(this._SpawnPickup(3000, 550));
                    this._pickups.push(this._SpawnPickup(3800, 550, true));
                    if (this._currentLevel > 1) {
                        this._ships.push(this._SpawnShip(1200, 250));
                    }
                    break;
                case 3:
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(1600, 300));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 200));
                    this._platforms.push(this._SpawnPlatform(2800, 400));
                    this._platforms.push(this._SpawnPlatform(3200, 300));
                    this._pickups.push(this._SpawnPickup(2600, 150));
                    this._pickups.push(this._SpawnPickup(3000, 450));
                    break;
                case 4:
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(1600, 300));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 400));
                    this._platforms.push(this._SpawnPlatform(2800, 200));
                    this._platforms.push(this._SpawnPlatform(3200, 300));
                    this._pickups.push(this._SpawnPickup(2600, 450));
                    this._pickups.push(this._SpawnPickup(3000, 150));
                    break;
                case 5:
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(2000, 500));
                    this._platforms.push(this._SpawnPlatform(2800, 200));
                    this._platforms.push(this._SpawnPlatform(3200, 400));
                    this._pickups.push(this._SpawnPickup(2200, 550));
                    this._pickups.push(this._SpawnPickup(3000, 150, true));
                    if (this._currentLevel > 1) {
                        this._ships.push(this._SpawnShip(1200, 550));
                    }
                    break;
                case 6:
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 100));
                    this._platforms.push(this._SpawnPlatform(2800, 400));
                    this._platforms.push(this._SpawnPlatform(3200, 200));
                    this._pickups.push(this._SpawnPickup(2200, 50));
                    this._pickups.push(this._SpawnPickup(3000, 450, true));
                    if (this._currentLevel > 1) {
                        this._ships.push(this._SpawnShip(1200, 150));
                    }
                    break;
                case 7:
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(1600, 400));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 300));
                    this._platforms.push(this._SpawnPlatform(2800, 400));
                    this._platforms.push(this._SpawnPlatform(3600, 200));
                    this._pickups.push(this._SpawnPickup(1800, 450));
                    this._pickups.push(this._SpawnPickup(2200, 550));
                    this._pickups.push(this._SpawnPickup(3000, 550));
                    this._pickups.push(this._SpawnPickup(3400, 450));
                    break;
                case 8:
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(1600, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 300));
                    this._platforms.push(this._SpawnPlatform(2800, 200));
                    this._platforms.push(this._SpawnPlatform(3600, 400));
                    this._pickups.push(this._SpawnPickup(1800, 150));
                    this._pickups.push(this._SpawnPickup(2200, 50));
                    this._pickups.push(this._SpawnPickup(3000, 50));
                    this._pickups.push(this._SpawnPickup(3400, 150));
                    break;
                case 9:
                    this._platforms.push(this._SpawnPlatform(800, 200));
                    this._platforms.push(this._SpawnPlatform(1200, 200));
                    this._platforms.push(this._SpawnPlatform(1600, 400));
                    this._platforms.push(this._SpawnPlatform(2400, 200));
                    this._platforms.push(this._SpawnPlatform(2800, 400));
                    this._platforms.push(this._SpawnPlatform(3200, 400));
                    this._pickups.push(this._SpawnPickup(1000, 250, true));
                    this._pickups.push(this._SpawnPickup(3400, 450));
                    if (this._currentLevel > 1) {
                        this._ships.push(this._SpawnShip(1200, 300));
                    }
                    break;
                case 10:
                    this._platforms.push(this._SpawnPlatform(800, 400));
                    this._platforms.push(this._SpawnPlatform(1200, 400));
                    this._platforms.push(this._SpawnPlatform(1600, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 400));
                    this._platforms.push(this._SpawnPlatform(2800, 200));
                    this._platforms.push(this._SpawnPlatform(3200, 200));
                    this._pickups.push(this._SpawnPickup(1000, 350, true));
                    this._pickups.push(this._SpawnPickup(3400, 450));
                    if (this._currentLevel > 1) {
                        this._ships.push(this._SpawnShip(1200, 300));
                    }
                    break;
                case 11:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 300));
                    this._platforms.push(this._SpawnPlatform(1600, 400));
                    this._platforms.push(this._SpawnPlatform(2000, 400));
                    this._platforms.push(this._SpawnPlatform(2400, 500));
                    this._platforms.push(this._SpawnPlatform(3200, 100));
                    this._pickups.push(this._SpawnPickup(2600, 550));
                    this._pickups.push(this._SpawnPickup(3400, 50));
                    break;
                case 12:
                    this._platforms.push(this._SpawnPlatform(800, 300));
                    this._platforms.push(this._SpawnPlatform(1200, 300));
                    this._platforms.push(this._SpawnPlatform(1600, 200));
                    this._platforms.push(this._SpawnPlatform(2000, 200));
                    this._platforms.push(this._SpawnPlatform(2400, 100));
                    this._platforms.push(this._SpawnPlatform(3200, 500));
                    this._pickups.push(this._SpawnPickup(2600, 50));
                    this._pickups.push(this._SpawnPickup(3400, 550));
                    break;
                case 13:
                    this._platforms.push(this._SpawnPlatform(800, 100));
                    this._platforms.push(this._SpawnPlatform(800, 500));
                    this._platforms.push(this._SpawnPlatform(2000, 300));
                    this._platforms.push(this._SpawnPlatform(2400, 300));
                    this._platforms.push(this._SpawnPlatform(3600, 100));
                    this._platforms.push(this._SpawnPlatform(3600, 500));
                    this._pickups.push(this._SpawnPickup(2600, 350));
                    this._pickups.push(this._SpawnPickup(3000, 250));
                    this._pickups.push(this._SpawnPickup(3400, 150));
                    this._pickups.push(this._SpawnPickup(3800, 50));
                    if (this._currentLevel > 1) {
                        this._ships.push(this._SpawnShip(1200, 450));
                        this._ships.push(this._SpawnShip(1200, 150));
                    }
                    break;
                case 14:
                    this._platforms.push(this._SpawnPlatform(800, 100));
                    this._platforms.push(this._SpawnPlatform(800, 500));
                    this._platforms.push(this._SpawnPlatform(1600, 300));
                    this._platforms.push(this._SpawnPlatform(2800, 300));
                    this._platforms.push(this._SpawnPlatform(3600, 100));
                    this._platforms.push(this._SpawnPlatform(3600, 500));
                    this._pickups.push(this._SpawnPickup(2400, 450));
                    this._pickups.push(this._SpawnPickup(1800, 250));
                    this._pickups.push(this._SpawnPickup(3000, 250));
                    break;
                case 15:
                    this._platforms.push(this._SpawnPlatform(800, 100));
                    this._platforms.push(this._SpawnPlatform(800, 500));
                    this._platforms.push(this._SpawnPlatform(1600, 300));
                    this._platforms.push(this._SpawnPlatform(2800, 300));
                    this._platforms.push(this._SpawnPlatform(3600, 100));
                    this._platforms.push(this._SpawnPlatform(3600, 500));
                    this._pickups.push(this._SpawnPickup(2400, 150));
                    this._pickups.push(this._SpawnPickup(1800, 350));
                    this._pickups.push(this._SpawnPickup(3000, 350));
                    break;
                default:
                    return console.log("Game Manager attempted to spawn undefined level section");
            }
            // add platforms to scene
            for (var pIndex = 0; pIndex < this._platforms.length; pIndex++) {
                this.game.add.existing(this._platforms[pIndex]);
            }
            // add pickups to scene
            for (var puIndex = 0; puIndex < this._pickups.length; puIndex++) {
                this.game.add.existing(this._pickups[puIndex]);
            }
            // add ships to scene
            for (var shipIndex = 0; shipIndex < this._ships.length; shipIndex++) {
                this.game.add.existing(this._ships[shipIndex]);
            }
        };
        return ObjectManager;
    })();
    utilities.ObjectManager = ObjectManager;
})(utilities || (utilities = {}));
//# sourceMappingURL=objectManager.js.map