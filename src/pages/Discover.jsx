// Importing necessary components and constants
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

// Functional component for the Discover page
const Discover = () => {
  // Setting the default genre title to 'Pop'
  const genreTitle = 'Pop';

  // Logging the available genres to the console
  console.log(genres);

  // Return JSX for the Discover component
  return (
    <div className="flex flex-col">
      {/* Header section with title and genre selection dropdown */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left"> Discover {genreTitle}</h2>
        {/* Genre selection dropdown */}
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {/* Mapping through genres to create options in the dropdown */}
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      {/* Displaying a grid of SongCard components */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* Mapping through an array of numbers to create SongCard components */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
          />
        ))}
      </div>
    </div>
  );
}


export default Discover;
