// TODO: write your code here

export default function getStringHealth(objectHealth) {
  if (objectHealth.health >= 50) {
    return 'healthy';
  } else if (objectHealth.health >= 15 && objectHealth.health < 50) {
    return 'wounded';
  } else if (objectHealth.health > 0 && objectHealth.health < 15) {
    return 'critical';
  }

}

