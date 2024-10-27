import Link from "next/link";

export default function Finish() {
  return (
    <div className="container">
      <h1>Congratulations!</h1>
      <p>You have completed the quiz.</p>
      <Link href='/categories'>
        <button>Go back to Categories</button>
      </Link>
    </div>
  );
}
