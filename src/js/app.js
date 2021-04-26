// TODO: write your code here

export default function getStringHealth(objectHealth) {
  if (objectHealth.health >= 50) {
    return 'healthy';
  } if (objectHealth.health >= 15 && objectHealth.health < 50) {
    return 'wounded';
  }

  return 'critical';
}
