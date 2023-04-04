import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./EditorTools";

const EdtiotBlock = ({data, onChange, holder}) =>{
    const ref = useRef()

    useEffect(() => {
        if(!ref.current){
            const editor = new EditorJS({
                holder: holder,
                tools: EDITOR_TOOLS,
                data,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data)
                },
                
            });
            ref.current = editor;
        }

        return () => {
            if(ref.current && ref.current.distory){
                ref.current.destroy();
            }
        };
    }, []);

    return <div id={holder}/>
};

export default memo(EdtiotBlock);