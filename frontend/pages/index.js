import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";

import "react-quill/dist/quill.snow.css";
import { CreateBlog } from "../services/blog/httpRequrest";
import axios from "axios";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import NavbarTest from "../components/Navbar/NavbarTest";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

// const EditorBlock = dynamic(() => import("../components/Editor"), {
//   ssr: false,
// });

export default function Home() {
    const modules = {
        toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            [
                {
                    color: ["red", "blue", "yellow", "#666666", "black"],
                },
            ],
            ["link", "image", "video"],
            ["clean"],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    };
    /*
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
        "color",
    ];

    const [detail, setDetail] = useState();
    const topicRef = useRef();

    const onChangeDetail = (value) => {
        setDetail((currentDetail) => {
            return value;
        });
    };

    const tt = () => {
        document.bo;
    };

    const test = async () => {
        const data = {
            topic: topicRef.current.value,
            detail: detail,
        };

        const res = await CreateBlog(data);
        console.log(res.data);
    };
    return (
        <div>
            <main>
                {/* <label htmlFor="ftopic">Topic:</label>
                <input ref={topicRef} type="text" />
                <QuillNoSSRWrapper
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    onChange={onChangeDetail}
                />
                <button onClick={test}>Test</button>

                <h2 className="text-4xl"> Pre render</h2>
                <div className="unreset" dangerouslySetInnerHTML={{__html: detail}}/>
                 */}

                <header className="h-screen">
                    <div
                        className={`${styles.headerBg}   min-w-[560px]`}
                    >
                        <NavbarTest />
                        <section className="flex flex-col w-full h-[40vh] justify-center items-center">
                            {/* content of Header */}
                            <div>Test</div>
                            <div>Test</div>
                            <div>Test</div>
                            <div>Test</div>
                        </section>
                    </div>

                    <div className="absolute w-full z-[-1]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            className="min-w-[560px]"
                        >
                            <path
                                className="w-auto"
                                fill="#D8cdb0"
                                fillOpacity="1"
                                d="M0,224L24,213.3C48,203,96,181,144,192C192,203,240,245,288,218.7C336,192,384,96,432,96C480,96,528,192,576,218.7C624,245,672,203,720,160C768,117,816,75,864,53.3C912,32,960,32,1008,53.3C1056,75,1104,117,1152,122.7C1200,128,1248,96,1296,117.3C1344,139,1392,213,1416,250.7L1440,288L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                            ></path>
                        </svg>
                    </div>
                </header>
            </main>
        </div>
    );
}
