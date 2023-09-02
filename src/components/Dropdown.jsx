import { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiSquare, FiCheckSquare } from 'react-icons/fi'
import './Dropdown.css'

function Dropdown({ options, change, selected }) {

  const currencyNames = {
    'RON': 'Lei',
    'EUR': 'Euro',
    'USD': 'Dolar SUA',
    'CHF': 'Franc elveţian',
    'GBP': 'Liră sterlină'
  }
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(selected)

  useEffect(() => {
    setSelectedOption(selected)
  }, [selected])

  const onOptionClicked = option => () => {
    setSelectedOption(option)
    setIsOpen(false)
    change(option)
  };

  const HideDropdown = (ref) => {
    useEffect(() => {
      const clickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", clickOutside)
      document.addEventListener("scroll", clickOutside)

      return () => {
        document.removeEventListener("mousedown", clickOutside)
        document.removeEventListener("scroll", clickOutside)
      };
    }, [ref])
  }

  const dropdownRef = useRef(null)
  HideDropdown(dropdownRef)

  return (
    <div className="dropdown">
      <span className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="option-symbol">
          <img src={`/currencies/${selectedOption}.svg`} alt={selectedOption} />
        </span>
        <span>
          <span className="option-code">{selectedOption}</span>
          <span className="option-name">{currencyNames[selectedOption]}</span>
        </span>
        <FiChevronDown className="dropdown-header-chevron" />
      </span>
      {
        isOpen && (
          <div className="dropdown-container">
            <div className="dropdown-list" ref={dropdownRef}>
              {options.map(option => (
                <span key={option} onClick={onOptionClicked(option)} className="dropdown-option">
                  <span className="option-symbol">
                    <img src={`/currencies/${option}.svg`} alt={option} />
                  </span>
                  <span>
                    <span className="option-code">{option}</span>
                    <span className="option-name">{currencyNames[option]}</span>
                  </span>
                  <span className="option-selected">
                    {option === selectedOption ? <FiCheckSquare /> : <FiSquare />}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Dropdown