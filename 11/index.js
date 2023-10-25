const parentFunc = () => {
  const value = "значение, опредленное во внешней функции";
  return () => {
    console.log( "Эта внутрення функция выводит:",value);
  };
};


const newVariable = parentFunc()
newVariable()