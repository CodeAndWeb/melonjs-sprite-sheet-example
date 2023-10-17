import {Entity, game, loader} from "melonjs";

class PlayerEntity extends Entity {

    /**
     * constructor
     */
    constructor(x, y, atlas) {
        // call the parent constructor
        super(x, y, { width: 210, height: 330 });

        const animations = loader.getJSON("cityscene-0").animations; // animations are exported to first multi-pack file
        const walkFrames = animations["capguy/walk"];
        const turnFrames = animations["capguy/turn"];

        // create animated sprite, specify all used animation frames
        this.renderable = atlas.createAnimationFromName([...walkFrames, ...turnFrames]);

        // define animations, pass frames to be used in each animation
        this.renderable.addAnimation("walk", walkFrames, 125);
        this.renderable.addAnimation("turn", turnFrames, 125);
        this.renderable.setCurrentAnimation("walk");

        this.body.setStatic(true);
    }

    /**
     * update the entity
     */
    update(dt) {
        // just manually change the guy position
        this.pos.x += 0.2*dt;

        // repeat once leaving the viewport
        if (this.pos.x >= game.viewport.width) {
            this.pos.x = 0;
        }

        // call the parent method
        super.update(dt);
        return true;
    }

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision(response, other) {
        // Make all other objects solid
        return true;
    }
};

export default PlayerEntity;
