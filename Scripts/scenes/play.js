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
            var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
            this._textValue = this.game.add.text(0, 0, "0", style);
            this._updateCount = 0;
            this._gameOverButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'firstaid', this._gameOverButton_Clicked);
            this._gameOverButton.anchor.setTo(0.5);
        };
        Play.prototype.update = function () {
            this._textValue.text = ("Frames Updated: " + this._updateCount++).toString();
        };
        Play.prototype.render = function () {
            this.game.debug.text("This is drawn in the render method", 0, 80);
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