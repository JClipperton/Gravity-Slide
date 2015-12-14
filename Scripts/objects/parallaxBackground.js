var objects;
(function (objects) {
    // PARALLAX BACKGROUND CLASS
    var ParallaxBackground = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function ParallaxBackground(game, x, imageStringBack, imageStringMid, imageStringFront, velocity) {
            this._game = game;
            this._bgBack = new Phaser.TileSprite(this._game, x, 0, 480, 640, 'bgBack');
            this._bgMiddle = new Phaser.TileSprite(this._game, x, 0, 480, 640, 'bgMiddle');
            this._bgFront = new Phaser.TileSprite(this._game, x, 0, 480, 640, 'bgFront');
            this._velocity = velocity;
            this._game.add.existing(this._bgBack);
            this._game.add.existing(this._bgMiddle);
            this._game.add.existing(this._bgFront);
        }
        /**
         * Update Method for Parallax Background Class
         */
        ParallaxBackground.prototype.update = function () {
            this._bgBack.tilePosition.x -= this._velocity * 0.2;
            this._bgMiddle.tilePosition.x -= this._velocity * 0.5;
            this._bgFront.tilePosition.x -= this._velocity * 0.9;
        };
        return ParallaxBackground;
    })();
    objects.ParallaxBackground = ParallaxBackground;
})(objects || (objects = {}));
//# sourceMappingURL=parallaxBackground.js.map