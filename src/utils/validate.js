const checkValidURL = (url) => {
  if (url === "") return Error("Please add a link");

  const isURL =
    /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(
      url
    );
  if (isURL !== undefined && !isURL) return Error("Invalid URL");
  return null;
};

export default checkValidURL;
