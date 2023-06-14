import React from "react";
import MenuBtn from "./MenuBtn";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Trivia = () => {
    return (
        <>
            <MenuBtn />
            <div className="grid grid-rows-3 gap-8">
                <div className="col-start-2 col-span-4">
                    <h1 className="text-gray-800 text-start text-lg md:text-2xl">
                        Trivia
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-x-80 mx-auto justify-evenly place-items-center place-content-center">
                    <div className="justify-self-start">
                        <FiChevronLeft className="cursor-pointer" />
                    </div>
                    <div className="justify-self-center grid-flow-col-dense">Images</div>
                    <div className="justify-self-end">
                        <FiChevronRight className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trivia;
