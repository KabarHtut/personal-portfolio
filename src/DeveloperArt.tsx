export default function DeveloperArt() {
  return <div className="developer-art">
    <svg viewBox="0 0 320 320" role="img" aria-labelledby="developer-art-title">
      <title id="developer-art-title">Animated developer at a glowing laptop, surrounded by floating code</title>
      <defs>
        <linearGradient id="dev-bg" x2="1" y2="1"><stop stopColor="#33472b"/><stop offset="1" stopColor="#17251e"/></linearGradient>
        <linearGradient id="dev-shirt" x2=".8" y2="1"><stop stopColor="#d6f5a1"/><stop offset="1" stopColor="#7ca44c"/></linearGradient>
        <linearGradient id="dev-laptop" x2="1" y2="1"><stop stopColor="#465746"/><stop offset="1" stopColor="#1b2924"/></linearGradient>
        <radialGradient id="dev-glow"><stop stopColor="#d2f58a" stopOpacity=".3"/><stop offset="1" stopColor="#d2f58a" stopOpacity="0"/></radialGradient>
        <pattern id="dev-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#b7dc8b" strokeOpacity=".07"/></pattern>
      </defs>
      <rect width="320" height="320" rx="12" fill="url(#dev-bg)"/>
      <rect width="320" height="320" fill="url(#dev-grid)"/>
      <circle cx="160" cy="160" r="140" fill="url(#dev-glow)"/>
      <ellipse className="dev-shadow" cx="160" cy="284" rx="109" ry="12" fill="#0c1712" opacity=".6"/>
      <g className="dev-code-window"><rect x="24" y="43" width="119" height="83" rx="8" fill="#14231c" stroke="#749456" strokeWidth="1"/><path d="M24 63H143" stroke="#405837"/><g fill="#88a967"><circle cx="35" cy="53" r="2"/><circle cx="43" cy="53" r="2"/><circle cx="51" cy="53" r="2"/></g><g fill="none" strokeLinecap="round" strokeWidth="3"><path d="M37 77H56M64 77H88" stroke="#d2f58a"/><path className="dev-code-line" d="M45 88H99M45 99H75" stroke="#789e9d"/><path d="M37 110H57M65 110H107" stroke="#8ba16e"/></g></g>
      <g className="dev-bracket"><rect x="245" y="88" width="49" height="46" rx="11" fill="#2e4127" stroke="#789858"/><path d="M260 103L253 111L260 119M279 103L286 111L279 119M274 100L266 122" fill="none" stroke="#d2f58a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g>
      <g className="dev-spark" fill="#d2f58a"><path d="M245 35L248 45L258 48L248 51L245 61L242 51L232 48L242 45Z"/><circle cx="43" cy="164" r="3"/><circle cx="280" cy="204" r="2"/></g>
      <path d="M101 244Q96 189 127 176L191 176Q224 189 222 244Z" fill="url(#dev-shirt)"/>
      <path d="M136 174V158H182V175Q160 193 136 174" fill="#cba880"/>
      <g className="dev-head"><path d="M115 118Q110 73 157 72Q205 69 207 116L199 153Q188 177 162 179Q134 177 121 153Z" fill="#e3c19a"/><ellipse cx="118" cy="135" rx="8" ry="12" fill="#d8b38c"/><ellipse cx="203" cy="135" rx="8" ry="12" fill="#d8b38c"/><path d="M116 123Q98 86 131 72Q151 49 183 69Q216 72 208 122L194 117L189 96Q162 112 133 102L127 123Z" fill="#1a2824"/><path d="M128 88Q150 67 183 80" fill="none" stroke="#3e5142" strokeWidth="5" strokeLinecap="round"/><g fill="none" stroke="#34463a" strokeWidth="3"><rect x="128" y="124" width="27" height="21" rx="7"/><rect x="168" y="124" width="27" height="21" rx="7"/><path d="M155 131Q161 127 168 131M120 127L128 130M195 130L202 126"/></g><g className="dev-eyes" fill="#2b372d"><ellipse cx="142" cy="135" rx="2" ry="3"/><ellipse cx="181" cy="135" rx="2" ry="3"/></g><path d="M153 157Q162 163 171 156" fill="none" stroke="#916d52" strokeWidth="2.5" strokeLinecap="round"/><path d="M108 121Q106 83 134 74M208 121Q215 87 190 76" fill="none" stroke="#8aa86e" strokeWidth="6" strokeLinecap="round"/><rect x="105" y="118" width="10" height="27" rx="5" fill="#6b8854"/><rect x="205" y="118" width="10" height="27" rx="5" fill="#6b8854"/><path d="M210 140Q211 161 185 161" fill="none" stroke="#8aa86e" strokeWidth="3"/><rect x="177" y="158" width="13" height="6" rx="3" fill="#3c5439"/></g>
      <path d="M110 209L95 241L127 253M212 209L229 241L198 253" fill="none" stroke="#b4d180" strokeWidth="20" strokeLinecap="round"/>
      <g className="dev-hand"><ellipse cx="129" cy="250" rx="15" ry="8" fill="#e3c19a"/><ellipse cx="194" cy="250" rx="15" ry="8" fill="#e3c19a"/></g>
      <g><path d="M103 212Q102 207 109 207H216Q223 207 221 214L209 268H115Z" fill="url(#dev-laptop)" stroke="#718669" strokeWidth="1.5"/><path d="M92 269H230L242 277Q242 281 234 281H88Q80 281 80 277Z" fill="#7d936c"/><path d="M137 270H186L189 274H134Z" fill="#3f5540"/><path className="dev-laptop-mark" d="M151 231L143 239L151 247M174 231L182 239L174 247M166 228L159 250" stroke="#d2f58a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></g>
      <g className="dev-coffee"><path d="M254 244H275L272 269H257Z" fill="#b0cb8a"/><path d="M275 248Q290 246 283 257L274 258" fill="none" stroke="#b0cb8a" strokeWidth="4"/><path className="dev-steam" d="M260 236Q254 229 260 222M269 236Q263 229 269 222" fill="none" stroke="#b5d38b" strokeWidth="2" strokeLinecap="round" opacity=".6"/></g>
    </svg>
    <span className="dev-live"><i/> IN THE FLOW <span className="dev-cursor">_</span></span>
  </div>
}
