import { useParams } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-6 py-10 text-center">
      <h1 className="text-4xl font-bold">Listing Details</h1>
      <p className="mt-4 text-lg">Details for listing ID: {id}</p>
    </div>
  );
};

export default ListingDetails;
