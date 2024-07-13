import Link from "next/link";
import { ReactElement, useState } from "react";
import { htmlShell } from "./htmlShell";

class projectShell extends htmlShell {
    private portfolio : essayfitScript;
    private ruftkeks : peacheeseScript;
    private noticelog : noticelogScript;
    
    constructor(themeCode:string, frameCode:string, portfolio:essayfitScript, ruftkeks:peacheeseScript, noticelog:noticelogScript) {
        super(themeCode, frameCode);
        this.noticelog = noticelog;
        this.portfolio = portfolio;
        this.ruftkeks = ruftkeks;
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
                <div className="flex flex-col mb-20 gap-y-10">
                    {this.portfolio.getScript()}
                    {this.ruftkeks.getScript()}
                    {this.noticelog.getScript()}
                </div>
            </div>
        );
    }
    title() {
        return (
            <div className="hansans text-5xl my-20">
                Projects
            </div>
        );
    }
}

abstract class projectScript {
    private titleName:string;
    private subTitleName:string;
    private imageList: Array<string>;
    private imageIndex : number;
    private setImageIndex : Function;

    constructor(titleName:string, subTitleName:string, imageList: Array<string>, imageIndex : number, setImageIndex : Function) {
        this.titleName = titleName;
        this.subTitleName = subTitleName;
        this.imageList = imageList;
        this.imageIndex = imageIndex;
        this.setImageIndex = setImageIndex;
    }

    abstract setProjectDescription():ReactElement;

    public getScript() {
        return (
            <div className="rounded-xl bg-white w-[42rem] p-7 mx-5 shadow-2xl text-black text-center">
                {this.setProjectTitle()}
                {this.setProjectSubTitle()}
                {this.setProjectImgUrl()}
                {this.setProjectDescription()}
            </div>
        );
    }
    private setProjectTitle() {
        return (
            <div className="hansans text-3xl mb-1">
                { this.titleName }
            </div>
        );
    }

    protected setProjectSubTitle() {
        return (
            <div className="kargugsu text-lg mb-5">
                { this.subTitleName }
            </div>
        );
    }

    protected setProjectImgUrl () {
        return (
            <div className="rounded-xl shadow-xl p-2 mb-10 flex flex-col justify-center items-center">
                <img className="" src={this.imageList[this.imageIndex]} alt="" style={{maxHeight: "630px"}}/>
                <div className="flex flex-row justify-center items-center scale-75">
                    <button onClick={() => this.handleArrowClick("left", this.imageList, this.imageIndex, this.setImageIndex)}>
                        <img src="icons/leftArrow.png" alt="" />
                    </button>
                    <div className="rounded-lg border-black border-2 p-2">
                        {this.imageIndex+1}/{this.imageList.length}
                    </div>
                    <button onClick={() => this.handleArrowClick("right", this.imageList, this.imageIndex, this.setImageIndex)}>
                        <img src="icons/rightArrow.png" alt="" />
                    </button>
                </div>
            </div>
        );
    }

