import classes from "./editor.module.css";
import React from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../menu-bar/menu-bar";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Underline from "@tiptap/extension-underline";

const Editor = React.forwardRef((props, ref) => {
  const editor = useEditor({
    extensions: [
      // StarterKit.configure({
      //   bulletList: {
      //     keepAttributes: false,
      //     keepMarks: true,
      //   },
      // }),
      StarterKit,
      Underline,
      Subscript,
      Superscript,
    ],
    onUpdate({ editor }) {
      props.onChange(editor.getHTML());
    },
  });

  return (
    <div className={classes.editor}>
      <MenuBar editor={editor} />
      <EditorContent className={classes.editor__content} editor={editor} />
    </div>
  );
});

Editor.displayName = "Editor";

export default Editor;
