import "./NumberFormat.css"

export default function NumberFormat() {
  return (
    <div className="application">
      <h1>Number Format Converter</h1>
      <div className="section">
        <div className="row">
          <p>Number Format</p>
          <select value={0} onChange={0}>
            <option value="binary">Binary</option>
            <option value="octal">Octal</option>
            <option value="decimal">Decimal</option>
            <option value="hexadecimal">Hexadecimal</option>
          </select>
        </div>

        <div className="row">
          <p>Enter {0} Number</p>
          <div>
            <input type={0} value={0} onChange={0} />
            <button onClick={0}>Convert</button>
          </div>
        </div>

        <div className="row">
          <p>Integer Number</p>
          <input type="number" value={0} onChange={0} />
        </div>

        <div className="row">
          <p>Significant Number</p>
          <div>
            <input type="number" value={0} onChange={0} />
            <select value={0} onChange={0}>
              {Array}
            </select>
          </div>
        </div>

        <div className="row">
          <p>Rounded Number</p>
          <div>
            <input type="number" value={0} onChange={0} />
            <select value={0} onChange={0}>
              {Array}
            </select>
          </div>
        </div>

        <div className="row">
          <p>Fraction</p>
          <div>
            <input type="number" value={0} onChange={0} />
            <p>&nbsp;/&nbsp;</p>
            <input type="number" value={0} onChange={0} />
            <input type="number" value={0} onChange={0} />
          </div>
        </div>

        <div className="row">
          <p>
            {0} of integer {0}
          </p>
          <input type="number" value={0} onChange={0} />
        </div>

        <div className="row">
          <p>
            {0} of integer {0}
          </p>
          <input type="number" value={0} onChange={0} />
        </div>

        <div className="row">
          <p>
            {0} of integer {0}
          </p>
          <input type="number" value={0} onChange={0} />
        </div>

        <div className="row">
          <p>In words</p>
          <input type="text" value={0} onChange={0} />
        </div>
      </div>
    </div>
  )
}
