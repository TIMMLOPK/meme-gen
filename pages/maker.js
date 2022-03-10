import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../component/editor"), { ssr: false });

const Maker = () => {
  return (
    <>
      <Editor />
    </>
  );
};
export default Maker;
