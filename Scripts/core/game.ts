/// <reference path = "_reference.ts"/>
module Game {
    export class GravitySlide {
        // Instance Variables
        public game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });            
        }
        
        // load all game assets
        public preload(): void {
            this.game.load.image('preload-bar', '../Assets/images/loader.png');
        }

        public create(): void {
            // game settings
            this.game.input.maxPointers = 1; // increase for multi-touch support
            this.game.stage.disableVisibilityChange = true; // pause the game on loss of focus
            
            /*
            if (this.game.device.desktop) {
                //  If you have any desktop specific settings, they can go in here                                               
            }
            else {
                //  Same goes for mobile settings.
            }
            */
            
            // set scaling
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE; // default to NO_SCALE, SHOW_ALL is also good on some screens
            
            // load game states
            this.game.state.add("Title", scenes.Title, true);
            this.game.state.add("Play", scenes.Play, false);
            this.game.state.add("Over", scenes.Over, false);          
            
        }
    }

    window.onload = () => {

        var game = new Game.GravitySlide(); // loads game instance

    };
}