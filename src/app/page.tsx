import Link from 'next/link';


const categories = [
  "Food",
  "Toiletries",
  "HealthCare",
  "Household and Cleaning Supplies"
]

export default function Home() {
  return (
    <main className="flex text-base font-semibold min-h-screen flex-col items-center justify-between p-24 text-slate-700">
     <h1 className="text-3xl"> 
      Extremely Simple Grocery Shopping List
     </h1>
     <input placeholder="item to buy" className="text-base shadow-lg border p-4" />
     <select>
      <option>Food</option>
      <option>Toiletries</option>
      <option>Healthcare</option>
      <option>Household and Cleaning Supplies</option>
     </select>
     <button className="bg-amber-300 p-4 rounded-lg text-white font-bold uppercase hover:opacity-75">
      Save
     </button>

     <ul>
      <h1 className="text-xl">Search by Category:</h1>
      {categories.map((category, i) => 
      { return (<Link href="/categories/">
      <li key={category+i} className="text-xl text-sky-700">{category}</li>
      </Link>)}
      )}
     </ul>
     <div className="text-lg text-center pt-2 p-4">Because the groceries won't buy themselves</div>
    </main>
  );
}
