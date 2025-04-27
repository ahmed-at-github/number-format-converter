import { useState } from "react"
import "./NumberFormat.css"
import numberToWords from "number-to-words"

export default function NumberFormat() {
  //LOGIC
  const [inputFormat, setInputFormat] = useState("decimal") //initial-Given format
  const [inputNumber, setInputNumber] = useState("") //initial-Given Number (any format)
  const [decimal, setDecimal] = useState("") //conversion
  const [binary, setBinary] = useState("")
  const [octal, setOctal] = useState("")
  const [hexadecimal, setHexadecimal] = useState("")
  const [integer, setInteger] = useState("") //Number in Integer only
  const [significantNo, setSignificantNo] = useState("") //Number in significan format
  const [significantNoIndex, setSignificantNoIndex] = useState("2") //??
  const [roundDigit, setRoundDigit] = useState("") //Number in round
  const [roundDigitIndex, setRoundDigitIndex] = useState("2") //??
  const [numerator, setNumerator] = useState("") //Number in frac
  const [denominator, setDenominator] = useState("") //??
  const [inWord, setInWord] = useState("") //Number to word

  //EVENT TRIGGER-HANDLER
  const handleConversion = () => {
    let decimalValue

    //converting all_format to decimal
    switch (inputFormat) {
      case "binary":
        decimalValue = parseInt(inputNumber, 2)
        break
      case "octal":
        decimalValue = parseInt(inputNumber, 8)
        break
      case "hexadecimal":
        decimalValue = parseInt(inputNumber, 16)
        break
      default:
        decimalValue = parseInt(inputNumber, 10)
    }
    if (inputFormat !== "decimal") setDecimal(decimalValue) //??

    //Finding Integer value
    setInteger(Math.floor(decimalValue))

    //converting and setting format (decimal to other_format)
    setBinary(Math.floor(decimalValue).toString(2))
    setHexadecimal(Math.floor(decimalValue).toString(16).toUpperCase())
    setOctal(Math.floor(decimalValue).toString(8))

    //Setting number-to-word
    if (decimalValue <= 1000000000000000)
      setInWord(numberToWords.toWords(decimalValue))
    else setInWord("Over Limit (Max-Limit : 1000000000000000")

    //Round Number
    if (inputFormat === "decimal")
      setRoundDigit(
        roundToKthInteger(
          parseFloat(decimal, 10),
          parseInt(roundDigitIndex, 10)
        )
      )
    else
      setRoundDigit(
        roundToKthInteger(
          parseFloat(decimalValue, 10),
          parseInt(roundDigitIndex, 10)
        )
      )

    //Fraction
    if (
      inputFormat === "decimal" &&
      parseFloat(decimal, 10) - decimalValue !== 0
    ) {
      const result = floatToFraction(parseFloat(decimal, 10) - decimalValue)
      setNumerator(result.Numerator)
      setDenominator(result.denominator)
    } else {
      setNumerator(0)
      setDenominator(0)
    }

    //Significant Number
    if (inputFormat === "decimal")
      setSignificantNo(
        roundToSignificantDigits(
          parseFloat(decimal, 10),
          parseint(significantNoIndex, 10)
        )
      )
    else
      setSignificantNo(
        roundToSignificantDigits(
          parseFloat(decimalValue, 10),
          parseInt(significantNoIndex, 10)
        )
      )
  }

  //OTHER LOGIC
  function floatToFraction(number) {
    const tolerance = 0.000001 //defines how close the fraction must be to the real number.
    let numerator = 1
    let denominator = 1
    let error = number - numerator / denominator

    while (Math.abs(error) > tolerance) {
      if (error > 0) numerator++
      else denominator++

      error = number - numerator / denominator
    }
    return {
      numerator,
      denominator,
    }
  }

  //to round a number to k precision
  function roundToKthInteger(number, k) {
    const multiplier = Math.pow(10, k)
    return Math.round(number * multiplier) / multiplier
  }

  //rounds a number to a given number of significant digits (12345, 2) -> 12000
  //High logic DONT UNDERSTAND
  function roundToSignificantDigits(number, significantDigits) {
    if (significantDigits <= 0) return 0
    const multiplier = Math.pow(
      10,
      significantDigits - Math.floor(Math.log10(Math.abs(number))) - 1
    )
    const roundedNumber = Math.round(number * multiplier) / multiplier

    return roundedNumber
  }

  //UI
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
