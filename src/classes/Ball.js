Crafty.c("Ball", {
    required: "2D, Canvas, Color, Collision, Motion, id_ball",
    init: function() {
        this.color(themes[nowTheme][0])
        this.x = gameWidth / 2 - ballRadius
        this.y = gameHeight / 2
        this.h = 10
        this.w = 10
        let angle = Math.random() * Math.PI * 0.7 + Math.PI * 0.15
        this.vx = ballSpeed * Math.cos(angle)
        this.vy = -ballSpeed * Math.sin(angle)
    },
    events: {
        'Draw': function(data) {
            let ctx = data.ctx, pos = data.pos;
            let centerX = pos._x + pos._w / 2;
            let centerY = pos._y + pos._h / 2;
            ctx.beginPath();
            ctx.arc(centerX, centerY, ballRadius, 0, 2 * Math.PI);
            ctx.fillStyle = themes[nowTheme][1];
            ctx.fill();
          },
        "EnterFrame": function() {
            if (this.hit("id_block") || this.hit("id_platform")) {
                let hitdata = (this.hit("id_block") ? this.hit("id_block")[0] : this.hit("id_platform")[0])
                if (this.hit("id_platform")) {
                    this.x -= hitdata.overlap * hitdata.normal.x;
                    this.y -= hitdata.overlap * hitdata.normal.y;
                }
                if (hitdata.normal.x != 0)
                {
                    this.vx *= -1;
                }
                if (hitdata.normal.y != 0)
                {
                    this.vy *= -1;
                }
            }
            if (this.x >= gameWidth - this.w || this.x <= 0) {
                this.vx *= -1;
            }
            if (this.y <= 0) {
                this.vy *= -1;
            }
            if (this.y >= gameHeight) {
                Crafty.scene("DeathScreen")
            }
        }
    }
})
