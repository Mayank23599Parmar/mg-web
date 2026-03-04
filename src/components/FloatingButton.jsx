
const FloatingButton = ({ url, label, position, offset = 0 }) => {
  return (
    <button
      className={`floating-button ${position} cursor-pointer border border-solid border-gray-300 fixed bg-[hsl(274deg_37.82%_53.33%)] text-white font-medium py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition-opacity`}
      style={{ "--floating-offset": `${offset}px` }}
      onClick={() => (window.location.href = url)} // Replace with your functionality
    >
      {label}
    </button>
  );
};

export default FloatingButton;
