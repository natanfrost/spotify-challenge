import GeneralInfo from "./GeneralInfo";

const ArtistDetails = ({ artist }) => {
  return (
    <div>
      <GeneralInfo artist={artist} />
    </div>
  );
};

export default ArtistDetails;
