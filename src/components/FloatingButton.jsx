
const FloatingButton = ({url, label,position}) => {
  return (
    <button
      className={` ${position} cursor-pointer border border-solid border-gray-300  fixed  bg-[hsl(274deg_37.82%_53.33%)] text-white font-medium py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition-opacity md:bottom-6 md:right-6`}
      onClick={() => window.location.href=url} // Replace with your functionality
    >
      {label}
    </button>
  );
};

export default FloatingButton;
