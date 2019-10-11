Crafty.c("Wall", {
    required: "Canvas, 2D, Color, Collision",
    init: function() {
        this.color(themes[nowTheme][1]);
    }
})

Crafty.c("Bonuses", {
    queue: [],
    flag: 0,
    required: "Canvas, 2D, Color, Collision",
    events: {
        "EnterFrame": function() {
            let k = Math.random() * 10;
            // console.log(k);
            if (k <= 5 && numOfBonuses < maxBonuses) {
                this.queue.push(Date.now())
                numOfBonuses++;
                let x, y;
                x =  Math.random() * 10000 % (gameWidth - 20 - ballRadius * 2 - boardWidth * 3) + boardWidth * 3;
                y =  Math.random() * 10000 % (gameHeight - 20 - ballRadius * 2 - boardWidth * 3) + boardWidth * 3;
                Crafty.e("2D, Canvas, Color, Collision, bonus")
                .attr({
                    x: x,
                    y: y,
                    w: ballRadius * 2,
                    h: ballRadius * 2
                })
                .color(themes[nowTheme][1])
                .bind("ExitFrame", function() {
                    if (this.hit('ball')) {
                        this.destroy();
                        numOfBonuses--;
                    }
                    // if (Date.now() - bonuses.queue[0] > bonusExistTime) {
                    //     this.queue.shift();
                    //     numOfBonuses--;
                    //     this.destroy();
                    // }
                })
            }
        }  
    }
})

Crafty.c("Score", {
    lastLeftScore: 0,
    lastRightScore: 0, 
    leftScoreText: "",
    rightScoreText: "",
    required: "2D, Canvas, Text",
    init: function() {
        this.leftScoreText = Crafty.e("2D, Canvas, Text, Motion")
            .attr({
                x: 50, 
                y: 50
            })
            .textColor(themes[nowTheme][1])
            .text(leftScore)
            .textFont({
                size: '50px'
            })
            this.rightScoreText = Crafty.e("2D, Canvas, Text, Motion")
            .attr({
                x: gameWidth - boardWidth - 20 - 50, 
                y: boardWidth + 40
            })
            .textColor(themes[nowTheme][1])
            .text(rightScore)
            .textFont({
                size: '50px'
            })
    },
    events: {
        "EnterFrame": function() {
            if (leftScore != this.lastLeftScore) {
                this.leftScoreText.destroy();
                this.leftScoreText = Crafty.e("2D, Canvas, Text, Motion")
                .attr({
                    x: 50, 
                    y: 50
                })
                .textColor(themes[nowTheme][1])
                .text(leftScore)
                .textFont({
                    size: '50px'
                })
                this.lastLeftScore = leftScore;
                if (leftScore == endGameScore)
                {
                    document.getElementById('canvas').hidden = false;
                    document.getElementById('cr-stage').hidden = true;
                    document.getElementById('menu-js').hidden = false;
                    Menu.load('GameOver')
                }
            }
            if (rightScore != this.lastRightScore) {
                this.rightScoreText.destroy();
                this.rightScoreText = Crafty.e("2D, Canvas, Text, Motion")
                .attr({
                    x: gameWidth - boardWidth - 20 - 50, 
                    y: boardWidth + 40
                })
                .textColor(themes[nowTheme][1])
                .text(rightScore)
                .textFont({
                    size: '50px'
                })
                this.lastRightScore = rightScore;
                if (rightScore == endGameScore)
                {
                    document.getElementById('canvas').hidden = false;
                    document.getElementById('cr-stage').hidden = true;
                    document.getElementById('menu-js').hidden = false;
                    Menu.load('GameOver')
                }
            }
        }
    }
})

