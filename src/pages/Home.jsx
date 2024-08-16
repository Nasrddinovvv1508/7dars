import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className='pt-[50px] bg-[#11a3d5]'>
        <div className='speacial-container grid grid-cols-2 items-center'>
          <div>
            <img src="../assets/gif/products-shelf.gif" alt="products shelf" />
          </div>

          <div>
            <h1 className='text-5xl font-bold text-white'>Welcome to Store</h1>
            <p className='text-lg mt-6 font-medium text-base-300 opacity-55'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsum repellat. Suscipit rerum error debitis accusantium eveniet, ab ullam molestiae est delectus odio ducimus repellendus fugiat natus dolor voluptas illum?
            </p>

            <div className='mt-6 text-lg text-white'>
              <p>You really want to know <span className='text-[#2b3440] font-medium capitalize'>about us</span> ??</p>
              <div className='mt-5 pl-2'>
                <Link to={`/about`} className='btn btn-error py-2 px-4 rounded-lg text-white font-bold text-xl'>About</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[70px] bg-[#0977d6]'>
        <div className='speacial-container grid grid-cols-2 items-center gap-[140px]'>
          <div>
            <h1 className='text-5xl font-bold text-white'>OR you trying to buy our <span className='text-gradient'>speacial products</span></h1>

            <div className='mt-7'>
              <button>
                <Link to={`/products`} className='btn btn-secondary py-2 px-4 rounded-lg text-white font-bold text-xl'>Products</Link>
              </button>
            </div>
          </div>

          <div>
            <img src="../assets/gif/shelves.gif" alt="shelves" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home