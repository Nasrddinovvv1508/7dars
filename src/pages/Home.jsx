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
              <p>You really want to know <span className='text-[#2b3440]'>about us</span></p>
              <div className='mt-5'>
                <Link to={`/about`} className='bg-red-600 hover:bg-red-800 py-2 px-4 rounded-lg text-white font-bold text-xl'>About</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home