Crafty.c('CircleShape', {
    required: '2D, Canvas, Color, Motion, Collision',
    circleShape: function(radius) {
      this.color = themes[nowTheme][1];
      this.w = this.h = radius * 2;
      return this;
    },
    setDefault: function() {
        this.x = gameWidth / 2;
        this.y = gameHeight / 2;
    },
    events: {
      'Draw': function(data) {
        let ctx = data.ctx, pos = data.pos;
        let centerX = pos._x + pos._w / 2;
        let centerY = pos._y + pos._h / 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = themes[nowTheme][1];
        ctx.fill();
      },
      "ExitFrame": function() {
          if (this.x < 2 * boardWidth) {
            rightScore++;
            this.setDefault();
          }
          if (this.x > gameWidth - 3 * boardWidth) {
            leftScore++;
            this.setDefault();
          }
          if (this.hit('bonus')) {
            //   console.log("###");
              this.vx *= 2;
          }
          if (this.hit('wall')) {
            let hitdata = this.hit('wall')[0]
            this.x -= hitdata.overlap * hitdata.normal.x;
            this.y -= hitdata.overlap * hitdata.normal.y;
            if (hitdata.normal.x != 0)
            {
                this.vx *= -1;
            }
            if (hitdata.normal.y != 0)
            {
                this.vy *= -1;
            }
          }

      }
    }
  });

Crafty.defineScene('Game', function() {
    Crafty.init(gameWidth, gameHeight)
    Crafty.background(themes[nowTheme][0]);
    numOfBonuses = 0;
    document.getElementById('cr-stage').hidden = false;
    leftScore = rightScore = 0;
    for (let y = boardWidth; y < gameHeight; y += 2 * boardHeight / 3) {
        Crafty.e("2D, Canvas, Color")
        .attr({
            x: gameWidth / 2 - boardWidth / 2,
            y: y,
            w: boardWidth / 2,
            h: boardHeight / 3
        })
        .color(themes[nowTheme][1])
    }
    Crafty.e("Wall, wall")
    .attr({
        x: 0, 
        y: 0,
        h: boardWidth,
        w: gameWidth
    })
    Crafty.e("Wall, wall")
    .attr({
        x: 0, 
        y: gameHeight - boardWidth,
        h: boardWidth,
        w: gameWidth
    })
    Crafty.e("Wall, wall")
    .attr({
        x: 0, 
        y: 0,
        h: gameHeight,
        w: boardWidth
    })
    Crafty.e("Wall, wall")
    .attr({
        x: gameWidth - boardWidth, 
        y: 0,
        h: gameHeight,
        w: boardWidth
    })


    Crafty.e("Canvas, 2D, Color, Keyboard, Collision, Multiway, wall")
    .attr({
        x: boardWidth * 2,
        y: gameHeight / 2 - boardHeight / 2,
        h: boardHeight,
        w: boardWidth
    })
    .color(themes[nowTheme][1])
    .multiway({W: 270, S: 90})
    .bind("EnterFrame", function() {
        if (this.y + this.h >= gameHeight - boardWidth)
        {
            this.y = gameHeight - this.h - boardWidth;
        }
        if (this.y <= boardWidth)
        {
            this.y = boardWidth;
        }
    })

    Crafty.e("Canvas, 2D, Color, Keyboard, Collision, Multiway, wall")
    .attr({
        x: gameWidth - boardWidth * 3,
        y: gameHeight / 2 - boardHeight / 2,
        h: boardHeight,
        w: boardWidth
    })
    .color(themes[nowTheme][1])
    .multiway({UP_ARROW: 270, DOWN_ARROW: 90})
    .bind("EnterFrame", function() {
        if (this.y + this.h >= gameHeight - boardWidth)
        {
            this.y = gameHeight - this.h - boardWidth;
        }
        if (this.y <= boardWidth)
        {
            this.y = boardWidth;
        }
    })

    let ball = Crafty.e("CircleShape, ball")
    .attr({
        x: gameWidth / 2,
        y: gameHeight / 2,
        h: ballRadius,
        w: ballRadius

    })
    .color(themes[nowTheme][0])
    .circleShape(circleRadius)
    ball.vx = 100;
    ball.vy = 100;
    let bonuses = Crafty.e("Bonuses")
    Crafty.e("Score");
    
})