Crafty.c("Ball", {
    required: "2D, Canvas, Color, Collision, Motion, id_ball",
    init: function() {
        this.color("black")
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
        }
    }
})

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

Crafty.c("Platform", {
    required: "2D, Canvas, Color, Collision, Keyboard, Multiway, id_platform",
    init: function() {
        this.x = gameWidth / 2 - platformWidth / 2,
        this.y = gameHeight - downIndent - platformHeight,
        this.h = platformHeight,
        this.w = platformWidth
        this.multiway(platformSpeed, {LEFT_ARROW: 180, RIGHT_ARROW: 0})
        this.color("white")
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

Crafty.c("Score", {
    required: "2D, Canvas, Text",
    init: function() {
        this.lastScoreText = Crafty.e("2D, Canvas, Text")
            .attr({
                x: 10,
                y: 5
            })
            .textColor("white")
            .text(nowScore)
            .textFont({
                size: "50px"
            })
        this.lastScore = 0
    },
    events: {
        "EnterFrame": function() {
            if (nowScore != this.lastScore) {
                this.lastScoreText.destroy()
                this.lastScoreText = Crafty.e("2D, Canvas, Text")
                    .attr({
                        x: 10,
                        y: 5
                    })
                    .textColor("white")
                    .text(nowScore)
                    .textFont({
                        size: '50px'
                    })
                this.lastScore = nowScore
            }
        }
    }
})


Crafty.c("Button", {
    required: "2D, DOM, Text, Mouse",
    init: function() {
        this.h = 62
        this.w = 300
        let _x = this.x
        let _y = this.y
        this.back = Crafty.e("2D, DOM, Text, Color")
            .attr({
                x: _x,
                y: _y,
                h: this.h,
                w: this.w
            })
            .css({
                "border-radius": "20px",
                "background-color": "blue",
                "transition-duration": "200ms",
                "transition-property": "background-color"
            })
        this.text = Crafty.e("2D, DOM, Text")
            .attr({
                x: _x,
                y: _y,
                h: this.h,
                w: this.w
            })
            .textFont({
                size: "50px"
            })
            .css({
                "text-align": "center",
                "color": "red",
                "transition-duration": "200ms",
                "transition-property": "background-color"
            })
    },
    events: {
        "MouseOver": function() {
            this.text.css({
                "color": "blue"
            })
            this.back.css({
                "background-color": "red"
            })
            console.log("MOUSE OVER")
        },
        "MouseOut": function() {
            this.text.css({
                "color": "red"
            })
            this.back.css({
                "background-color": "blue"
            })
            console.log("MOUSE OUT")
        },
        "Click": function(MouseEvent){
            alert("clicked", MouseEvent);
        }
    },
    newPos: function(x, y) {
        this.x = x
        this.y = y

        this.back.x = x
        this.back.y = y

        this.text.x = x
        this.text.y = y
    },
    addText: function(text) {
        this.text.text(text)
    }
})