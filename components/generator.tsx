"use client";

import React, { useState, useCallback } from "react";
import html2canvas from "html2canvas";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Input,
} from "@nextui-org/react";
import { BiDownload, BiPlus, BiRefresh, BiTrash } from "react-icons/bi";
import { Display } from "../components/display";

export interface TextBox {
  id: number;
  text: string;
}

export interface Meme {
  url: string;
  name: string;
  width: number;
  height: number;
}

export interface GeneratorProp {
  memes: Meme[];
}

export function Generator({ memes }: GeneratorProp) {
  const [textBoxes, setTextBoxes] = useState<TextBox[]>([]);
  const [img, setImg] = useState("https://i.imgflip.com/1bij.jpg");
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const { value } = e.target;
    setTextBoxes(
      textBoxes.map((item) =>
        item.id === id ? { ...item, text: value } : item,
      ),
    );
  };

  const deleteTextBox = (id: number) => {
    setTextBoxes(textBoxes.filter((item) => item.id !== id));
  };

  const addTextBox = () => {
    if (textBoxes.length === 5) return;
    setTextBoxes([
      ...textBoxes,
      {
        id: textBoxes.length + 1,
        text: `Text ${textBoxes.length + 1}`,
      },
    ]);
  };

  const randomMeme = () => {
    if (memes.length === 0) {
      return;
    }
    let items = memes;
    let item = items[Math.floor(Math.random() * items.length)];
    setImg(item.url);
    setTextBoxes([]);
  };

  const capture = useCallback(() => {
    const divToDisplay = document.getElementById("meme");
    if (!divToDisplay) {
      return;
    }
    html2canvas(divToDisplay, {
      allowTaint: false,
      useCORS: true,
      scrollY: -window.scrollY,
      scrollX: -window.scrollX,
    }).then(function (canvas) {
      let url = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = `${memes.find((meme) => meme.url === img)?.name}.png`;
      link.href = url;
      link.click();
    });
  }, [memes, img]);

  return (
    <div className="flex relative h-full w-full">
      <div className="flex-1 w-1/2 grow my-auto">
        <Display
          imgUrl={img}
          textBoxes={textBoxes}
          width={memes.find((meme) => meme.url === img).width}
          height={memes.find((meme) => meme.url === img).height}
        />
      </div>
      <div className="flex h-screen">
        <Card className="h-full">
          <CardHeader className="m-2">
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl font-bold">Customize your meme 🤩</h1>
              <p className="text-small text-default-500">
                {memes.find((meme) => meme.url === img).name}
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-wrap gap-4 m-2">
            <h2 className="font-bold">Text ({textBoxes.length}/5)</h2>
            {textBoxes.map((textBox) => (
              <div key={textBox.id} className="flex gap-4 items-center">
                <Input
                  label={`Text ${textBox.id}`}
                  placeholder="Enter text"
                  onChange={(e) => handleTextChange(e, textBox.id)}
                  value={textBox.text}
                />
                <Button
                  color="danger"
                  onClick={() => deleteTextBox(textBox.id)}
                  isIconOnly
                  variant="ghost"
                >
                  <BiTrash className="size-4" />
                </Button>
              </div>
            ))}
            {textBoxes.length < 5 && (
              <Button
                onClick={addTextBox}
                startContent={<BiPlus className="size-4" />}
              >
                Add Text Box
              </Button>
            )}
          </CardBody>
          <Divider />
          <CardFooter className="flex gap-4 items-center">
            <Button
              color="primary"
              onClick={randomMeme}
              startContent={<BiRefresh />}
            >
              Random Meme
            </Button>
            <Button
              color="secondary"
              onClick={capture}
              startContent={<BiDownload />}
            >
              Download Meme
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
