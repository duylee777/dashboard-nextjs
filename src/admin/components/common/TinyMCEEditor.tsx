'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import type { Editor as TinyMCECoreEditor } from 'tinymce';

interface TinyMCEEditorProps {
    value: string;
    onChange: (content: string) => void;
}

export default function TinyMCEEditor ({ value, onChange }: TinyMCEEditorProps) {
    const editorRef = useRef<TinyMCECoreEditor | null>(null);

    return (
        <div className='w-full'>
            <Editor
                licenseKey="gpl"
                tinymceScriptSrc='/tinymce/tinymce.min.js'
                onInit={(_evt: unknown, editor: TinyMCECoreEditor) => {
                    editorRef.current = editor;
                }}
                value={value}
                onEditorChange={onChange}
                init={{
                    promotion: false,
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar:
                        'undo redo | blocks | bold italic forecolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist | removeformat | help',
                    content_style: 'body { font-family: Inter, sans-serif; font-size: 14px }',
                    branding: false,
                }}
            />
        </div>
    );
}