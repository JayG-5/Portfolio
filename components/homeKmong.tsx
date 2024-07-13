import { htmlShell } from "./htmlShell";
import Link from "next/link";
import ReviewsPage from "./reviews";

class kmongShell extends htmlShell {
  constructor(themeCode:string, frameCode:string) {
    super(themeCode, frameCode);
  }

  

  getContent() {
    return (
      <div className={this.themeCode}>
        {this.content()}
      </div>
    );
  }
  content() {
    return (
      <div className={this.frameCode}>
        {this.title()}
        <ReviewsPage></ReviewsPage>
      </div>
    );
  }
  title () {
    return (
      <div className="hansans text-5xl my-20">
        Kmong
      </div>
    );
  }
}

export default function HomeKmong() {
  const ps = new kmongShell(
    "bg-gray-100 text-black py-10 snap-start",
    "max-w-[48rem] mx-auto h-auto grid justify-items-center"
  );
  return ps.getContent();
}