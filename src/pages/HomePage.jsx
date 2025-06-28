import HeroImage from "../assets/images/tailwind.svg";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="text-5xl/tight font-medium mb-7">
              Belajar Membuat Website Dengan{" "}
              <span className="font-bold text-sky-400 ">Tailwind CSS</span>
            </h1>
            <p className="text-base/8 mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eos delectus natus labore quod harum quo. Illo
              laboriosam animi ad, totam doloremque voluptas excepturi, pariatur
              debitis dignissimos quos natus exercitationem.
            </p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-3 text-white shadow rounded-full"
            >
              Tentang Kami<i className="ri-eye-line mr-1"></i>{" "}
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto md:m-0 animate-shadowDropCenter rounded-3xl py-4 px-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
