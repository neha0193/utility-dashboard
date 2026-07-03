import { Metadata } from "next";
import App from "./app";


export const metadata: Metadata = {
title: "current time",
description : "A simple yet elegant app for current time and date."
};

export default function app () {
  return <App/>
}