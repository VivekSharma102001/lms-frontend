import { Link } from "react-router-dom";

import homePageMainImage from "../Assets/Images/homePageMainImage.png"
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find Out best
            <span className="text-yellow-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            we have large library of courses tought by highly skilled and
            quilified faculties at a very affordalbe cost
          </p>
          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all-in-out">
                Explore courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all-in-out">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex item-center justify-center">
            <img src={homePageMainImage} alt="Home page image" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
