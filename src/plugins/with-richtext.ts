import { Editor } from "slate";
import { EDITOR_TO_ON_CHANGE } from "../utils/weak-maps";
import { RichtextEditor } from "./richtext-editor";

export const withRichtext = <T extends Editor>(editor: T) => {
    const e = editor as T & RichtextEditor;
    const { onChange } = e;

    e.onChange = () => {
        const onContextChange = EDITOR_TO_ON_CHANGE.get(editor);

        if (onContextChange) {
            onContextChange();
        }

        onChange();
    }

    e.insertBreak = () => {
        editor.insertText('\n');
    }

    e.keydown = () => {}

    return e;
}