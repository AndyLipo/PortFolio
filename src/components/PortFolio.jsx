import React, { useEffect, useState }  from 'react';
import './slide.css';
import CardProyect from './CardProyect';
import data from './data.json';

function PortFolio() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Aquí puedes cargar los datos desde el archivo JSON
    setCards(data);
  }, []);
  return (
    <>
    <div className="mt-72 w-full overflow-hidden">
      <div className="animate-slide flex whitespace-wrap">
        <h1 className="text-9xl font-light">PortFolio   </h1>
        <h1 className="text-9xl font-light">PortFolio   </h1>
        <h1 className="text-9xl font-light">PortFolio   </h1>
        <h1 className="text-9xl font-light">PortFolio   </h1>
        <h1 className="text-9xl font-light">PortFolio   </h1>
        <h1 className="text-9xl font-light">PortFolio   </h1>
      </div>
    </div>
    <a className='grid gap-y-52 gap-x-72 grid-cols-2 grid-rows-2'>
      {cards.map((card, index) => (
          <CardProyect 
            key={card.id}
            img={card.img}
            title={card.title}
            information={card.information}
            className={`col-start-${(index % 2) + 1} col-end-${(index % 2) + 2} row-start-${Math.floor(index / 2) + 1} row-end-${Math.floor(index / 2) + 2}`}
          />
        ))}
    </a>
    </>
  );
}

export default PortFolio;
