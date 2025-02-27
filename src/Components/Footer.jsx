import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <>
      <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex felx-col sm:flex-row item-center justify-between text-white bg-gray-800 sm:px-20">
        <section className="text-lg">
          Copyright {year} | All rights reserved
        </section>
        <section className="flex item-center justify-center gap-5 text-2xl text-white">
            <a href="" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                <BsFacebook/>
            </a>
            <a href="" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                <BsInstagram/>
            </a>
            <a href="" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                <BsLinkedin/>
            </a>
            <a href="" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                <BsTwitter/>
            </a>
        </section> 
      </footer>
    </>
  );
}

export default Footer;
