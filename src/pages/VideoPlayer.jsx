import React, { useEffect, useRef } from "react";
import { Player } from "video-react";
import video1 from "../assets/audio/Desert_Video.mp4";
import "video-react/dist/video-react.css";

const VideoPlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const videoModal = document.getElementById("videoModal");
    const closeButton = videoModal.querySelector(".btn-close");

    const closeModal = () => {
      playerRef.current.pause();
      playerRef.current.seek(0);
    };

    closeButton.addEventListener("click", closeModal);
    videoModal.addEventListener("hidden.bs.modal", closeModal);

    return () => {
      closeButton.removeEventListener("click", closeModal);
      videoModal.removeEventListener("hidden.bs.modal", closeModal);
    };
  }, []);

  return (
    <>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalCard"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="videoModalLabel"
              >
                Title
              </h5>
              <button
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <Player ref={playerRef}>
                <source src={video1} />
              </Player>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
