import * as Phaser from "phaser";

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super("PlayScene");
    }

    create() {
        this.sprite = this.add.sprite(0, 0, "Sprite");
        this.sprite.setOrigin(0, 0);
    }
}