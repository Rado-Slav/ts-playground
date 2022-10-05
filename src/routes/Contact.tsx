import React from "react";
import ExampleForm from "../components/ExampleForm";

export default function Contact({title} : {title: string}) {
    return (
        <>
            <div>{title}</div>
            <div><ExampleForm /></div>
        </>
    )
}