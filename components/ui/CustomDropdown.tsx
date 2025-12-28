'use client'

import { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiCheck } from 'react-icons/fi'

interface DropdownOption {
  value: string
  label: string
}

interface CustomDropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  className?: string
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  className = '',
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className={`relative z-[100] ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          {label}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-3 
          bg-gray-900/80 backdrop-blur-xl
          border border-gray-800 
          rounded-xl
          text-left
          flex items-center justify-between
          transition-all duration-300
          group
          ${isOpen 
            ? 'border-primary-500/50 ring-2 ring-primary-500/20 shadow-lg shadow-primary-500/10' 
            : 'hover:border-primary-600/50 hover:bg-gray-900'
          }
        `}
      >
        <span className={`${selectedOption ? 'text-gray-200' : 'text-gray-500'} font-medium`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <FiChevronDown 
          className={`
            w-5 h-5 text-gray-400 
            transition-transform duration-300
            ${isOpen ? 'transform rotate-180 text-primary-400' : 'group-hover:text-primary-400'}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute z-[9999] w-full mt-2"
          style={{
            position: 'absolute',
            zIndex: 9999,
          }}
        >
          <div 
            className="
              bg-gray-900/95 backdrop-blur-xl
              border border-gray-800
              rounded-xl
              shadow-2xl shadow-black/50
              overflow-hidden
            "
            style={{
              animation: 'fade-in-up 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              position: 'relative',
              zIndex: 9999,
            }}
          >
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              {options.map((option) => {
                const isSelected = value === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`
                      w-full px-4 py-3
                      text-left
                      flex items-center justify-between
                      transition-all duration-200
                      relative
                      ${isSelected 
                        ? 'bg-primary-500/20 text-primary-300' 
                        : 'text-gray-300 hover:bg-primary-500/10 hover:text-primary-300'
                      }
                    `}
                  >
                    <span className="font-medium">{option.label}</span>
                    {isSelected && (
                      <FiCheck className="w-5 h-5 text-primary-400" />
                    )}
                    {!isSelected && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 hover:opacity-100 transition-opacity"></div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
