function App() {
  return (
    <>
      <header>
        <nav className="bg-red-500 py-5 px-5 flex items-center space-x-4 justify-between">
          <div className="flex justify-evenly space-x-10 items-center">
            <div className="logo">
              <h1 className="text-white text-2xl font-bold lg:3xl">Kalvium</h1>
            </div>
            <div>
              <ul className="text-white flex space-x-3 justify-between">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contacts</a>
                </li>
                <li>
                  <a href="">Courses</a>
                </li>
              </ul>
            </div>
          </div>

          <button className="py-1 bg-transparent px-4 border-white border-[1px] rounded-md text-white">
            Login
          </button>
        </nav>
      </header>

      <main className="py-5">
        <section className="px-[9.2rem]">
          <button className="bg-blue-500 mb-5 rounded-md p-2 text-white font-bold">
            Button One
          </button>
          <div
            className="p-2 mb-4 lg:w-auto h-full border-2 tracking-wide border-red-500 text-sm text-red-500 rounded-md bg-red-100"
            role="alert"
          >
            <span className="font-bold mr-2">Alert!</span>{" "}
            <span className="font-medium">This is </span>
            <span className="font-semibold">awesome!</span>
          </div>
        </section>
        <section className="py-5 px-3 w-96 m-auto ">
          <div className="shadow-lg flex space-x-5 justify-center lg:w-auto p-3 rounded-sm">
            <div className="flex items-center">
              <img
                className="w-32"
                src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold">Kalvium Store</h1>
              <p>You have new course!</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center bg-slate-300 p-4">
        <h2>
          &copy; 2021 Copyright:<span className="font-semibold">Kalvium</span>
        </h2>
      </footer>
    </>
  );
}

export default App;
