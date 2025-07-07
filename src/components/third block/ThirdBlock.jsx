import "./thirdBlock.css";

export default function ThirdBlock() {
  return (
    <>
      <section className="body">
        <div className="main">
          <div>
            <span className="instText">Установите приложение.</span>
          </div>
          <div className="imgs d-flex gap-2">
            <div className="">
              <img
                width={"140px"}
                alt="Скачать из Google Play"
                className="x1vqgdyp"
                src="https://static.cdninstagram.com/rsrc.php/v4/yr/r/fDjwyLC88oO.png"
              ></img>
            </div>
            <div className="">
              <img
                width={"120px"}
                alt="Скачать с сайта Microsoft"
                className="x1vqgdyp"
                src="https://static.cdninstagram.com/rsrc.php/v4/yv/r/_UbeIRgTpG-.png"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
