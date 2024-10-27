import Link from "next/link";

export default function Categories() {
  return (
    <div className="container">
      <h1>Choose a Category:</h1>
      <Link href='/quiz/geography'>
        <button>Geography</button>
      </Link>
      <Link href='/quiz/history'>
        <button>History</button>
      </Link>
      <Link href='/quiz/mathematics'>
        <button>Mathematics</button>
      </Link>
    </div>
  );
}
