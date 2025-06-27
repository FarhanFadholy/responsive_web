import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
    // console.log(show )
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect (() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        console.log("testing")
        setScroll(true)
        setShow(false)
      } else {
        setScroll(false)
      }
    })
  })

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4"

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4 ">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-4xl text-xl font-bold">Hanly.</h1>
          </div>
          <ul
            className={`flex lg:gap-14 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:p-0 md:m-0 
          md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-slate-300 transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-settings-3-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Layanan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-image-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Project
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2 ">
            <a
              href="#"
              className="bg-sky-800 px-3 py-3 rounded-full text-white hover:bg-sky-600 transition-all"
            >
              Social Media
            </a>
            <i
              className="ri-menu-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
