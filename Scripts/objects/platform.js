var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLATFORM CLASS
    var Platform = (function (_super) {
        __extends(Platform, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function Platform(game, x, y, width, spriteString, speed) {
            _super.call(this, game, x, y, spriteString);
            this._speed = speed;
            this.height = 25;
            this.width = width;
        }
        /**
         * Update Method for Platform Class
         */
        Platform.prototype.update = function () {
            // moves platform left
            this.x -= this._speed;
            if (this.x < 0 - this.width) {
                this.x = 800;
            }
        };
        return Platform;
    })(Phaser.Sprite);
    objects.Platform = Platform;
})(objects || (objects = {}));
//# sourceMappingURL=platform.js.map