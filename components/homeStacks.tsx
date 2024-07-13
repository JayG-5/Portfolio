import { ReactElement, useState } from "react";
import { htmlShell } from "./htmlShell";


class stackScript extends htmlShell {


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
              <div className="grid grid-cols-3 grid-flow-row mb-10 items-start gap-y-4">
                
                
              {this.addBlock(
                  "Backend", 
                  ["django", "python", "firebase", "postgreSQL", "java"],
                  "row-span-2",  
                )}
                {this.addBlock(
                  "Frontend", 
                  ["html-css-js","react"], 
                )}
                {this.addBlock(
                  "Version Control", 
                  ["ggit","github"], 
                )}
                {this.addBlock(
                  "Deployment", 
                  ["docker","dockercompose", "gitaction"], 
                  "row-span-2", 
                )}
                {this.addBlock(
                  "etc", 
                  ["jira", "slack", "figma"], 
                  "row-span-2", 
                )}
                {this.addBlock(
                  "Mobile", 
                  ["flutter"], 
                  "row-span-2", 
                )}
              </div>
          </div>
      );
  }

  title() {
      return (
          <div className="hansans text-5xl mt-20 mb-20">
              Skills
          </div>
      );
  }

  addBlock(blockTitle:string, stackList:Array<string>, spanRow?:string):ReactElement {
    return (
      <div className={"rounded-xl bg-white p-4 w-50 mx-2 shadow-2xl hover:shadow-grantProject ".concat(spanRow? spanRow: "")}>
          <div className="grid grid-cols-1 divide-y-2 divide-grantProject">
              {this.setBlockTitle(blockTitle)}
              <div className="flex flex-col">
                {stackList.map((stack, index) => this.setBlockComponent(stack, index))}
              </div>
          </div>
      </div>
    );
  }
  setBlockTitle(titleName: string):ReactElement {
    return (
      <div className="text-2xl text-grantProject font-bold mb-2">
        {titleName}
      </div>
    );
  }
  setBlockComponent(iconFileName: string, index:number):ReactElement {
    return (
      <div className="mx-5 my-2" key={index}>
          <img src={"icons/".concat(iconFileName.concat(".png"))} alt="" />
      </div>
    );
  }
}

export default function HomeStacks() {
  const [imgDescription, setImgDescription] = useState("");
  const ss = new stackScript(
    "bg-grantStack snap-start",
    "max-w-[48rem] mx-auto h-auto grid justify-items-center",
  );
  
  return ss.getContent();
}