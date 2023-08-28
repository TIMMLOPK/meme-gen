import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Spinner, Input } from "@nextui-org/react";
import useSWR from "swr";
import { BiDownload, BiRefresh } from "react-icons/bi";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setbottomText] = useState("");
  const [allMemeImgs, setallMemeImgs] = useState([]);
  const [randomImg, setRandomImg] = useState("https://i.imgflip.com/1bij.jpg");
  const [loading, setloading] = useState(true);
  const [description, setdescription] = useState("");
  const { data } = useSWR("https://api.imgflip.com/get_memes", (url) => {
    return fetch(url).then((res) => res.json());
  });

  useEffect(() => {
    if (data) {
      const { memes } = data.data;
      setallMemeImgs(memes);
      setdescription(memes[0].name);
      setloading(false);
    }
  }, [data]);

  const handleTopChange = (event) => {
    const v = event.target.value;
    setTopText(v);
  };
  const handleBottomChange = (event) => {
    const v = event.target.value;
    setbottomText(v);
  };

  const randomMeme = () => {
    if (allMemeImgs.length === 0) {
      return;
    }
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
    <div className="container grid grid-cols-1 gap-20 my-8 lg:grid-cols-2 lg:space-x-16">
      <div className="px-8">
        {loading ? (
          <Spinner type="gradient">Loading...</Spinner>
        ) : (
          <div id="meme" className="relative">
            <img src={randomImg} width="100%" height="100%" alt={description} className="rounded-lg lg:max-w-5xl" />
            <h2 style={{ top: "0" }} className="memeText">{topText}</h2>
            <h2 style={{ bottom: "0" }} className="memeText">{bottomText}</h2>
          </div>
        )}
      </div>
      <div className="px-2 lg:px-6 lg:max-w-md flex flex-col space-y-4">
        <Card>
          <CardHeader className="m-2">
            <div className="flex flex-col space-y-4">
              <p className="text-xl font-bold">Customize your meme</p>
              <p className="text-small text-default-500">{description}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-wrap gap-4">
            <p className="font-bold">Text settings</p>
            <Input type="text" label="Top Text" placeholder="Enter top text" onChange={handleTopChange} />
            <Input type="text" label="Bottom Text" placeholder="Enter bottom text" onChange={handleBottomChange} />
          </CardBody>
          <Divider />
          <CardFooter className="flex gap-4 items-center">
            <Button color="primary" onClick={randomMeme} startContent={<BiRefresh />}>
              Random Meme
            </Button>
            <Button color="secondary" onClick={capture} startContent={<BiDownload />}>
              Download Meme
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <MemeGenerator />
    </div>
  );
}
