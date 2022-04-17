import Typewriter from "typewriter-effect";

export default function Msg() {
  return (
    <div style={{ padding: "5px" }}>
      <h3>
        {" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Come on !")
              .pauseFor(200)
              .typeString("Create a unique meme !")
              .start();
          }}
        />
      </h3>
    </div>
  );
}
