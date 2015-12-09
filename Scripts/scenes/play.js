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
            // debug text
            var style = { font: "30px Arial", fill: "#ff0000", align: "center" };
            // debug button to game over screen
            this._gameOverButton = this.game.add.button(750, 550, 'firstaid', this._gameOverButton_Clicked);
            this._gameOverButton.anchor.setTo(0.5);
            // add player
            this._player = new objects.Player(this.game, 400, 300, 'dude', 0.2, 300);
            // physics set up
            this._player.body.collideWorldBounds = true;
        };
        Play.prototype.update = function () {
            console.log(this._player.position.y);
        };
        Play.prototype.render = function () {
        };
        // PRIVATE METHODS
        Play.prototype._gameOverButton_Clicked = function () {
            this.game.state.start("Over");
        };
        return Play;
    })(Phaser.State);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map