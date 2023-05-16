export class Player extends ex.Actor {

    constructor() {
        super(({    
            
            }))
        
        }





    onInitialize(engine, delta){
        if (
            engine.input.keyboard.isHeld(ex.Input.Keys.W) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Up)
          ) {
            player._moveForward()
          }
      
          if (engine.input.keyboard.wasPressed(ex.Input.Keys.Right)) {
            player._fire()
          }
        }


    }


  