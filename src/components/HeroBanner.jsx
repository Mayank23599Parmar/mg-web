
const HeroBanner = ({url}) => {
  return (
    <div className="w-full">
      <img
        src={url}
        alt="Hero Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default HeroBanner;
