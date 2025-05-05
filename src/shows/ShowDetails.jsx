import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <section className="show-details">
        <p>Please select a show to see details.</p>
      </section>
    );
  }

  return (
  <div className="show-details">
    <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
  </div>
  );
}
