import React, { useState } from 'react'
import { color, media } from '../../../theme'
import { Link, DropDown } from '../..'
import NextJSLink from 'next/link'
import { pages } from '../../pages'
import { Sidebar } from '../../organisms/Sidebar'
import config from '../../../config'

const menuPages = [pages.register, pages.login]
const menuPagesLoggedIn = [pages.myGraffities]
const adminPages = [pages.adminPanel]

export const HeaderMenuComponent = ({ profile, logoutRequest }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  return (
    <React.Fragment>
      <button
        type="button"
        onClick={() => setSidebarOpened(!sidebarOpened)}
        className="menu-btn"
      />
      <Sidebar
        opened={sidebarOpened}
        profile={profile}
        logoutRequest={logoutRequest}
        setSidebarOpened={setSidebarOpened}
      />
      <div className="userMenu">
        {profile.username ? (
          <DropDown
            closeOnClick
            autoWidth={false}
            display={
              <span className="username-text">Welcome, {profile.username}</span>
            }>
            <div className="dropDownItemsContentWrapper">
              {profile.roles &&
                profile.roles.find(
                  role => role.title === config.roles.ROLE_ADMIN.role,
                ) &&
                adminPages.map(item => (
                  <NextJSLink href={item.path} key={item.title}>
                    <div className="dropDownItem">
                      <span className="logoutText">{item.title}</span>
                    </div>
                  </NextJSLink>
                ))}
              {menuPagesLoggedIn.map(item => (
                <NextJSLink href={item.path} key={item.title}>
                  <div className="dropDownItem">
                    <span className="logoutText">{item.title}</span>
                  </div>
                </NextJSLink>
              ))}
              <div
                className="dropDownItem"
                key={'logout'}
                onClick={() => logoutRequest()}>
                <span className="logoutText">Log out</span>
              </div>
            </div>
          </DropDown>
        ) : (
          <div className="linksWrapper">
            {menuPages.map(page => (
              <Link key={page.path} href={page.path} className="header-link">
                {page.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <style jsx>
        {`
          .linksWrapper {
            margin-left: 25;
            font-size: 14px;
          }
          .logoutText {
            font-weight: 800;
            color: ${color('grey', 500)};
          }
          span {
            color: ${color('grey', 200)};
          }
          .dropDownItemsContentWrapper {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border: 1px solid ${color('light', 200)};
            box-shadow: 0px 4px 12px 0px ${color('blue', 800, 0.32)};
            background-color: ${color('white')};
          }
          .dropDownItem {
            display: flex;
            font-weight: 400;
            width: 100%;
            text-transform: none;
            box-sizing: border-box;
            justify-content: center;
            text-align: center;
            background-color: ${color('white')};
            whitespace: nowrap;
            padding: 10px;
            font-size: 14px;
            cursor: pointer;
          }
          .dropDownItem:hover {
            background-color: ${color('light', 100)};
          }
          .userMenu {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          @media ${media()} {
            .userMenu {
              display: none;
            }
          }
          .dropDownWrapper {
            height: 40px;
            margin-left: 10px;
            padding: 0px 10px;
          }
          .menu-btn {
            display: none;
            cursor: pointer;
            outline: none;
            margin: 0;
            padding: 0;
            background: none;
            border: none;
            width: 30px;
          }

          @media ${media()} {
            .menu-btn {
              display: block;
            }
          }

          .menu-btn:before,
          .menu-btn:after {
            background-color: #fff;
            content: '';
            display: block;
            height: 4px;
            transition: all 200ms ease-in-out;
          }
          .menu-btn:before {
            box-shadow: 0 10px 0 #fff;
            margin-bottom: 16px;
          }
          .menu-btn:before {
            ${sidebarOpened &&
              `box-shadow: 0 0 0 #fff;
            transform: translateY(10px) rotate(45deg);`}
          }
          .menu-btn:after {
            ${sidebarOpened && `transform: translateY(-10px) rotate(-45deg);`}
          }
        `}
      </style>
      <style jsx global>
        {`
          .header-link {
            margin-left: 15px;
            color: ${color('light', 100)};
          }
        `}
      </style>
    </React.Fragment>
  )
}
