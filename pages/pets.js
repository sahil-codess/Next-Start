import Image from "next/image"
const Pets = () => {
    return (
      <div>
          {
              [1, 2, 3, 4, 5].map((path) => {
                  return (
                      <div key={path}>
                          <Image src={`/${path}.jpg`} alt='pets' width='280' height='420' />
                      </div>
                  )
              })
          }
      </div>
    )
  }
  
  export default Pets