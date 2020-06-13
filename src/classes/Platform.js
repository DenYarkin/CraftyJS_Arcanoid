Crafty.c("Platform", {
    required: "2D, Canvas, Color, Collision, Keyboard, Multiway, id_platform",
    init: function() {
        this.x = gameWidth / 2 - platformWidth / 2,
        this.y = gameHeight - downIndent - platformHeight,
        this.h = platformHeight,
        this.w = platformWidth
        this.multiway(platformSpeed, {LEFT_ARROW: 180, RIGHT_ARROW: 0})
        this.color(themes[nowTheme][1])
    },
    events: {
        "EnterFrame": function() {
            if (this.x <= 0) {
                this.x = 0
            }
            if (this.x >= gameWidth - this.w) {
                this.x = gameWidth - this.w
            }
        }
    }
})