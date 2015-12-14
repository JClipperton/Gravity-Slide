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
            this._changeSprite(this.y);
            // enable physics
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
            this.body.immovable = true;
        }
        /** Update Method for Platform Class */
        Platform.prototype.update = function () {
            // moves platform left
            this.x -= this._speed;
            if (this.x < 0 - this.width) {
                this._resetPosition();
            }
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        /** Changes sprite based on Y position */
        Platform.prototype._changeSprite = function (localY) {
            if (localY <= (this.game.height * 0.5)) {
                this.loadTexture('platformAnimGreen');
            }
            else {
                this.loadTexture('platformAnimBlue');
            }
            this.animations.add('animated', [0, 1, 2, 3, 4], 10, true);
            this.animations.play('animated');
        };
        Platform.prototype._resetPosition = function () {
            this.x = 800;
            this.y = (Math.random() * 600) + 1;
            this._changeSprite(this.y);
        };
        return Platform;
    })(Phaser.Sprite);
    objects.Platform = Platform;
})(objects || (objects = {}));
//# sourceMappingURL=platform.js.map