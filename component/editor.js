import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";

const theme = {
  'common.backgroundColor': '#fff'
};
const Editor = () => {
  return (
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
  );
};

export default Editor;