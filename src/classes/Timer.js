Crafty.c("Timer", {
    required: "2D, Canvas, Text",
    init: function() {
        this.startTime = new Date().getSeconds()
        this.lastTime = new Date().getSeconds()
        this.lastText = Crafty.e("2D, Canvas, Text")
            .attr({
                x: 10,
                y: 5
            })
            .textColor(themes[nowTheme][1])
            .text(timerMode)
            .textFont({
                size: "50px"
            })
        this.lastScore = 0
    },
    events: {
        "EnterFrame": function() {
            if (new Date().getSeconds() != this.lastTime) {
                this.nowTime = this.lastTime - this.startTime;
                this.lastText.destroy()
                this.lastText = Crafty.e("2D, Canvas, Text")
                    .attr({
                        x: 10,
                        y: 5
                    })
                    .textColor(themes[nowTheme][1])
                    .text(timerMode - this.nowTime)
                    .textFont({
                        size: '50px'
                    })
                if (timerMode - this.nowTime == 0) {
                    Crafty.scene("WinScreen")
                }
                this.lastTime = new Date().getSeconds()
            }
        }
    }
})