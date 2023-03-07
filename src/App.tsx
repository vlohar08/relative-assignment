import AssetCard from "./components/AssetCard";
import assets from "./data/assets";

function App() {
  return (
    <div className="p-3 sm:p-10 lg:p-20 bg-[#14172b] min-w-[100vw] min-h-[100vh]">
      <h1 className="text-white text-lg flex items-center gap-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#c31ee4"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M7 14l3 -3l2 2l3 -3l2 2"></path>
        </svg>
        Trending Assets
      </h1>
      <div className="flex flex-wrap justify-evenly gap-10">
        {assets.map((asset) => (
          <AssetCard key={asset.name} {...asset} />
        ))}
      </div>
    </div>
  );
}

export default App;
