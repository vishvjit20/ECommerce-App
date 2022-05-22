const items = [
  {
    id: 1,
    name: "vishwajeet",
  },
  {
    id: 2,
    name: "vikas",
  },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
