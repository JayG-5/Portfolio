import { htmlShell } from "./htmlShell";

class titleShell extends htmlShell {
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
                {this.title2()}
                {this.comment()}
            </div>
        );
    }
    title() {
        return (
            <div className="hansans text-5xl">
                김준균
            </div>
        );
    }
    title2() {
        return (
            <div className="hansans text-5xl mb-10">
                포트폴리오
            </div>
        );
    }
    comment() {
        return (
            <div className="kargugsu text-2xl text-center">
                Dart/Flutter 앱개발을 하고 있습니다.<br/>
                현재 크몽에서 외주 개발 프리랜서(김첨지네)로 활동하며 경험을 쌓고 있습니다.<br/>
                스스로 부족한 점이 많다고 생각합니다. <br/>
                좋은 팀원분들과 함께 일하면서 배우고 성장하고 싶습니다.
            </div>
        );
    }
}

export default function HomeTitle() {
    const ts = new titleShell(
        "bg-slate-600 text-white py-20 snap-start",
        "max-w-[48rem] mx-auto h-auto grid justify-items-center"
    );
    return ts.getContent();
}