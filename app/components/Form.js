"use server";

export default function Form() {
  return (
    <div>
      <form action={getCode}>
        <input
          type="text"
          name="code"
          placeholder="search"
          className="px-4 py-2 w-1/2 mx-auto"
        />
        <button>click</button>
      </form>
    </div>
  );
}
