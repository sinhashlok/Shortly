const FooterList = ({ title, list }) => {
  return (
    <div className="flex flex-col md:mr-6 lg:mr-28 text-center mt-8 md:mt-0 md:text-left">
      <h1 className="text-white text-lg font-medium mb-6">{title}</h1>
      {list.map((item) => (
        <h1
          key={item.id}
          className="text-[#9e9aa7] text-lg mb-2 hover:text-[#2acfcf] cursor-pointer"
        >
          {item.item}
        </h1>
      ))}
    </div>
  );
};

export default FooterList;
