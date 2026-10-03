import ResortsCard from "./ResortsCard";
import type { ResortListing } from "../data/data";

interface ResortContainerProps {
    data: ResortListing[];
}

export default function ResortsContainer({data}: ResortContainerProps) {
return ( <div className="ResortsContainer">
    {data.map((listing) => (
     <ResortsCard
     key={listing.id}
     image={listing.pic}
     country={listing.country}
     location={listing.location}
     rating={listing.rating}
     price={listing.price}

    />
))}
    </div>
    );
}
//<ResortsCard />