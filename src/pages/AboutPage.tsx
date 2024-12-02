import aboutPhoto from "../assets/images/6-2.jpg";
import { ImInstagram, ImLinkedin } from "react-icons/im";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { work } from "../assets/data";
const AboutPage = () => {
  return (
    <>
      <main className="dark:bg-gray-950 bg-gray-50 dark:text-gray-50">
        <section className=" container mx-auto px-5 text-center min-h-svh gap-5 flex flex-col justify-center items-center">
          <section className="w-52 h-52 rounded-full">
            <img
              src={aboutPhoto}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </section>
          <p className="sm:text-xl">
            Bagi saya, persepsi komunikasi yang efektif adalah
            mengimplementasikan cerita antara dua arah komunikator dan komunikan
            dengan artikulasi untuk menjadi nilai positif untuk diri sendiri
            maupun perusahaaan
          </p>
          <section className="flex gap-5">
            <a href="#">
              <ImInstagram size={25} />
            </a>
            <a href="">
              <ImLinkedin size={25} />
            </a>
          </section>
          <section>
            <p>mhmdrizki12@gmail.com</p>
          </section>
        </section>
        <section className="container mx-auto px-5 pb-20">
          <h3 className="text-3xl font-bold mb-3">Education</h3>
          <section className="mb-5">
            <h4 className="text-xl sm:text-2xl font-semibold">
              Universitas Bina Sarana Informatika
            </h4>
            <h5 className="text-lg sm:text-xl">Ilmu Komunikasi</h5>
            <p>2021 - Now</p>
          </section>
          <section>
            <h4 className="text-xl sm:text-2xl font-semibold">
              Smkn 1 Cibinong
            </h4>
            <h5 className="text-lg sm:text-xl">Multimedia</h5>
            <p>2018 - 2021</p>
          </section>
        </section>
        <section className="container mx-auto px-5 pb-20">
          <h3 className="text-3xl font-bold mb-3">Work Experience</h3>
          {work.map((item) => {
            return (
              <>
                <section className="mb-5 pb-2">
                  <section className="flex justify-between flex-col sm:flex-row">
                    <h4 className="text-xl sm:text-2xl font-semibold">
                      {item.title}
                    </h4>
                    <p>{item.date}</p>
                  </section>
                  <h5 className="text-lg sm:text-xl">
                    {item.job} - {item.jobdesk}
                  </h5>
                  <p>{item.place}</p>
                </section>
              </>
            );
          })}
        </section>
        <section className="container mx-auto px-5 pb-20">
          <h3 className="text-3xl font-bold mb-3">Skill</h3>
          <section className="mb-5">
            <h4 className="text-xl sm:text-2xl font-semibold mb-3">
              Software Skills
            </h4>
            <section className="flex gap-5 flex-wrap">
              <section className="w-fit">
                <p className="flex p-4 bg-gray-200 hover:bg-gray-100 border   rounded-lg items-center gap-3 hover:dark:bg-gray-700 dark:bg-gray-800">
                  Photoshop <SiAdobephotoshop size={25} />
                </p>
              </section>
              <section className="w-fit">
                <p className="flex p-4 bg-gray-200 hover:bg-gray-100 border  rounded-lg items-center gap-3 hover:dark:bg-gray-700 dark:bg-gray-800">
                  Premiere <SiAdobepremierepro size={25} />
                </p>
              </section>
              <section className="w-fit">
                <p className="flex p-4 bg-gray-200 hover:bg-gray-100 border  rounded-lg items-center gap-3 hover:dark:bg-gray-700 dark:bg-gray-800">
                  After Effect <SiAdobeaftereffects size={25} />
                </p>
              </section>
              <section className="w-fit">
                <p className="flex p-4 bg-gray-200 hover:bg-gray-100 border  rounded-lg items-center gap-3 hover:dark:bg-gray-700 dark:bg-gray-800">
                  Office <TbBrandOffice size={25} />
                </p>
              </section>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
