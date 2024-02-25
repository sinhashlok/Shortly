import { useRef, useState } from "react";
import checkValidURL from "../utils/validate";

const Shorten = () => {
  const shortenItURL = useRef(null);
  const [error, setError] = useState({
    code: false,
    message: null,
  });
  const [urls, setUrls] = useState([
    {
      original: "https://twitter.com/frontendmetor",
      shortened: "https://rel.ink/k4lkyk",
    },
    {
      original: "https://twitter.com/frontendmetor",
      shortened: "https://rel.ink/k4lkyk",
    },
    {
      original: "https://twitter.com/frontendmetor",
      shortened: "https://rel.ink/k4lkyk",
    },
    {
      original: "https://twitter.com/frontendmetor",
      shortened: "https://rel.ink/k4lkyk",
    },
    {
      original: "https://twitter.com/frontendmetor",
      shortened: "https://rel.ink/k4lkyk",
    },
    {
      original: "https://twitter.com/frontendmetor",
      shortened: "https://rel.ink/k4lkyk",
    },
  ]);
  const handleShortenItClick = () => {
    const error = checkValidURL(shortenItURL?.current?.value);

    if (error !== null)
      return setError({
        code: true,
        message: error.message,
      });
    setError(false);

    // const fetchShortenURL = async () => {
    //   const url = JSON.stringify({ url: shortenItURL?.current?.value });
    //   const data = await fetch("https://cleanuri.com/api/v1/shorten", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(url),
    //   });
    //   const res = await data.json();
    //   console.log(res);
    // };
    // fetchShortenURL();

    setUrls([
      ...urls,
      {
        original: shortenItURL?.current?.value,
        shortened: "https://rel.wfwwf/k4lKyk",
      },
    ]);
    console.log(urls);
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 md:p-8 md:px-12 lg:p-12 lg:px-[12%] bg-[#dbd8e6] mt-40">
      <div className="bg-[url('/src/assets/images/bg-shorten-mobile.svg')] md:bg-[url('/src/assets/images/bg-shorten-desktop.svg')] p-8 md:px-20 md:py-12 w-full bg-cover rounded-lg bg-[#3b3054] grid grid-cols-12 relative -mt-28 mb-4">
        <div className="col-span-12 md:col-span-9 md:mr-8">
          <input
            type="text"
            ref={shortenItURL}
            placeholder="Shorten a link here..."
            className={`p-4 px-6 w-full md:h-full text-[20px] rounded-md focus:outline-none focus:outline-[#f46262] ${
              error.code && "border-4 border-[#f46262]"
            }`}
          />
          {error.code && (
            <div className="relative text-[#f46262] md:h-0">
              {error.message}
            </div>
          )}
        </div>
        <button
          className="col-span-12 mt-2 py-4 md:p-0 md:mt-0 md:col-span-3 text-[20px] md:text-[14px] lg:text-[20px] text-white font-bold bg-[#2acfcf] rounded-md hover:bg-[#82eeee]"
          onClick={handleShortenItClick}
        >
          Shorten It!
        </button>
      </div>
      <div className="w-full max-h-[500px] overflow-clip overflow-y-scroll mb-16">
        {urls.map((url, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between w-full rounded-md md:p-6 bg-white text-[18px] my-4"
          >
            <div className="overflow-clip m-6 mx-8 md:m-0">{url.original}</div>
            <div className="md:hidden bg-[#9e9aa7] h-[1px] w-full"></div>
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="text-[#2acfcf] mx-8 mt-4 md:m-0 md:mr-4">
                {url.shortened}
              </div>
              <button className="text-white text-[16px] bg-[#2acfcf] mx-8 my-4 md:m-0 rounded-md px-8 py-2">
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shorten;
