import React, { useContext, useState, useEffect, useCallback } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UserContext from "../context/UserContext";
import useGithubInfo from "../hooks/useGithubInfo";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user || user.username === "") return <h2>Please Login</h2>;

  const data = useGithubInfo(user.username);

  console.log(data);
  console.log(data.name);

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div
        class="relative h-[400px] w-[300px] m-auto my-6 shadow-gray-900 shadow-lg rounded-md overflow-hidden"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          src={data.avatar_url}
          alt="AirMax Pro"
          class="z-0 h-full w-full object-cover "
        />
        <div
          class={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent duration-500 ${
            isShown ? "translate-y-1" : "translate-y-96"
          } `}
        ></div>
        <div
          class={`absolute bottom-4 left-4 text-left  duration-700  ${
            isShown ? "translate-y-0" : "translate-y-[118px]"
          }`}
        >
          <h1 class="text-lg font-semibold text-white">{data.name}</h1>
          <p class={`mt-2 text-sm text-gray-300 duration-300`}>{data.bio}</p>

          <Link
            to={`https://github.com/${user.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              class={`underline mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white  hover:bg-orange-600 py-1 px-2 rounded hover:bg-opacity-15 duration-700 ${
                isShown ? "translate-x-0" : "-translate-x-24"
              } `}
            >
              View Profile →
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
