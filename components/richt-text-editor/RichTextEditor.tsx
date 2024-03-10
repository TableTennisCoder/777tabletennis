"use client";

import React from "react";
import Caption from "../ui/Caption";
import Container from "../ui/Container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const RichTextEditor = () => {
  return (
    <Container>
      <Caption caption="CREATE NEW NEWS" />
      <div className="h-8"></div>
      <div className="flex flex-col gap-9">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" placeholder="Title" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input type="text" id="subtitle" placeholder="Subtitle" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label>Category</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="wtt">WTT</SelectItem>
                <SelectItem value="olympia">Olympia</SelectItem>
                <SelectItem value="ettu">ETTU</SelectItem>
                <SelectItem value="TTBL">TTBL</SelectItem>
                <SelectItem value="proA">Pro A</SelectItem>
                <SelectItem value="TLeague">T.League</SelectItem>
                <SelectItem value="mltt">MLTT</SelectItem>
                <SelectItem value="cttsl">CTTSL</SelectItem>
                <SelectItem value="various">Various</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Container>
  );
};

export default RichTextEditor;
