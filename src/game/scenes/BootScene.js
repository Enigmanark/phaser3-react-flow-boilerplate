import * as Phaser from "phaser"

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        this.load.image("Sprite", "./assets/images/Sprite.png");
    }

    create() {
        this.scene.start("MenuScene");
    }
}