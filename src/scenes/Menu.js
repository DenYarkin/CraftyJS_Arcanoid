Crafty.defineScene("Menu", function() {
    Crafty.init(gameWidth, gameHeight)
    Crafty.background(themes[nowTheme][0]);

    Crafty.e("2D, DOM, Text")
        .attr({
            h: 100,
            w: gameWidth,
            x: 0,
            y: 50
        })
        .text("ARCANOID")
        .textFont({
            size: "70px"
        })
        .css({
            "text-align": "center",
            "color": themes[nowTheme][1]
        })
    let start = Crafty.e("Button")
        .bind("Click", function(MouseEvent){
            Crafty.scene("Game");
        })
    start.newPos(gameWidth / 2 - start.w / 2, 200)
    start.addText("Start")

    let settings = Crafty.e("Button")
        .bind("Click", function(MouseEvent){
            Crafty.scene("Settings");
        })
    settings.newPos(gameWidth / 2 - settings.w / 2, 300)
    settings.addText("Settings")
})