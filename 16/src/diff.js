const dates = (A, B, unitMeasurement) => {
  const difference = A.diff(B, unitMeasurement);
  return difference;
};

export default dates;
