import CardPhotoComponent from "../components/CardPhotoComponent";
import { fotoGDrive } from "../assets/data";

const ProjectPage = () => {
  return (
    <>
      <main className="min-h-svh dark:bg-gray-950 bg-gray-50 dark:text-gray-50 ">
        <section className="flex items-center flex-col justify-center py-20">
          <h1 className="mb-10 text-4xl font-bold">Projects</h1>
          <section className="flex flex-wrap items-center justify-center gap-5">
            {fotoGDrive.map((item) => {
              return (
                <>
                  <CardPhotoComponent
                    key={item.id}
                    img={item.img}
                    title={item.title}
                  />
                </>
              );
            })}
          </section>
          <section className="my-5">
            <a
              href="https://drive.google.com/drive/folders/1SIfHL7c2ItSVSlqaB3kBOCSoaH6ntc3G"
              className="flex p-4 bg-gray-200 hover:bg-gray-100 border  rounded-lg items-center gap-3 hover:dark:bg-gray-700 dark:bg-gray-800"
            >
              More Project ...
            </a>
          </section>
        </section>
      </main>
    </>
  );
};

export default ProjectPage;
