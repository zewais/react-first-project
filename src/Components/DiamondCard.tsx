interface DiamondCardProps {
  image: string;
  productName?: string;
  price: string;
  sale?: boolean;
}
export default function DiamondCard({
  image,
  productName = "untitled",
  price,
  sale,
}: DiamondCardProps) {
  return (
    <div className="DiamondCard">
      <img src={image} alt="" width="100px" />
      <h2>{productName}</h2>
      <p>{price}</p>
      <p style={{ color: "red", fontWeight: "bolder" }}>{sale && "SALE"}</p>
    </div>
  );
}
