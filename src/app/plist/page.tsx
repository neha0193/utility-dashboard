import PowerList from "./powerlist";
import { Metadata } from "next";

export const metadata: Metadata = {
title: "Power List",
description : "A simple yet elegant app to download important items on one click."
};

export default function app () {
  return <PowerList/>
}