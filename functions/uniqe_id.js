module.exports = () => {
  var datetime = new Date();
  var dateString = new Date(
    datetime.getTime() - datetime.getTimezoneOffset() * 60000
  );
  return (uniqueid = dateString
    .toISOString()
    .replace("T", "-")
    .replace(/[:]/g, "-")
    .substr(0, 19));
};
