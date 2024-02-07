import React from 'react';
import Link from 'next/link';

const Categories = () => {
  return (
    <>
      <section className='container mx-auto flex flex-col items-center justify-center'>
        <div>
          <Link href='/'>
            <span className='text-purple-700'>Actually, I wanna go back</span>
          </Link>
        </div>
        <div>Categories saba ra boooo</div>
      </section>
    </>
  );
};

export default Categories;
