import React from 'react'
import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

export default function YamlEditor({theme, yaml}) {

    return (
        <AceEditor
            placeholder="Placeholder Text"
            mode="yaml"
            theme="github"
            name="editor"
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`${yaml}`}
            setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
  }}/>
            
    )
}