interface propsImg {
  img: string;
  title: string;
}

const CardPhotoComponent = ({ title, img }: propsImg) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <section className="w-96 h-72">
          <img
            src={img}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        </section>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardPhotoComponent;
