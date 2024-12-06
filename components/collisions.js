const boundaries = {
    room: {
        xMin: -17,
        xMax: 17,
        zMin: -17,
        zMax: 17,
        yMin: -1.5,
        yMax: 7.5,
      },
      hallway: {
        xMin: 22.5,
        xMax: 65,
        zMin: -5,
        zMax: 5,
        yMin: -1.5,
        yMax: 7.5,
      },
    room2: {
      xMin: 67,
      xMax: 113,
      zMin: -37,
      zMax: 37,
      yMin: -1.5,
      yMax: 7.5,
    },
  };

export function checkCollisions(camera) {
    const position = camera.position;
    const pushback = 2.5; // Pushback intensity

    // Check room boundaries with pushback
    if (position.x < boundaries.room.xMax + 5) {
        if (position.x < boundaries.room.xMin) position.x += pushback;
        if ((position.z < -6 || position.z > 6) && (position.x > boundaries.room.xMax)) position.x -= pushback;
        if (position.z < boundaries.room.zMin) position.z += pushback;
        if (position.z > boundaries.room.zMax) position.z -= pushback;
        if (position.y < boundaries.room.yMin) position.y += pushback;
        if (position.y > boundaries.room.yMax) position.y -= pushback;
    }

    // Check hallway boundaries with pushback
    if (position.x > boundaries.hallway.xMin && position.x < boundaries.hallway.xMax) {
        if (position.z < boundaries.hallway.zMin) position.z += pushback;
        if (position.z > boundaries.hallway.zMax) position.z -= pushback;
        if (position.y < boundaries.hallway.yMin) position.y += pushback;
        if (position.y > boundaries.hallway.yMax) position.y -= pushback;
    }

    // Check room2 boundaries with pushback
    if (position.x > boundaries.room2.xMin - 5) {
        if ((position.z < -6 || position.z > 6) && (position.x < boundaries.room2.xMin)) position.x += pushback;
        if (position.x > boundaries.room2.xMax) position.x -= pushback;
        if (position.z < boundaries.room2.zMin) position.z += pushback;
        if (position.z > boundaries.room2.zMax) position.z -= pushback;
        if (position.y < boundaries.room2.yMin) position.y += pushback;
        if (position.y > boundaries.room2.yMax) position.y -= pushback;
    }
}
