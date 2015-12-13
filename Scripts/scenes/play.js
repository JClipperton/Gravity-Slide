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
            this._platforms = new Array();
            this._numberOfPlatforms = 5;
        }
        Play.prototype.create = function () {
            // start the physics engine
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            // ADD OBJECTS
            // add scrolling background
            this._background1 = new objects.ParallaxBackground(this.game, 0, 'bgBack', 'bgMiddle', 'bgFront', 5);
            this._background2 = new objects.ParallaxBackground(this.game, 480, 'bgBack', 'bgMiddle', 'bgFront', 5);
            // TODO: remove ---> debug button to game over screen
            this._gameOverButton = this.game.add.button(750, 550, 'firstaid', this._gameOverButton_Clicked);
            this._gameOverButton.anchor.setTo(0.5);
            // add platforms			
            for (var platform = 0; platform < 5; platform++) {
                var tempWidth = 400;
                var tempY = (platform * 100) + 100;
                var tempX = (platform * tempWidth);
                var tempPlatform = new objects.Platform(this.game, tempX, tempY, tempWidth, 'platformAnimGreen', 5);
                this._platforms.push(tempPlatform);
                this.add.existing(tempPlatform);
            }
            // add player
            this._player = new objects.Player(this.game, 400, 50, 'dude', 0.01, 300);
            this.add.existing(this._player);
        };
        Play.prototype.update = function () {
            // scroll background
            this._background1.update();
            this._background2.update();
            // update physics
            this._updatePlayerGravity();
            for (var i = 0; i < this._numberOfPlatforms; i++) {
                this.game.physics.arcade.collide(this._player, this._platforms[i]);
            }
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