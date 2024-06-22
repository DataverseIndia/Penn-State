import { useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from './components/tools';

type EditorInstanceProps = {
  editorData: OutputData | null;
  setEditorData: (data: OutputData) => void;
};

const EditorInstance: React.FC<EditorInstanceProps> = ({ editorData, setEditorData }) => {
  useEffect(() => {
    const editorInstance = new EditorJS({
      holder: 'textEditor',
      data: editorData || undefined,
      placeholder: 'Start here...',
      tools: EDITOR_JS_TOOLS,
      onChange: async (api) => {
        const outputData = await api.saver.save();
        setEditorData(outputData);
      },
    });

    return () => {
      editorInstance.destroy();
    };
  }, []);

  return (
    <div id="textEditor" className="editorJs w-full h-96 overflow-y-scroll scroll rounded-md border text-sm text-neutral-900 border-neutral-200 bg-white px-3 py-2"></div>
  );
};

export default EditorInstance;
