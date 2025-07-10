

function Banner() {



  return (
    <div
      className="h-[20vh]  md:h-[90vh] bg-cover flex items-end "
      style={{
        backgroundImage: `url(https://images.ctfassets.net/4cd45et68cgf/7JiW5JIJZaNi0LBJXQCuON/28ee69e49f0ca93e29adc4464e82f358/EN-US_MyNameS1_Teaser_Solo_Horizontal_RGB_PRE.jpg)`,
      }}
    >
      <div className="text-white text-xl w-full text-center p-4 bg-gray-700/50">
        MY NAME
      </div>
    </div>
  );
}

export default Banner;
