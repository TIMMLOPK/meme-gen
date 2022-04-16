import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { Button, Grid, Input, Loading, Text } from "@nextui-org/react";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setbottomText] = useState("");
  const [allMemeImgs, setallMemeImgs] = useState([]);
  const [randomImg, setRandomImg] = useState('https://i.imgflip.com/1bij.jpg');
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
      allowTaint: true,
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
    <div>
      <div className="meme">
        {loading ? (<Loading type="gradient">
          Loading...
        </Loading>) :
          (<img src={randomImg} width="100%" height="100%" id="meme" alt={description} />)
        }
        <h2 style={{ top: "0" }}>{topText}</h2>
        <h2 style={{ bottom: "0" }}>{bottomText}</h2>
        <Text blockquote margin='10px'>{description}</Text>
      </div>
      <Grid.Container gap={4} justify="center">
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
        <Grid>
          <Button id="capture" onClick={capture} >
            Download Meme
          </Button>
        </Grid>
        <Grid>
          <Button onClick={randomMeme}>Change Photo</Button>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default MemeGenerator;
