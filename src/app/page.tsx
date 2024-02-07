import Link from 'next/link';

const categories = [
  'Food',
  'Toiletries',
  'HealthCare',
  'Household and Cleaning Supplies',
];

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 text-base font-semibold text-slate-700'>
      <h1 className='text-3xl'>Extremely Simple Grocery Shopping List</h1>
      <input
        placeholder='item to buy'
        className='border p-4 text-base shadow-lg'
      />
      <select>
        <option>Food</option>
        <option>Toiletries</option>
        <option>Healthcare</option>
        <option>Household and Cleaning Supplies</option>
      </select>
      <button className='rounded-lg bg-amber-300 p-4 font-bold uppercase text-white hover:opacity-75'>
        Save
      </button>

      <ul>
        <h1 className='text-xl'>Search by Category:</h1>
        {categories.map((category, i) => {
          return (
            <Link href='/categories/'>
              <li key={category + i} className='text-xl text-sky-700'>
                {category}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className='p-4 pt-2 text-center text-lg'>
        Because the groceries won't buy themselves
      </div>
    </main>
  );
}
