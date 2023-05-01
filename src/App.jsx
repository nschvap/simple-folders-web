import { FcFolder, FcOpenedFolder, FcFile } from "react-icons/fc";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

import { desk } from "./data.js";
import { useState } from "react";

function Desktop() {
  const [selectedFolder, setSelectedFolder] = useState();
  const [folderHistory, setFolderHistory] = useState([]);
  const [text, setText] = useState("Sobre Mí");
  const [visible, setVisible] = useState(false);

  function handleFolderClick(e, folder) {
    const selected = desk.findIndex(
      (x) => x.type == "folder" && x.name == folder
    );
    if (desk[selected].files.length == 0) return;
    setFolderHistory((fh) => [...fh, selected]);
    setText("Redes");
    setSelectedFolder(desk[selected].files);
  }

  const handleGoBack = (e) => {
    setText("Sobre Mí");
    setFolderHistory([]);
    setSelectedFolder();
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleFileClick = (url) => {
    return window.open(url, "_blank");
  };

  return (
    <main className="w-full h-screen bg-gradient-to-b from-blue-500 to-blue-300">
      <div className="px-5 py-1 bg-zinc-600 flex justify-between items-center">
        <button
          onClick={handleGoBack}
          className="px-1 py-1 hover:bg-zinc-500 duration-150 text-zinc-300 disabled:pointer-events-none active:bg-zinc-500"
          disabled={folderHistory.length == 0}
        >
          <IoArrowBackOutline className="text-lg" />
        </button>
        <p className="text-lg font-semibold flex justify-center text-white">
          {text}
        </p>
        <span></span>
      </div>
      <div className="flex">
        {selectedFolder
          ? selectedFolder.map((file) => {
              return (
                <div
                  key={file.name}
                  onClick={(e) =>
                    file.type == "folder"
                      ? handleFolderClick(e, file.name)
                      : handleFileClick(file.url)
                  }
                  className={`${
                    file.type == "folder" ? "folder" : "file"
                  } w-[100px] h-[100px] hover:bg-zinc-200/30 flex cursor-pointer items-center align-super content-around justify-center flex-col`}
                >
                  {file.type == "folder" ? (
                    file.files.length > 1 ? (
                      <FcFolder className="text-5xl" />
                    ) : (
                      <FcOpenedFolder className="text-5xl" />
                    )
                  ) : file.icon ? (
                    <img
                      src={file.icon}
                      alt={"icono"}
                      style={{ width: "3rem" }}
                      className="h-[3rem] filter brightness-0"
                    />
                  ) : (
                    <FcFile className="text-5xl" />
                  )}
                  <p className="mt-2 font-semibold text-zinc-900">
                    {file.name}
                  </p>
                </div>
              );
            })
          : desk.map((file) => {
              return (
                <div
                  key={file.name}
                  onClick={(e) =>
                    file.type == "folder"
                      ? handleFolderClick(e, file.name)
                      : handleFileClick(file.url)
                  }
                  className={`${
                    file.type == "folder" ? "folder" : "file"
                  } w-[100px] h-[100px] hover:bg-zinc-200/30 cursor-pointer flex items-center justify-center flex-col`}
                >
                  {file.type == "folder" ? (
                    file.files.length > 1 ? (
                      <FcFolder className="text-5xl" />
                    ) : (
                      <FcOpenedFolder className="text-5xl" />
                    )
                  ) : file.icon ? (
                    <img
                      src={file.icon}
                      alt={"icono"}
                      style={{ width: "3rem" }}
                      className="h-[3rem] filter brightness-0"
                    />
                  ) : (
                    <FcFile className="text-5xl" />
                  )}
                  <p className="mt-2 text-zinc-900 font-semibold text-center">
                    {file.name}
                  </p>
                </div>
              );
            })}
        {!selectedFolder && (
          <div
            className="w-[100px] relative h-[100px] hover:bg-zinc-200/30 cursor-pointer flex items-center justify-center flex-col"
            onClick={handleVisible}
          >
            <FcFile className="text-5xl" />
            <p className="mt-2 text-zinc-900 font-semibold">Información</p>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center ">
        {visible && (
          <div
            className={`w-96 h-96 bg-white rounded-lg shadow-md shadow-blue-900`}
          >
            <section className="bg-black/10 text-center font-semibold flex justify-between items-center px-3 py-1">
              <p className="text-xl">Información</p>
              <AiOutlineClose
                className="text-2xl cursor-pointer"
                onClick={handleVisible}
              />
            </section>
            <section className="px-4 py-2 overflow-y-auto max-h-80">
              <h1 className="text-lg font-semibold">
                Me llamo Nicolás [ .. ] Schvap
              </h1>
              <p>
                Vivo en{" "}
                <span className="font-semibold text-blue-400">Argentina</span>,
                provincia de Santa Fe
              </p>
              <hr />
              <p className="text-lg font-semibold mt-3">
                Algo obvio o "informativo" ?
              </p>
              <ul className="ml-2 list-disc list-inside">
                <li>
                  Me gusta programar y.. probablemente me dedique a eso,{" "}
                  <small>obvio no? 🙄</small>
                </li>
                <li>Sobre los proyectos ahi al lado: por ahora son 4 pero la mayoria los hice por aburrimiento o por probar algo. Ninguno es realmente en serio, a pesar de lo que dije arriba por ahora esto es un hobby para mi.</li>
                <li>Me gustan mucho los gatos 👍</li>
                <li>Los perros tambien 👍</li>
                <li>
                  Si te interesa saber en que programo o que hago mira mi github
                  (metete en la carpetita "Redes")
                </li>
                <li>
                  Si entraste por curioso volve a meterte dentro de un tiempo
                  que voy a seguir actualizando esto
                </li>
                <li>
                  Si te gustaria tener una pagina asi de simple contactame por
                  ig 
                </li>
              </ul>
              <hr />
              <p className="mt-3">
                Si te interesa ver cómo hice esta página y entendes{" "}
                <a
                  href="https://react.dev"
                  className="underline underline-offset-1 text-blue-400"
                >
                  React
                </a>{" "}
                metete{" "}
                <a
                  href="https://github.com/nschvap/simple-folders-web"
                  className="underline underline-offset-1 text-blue-400"
                >
                  acá
                </a>
              </p>
              <p className="text-xs">Gracias por pasarte :)</p>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}

export default Desktop;
