// import React from 'react';

// function CardProyect({ img, title, information }) {
//   return (
//     <>
//       <div className="block w-128 rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center mx-auto mt-24">
//         <a href="#!">
//           <img className="rounded-t-2xl w-full" src={img} alt={title} />
//         </a>
//         <div className="p-4">
//           <h5 className="mb-2 text-lg font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
//           {title}
//           </h5>
//           <p className="mb-2 text-base font-normal tracking-wide text-neutral-800 dark:text-neutral-50">
//           {information}
//           </p>
//           <a href="#"
//             className="mt-2 inline-block rounded bg-blue-500 px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none active:bg-blue-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg">
//             Explore it
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CardProyect;

import React from 'react';
import Atropos from 'atropos/react';
import 'atropos/css';

function CardProyect({ img, title, information }) {
  return (
    <>
      <Atropos className="w-128 mx-auto mt-24 rounded-2xl bg-white shadow-2xl dark:bg-neutral-700 text-center"
        activeOffset={40}
        shadow={false}
    >
        <a href="#!">
          <img className="rounded-t-2xl w-full" src={img} alt={title} />
        </a>
        <div className="p-4">
          <h5 className="mb-2 text-lg font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-2 text-base font-normal tracking-wide text-neutral-800 dark:text-neutral-50">
            {information}
          </p>
          <a href="#"
            className="mt-2 inline-block rounded bg-blue-500 px-4 pb-1.5 pt-1.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none active:bg-blue-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg">
            Explore it
          </a>
        </div>
      </Atropos>
    </>
  );
}

export default CardProyect;
