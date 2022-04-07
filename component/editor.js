import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";
import { isMobile } from "react-device-detect";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const theme = {
  'common.backgroundColor': '#fff'
};
const Editor = () => {
  if (isMobile) {
    return <div> This content is unavailable on mobile</div>
  }
  return (
    <>
      <Link href='/' passHref>
        <Button style={{margin:'5px'}}>Back</Button>
      </Link>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: "img/sampleImage.jpg",
            name: "SampleImage",
          },
          menu: ["text"],
          initMenu: "filter",
          theme,
          uiSize: {
            width: "1000px",
            height: "700px",
          },
          menuBarPosition: "left",
        }}
        cssMaxWidth={500}
        cssMaxHeight={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
    </>
  );

};

export default Editor;
