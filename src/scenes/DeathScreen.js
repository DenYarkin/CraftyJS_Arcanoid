Crafty.defineScene("DeathScreen", function() {
    Crafty.init(gameWidth, gameHeight)
    Crafty.background(themes[nowTheme][0]);

    Crafty.e("2D, DOM, Text")
        .attr({
            h: 100,
            w: gameWidth,
            x: 0,
            y: 50
        })
        .text("YOU DIED")
        .textFont({
            size: "70px"
        })
        .css({
            "text-align": "center",
            "color": themes[nowTheme][1]
        })
    let back = Crafty.e("Button")
        .bind("Click", function(MouseEvent){
            Crafty.scene("Menu");
        })
    back.newPos(gameWidth / 2 - back.w / 2, 200)
    back.addText("Back")

    let again = Crafty.e("Button")
        .bind("Click", function(MouseEvent){
            Crafty.scene("Game");
        })
    again.newPos(gameWidth / 2 - again.w / 2, 300)
    again.addText("Again")

    
})