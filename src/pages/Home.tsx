import { twMerge } from "tailwind-merge";

function Home() {
  return <div className={twMerge(["h-[200dvh]","bg-red-500"])}></div>
}

export default Home;