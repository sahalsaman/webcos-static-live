
import { DotIcon } from 'lucide-react';
import React from 'react';
import '../App.css';



const MarqueeRight = ({ words }) => {
  return (
    <div className="overflow-x-clip pb-32 pt-16 lg:py-24 " style={{maxWidth: '100vw'}}>
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-purple-500 to-pink-400">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none animate-move-right gap-4 py-3 pr-4 [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <div key={wordIndex} className="inline-flex items-center gap-2">
                    <span className="text-md font-extrabold uppercase text-gray-900">
                      {word}
                    </span>
                    <DotIcon className="size-10 -m-4 sm:m-0 -rotate-12 text-gray-900" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeRight;
