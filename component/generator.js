import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import {
  Button,
  Grid,
  Input,
  Loading,
  Card,
  Text,
  Row,
} from "@nextui-org/react";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setbottomText] = useState("");
  const [allMemeImgs, setallMemeImgs] = useState([]);
  const [randomImg, setRandomImg] = useState("https://i.imgflip.com/1bij.jpg");
  const [loading, setloading] = useState(true);
  const [description, setdescription] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        setallMemeImgs(memes);
        setdescription(memes[0].name);
      })
      .then(() => setloading(false));
  }, []);

  const handleChange1 = (event) => {
    const v = event.target.value;
    setTopText(v);
  };
  const handleChange2 = (event) => {
    const v = event.target.value;
    setbottomText(v);
  };

  const randomMeme = (event) => {
    event.preventDefault();
    let items = allMemeImgs;
    let item = items[Math.floor(Math.random() * items.length)];
    setRandomImg(item.url);
    setdescription(item.name);
    setTopText("");
    setbottomText("");
  };

  const capture = () => {
    const divToDisplay = document.getElementById("meme");
    html2canvas(divToDisplay, {
      height: divToDisplay.clientHeight,
      allowTaint: false,
      useCORS: true,
      scrollY: -window.scrollY,
      scrollX: -window.scrollX,
    }).then(function (canvas) {
      var url = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = url;
      link.click();
    });
  };

  return (
    <div className="container">
      <div className="meme">
        {loading ? (
          <Loading type="gradient">Loading...</Loading>
        ) : (
          <div className="meme" id="meme">
            <img src={randomImg} width="100%" height="100%" alt={description} />
            <h2 style={{ top: "0" }}>{topText}</h2>
            <h2 style={{ bottom: "0" }}>{bottomText}</h2>
          </div>
        )}
      </div>
      <Grid.Container gap={4} justify="center" css={{ marginTop: "20px" }}>
        <Grid>
          <Input
            type="text"
            name="topText"
            labelPlaceholder="Top Text"
            value={topText}
            onChange={handleChange1}
            clearable
            underlined
            maxLength="15"
          />
        </Grid>
        <Grid>
          <Input
            clearable
            type="text"
            name="bottomText"
            labelPlaceholder="Bottom Text"
            value={bottomText}
            onChange={handleChange2}
            underlined
            maxLength="15"
          />
        </Grid>
        <Card css={{ mw: "300px" }}>
          <Card.Body>
            <Text>{description}</Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light onClick={randomMeme}>
                Random
              </Button>
              <Button size="sm" light onClick={capture}>
                Download
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid.Container>
    </div>
  );
};

export default MemeGenerator;
