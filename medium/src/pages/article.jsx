import { SlimNav } from "../components/SlimNav";
import webImage from "../image/webImage.png";
import Hand from "../image/Hand.svg";
import Comment from "../image/Comment.svg";
import Share from "../image/Share.svg";
import Save from "../image/Save.svg";
import ArticleButton from "../components/ArticleButton";

export const Article = () => {
  const btnText = [
    "dwadawd",
    "dawdawdawd",
    "dwadawdawd",
    "dawdawdaw",
    "Resolutions",
  ];
  return (
    <>
      <SlimNav />
      <div className="container">
        <div className="row">
          <div className="col-8 justify-align-center py-10 px-8">
            {/* <img src="../image/pic1.svg" /> */}
            <p className="MainTitle">
              The best New Year’s resolutions you can make
            </p>
            <p className="dTitle">
              Resolutions that actually work, according to a decision scientist
            </p>
            <p className="pTitle">
              Happy almost-2023! Chances are that you’re contemplating making
              some New Year’s resolutions, so let’s get you set up for success
              with a few resolutions that will unlock the best version of you.
            </p>
            <img src={webImage} alt="" className="ImageW" />
            <p className="copyRight">All copyright belongs to the author.</p>
            <p className="subTitle">
              #1 — Resolve to stop borrowing resolutions
            </p>
            <p className="pTitle">
              Different people are different, so what works for you might not be
              what works for anyone else. Understanding this is the single
              biggest step you can take in the direction of success. That’s
              precisely why I’m not going to do the standard guru thing of
              suggesting you copy my exact wellness plan after proving to you
              that I have a stack of credentials (I do) and I’m in shape (I am).
              My plan fits me, but you need a plan that fits you.
            </p>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="d-flex">
                  <img src={Hand} className="IconImage" />
                  <p className="iconText">1.5k</p>
                </div>
                <div className="d-flex">
                  <img src={Comment} className="IconImage" />
                  <p className="iconText">1.5k</p>
                </div>
              </div>

              <div className="d-flex">
                <img src={Share} className="IconImage" />
                <img src={Save} className="IconImage" />
              </div>
            </div>

            {btnText.map((item, index) => (
              <ArticleButton>{item}</ArticleButton>
            ))}
          </div>

          <div className="col-1">a2</div>
          <div className="col-3 backName">a2</div>
        </div>
      </div>
    </>
  );
};
