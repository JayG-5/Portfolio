import { htmlShell } from "./htmlShell";
import Link from "next/link";

class profileShell extends htmlShell {
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
        <div className="grid grid-cols-3 gap-x-10 gap-y-10 mb-20">
          {this.addInfo("school", "학력", ["한국폴리텍대학", "IT융합제어과"])}
          {this.addInfo("birthday", "생년월일", ["1994.08.03"])}
          {this.addInfo("address", "주소", ["경기도 성남시"])}
          {this.addInfo("phone", "연락처", ["010-5555-2758"])}
          {this.addInfo("email", "이메일", ["jg55552758@gmail.com"], "text-sm")}
          {this.addInfo("git", "GitHub", [], "text-xs","github.com/jayg-5")}
        </div>
      </div>
    );
  }
  title () {
    return (
      <div className="hansans text-5xl my-20">
        Profile
      </div>
    );
  }

  addInfo(iconName:string, topic:string, detail:Array<string>, textSize?:string, linkedText?:string)  {
    return (
      <div className="flex flex-row">
        <div className="basis-1/3 mr-2">
          <img src={"icons/".concat(iconName.concat(".png"))} alt="" />
        </div>
        <div className="basis-full flex flex-col">
          <div className="text-slate-600 font-bold">
            {topic}
          </div>
          <div className={textSize}>
            {detail.map((char, index) => this.divChar(char, index))}
            {linkedText && (
                <Link href={`https://${linkedText}`} className="text-blue-500">
                {linkedText}
                </Link>
              )}
          </div>  
        </div>
      </div>
    );
  }
  divChar(char:string, index:number) {
    return (
      <div key={index}>
        {char}<br/>
      </div>
    );
  }
}

export default function HomeProfile() {
  const ps = new profileShell(
    "bg-white text-black py-10 snap-start",
    "max-w-[48rem] mx-auto h-auto grid justify-items-center"
  );
  return ps.getContent();
}