    protected handleArrowClick(direction : string, imageList: Array<string>, imageIndex : number, setImageIndex : Function) {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageIndex(imageList.length -1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else if (direction === "right") {
            if (imageIndex === imageList.length -1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        } else {
            console.log("Unexpected Input");
        }
    };
}

class noticelogScript extends projectScript {
    constructor(titleName:string, subTitleName:string, imageList: Array<string>, imageIndex : number, setImageIndex : Function) {
        super(titleName, subTitleName, imageList, imageIndex, setImageIndex);
    }

    setProjectDescription() {
        return (
            <>
                <div className="text-sm mb-5">
                    현재는 서비스를 종료했지만, 백엔드 개발자인 친형과 함께 만든 서비스입니다.<br/>
                    외주를 위탁한 디자인을 제외하고 기획부터 앱 배포까지 온전히 수행한데서 의미가 있습니다.<br/>
                </div>
                <ul className="grid grid-cols-5 nanum-square">
                    <li className="col-span-2 mb-5">
                    팀 구성 및 <a className="underline decoration-2 decoration-grantCareer">역할</a>
                    </li>
                    <li className="col-span-3">
                    <a className="underline decoration-2 decoration-grantCareer">앱 개발 1</a>, 디자인 1, 백엔드 개발 1
                    </li>
                    <li className="col-span-2 row-span-1 mb-5">
                        내용
                    </li>
                    <li className="col-span-3">
                        Flutter를 이용한 크로스플랫폼 앱 개발
                    </li>
                    <li className="col-span-2 row-span-1">
                        기술스택
                    </li>
                    <li className="col-span-3">
                        Flutter, Firebase, Git, Jira, Slack, Adobe XD, GetX, Freezed
                    </li>
                </ul>
            </>
        );
    }
}
class peacheeseScript extends projectScript {
    constructor(titleName:string, subTitleName:string, imageList: Array<string>, imageIndex : number, setImageIndex : Function) {
        super(titleName, subTitleName, imageList, imageIndex, setImageIndex);
    }

    setProjectDescription() {
        return (
            <>
                <div className="text-sm mb-5">
                복숭아의 매력을 한 눈에 알아볼 수 있게 다양한 복숭아 관련 상품을 제공하고자 합니다.<br/>
                특히, 농부 및 제작자들과 소비자들 사이의 다리 역할을 하며,<br/>
                이를 통해 지역적으로 생산된 농산물 소비를 장려하고 소비자들에게 더욱 신선하고, 풍성하고 다양한 옵션을 제공합니다.
                </div>
                <ul className="grid grid-cols-5 nanum-square">
                    <li className="col-span-2 mb-5">
                        팀 구성
                    </li>
                    <li className="col-span-3">
                        부트캠프 교육생 5
                    </li>
                    <li className="col-span-2 row-span-1 mb-5">
                        내용
                    </li>
                    <li className="col-span-3">
                        Infra Architecture, App, Backend, Deployment
                    </li>
                    <li className="col-span-2 row-span-1 mb-5">
                        기술스택
                    </li>
                    <li className="col-span-3">
                        Python, django, Docker, WebSocket, Firebase, Git, Notion, Figma, Flutter, RiverPod
                    </li>
                    <li className="col-span-2 mt-5">
                        성과
                    </li>
                    <li className="col-span-3 flex flex-row justify-around mt-1">
                        <figure>
                            <Link href="https://github.com/Pe-chesse/Pe-chesse" className="text-xs">
                                <img src="icons/git.png" alt="" style={{display:"block", margin:"0 auto"}}/>
                            </Link>
                            <figcaption>
                                README.md
                            </figcaption>
                        </figure>
                        <figure>
                            <Link href="https://github.com/Pe-chesse/Peach-Market" className="text-xs">
                                <img src="icons/git.png" alt="" style={{display:"block", margin:"0 auto"}}/>
                            </Link>
                            <figcaption>
                                backend(django)
                            </figcaption>
                        </figure>
                        <figure>
                            <Link href="https://github.com/Pe-chesse/Peacheese-Flutter" className="text-xs">
                                <img src="icons/git.png" alt="" style={{display:"block", margin:"0 auto"}}/>
                            </Link>
                            <figcaption>
                                app(Flutter)
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </>
        );
    }
}

class essayfitScript extends projectScript {
    constructor(titleName:string, subTitleName:string, imageList: Array<string>, imageIndex : number, setImageIndex : Function) {
        super(titleName, subTitleName, imageList, imageIndex, setImageIndex);
    }

    setProjectDescription() {
        return (
            <>
                <ul className="grid grid-cols-5 nanum-square">
                    <li className="col-span-2 mb-5">
                        팀 구성 및 <a className="underline decoration-2 decoration-grantCareer">역할</a>
                    </li>
                    <li className="col-span-3">
                    PO 1, PM 및 백엔드 1, 인프라 및 백엔드 1, 디자이너 1, 프론트엔드 1, QA 1, 
                        <a className="underline decoration-2 decoration-grantCareer">앱 1(외주)</a>
                    </li>
                    <li className="col-span-2 row-span-1 mb-5">
                        내용
                    </li>
                    <li className="col-span-3">
                        Flutter를 이용한 크로스플랫폼 앱 개발
                    </li>
                    <li className="col-span-2 row-span-1">
                        기술스택
                    </li>
                    <li className="col-span-3">
                        Flutter, Firebase, Git, Jira, Slack, Adobe XD, RiverPod, Freezed
                    </li>
                </ul>
            </>
        );
    }
}

export default function HomeProjects () {
    const portfolioImageList = Array.from({ length: 6 }, (_, i) => `img/essayfit/${i}.png`);;
    const peacheeseImageList = ["0.png","39.gif","41.gif","42.gif","45.gif","47.gif","49.gif","50.gif","55.gif"].map((e)=>`img/peacheese/${e}`);
    const noticelogImageList = ["img/noticelog/released.png", "img/noticelog/intro.png", "img/noticelog/today.png", "img/noticelog/wishList.png", "img/noticelog/calendar.png"];

    const [portfolioImageIndex, setPortfolioImageIndex] = useState(0);
    const [peacheeseImageIndex, setPeacheeseImageIndex] = useState(0);
    const [noticelogImageIndex, setNoticelogImageIndex] = useState(0);

    const ps = new projectShell(
        "bg-grantProject text-white snap-start",
        "max-w-[48rem] mx-auto h-auto grid justify-items-center",
        new essayfitScript(
            "Essayfit AI <2022.05~2023.12>",
            "자연어처리를 이용한 미국대학 지원 에세이 첨삭 플랫폼(서비스 종료)",
            portfolioImageList,
            portfolioImageIndex,
            setPortfolioImageIndex,
        ),
        new noticelogScript(
            "공시록 <2023.01~2023.04>",
            "실시간 공시 알림 서비스(서비스 종료)",
            noticelogImageList,
            noticelogImageIndex,
            setNoticelogImageIndex
        ),
        new peacheeseScript(
            "복숭아마켓 <2023.08~2023.09>",
            "Estsoft 부트캠프 최종 팀프로젝트",
            peacheeseImageList,
            peacheeseImageIndex,
            setPeacheeseImageIndex
        )
    );

    return ps.getContent();
}