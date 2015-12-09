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
            // enable physics
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            // this.game.physics.arcade.enableBody(this);
        }
        /**
         * Update Method for Platform Class
         */
        Platform.prototype.update = function () {
            // moves platform left
            this.x -= this._speed;
            if (this.x < 0 - this.width) {
                this.x = 800;
                this.y = (Math.random() * 600) + 1;
                console.log(this.y);
            }
        };
        return Platform;
    })(Phaser.Sprite);
    objects.Platform = Platform;
})(objects || (objects = {}));
//# sourceMappingURL=platform.js.map