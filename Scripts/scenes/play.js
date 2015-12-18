var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    // PLAY CLASS (state 2)
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function Play() {
            _super.call(this);
            // private _ship: objects.Ship;
            this._level = 2;
            if (this._level >= 3) {
                this._levelSpeed = 5;
            }
            else {
                this._levelSpeed = 4;
            }
        }
        Play.prototype.create = function () {
            // start the physics engine
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            // ADD OBJECTS
            // add scrolling background
            this._background1 = new objects.ParallaxBackground(this.game, 0, 'bgBack', 'bgMiddle', 'bgFront', this._levelSpeed);
            this._background2 = new objects.ParallaxBackground(this.game, 480, 'bgBack', 'bgMiddle', 'bgFront', this._levelSpeed);
            // TODO: remove ---> debug button to game over screen
            this._gameOverButton = this.game.add.button(750, 550, 'firstaid', this._gameOverButton_Clicked);
            this._gameOverButton.anchor.setTo(0.5);
            // add player
            this._player = new objects.Player(this.game, 400, 50, 'player', 0.2, 300);
            this.add.existing(this._player);
            /*
            // add ship
            this._ship = new objects.Ship(this.game, this._player, 1200, 300, 200, 'ship', this._levelSpeed);
            this.add.existing(this._ship);*/
            // add object manager
            this._objectManager = new utilities.ObjectManager(this.game, this._player, this._level, this._levelSpeed);
            this._objectManager.start();
        };
        Play.prototype.update = function () {
            // scroll background
            this._background1.update();
            this._background2.update();
            this._updatePlayerGravity();
            this._objectManager.update();
        };
        Play.prototype.render = function () {
        };
        // PRIVATE METHODS		
        /** Change characters gravity on the y-axis based on position */
        Play.prototype._updatePlayerGravity = function () {
            if (this._player.y > this.game.height / 2) {
                //player is below center line
                this._player.body.gravity.y = -this._player.y;
                this._player.flipSpriteY();
            }
            else {
                // player is above center line
                this._player.body.gravity.y = -this._player.y + 600;
                this._player.flipSpriteY();
            }
        };
        /** DEBUG-TEMP ---> sets game to over state */
        Play.prototype._gameOverButton_Clicked = function () {
            this.game.state.start("Over");
        };
        return Play;
    })(Phaser.State);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map