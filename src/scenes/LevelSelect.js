Crafty.defineScene("LevelSelect", function() {
    Crafty.init(gameWidth, gameHeight)
    Crafty.background(themes[nowTheme][0]);

    Crafty.e("2D, DOM, Text")
        .attr({
            h: 100,
            w: gameWidth,
            x: 0,
            y: 50
        })
        .text("Select level")
        .textFont({
            size: "70px"
        })
        .css({
            "text-align": "center",
            "color": themes[nowTheme][1]
        })
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 6; i++) {
            let a = Crafty.e("Button",)
                .bind("Click", function(MouseEvent){
                    nowLevel = j * 6 + i;
                    Crafty.scene("Game");
                })
            a.text.textFont({size: "20px"})
            a.newSize(30, 100)
            a.newPos(20 + i * 105, 150 + j * 40)
            a.addText("Level " + (j * 6 + i + 1))
        }
    }
})