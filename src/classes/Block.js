Crafty.c("Block", {
    required: "2D, Canvas, Color, Collision, id_block",
    init: function() {
        this.color("red")
        this.h = blockHeight
        this.w = blockWidth
    },
    events: {
        "EnterFrame": function() {
            if (this.hit("id_ball")) {
                this.destroy()
                nowScore++;
            }
        }
    }
})