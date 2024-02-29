import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, passwordGenerator, charAllowed, numAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-800">
        <h1 className="text-4xl text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black duration"
            placeholder="password"
            readOnly
          ></input>
          <button
            onClick={copyPassword}
            type="button"
            className="inline-flex items-center rounded-md -translate-x-2 bg-black px-3 py-2 text-sm font-semibold text-white duration-100 hover:bg-slate-900  active:p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-2 h-4 w-4 hover:text-red-600 duration-150"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length - {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              className="cursor-pointer "
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              className="cursor-pointer"
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
      </div>
    </>
  );
}

export default App;
