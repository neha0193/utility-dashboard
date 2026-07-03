import { Metadata } from "next";
import Counter from "./counter";

export const metadata: Metadata = {
title: "Counter App",
description : "A simple yet elegant counter app to track values in real-time with smooth interactions and a clean UI."
};

export default function app() {
  return <Counter />;
}
