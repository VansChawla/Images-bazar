import React from 'react'

const Card = (prop) => {
  return (
    <div>
        <a href={prop.elem.url} target="_blank">
              <div className="h-22 w-36 lg:h-45 lg:w-50 overflow-hidden rounded-xl">
                <img
                  className="h-full w-full object-cover"
                  src={prop.elem.download_url}
                  alt=""
                />
              </div>
              <h2 className="flex justify-center font-bold text-[12px] lg:text-lg">{prop.elem.author}</h2>
            </a>
    </div>
  )
}

export default Card