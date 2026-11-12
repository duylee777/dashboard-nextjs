'use client';

'use client';

import { useRef, useCallback, useMemo } from 'react';
import grapesjs, { type Editor } from 'grapesjs';
import GjsEditor from '@grapesjs/react';
import 'grapesjs/dist/css/grapes.min.css';

export interface BuilderPayload {
  html: string;
  css: string;
  projectData: Record<string, unknown>;
}

interface GrapesEditorProps {
  initialData?: Record<string, unknown>;
  onSave?: (payload: BuilderPayload) => void | Promise<void>;
}

export default function GrapesEditor({ initialData, onSave }: GrapesEditorProps) {
  const editorRef = useRef<Editor | null>(null);

  // Memoize options để tránh editor bị khởi tạo lại khi component re-render
  const options = useMemo(
    () => ({
      height: 'calc(100vh - 56px)',
      storageManager: false, // Tắt localStorage mặc định để tự lưu qua API/Database
    }),
    []
  );

  const plugins = useMemo(() => [], []);

  const onEditor = useCallback(
    (editor: Editor) => {
      editorRef.current = editor;

      // Nạp lại dữ liệu thiết kế cũ (nếu đang mở chế độ Edit)
      if (initialData) {
        editor.loadProjectData(initialData);
      }
    },
    [initialData]
  );

  const handleSave = async () => {
    const editor = editorRef.current;
    if (!editor || !onSave) return;

    await onSave({
      html: editor.getHtml(),
      css: editor.getCss() || '',
      projectData: editor.getProjectData(),
    });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Thanh header tùy chỉnh */}
      <div className="h-14 px-4 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800">
        <span className="font-semibold">Web Builder</span>
        <button
          type="button"
          onClick={handleSave}
          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition"
        >
          Lưu trang
        </button>
      </div>

      {/* Khung editor chính */}
      <div className="flex-1 overflow-hidden">
        <GjsEditor
          grapesjs={grapesjs}
          options={options}
          plugins={plugins}
          onEditor={onEditor}
        />
      </div>
    </div>
  );
}