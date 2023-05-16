export class Sans extends Actor{
    constructor() {
        super(({    
            width: Resources.Sans.width,
            height: Resources.Sans.height
            }))
        
        }


    onInitialize(engine){
        Sans.graphics.use(Resources.Sans.toSprite());
       
        this.add(Sans)

        this.anchor = new Vector(0, 0);
        this.rand = new Random();
        this.graphics.use(Resources.Logo.toSprite());
        this.w = Resources.Logo.width;
        this.h = Resources.Logo.height;

        this.pos = new Vector(
            this.rand.integer(this.w, engine.drawWidth - this.w),
            this.rand.integer(this.h, engine.drawHeight - this.h)
          );
        this.vel = new Vector(Math.random() * 80 - 40, Math.random() * 80 - 40);
        
      Sans.on("pointerup", (event) => {
     event.kill()
    })


    }
    onPostUpdate(engine) {
        if (this.pos.x < 0 || this.pos.x + this.w > engine.drawWidth) {
          this.vel.x = -this.vel.x;
        }
        if (this.pos.y < 0 || this.pos.y + this.h > engine.drawHeight) {
          this.vel.y = -this.vel.y;
        }
      }



   
}


