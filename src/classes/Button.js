Crafty.c("Button", {
    required: "2D, DOM, Text, Mouse",
    init: function() {
        this.h = 62
        this.w = 600
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
                "background-color": themes[nowTheme][0],
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
                size: "45px"
            })
            .css({
                "margin-top": "4px",
                "text-align": "center",
                "color": themes[nowTheme][1],
                "transition-duration": "200ms",
                "transition-property": "background-color"
            })
    },
    events: {
        "MouseOver": function() {
            this.back.css({
                "background-color": themes[nowTheme][1]
            })
            this.text.css({
                "color": themes[nowTheme][0]
            })
        },
        "MouseOut": function() {
            this.back.css({
                "background-color": themes[nowTheme][0]
            })
            this.text.css({
                "color": themes[nowTheme][1]
            })
        },
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