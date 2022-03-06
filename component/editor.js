import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";

const Editor = () => {
    return (
        <ImageEditor
            includeUI={{
                loadImage: {
                    path: 'img/sampleImage.jpg',
                    name: 'SampleImage',
                },
                menu: ['shape', 'filter'],
                initMenu: 'filter',
                uiSize: {
                    width: '1000px',
                    height: '700px',
                },
                menuBarPosition: 'bottom',
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
                cornerSize: 20,
                rotatingPointOffset: 70,
            }}
            usageStatistics={true}
        />
    )
}

export default Editor;