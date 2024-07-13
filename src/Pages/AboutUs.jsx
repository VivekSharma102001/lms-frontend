import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import CarouselSlide from "../Components/CarouselSlide";
import {celebrities} from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";
function Aboutus() {
 

  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white relative ">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-gray-200 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eligendi eum molestias possimus similique adipisci incidunt libero
              quam sapiente suscipit earum nisi, animi saepe ab eaque quo neque
              cumque maiores consequuntur cupiditate delectus quasi nobis!
              Sapiente voluptas reiciendis temporibus, doloremque fugiat, nemo,
              reprehenderit consequuntur voluptatum dolores aliquid veritatis
              quod pariatur libero eaque asperiores aut eum a eos minus velit.
              Vel error recusandae eligendi cum fugiat modi, harum tempora fuga
              impedit ipsam ullam nihil incidunt voluptas quos saepe quasi
              consectetur numquam perspiciatis magni repellat inventore
              explicabo minus pariatur nulla. Eos error, omnis provident aperiam
              at maiores commodi nulla corporis eum repellat?
            </p>
          </section>
          <div className="w-1/2 flex ">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
              }}
              className="drop-shadow-2xl"
              src={aboutMainImage}
              alt="aboutMainImage"
            />
          </div>
        </div>

        <div className="carousel m-auto w-1/2 my-16">
          {celebrities && celebrities.map((celebrity) => (
              <CarouselSlide
                {...celebrity}
                key={celebrity.slideNumber}
                totalSlides={celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Aboutus;
