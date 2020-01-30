let item = game.createSprite(2, 2);
let rando = Math.randomRange(0, 4);

input.onButtonPressed(Button.A, function () {
    item.turn(Direction.Right, 45);
})
input.onButtonPressed(Button.B, function () {
    item.setX(Math.randomRange(0, 4));
    item.setY(Math.randomRange(0, 4));
})

basic.forever(function () {
    item.ifOnEdgeBounce();
    item.move(1);
})

