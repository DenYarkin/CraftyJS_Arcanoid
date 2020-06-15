Crafty.defineScene("Settings", function() {
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


    let changeTheme = Crafty.e("Button")
        .bind("Click", function(MouseEvent){
            nowTheme = (nowTheme + 1) % numOfThemes
            Crafty.scene("Settings");
        })
    changeTheme.newPos(gameWidth / 2 - changeTheme.w / 2, 200)
    changeTheme.addText("Change theme: " + themesNames[nowTheme])


    let changeMode = Crafty.e("Button")
        .bind("Click", function(MouseEvent){
            gameMode = (gameMode + 1) % numModes
            Crafty.scene("Settings");
        })
    changeMode.newPos(gameWidth / 2 - changeMode.w / 2, 300)
    changeMode.addText("Change game mode: " + modesNames[gameMode])


    let back = Crafty.e("Button")
        .bind("Click", function(MouseEvent){
            Crafty.scene("Menu");
        })
    back.newPos(gameWidth / 2 - back.w / 2, 400)
    back.addText("Back")

    
})