import * as React from 'react'

function QueryBox({ name, value, pos, onQueryNameChange, onQueryValueChange, deleteQueryAt, namePlaceHolder, valuePlaceHolder }) {
    return (
        <div className="new-query-box">
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path fill="var(--text-tertiary)" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <input className="query-name" value={name} placeholder={namePlaceHolder} onChange={(e) => onQueryNameChange({ pos: pos, value: e.target.value })}></input>
            <input className="query-value" value={value} placeholder={valuePlaceHolder} onChange={(e) => onQueryValueChange({ pos: pos, value: e.target.value })}></input>
            <svg onClick={() => deleteQueryAt(pos)} width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
            </svg>
        </div>)
}

export default QueryBox;