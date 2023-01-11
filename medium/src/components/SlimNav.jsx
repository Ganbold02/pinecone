import logoSmall from "./image/logoSmall.svg";

export default function SlimNav() {
  return (
    <>
      <div className="d-flex justify-content-between py-2 px-4">
        <div>
          <div className="d-flex">
            <img src={logoSmall} />
          </div>
        </div>
      </div>
    </>
  );
}
