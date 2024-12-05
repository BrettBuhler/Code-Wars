function solution(force1, force2, theta) {
    const rad = theta * Math.PI / 180
    const resultant = Math.sqrt(force1 ** 2 + force2 ** 2 + 2 * force1 * force2 * Math.cos(rad))
    const phiRad = Math.atan2(force2 * Math.sin(rad), force1 + force2 * Math.cos(rad))
    const phiDeg = (phiRad * 180 / Math.PI)
    return [resultant, phiDeg]
  }