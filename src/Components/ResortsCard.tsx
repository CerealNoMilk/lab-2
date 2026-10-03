interface ResortCardProps {
    image: string;
    country: string;
    location: string;
    rating: number;
    price: number;
}

export default function ResortsCard(props: ResortCardProps) {
    return(
     <div className="ResortsCard">
        <img src={props.image} />
        <h2><b>{props.country}</b></h2>
        <p><i>{props.location}</i></p>
        <p style={{ color: props.rating > 4.0 ? "green" : "red" }}>{props.rating}★</p>
        <p>${props.price}/night</p>
    </div>
    )
};