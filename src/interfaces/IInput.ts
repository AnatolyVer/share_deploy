import React from "react";

export default interface IInput{
    border?: string,
    value: string
    type:string
    placeholder:string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}