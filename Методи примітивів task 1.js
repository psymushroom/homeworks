function myIsNaN(value) {

  if (typeof value === "string") {
    return !Number.isFinite(value);
  }

  return value !== value;
}





