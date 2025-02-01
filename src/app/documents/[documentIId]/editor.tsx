"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from "@/store/use-editor-store";
import Underline from "@tiptap/extension-underline";

export default function Editor() {
  const { setEditor } = useEditorStore();
  const editor = useEditor({
    onCreate(props) {
      setEditor(props.editor);
    },
    onBlur(props) {
      setEditor(props.editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onFocus(props) {
      setEditor(props.editor);
    },
    onUpdate(props) {
      setEditor(props.editor);
    },
    onSelectionUpdate(props) {
      setEditor(props.editor);
    },
    onTransaction(props) {
      setEditor(props.editor);
    },
    onContentError(props) {
      setEditor(props.editor);
    },
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
      ImageResize,
      Underline,
    ],
    content: `
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th colspan="3">Description</th>
        </tr>
        <tr>
          <td>Cyndi Lauper</td>
          <td>Singer</td>
          <td>Songwriter</td>
          <td>Actress</td>
        </tr>
      </tbody>
    </table>
  `,
    autofocus: true,
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#c7c7c7]flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text ",
      },
    },
  });
  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible  ">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
