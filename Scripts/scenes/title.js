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
        // load all game assets
        Title.prototype.preload = function () {
            // set up preloader image
            this._preloadBar = this.add.sprite(200, 500, 'preload-bar');
            this.load.setPreloadSprite(this._preloadBar);
            // graphics go here
            this.game.load.image('logo', '../Assets/images/Phaser-Logo-Small.png');
            this.game.load.image('sky', '../Assets/images/sky.png');
            this.game.load.image('platform', '../Assets/images/platform.png');
            this.game.load.image('platform2', '../Assets/images/platform2.png');
            this.game.load.image('star', '../Assets/images/star.png');
            this.game.load.image('gem', '../Assets/images/diamond.png');
            this.game.load.image('firstaid', '../Assets/images/firstaid.png');
            // spritesheets go here
            this.game.load.spritesheet('dude', '../Assets/images/dude.png', 32, 48);
            this.game.load.spritesheet('baddie', '../Assets/images/baddie.png', 32, 48);
            // audio goes here
            this.game.load.audio('gameover', '../Assets/audio/badEnd.wav');
            this.game.load.audio('jump', '../Assets/audio/player_jump.wav');
        };
        Title.prototype.create = function () {
            var tween = this.add.tween(this._preloadBar).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this._loadLogo, this); // load logo on complete					
            this.input.onTap.addOnce(this._titleClicked, this);
        };
        // loads next state on click
        Title.prototype._titleClicked = function () {
            this.game.state.start("Play");
        };
        Title.prototype._loadLogo = function () {
            // add logo
            this._titleScreenImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            this._titleScreenImage.anchor.setTo(0.5, 0.5);
            // scale logo down initially
            this._titleScreenImage.scale.setTo(0.2, 0.2);
            // animate logo
            this.game.add.tween(this._titleScreenImage.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
        };
        return Title;
    })(Phaser.State);
    scenes.Title = Title;
})(scenes || (scenes = {}));
//# sourceMappingURL=title.js.map