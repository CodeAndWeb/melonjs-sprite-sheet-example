import { Stage, game, ColorLayer, BitmapText, TextureAtlas, loader, Sprite } from "melonjs";
import PlayerEntity from "../renderables/player.js";

class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {

        // load the texture atlas file
        const atlas = new TextureAtlas(
            loader.getJSON("cityscene")
        );

        // viewport width and height
        const w = game.viewport.width;
        const h = game.viewport.height;

        // create background sprite
        const background = atlas.createSpriteFromName("background");

        // set its position to the middle of the viewport
        background.pos.set(w/2, h/2);

        // add sprite to the scene
        game.world.addChild(background, 1);

        const capguy = new PlayerEntity(w/2, h*0.9, atlas);
        game.world.addChild(capguy, 2);
    }
};

export default PlayScreen;
