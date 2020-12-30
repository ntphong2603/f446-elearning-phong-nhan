export const require = (value) => {
  let error = "Input FullName Please!";
  if (value !== null && typeof value !== "undefined" && value.trim() !== "") {
    error = null;
  }
  return error;
};
