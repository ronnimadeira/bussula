basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() == 180) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() == 90) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() == 270) {
        basic.showArrow(ArrowNames.West)
    }
})
