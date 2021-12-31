const time = (label, func) => {
  const hrstart = process.hrtime();
  const ret = func();
  const hrend = process.hrtime(hrstart);
  console.info(
    "%s: %ds %dms",
    label.padEnd(10),
    hrend[0],
    hrend[1] / 1_000_000
  );
  return ret;
};

module.exports = time;
