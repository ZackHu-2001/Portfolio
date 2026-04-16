
export default function Bitly() {
  return (
    <>
      <header>
        <div>Snip</div>
        <span>.</span>
        <nav></nav>
      </header>
      <main className=" flex flex-row justify-center">
        <div className="w-96">
          <input type="text" placeholder="Enter long URL" className="w-64" />
          <button>{"SHORTEN->"}</button>
        </div>
      </main>
    </>
  );
}
