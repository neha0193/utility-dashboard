import { Metadata } from "next";
import Time from "./time";

export const metadata: Metadata = {
title: "Stopwatch",
description : "A simple yet elegant stopwatch app."
};

export default function app () {
  return <Time/>
}