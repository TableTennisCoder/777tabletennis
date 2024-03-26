"use client";

import { useState } from "react";
import { Editor } from "novel";
import type { SyntheticEvent } from "react";
import type { Editor as TiptapEditor } from "@tiptap/core";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CreateNewArticle = () => {
  const [content, setContent] = useState<string>();

  const handleOnUpdate = (editor: TiptapEditor) => {
    setContent(editor.getHTML());
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
      slug: { value: string };
      excerpt: { value: string };
      category: { value: string };
    };

    const data = {
      title: target.title.value,
      slug: target.slug.value,
      excerpt: target.excerpt.value,
      category: target.category.value,
      content,
    };
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="font-black text-3xl mb-6">Create new News</h1>
      <div className="mb-6">
        <div className="grid w-full items-center gap-1.5">
          {/* <Label htmlFor="title">Title</Label> */}
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            className="border-borderColor"
            style={{ height: "50px" }}
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="grid w-full items-center gap-1.5">
          {/* <Label htmlFor="subtitle">Subtitle</Label> */}
          <Input
            type="text"
            id="slug"
            name="slug"
            placeholder="Image URL"
            className="border-borderColor"
            style={{ height: "50px" }}
          />
        </div>
      </div>

      <div className="mb-6">
        {/* <label className="block text-sm font-semibold mb-1">Content</label> */}
        <Editor
          className="bg-transparent border border-borderColor rounded-md h-96"
          disableLocalStorage={true}
          defaultValue={{
            type: "doc",
            content: [],
          }}
          onDebouncedUpdate={handleOnUpdate}
        />
      </div>

      <div className="mb-6">
        <div className="grid w-full items-center gap-1.5">
          {/* <Label htmlFor="excerpt">SubtiExcerpttle</Label> */}
          <Input
            type="text"
            id="excerpt"
            name="excerpt"
            placeholder="Excerpt"
            className="border-borderColor"
            style={{ height: "50px" }}
          />
        </div>
      </div>

      <div className="grid w-full gap-1.5 mb-6" style={{ height: "50px" }}>
        {/* <Label>Category</Label> */}
        <Select name="category">
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

      <Button variant={"secondary"}>Submit</Button>
    </form>
  );
};

export default CreateNewArticle;
