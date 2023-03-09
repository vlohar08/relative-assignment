import React from "react";

type AssetCardProps = {
  icon: string;
  name: string;
  price: string;
  percentage: string;
  tvl: string;
  popularPairs: string[];
};

const AssetCard = ({
  icon,
  name,
  price,
  percentage,
  tvl,
  popularPairs,
}: AssetCardProps) => {
  return (
    <div className="asset-card">
      <div className="circle"></div>
      <img src={icon} alt={name} />
      <h6>{name}</h6>
      <div className="price-box">
        {price}{" "}
        <span className={percentage.includes("+") ? "profit" : "loss"}>
          {percentage}
        </span>
      </div>
      <p>Price</p>
      <div className="price-box">{tvl}</div>
      <p>TVL</p>
      <div className="popular-pairs">
        {popularPairs.map((pair) => (
          <img src={pair} />
        ))}
      </div>
      <p>Popular pairs</p>
    </div>
  );
};

export default AssetCard;
