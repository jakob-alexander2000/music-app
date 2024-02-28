// Importing necessary components and constants
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

// Functional component for the Discover page
const Discover = () => {

    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();  
  // Setting the default genre title to 'Pop'
  const genreTitle = 'Pop';
  if(isFetching) return <Loader title="Loading Songs..."/>;
  if(error) return <Error />;  


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
        {/* Mapping over real data instead of previous dummy array */}
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            i={i}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}


export default Discover;
