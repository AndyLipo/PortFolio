
import React, { useEffect, useState } from 'react';

function TypeEffect({ text }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (currentIndex >= text.length) {
          clearInterval(interval);
          return text;
        }
        return prevText + text[currentIndex++];
      });
    }, 100); // Ajusta la velocidad de escritura aquí (en milisegundos)

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
}

function MainAbout() {
  const [showTypeEffect, setShowTypeEffect] = useState(false);

  useEffect(() => {
    // Retrasar el inicio del efecto de escritura por 300 milisegundos
    const timeout = setTimeout(() => {
      setShowTypeEffect(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='grid grid-cols-2 grid-rows-1 gap-0 mt-72'>
      <article className="max-w-2xl p-8 col-start-1 col-end-2 row-start-1 row-end-2 mr-20">
        <p className="text-xl font-light">
          I'm {showTypeEffect && <TypeEffect text="Andres" />}, I'm Argentinian.
        </p>
        <p className="text-xl font-light">Currently, I'm in search of job opportunities.</p>
        <p className="text-xl font-light">
          I am a very motivated person, an eternal optimist <br /> committed to writing clear,
          concise,
        </p>
        <p className="text-xl font-light">
          and robust code that works. I work hard not to stop learning <br /> and improving every
          day.
        </p>
      </article>
      <aside className='col-start-2 col-end-3 row-start-1 row-end-2 ml-40 mt-10'>
        <button
          type="button"
          className=" relative inline-block px-10 py-8 text-black rounded-full border-2 backdrop-blur hover:bg-tiffany_blue-300 hover:text-white focus:outline-none focus:ring focus:ring-blue-300  "
        >
          Know Me
        </button>
      </aside>
    </div>
  );
}

export default MainAbout;
