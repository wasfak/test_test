export default function DisplayCode({ items }) {
  console.log(items);
  return (
    <div>
      {items && items.length > 0 && (
        <div className="grid grid-cols-2 gap-4 w-[800px] border-2 border-gray-600 p-4 shadow-2xl rounded-2xl">
          {Object.entries(items[0])
            .filter(
              ([key]) =>
                key !== "_id" &&
                key !== "__v" &&
                key !== "ItemName" &&
                key !== "Code"
            )
            .map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-start w-full gap-x-8"
              >
                <p className="font-extrabold border-b-2 w-full">{key} :</p>

                <p
                  className={
                    value === 0
                      ? "text-red-900 font-extrabold border-b-2 w-full"
                      : "font-extrabold border-b-2 w-full"
                  }
                >
                  {value}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
