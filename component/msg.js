import Typewriter from "typewriter-effect";

export default function Msg() {
  return (
    <div style={{ padding: "5px" }}>
      <h3>
        {" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Come on create a unique meme !")
              .pauseFor(2500)
              .start();
          }}
        />
      </h3>
    </div>
  );
}
