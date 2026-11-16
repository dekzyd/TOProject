import Input from "@/app/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col h-screen md:flex-row">
        <aside
          id="sidebar"
          className="p-4 bg-[url('/images/bg-main-mobile.png')] bg-cover text-white h-1/3 md:h-full md:w-1/3"
        >
          <div className="relative h-full w-full">
            <div
              id="card-back"
              className="bg-[url('/images/bg-card-back.png')] bg-contain border border-white bg-no-repeat h-3/4 w-3/4"
            >
              <p>000</p>
            </div>
            <div
              id="card-front"
              className="bg-[url('/images/bg-card-front.png')] bg-contain border border-red-500 bg-no-repeat h-3/4 w-4/5"
            >
              <p>card-number</p>
              <p>card-holder</p>
              <p>exp-date</p>
            </div>
          </div>
        </aside>
        <div id="main-container" className="p-4">
          <div className="card">
            <form action="">
              <Input type="text" label="Card Holder" />
              <Input type="number" label="Card Number" />
              <div className="">
                <Input type="number" label="Exp. Date" />
                <Input type="number" label="(MM/YY)" />
                <Input type="number" label="CVV" />
              </div>
              <button type="button">Confirm</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
