"use client";
import React, { useState, useEffect } from "react";
import Countryy from "../_components/Country";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();
  const FetchData = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/independent?status=true"
    );
    const data = await res.json();
    setCountries(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  const Country1 = countries.filter((country) => {
    return country.name.official
      .toLowerCase()
      .includes(inputValue.toLowerCase());
  });

  return (
    <div>
      <div className="text-[35px] font-medium ml-5">Flags of the World</div>
      <hr className="border-t-2 border-gray-300 w-full my-4"></hr>
      <div className="flex justify-between mr-20 items-center">
        <div className="font-bold text-[25px] ml-20">
          {Country1.length} Countries right now
        </div>
        <input
          placeholder="Country Name..."
          className="w-70 px-3 py-2 border border-gray-300 rounded-3xl text-gray-700 placeholder-gray-400
         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
         hover:border-blue-400"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <div className="flex justify-center mt-25 w-full h-full">
        <div className="flex w-449 h-fit flex-wrap text-[80px] font-semibold text-gray-900 italic leading-relaxed">
          {Country1.length > 0
            ? Country1.map((country, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(`${country.name.official}`);
                    }}
                  >
                    <Countryy
                      Name={country.name.official}
                      FlagUrl={country.flags.png}
                    />
                  </div>
                );
              })
            : "Country not found..."}
        </div>
      </div>
    </div>
  );
}
