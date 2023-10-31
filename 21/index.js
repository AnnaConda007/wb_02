let callCount = 0;

const getCallSize = () => {
  callCount++;
  getCallSize();
};

try {
  getCallSize();
} catch (e) {
  console.log(`размер колстека состаляет ${callCount}`);
}
