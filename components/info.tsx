import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import React from "react";

interface InfoProps {
    label: any;
    item: string;
}

export const InfoPop = (props: InfoProps) => {
    return (
        <div className={'flex flex-row cursor-pointer'}>
            <div className={'bg-[#B5DFCA] backdrop-blur-sm rounded-full -mr-2 p-2 px-3'}>
                <h2 className={'text-neutral-900 text-lg font-semibold'}>{props.label}</h2>
            </div>
            <div className={' dark:white bg-[#BBD1EA] -ml-2 p-2 px-4 pl-6 rounded-r-full'}>
                <h2 className={'text-lg'}>{props.item}</h2>
            </div>
        </div>
    )

}

export default InfoPop