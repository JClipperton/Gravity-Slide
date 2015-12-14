var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PICKUP CLASS
    var PickUp = (function (_super) {
        __extends(PickUp, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function PickUp(game, player, x, y, spriteString, speed) {
            _super.call(this, game, x, y, spriteString);
            this._speed = speed;
            this._player = player;
            if (spriteString == 'pickupBlue') {
                this._value = 5;
            }
            else {
                this._value = 1;
            }
            // set up animation
            this.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
            this.animations.play('animate');
            // enable physics
            this.game.physics.enable(this, Phaser.Physics.ARCADE);
        }
        /** Update Method for PickUp Class */
        PickUp.prototype.update = function () {
            // moves pick up left
            this.x -= this._speed;
            if (this.x < 0)
                this.x = 800;
            if (this.game.physics.arcade.intersects(this._player.body, this.body)) {
                // TODO: add scoring function to fire before destruction
                this.destroy();
            }
        };
        return PickUp;
    })(Phaser.Sprite);
    objects.PickUp = PickUp;
})(objects || (objects = {}));
//# sourceMappingURL=pickup.js.map