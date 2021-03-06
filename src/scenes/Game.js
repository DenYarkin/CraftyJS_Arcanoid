Crafty.defineScene("Game", function() {
    Crafty.init(gameWidth, gameHeight)
    Crafty.background(themes[nowTheme][0]);

    nowScore = 0

    if (levels.length < nowLevel + 1) {
        nowLevel = 0
    }
    let platform = Crafty.e("Platform")

    let blocks = []
    for (let i = 0; i < numOfRows; i++) {
        blocks.push([]);
        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        let sum = r + g + b
        let k = blockColorBrightness / sum
        r = Math.round(k * r)
        g = Math.round(k * g)
        b = Math.round(k * b)
        let color = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")"
        for (let j = 0; j < blocksInRow; j++) {
            if (levels[nowLevel][i][j] == '0') {
                continue
            }
            blocks[i].push(Crafty.e("Block")
                .attr({
                    x: (j + 1) * betweenBlocks + blockWidth * j,
                    y: upIndent + i * betweenBlocks + i * blockHeight 
                })
                .color(color)
            )
        }
    }
    let ball = Crafty.e("Ball")
    if (gameMode == 0){
        let score = Crafty.e("Score")
    }
    if (gameMode == 1){
        let timer = Crafty.e("Timer")
    }

})
