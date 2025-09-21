
const Button = ({sidebarOpen, setSidebarOpen}) =>{
  return (<>{!sidebarOpen && (
          <button
            className="z-10  md:hidden bg-sky-500 text-white p-2 rounded-full shadow-lg focus:outline-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        )}</>);
}

const Banner = ({sidebarOpen, setSidebarOpen}) => {
  // return null;
  return (
      <div className="w-full h-64 bg-sky-300 rounded-sm px-6 py-4 mb-6 -z-50 md:flex md:items-center">
        <Button sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <div className="banner-title mt-4 ml-4">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Adidas Men Running Sneakers
          </h1>
          <p className="text-sm font-normal text-white">
            Performance and Design. Taken right to the edge
          </p>
          <button className="text-sm text-white underline cursor-pointer">SHOP NOW</button>
        </div>
        <div className="banner-image hidden md:block">
          <img
            className="border-none max-h-48 w-auto border-r-8"
            src="/images/bannerSneaker.png"
            alt=""
          />
        </div>
      </div>
  );
};

export default Banner;
