import React, { useState, useEffect } from 'react'
import { color } from '../../../theme'
import { Flex } from '../..'

export const DropDown = ({ closeOnClick, display, children, autoWidth }) => {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    if (closeOnClick) {
      setEventListener(true)
    }

    return () => {
      if (closeOnClick) {
        setEventListener(false)
      }
    }
  })

  const setEventListener = set => {
    if (set) {
      window.addEventListener('click', closeDropdown)
    } else {
      window.removeEventListener('click', closeDropdown)
    }
  }
  
  const closeDropdown = () => setOpened(false)
  const openDropdown = () => setOpened(true)

  return (
    <div
      onMouseOver={openDropdown}
      onFocus={openDropdown}
      onMouseLeave={closeDropdown}
      onBlur={closeDropdown}
      className="dropDownWrapper">
      <Flex alignItems="center">
        {display}
      </Flex>
      <div className="dropDownItemsWrapper">{children}</div>
      <style jsx>
        {`
            .dropDownWrapper {
                position: relative;
                align-items: center;
                cursor: pointer;
                user-select: none;
              }
              .dropDownItemsWrapper {
                display: ${opened ? 'flex' : 'none'};
                border: 1px solid ${color('light', 200)};
                border-radius: 4px;
                flex-direction: column;
                box-shadow: 0px 4px 12px 0px rgba(182, 206, 221, 0.32);
                z-index: 2;
                position: absolute;
                background-color: color('white');
                width: ${autoWidth ? 'auto' : '100%'};
              }
            `}
      </style>
    </div>
  )
}
