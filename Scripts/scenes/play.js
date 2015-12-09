var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        Play.prototype.create = function () {
            // start the physics engine
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this._bg = new Phaser.Image(this.game, 0, 0, 'sky');
            this.add.existing(this._bg);
            // debug button to game over screen
            this._gameOverButton = this.game.add.button(750, 550, 'firstaid', this._gameOverButton_Clicked);
            this._gameOverButton.anchor.setTo(0.5);
            // add platform
            this._platform = new objects.Platform(this.game, 400, 450, 400, 'platform', 5);
            this.add.existing(this._platform);
            // add player
            this._player = new objects.Player(this.game, 400, 300, 'dude', 0.2, 300);
            this.add.existing(this._player);
        };
        Play.prototype.update = function () {
            // console.log(this._player.body);
            // this._updateGravity();
            this.game.physics.arcade.collide(this._player, this._platform);
        };
        Play.prototype.render = function () {
        };
        // PRIVATE METHODS
        Play.prototype._gameOverButton_Clicked = function () {
            this.game.state.start("Over");
        };
        /** Change characters gravity on the y-axis based on position */
        Play.prototype._updateGravity = function () {
            if (this._player.y > this.game.height / 2) {
                this._player.body.gravity.y = -this._player.y;
                console.log(this._player.body.gravity.y);
            }
            else {
                this._player.body.gravity.y = -this._player.y + 600;
                console.log(this._player.body.gravity.y);
            }
        };
        return Play;
    })(Phaser.State);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map