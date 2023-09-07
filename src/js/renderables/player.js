import {Entity, game} from "melonjs";

class PlayerEntity extends Entity {

    /**
     * constructor
     */
    constructor(x, y, atlas) {
        // call the parent constructor
        super(x, y, { width: 210, height: 330 });

        // create animated sprite, specify all used animation frames
        this.renderable = atlas.createAnimationFromName([
            "capguy/walk/0001", "capguy/walk/0002",
            "capguy/walk/0003", "capguy/walk/0004",
            "capguy/walk/0005", "capguy/walk/0006",
            "capguy/walk/0007", "capguy/walk/0008",
            "capguy/turn/0001", "capguy/turn/0002",
            "capguy/turn/0003", "capguy/turn/0004",
            "capguy/turn/0005", "capguy/turn/0006"
        ]);

        // define animations, pass frames to be used in each animation
        this.renderable.addAnimation("walk", [0,1,2,3,4,5,6,7], 125);
        this.renderable.addAnimation("turn", [8,9,10,11,12,13], 125);
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