const uniqueDigitProducts = (arr) => {
  return [
    ...new Set(
      arr.map((num) =>
        num
          .toString()
          .split("")
          .reduce((previous, current) => {
            return previous * parseInt(current);
          }, 1),
      ),
    ),
  ].length;
};
