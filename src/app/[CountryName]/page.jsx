"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [bigData, SetBigData] = useState([]);

  const params = useParams();
  const CountryName = params.CountryName;
  const FetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${CountryName}`
    );
    const data = await response.json();

    SetBigData(data);
  };

  useEffect(() => {
    FetchData();
  }, []);
  console.log(bigData);
  const symbol = bigData[0]?.currencies ?? {};
  const a = Object.values(symbol)[0]?.symbol;
  const b = Object.values(symbol)[0]?.name;

  const router = useRouter();
  return (
    <div>
      <div className="text-[35px] font-medium ml-5">Flags of the World</div>
      <hr className="border-t-2 border-gray-300 w-full my-4"></hr>
      <div className="flex flex-col w-400 mt-15 ml-30">
        <div className="flex gap-1 items-center">
          <div
            className=" w-[45px] h-[45px] bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('arrow.svg')`,
            }}
            onClick={() => {
              router.back();
            }}
          ></div>
          <div className="text-[50px] font-bold">
            {bigData[0]?.name.official}
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 w-full my-4"></hr>
      </div>
      <div className="flex ml-30 gap-20">
        <img src={bigData[0]?.flags.png} className="w-200 h-100" />
        <div className="flex flex-col gap-4 w-200 flex-wrap h-100">
          <div className="flex flex-col gap-1">
            <div className="text-[18px] font-bold text-gray-500">Capital</div>
            <div className="text-[32px]">{bigData[0]?.capital}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[18px] font-bold text-gray-500">Currency</div>
            <div className="text-[32px] flex gap-1">
              <p>{b}</p>
              <p>{a}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[18px] font-bold text-gray-500">Area</div>
            <div className="text-[32px]">{bigData[0]?.area} sq km</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[18px] font-bold text-gray-500">
              Population
            </div>
            <div className="text-[32px]">{bigData[0]?.population}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[18px] font-bold text-gray-500">Location</div>
            <div className="text-[32px]">{bigData[0]?.continents}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[18px] font-bold text-gray-500">
              Continents
            </div>
            <div className="text-[32px]">{bigData[0]?.continents}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[18px] font-bold text-gray-500">Map</div>
            <a
              className="text-[32px] underline  hover:text-blue-700"
              href={bigData[0]?.maps?.googleMaps}
            >
              See Map Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
