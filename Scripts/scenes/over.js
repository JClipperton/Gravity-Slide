var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    // OVER CLASS (state 3)
    var Over = (function (_super) {
        __extends(Over, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function Over() {
            _super.call(this);
        }
        Over.prototype.create = function () {
            // play game over sound
            this._gameOverSound = this.game.add.audio('gameover');
            this._gameOverSound.play(); // play sound on load
            // add background
            this._bg = new Phaser.Image(this.game, 0, 0, 'gameSplash2');
            this.add.existing(this._bg);
            // define text style
            var style = { font: "65px Ar Destine", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
            // add text
            this._gameOverText = this.game.add.text(-200, 0, "Game Over", style);
            this._gameOverText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2); // a little shadow for show
            // set text bounds
            this._gameOverText.setTextBounds(0, 200, 800, 100);
            // add reset game button
            this._resetGameButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'firstaid', this._resetGame);
            this._resetGameButton.anchor.setTo(700, 500);
            this.input.onTap.addOnce(this._resetGame, this);
        };
        // PRIVATE METHODS
        /** DEBUG-TEMP ---> sets game to title state */
        Over.prototype._resetGame = function () {
            this.game.state.start("Title");
        };
        return Over;
    })(Phaser.State);
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map