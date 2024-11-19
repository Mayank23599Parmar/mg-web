
const FloatingButton = () => {
  return (
    <button
      className="fixed bottom-4 right-4 bg-[hsl(274deg_37.82%_53.33%)] text-white font-medium py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition-opacity md:bottom-6 md:right-6"
      onClick={() => window.location.href='https://apps.shopify.com/mg-pwa-pro'} // Replace with your functionality
    >
      Install Our App
    </button>
  );
};

export default FloatingButton;
