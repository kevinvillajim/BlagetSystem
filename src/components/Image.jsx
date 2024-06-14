function Image({ img }) {
  return (
    <>
      <div
        className="h-[29rem] bg-[gray] rounded-lg mx-[2rem] my-[2rem]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "contain", // Ajusta esta propiedad para asegurar que la imagen completa sea visible
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}

export default Image;
