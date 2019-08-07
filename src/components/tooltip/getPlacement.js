const targetOffset = [0, 0]

const placements = {
    left: {
        points: ['cr', 'cl'],
        offset: [-4, 0],
        targetOffset,
    },
    right: {
        points: ['cl', 'cr'],
        offset: [4, 0],
        targetOffset,
    },
    top: {
        points: ['bc', 'tc'],
        offset: [0, -4],
        targetOffset,
    },
    bottom: {
        points: ['tc', 'bc'],
        offset: [0, 4],
        targetOffset,
    },
    topLeft: {
        points: ['bl', 'tl'],
        offset: [-1, -4],
        targetOffset,
    },
    leftTop: {
        points: ['tr', 'tl'],
        offset: [-4, -1],
        targetOffset,
    },
    topRight: {
        points: ['br', 'tr'],
        offset: [1, -4],
        targetOffset,
    },
    rightTop: {
        points: ['tl', 'tr'],
        offset: [4, -1],
        targetOffset,
    },
    bottomRight: {
        points: ['tr', 'br'],
        offset: [1, 4],
        targetOffset,
    },
    rightBottom: {
        points: ['bl', 'br'],
        offset: [4, 1],
        targetOffset,
    },
    bottomLeft: {
        points: ['tl', 'bl'],
        offset: [-1, 4],
        targetOffset,
    },
    leftBottom: {
        points: ['br', 'bl'],
        offset: [-4, 1],
        targetOffset,
    },
}

const placementsOfArrowCenter = {
    topLeft: {
        points: ['bl', 'tc'],
    },
    leftTop: {
        points: ['tr', 'cl'],
    },
    topRight: {
        points: ['br', 'tc'],
    },
    rightTop: {
        points: ['tl', 'cr'],
    },
    bottomRight: {
        points: ['tr', 'bc'],
    },
    rightBottom: {
        points: ['bl', 'cr'],
    },
    bottomLeft: {
        points: ['tl', 'bc'],
    },
    leftBottom: {
        points: ['br', 'cl'],
    },
}

const autoAdjustOverflowEnabled = {
    adjustX: 1,
    adjustY: 1,
}

const autoAdjustOverflowDisabled = {
    adjustX: 0,
    adjustY: 0,
}

function getOverflowOptions(autoAdjustOverflow) {
    if (typeof autoAdjustOverflow === 'boolean') {
        return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled
    }
    return {
        ...autoAdjustOverflowDisabled,
        ...autoAdjustOverflow,
    }
}

export default function(config = {}) {
    const { placement = 'top', arrowPointAtCenter = false, arrowWidth = 5, horizontalArrowShift = 16, verticalArrowShift = 12, autoAdjustOverflow = true } = config;
    const xAxisOffset = arrowPointAtCenter ? horizontalArrowShift + arrowWidth : 0;
    const yAxisOffset = arrowPointAtCenter ? verticalArrowShift + arrowWidth : 0;

    const _placement = placements[placement];
    if(!_placement) return;

    const attachPoints = arrowPointAtCenter ? placementsOfArrowCenter[placement] || {} : {};
    const offset = _placement.offset;
    const of1 = offset[0];
    const of2 = offset[1];

    return {
        ..._placement,
        ...attachPoints,
        overflow: getOverflowOptions(autoAdjustOverflow),
        offset: [Math.abs(offset[0]) === 1 ? offset[0] * xAxisOffset : offset[0], Math.abs(offset[1]) === 1 ? offset[1] * yAxisOffset : offset[1]],
    }
}
