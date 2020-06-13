Crafty.c("Score", {
    required: "2D, Canvas, Text",
    init: function() {
        this.lastScoreText = Crafty.e("2D, Canvas, Text")
            .attr({
                x: 10,
                y: 5
            })
            .textColor(themes[nowTheme][1])
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
                    .textColor(themes[nowTheme][1])
                    .text(nowScore)
                    .textFont({
                        size: '50px'
                    })
                this.lastScore = nowScore
            }
        }
    }
})