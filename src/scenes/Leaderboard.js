Crafty.defineScene("Leaderboard", function() {
    Crafty.init(gameWidth, gameHeight)
    Crafty.background(themes[nowTheme][0]);

    Crafty.e("2D, DOM, Text")
        .attr({
            h: 100,
            w: gameWidth,
            x: 0,
            y: 50
        })
        .text("Settings")
        .textFont({
            size: "70px"
        })
        .css({
            "text-align": "center",
            "color": themes[nowTheme][1]
        })
    let pos_y = 200
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        Crafty.e("2D, DOM, Text")
            .attr({
                h: 100,
                w: gameWidth,
                x: 0,
                y: pos_y
            })
            .text(`${key}: ${localStorage.getItem(key)}`)
            .textFont({
                size: "40px"
            })
            .css({
                "text-align": "center",
                "color": themes[nowTheme][1]
            })
        pos_y += 60
    }
    let back = Crafty.e("Button")
        .bind("Click", function(MouseEvent){
            Crafty.scene("Menu");
        })
    back.newPos(gameWidth / 2 - back.w / 2, pos_y + 50)
    back.addText("Back")

    
})