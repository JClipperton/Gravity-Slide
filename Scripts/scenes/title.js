var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Title = (function (_super) {
        __extends(Title, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function Title() {
            _super.call(this);
        }
        Title.prototype.create = function () {
            this._titleScreenImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            this._titleScreenImage.anchor.setTo(0.5, 0.5);
            this.input.onTap.addOnce(this._titleClicked, this);
        };
        Title.prototype._titleClicked = function () {
            this.game.state.start("Play");
        };
        return Title;
    })(Phaser.State);
    scenes.Title = Title;
})(scenes || (scenes = {}));
//# sourceMappingURL=title.js.map